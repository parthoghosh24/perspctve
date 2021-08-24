SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: mode_types; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.mode_types AS ENUM (
    'published',
    'draft',
    'blocked'
);


--
-- Name: reaction_types; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.reaction_types AS ENUM (
    'strongly_agree',
    'agree',
    'neutral',
    'disagree',
    'strongly_disagree'
);


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: ar_internal_metadata; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.ar_internal_metadata (
    key character varying NOT NULL,
    value character varying,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


--
-- Name: opinion_tags; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.opinion_tags (
    id bigint NOT NULL,
    opinion_id bigint NOT NULL,
    tag_id bigint NOT NULL,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


--
-- Name: opinion_tags_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.opinion_tags_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: opinion_tags_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.opinion_tags_id_seq OWNED BY public.opinion_tags.id;


--
-- Name: opinions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.opinions (
    id bigint NOT NULL,
    title character varying,
    media jsonb,
    body text,
    user_id bigint NOT NULL,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL,
    in_support_id integer,
    oppose_to_id integer,
    uuid character varying,
    is_anonymous boolean,
    mode public.mode_types,
    in_support_of character varying,
    in_opposition_to character varying,
    stats jsonb DEFAULT '{"verdict": "neutral", "agree_perc": 0, "neutral_perc": 0, "disagree_perc": 0, "strongly_agree_perc": 0, "strongly_disagree_perc": 0}'::jsonb
);


--
-- Name: opinions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.opinions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: opinions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.opinions_id_seq OWNED BY public.opinions.id;


--
-- Name: reactions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.reactions (
    id bigint NOT NULL,
    user_id bigint,
    uuid character varying,
    fingerprint character varying,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL,
    reaction_type public.reaction_types,
    opinion_uuid character varying NOT NULL
);


--
-- Name: reactions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.reactions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: reactions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.reactions_id_seq OWNED BY public.reactions.id;


--
-- Name: schema_migrations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.schema_migrations (
    version character varying NOT NULL
);


--
-- Name: tags; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tags (
    id bigint NOT NULL,
    title character varying,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


--
-- Name: tags_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.tags_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: tags_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.tags_id_seq OWNED BY public.tags.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id bigint NOT NULL,
    first_name character varying,
    last_name character varying,
    email character varying,
    username character varying,
    avatar character varying,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL,
    uuid character varying,
    stats jsonb DEFAULT '{"opinions": 0, "agree_total": 0}'::jsonb
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: opinion_tags id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.opinion_tags ALTER COLUMN id SET DEFAULT nextval('public.opinion_tags_id_seq'::regclass);


--
-- Name: opinions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.opinions ALTER COLUMN id SET DEFAULT nextval('public.opinions_id_seq'::regclass);


--
-- Name: reactions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.reactions ALTER COLUMN id SET DEFAULT nextval('public.reactions_id_seq'::regclass);


--
-- Name: tags id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tags ALTER COLUMN id SET DEFAULT nextval('public.tags_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Name: ar_internal_metadata ar_internal_metadata_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.ar_internal_metadata
    ADD CONSTRAINT ar_internal_metadata_pkey PRIMARY KEY (key);


--
-- Name: opinion_tags opinion_tags_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.opinion_tags
    ADD CONSTRAINT opinion_tags_pkey PRIMARY KEY (id);


--
-- Name: opinions opinions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.opinions
    ADD CONSTRAINT opinions_pkey PRIMARY KEY (id);


--
-- Name: reactions reactions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.reactions
    ADD CONSTRAINT reactions_pkey PRIMARY KEY (id);


--
-- Name: schema_migrations schema_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.schema_migrations
    ADD CONSTRAINT schema_migrations_pkey PRIMARY KEY (version);


--
-- Name: tags tags_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: index_opinion_tags_on_opinion_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_opinion_tags_on_opinion_id ON public.opinion_tags USING btree (opinion_id);


--
-- Name: index_opinion_tags_on_tag_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_opinion_tags_on_tag_id ON public.opinion_tags USING btree (tag_id);


--
-- Name: index_opinions_on_in_opposition_to; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_opinions_on_in_opposition_to ON public.opinions USING btree (in_opposition_to);


--
-- Name: index_opinions_on_in_support_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_opinions_on_in_support_id ON public.opinions USING btree (in_support_id);


--
-- Name: index_opinions_on_in_support_of; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_opinions_on_in_support_of ON public.opinions USING btree (in_support_of);


--
-- Name: index_opinions_on_is_anonymous; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_opinions_on_is_anonymous ON public.opinions USING btree (is_anonymous);


--
-- Name: index_opinions_on_mode; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_opinions_on_mode ON public.opinions USING btree (mode);


--
-- Name: index_opinions_on_oppose_to_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_opinions_on_oppose_to_id ON public.opinions USING btree (oppose_to_id);


--
-- Name: index_opinions_on_user_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_opinions_on_user_id ON public.opinions USING btree (user_id);


--
-- Name: index_opinions_on_uuid; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_opinions_on_uuid ON public.opinions USING btree (uuid);


--
-- Name: index_reactions_on_opinion_uuid; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_reactions_on_opinion_uuid ON public.reactions USING btree (opinion_uuid);


--
-- Name: index_reactions_on_reaction_type; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_reactions_on_reaction_type ON public.reactions USING btree (reaction_type);


--
-- Name: index_reactions_on_user_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_reactions_on_user_id ON public.reactions USING btree (user_id);


--
-- Name: index_reactions_on_uuid; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_reactions_on_uuid ON public.reactions USING btree (uuid);


--
-- Name: index_users_on_email; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_users_on_email ON public.users USING btree (email);


--
-- Name: index_users_on_username; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_users_on_username ON public.users USING btree (username);


--
-- Name: index_users_on_uuid; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_users_on_uuid ON public.users USING btree (uuid);


--
-- Name: opinions fk_rails_18b743a5dd; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.opinions
    ADD CONSTRAINT fk_rails_18b743a5dd FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: opinion_tags fk_rails_3a16286c96; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.opinion_tags
    ADD CONSTRAINT fk_rails_3a16286c96 FOREIGN KEY (tag_id) REFERENCES public.tags(id);


--
-- Name: opinion_tags fk_rails_60c75af16d; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.opinion_tags
    ADD CONSTRAINT fk_rails_60c75af16d FOREIGN KEY (opinion_id) REFERENCES public.opinions(id);


--
-- Name: reactions fk_rails_9f02fc96a0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.reactions
    ADD CONSTRAINT fk_rails_9f02fc96a0 FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

SET search_path TO "$user", public;

INSERT INTO "schema_migrations" (version) VALUES
('20210724083359'),
('20210724124533'),
('20210724133105'),
('20210725043641'),
('20210725044923'),
('20210725153141'),
('20210725154008'),
('20210803061419'),
('20210808053001'),
('20210809034731'),
('20210809151603'),
('20210810183006'),
('20210813131042'),
('20210813131707'),
('20210816133249'),
('20210816134630'),
('20210816134848'),
('20210820154832');


