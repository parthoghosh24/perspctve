class OpinionService
  def initialize(opinion_params, current_user)
    @author = current_user
    @opinion_params = opinion_params
  end

  def create
    ActiveRecord::Base.transaction do
      tags = @opinion_params.delete(:tags)
      @opinion_params.delete(:media) if @opinion_params[:media] && !@opinion_params[:media].key?(:type)
      @opinion_params[:user] = @author
      @opinion_params[:is_anonymous] = opinion_params.include?(:is_anonymous) ? opinion_params[:is_anonymous] : false
      @opinion_params[:uuid] = SecureRandom.uuid
      opinion = Opinion.new(@opinion_params)
      if (!opinion.save)
        p "errors #{opinion.errors.inspect}"
      end
      tags.each do |tag_title|
        tag = Tag.where(title: tag_title).first_or_create!
        p "tag #{tag.inspect}"
        OpinionTag.create(opinion: opinion, tag: tag)
      end
    end
  end
end
