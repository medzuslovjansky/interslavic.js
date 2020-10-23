export type Entry = {
  id: string;
  lemma: string;
  partOfSpeech: string;
};

function split(tsv: string): Entry[] {
  return tsv
    .trim()
    .split('\n')
    .map(line => line.split('\t').map(s => s.trim()))
    .map(([id, lemma, partOfSpeech]) => ({
      id,
      lemma,
      partOfSpeech
    } as Entry));
}

const data = split(`
5101	a takože	conj.
1855	a	conj.
24020	abak	m.
6114	abažur	m.
35658	abdikacija	f.
11	abdikovati	v.intr. ipf.
35691	abeceda	f.
24026	Abhaz	m.anim.
6165	Abhazija	f.sg.
36565	abhazsky	adj.
24029	ablativ	m.
6375	abo	conj.
24031	abolicionist	m.anim.
24032	abolicionizm	m.sg.
34768	abonement	m.
6117	abonent	m.
6119	abonovati	v.tr. ipf.
24038	abort	m.
24039	abrakadabra	f.sg.
24042	abrikos	m.
24044	absces	m.
24045	abscisa	f.
15	absencija	f.sg.
24047	absint	m.sg.
24050	absolutizm	m.sg.
6123	absolutno	adv.
6120	absolutny	adj.
24054	absorbcija	f.sg.
19625	absorbovati	v.tr. ipf.
24056	abstrahovati	v.tr. ipf./pf.
19626	abstrakcija	f.
35132	abstrakt	m.
19627	abstraktny	adj.
6124	absurd	m.
35784	absurdnosť	f.
6125	absurdny	adj.
1986	aby	conj.
17101	ače	conj.
35331	ačekoli	conj.
24065	adadžo	n.
24067	adamovo jablȯko	n.
24068	adaptacija	f.
24069	adapter	m.
24070	adaptovati	v.tr. ipf./pf.
24071	adekvatny	adj.
6126	adept	m.anim.
24076	adjutant	m.anim.
2848	administracija	f.
17108	administrativny	adj.
96	administrator	m.anim.
24081	administrovati	v.tr. ipf.
24082	admiral	m.anim.
24084	admiraľstvo	n.
35592	adopcija	f.
19628	adoptovati	v.tr. ipf.
24086	adrenalin	m.sg.
17109	adres	m.
248	adresa	f.
24089	adresat	m.anim.
4540	adresovati	v.tr. ipf.
36739	Adriatičsko morje	n.
24093	adventist	m.anim.
97	advokat	m.anim.
24096	advokatura	f.sg.
36566	Adžarija	f.sg.
36348	aerodinamičny	adj.
36349	aerodinamika	f.sg.
33084	aerodrom	m.
3423	aeronavtičny	adj.
3424	aeronavtika	f.sg.
6129	aeroplan	m.
99	aeroport	m.
19629	afazija	f.sg.
19630	afektivny	adj.
35513	afera	f.
5754	Afganistan	m.sg.
5755	afgansky	adj.
36756	aforizm	m.
4743	Afrika	f.sg.
36719	Afrikanėc	m.anim.
36720	Afrikanka	f.
32850	afrikansky mråvojed	m.anim.
106	afrikansky	adj.
24102	Afroamerikanec	m.anim.
36283	afrodiziak	m.
24105	agava	f.
113	agencija	f.
24107	agent	m.anim.
24110	agentura	f.
24111	agitacija	f.sg.
24112	agitator	m.anim.
24113	agitka	f.
24114	agitovati	v.intr. ipf.
35785	aglomeracija	f.
19631	aglutinacija	f.sg.
24116	aglutinativny	adj.
24118	agnosticizm	m.sg.
24119	agnostik	m.anim.
24120	agonija	f.sg.
24121	agonizovati	v.intr. ipf.
24124	agrarny	adj.
24125	agregat	m.
24127	agresija	f.sg.
24128	agresivny	adj.
24129	agresor	m.anim.
24130	agrikultura	f.sg.
24131	agronom	m.anim.
24132	agronomičny	adj.
24133	agronomija	f.sg.
24134	ah	intj.
24135	aha	intj.
4886	ahoj	intj.
24136	aj	intj.
24137	ajsberg	m.
24138	akacija	f.
16262	akademičsky	adj.
4639	akademija	f.
24141	akademik	m.anim.
34994	akańje	n.sg.
6130	akcent	m.
24148	akcentovati	v.tr. ipf.
24149	akcentuacija	f.sg.
4951	akceptacija	f.sg.
111	akceptovati	v.tr. ipf.
115	akcija	f.
2849	akcija	f.
24152	akcioner	m.anim.
24153	akcionerny kapital	m.sg.
24154	akciz	m.
24155	aklimatizacija	f.sg.
24156	aklimatizovati	v.intr. ipf.
6387	akne	n.sg.
17112	ako by	conj.
17113	ako by	conj.
17114	ako by	conj.
6133	ako li	conj.
23672	ako ne	conj.
17076	ako	conj.
17110	ako	adv.
32593	akolada	f.
36472	akolada	f.
24161	akomodacija	f.
24163	akompanement	m.sg.
24164	akompaniator	m.anim.
24165	akompanovati	v.tr. ipf.
24167	akord	m.
24168	akordeon	m.
24169	akr	m.
24173	akrobat	m.anim.
34769	akrobatika	f.sg.
24174	akrobatka	f.
24175	akrobatsky	adj.
33563	aksamit	m.sg.
33564	aksamitny	adj.
32543	aksiaľny	adj.
24180	aksioma	f.
119	akt	m.
2307	aktivist	m.anim.
24189	aktivistka	f.
35786	aktivitet	m.
16921	aktivno	adv.
5142	aktivnosť	f.
43	aktivny	adj.
24190	aktivovati	v.tr. ipf.
6134	aktor	m.anim.
24194	aktorka	f.
36683	aktorsky	adj.
24197	aktrisa	f.
34899	aktualizacija	f.
34900	aktualizovati	v.tr. ipf./pf.
17117	aktuaľnosť	f.
5125	aktuaľny	adj.
20330	akula	f.
24201	akumulacija	f.
24202	akumulator	m.
24203	akumulovati	v.tr. ipf.
24204	akurat	adv.
24205	akuratnosť	f.
24206	akuratny	adj.
24207	akustičny	adj.
24208	akustika	f.
24210	akušerka	f.
24211	akušersky	adj.
24212	akušerstvo	n.sg.
24213	akut	m.
16922	akuzativ	m.
24216	akvamarin	m.
24217	akvarelist	m.anim.
24218	akvarelj	m.
24219	akvarium	m.
24220	akvedukt	m.
24223	alabastr	m.
24224	alarm	m.
133	Albanec	m.anim.
4732	Albanija	f.sg.
6388	Albanka	f.
142	albansky	adj.
23563	albatros	m.anim.
24248	album	m.
134	ale	conj.
24229	alegoričny	adj.
5856	alegorija	f.
24231	aleja	f.
36743	alergičny	adj.
36742	alergija	f.
45	alfabet	m.
3968	alfabetičny	adj.
32939	alga	f.
23490	algebra	f.sg.
23492	algoritm	m.
24238	alhimija	f.sg.
24239	alhimik	m.anim.
107	alians	m.
24240	alibi	n.indecl.
24241	aligator	m.anim.
24244	alimenty	m.pl.
24245	aliteracija	f.
24267	aljur	m.sg.
4647	alkohol	m.
4648	alkoholičny	adj.
23277	alkoholik	m.anim.
24274	alkoholizm	m.sg.
24253	alkov	m.
24279	allegro	n.
24254	almanah	m.
24281	almaz	m.
24282	alo	intj.
24283	aloe	n.sg.
15759	alpijsky	adj.
5757	alpinist	m.anim.
24256	alpinizm	m.sg.
59	Alpy	f.pl.
23443	alt	m.
32998	alt	m.
35767	altana, altanka	f.
24259	alternativa	f.
17119	alternativny	adj.
24261	altruist	m.anim.
24262	altruističny	adj.
24263	altruizm	m.sg.
22608	aluminij	m.sg.
24265	aluminijevy	adj.
35536	aluzija	f.
24269	alveolarny	adj.
5919	Alžirija	f.sg.
35594	amater	m.anim.
36059	ambar	m.
127	ambasada	f.
24290	ambicija	f.
32530	ambiciozny	adj.
36759	ambivalentnosť	f.
36758	ambivalentny	adj.
24291	ambrazura	f.
24294	ameba	f.
131	Amerika	f.sg.
136	Amerikanec	m.anim.
6400	Amerikanka	f.
6404	Amerikanska Samoa	f.sg.
12580	Amerikanske Děvičje Ostrovy	m.pl.
52	amerikansky	adj.
24296	ametist	m.
23198	amfetamin	m.sg.
23197	amfiteatr	m.
19632	amin	intj.
24298	amnestija	f.sg.
24299	amnestovati	v.tr. ipf./pf.
36331	amnezija	f.
24301	amonij	m.sg.
24302	amonijak	m.sg.
24304	amoraľny	adj.
24305	amortizacija	f.sg.
3835	amortizator	m.
24307	amortizovati	v.tr. ipf./pf.
34096	amputacija	f.
34095	amputovati	v.tr. ipf./pf.
36760	amulet	m.
32325	amunicija	f.sg.
35336	anahroničny	adj.
35337	anahronizm	m.
24309	analfabet	m.anim.
24310	analfabetizm	m.sg.
14440	analitično	adv.
4172	analitičny	adj.
904	analitik	m.anim.
4171	analiza	f.
3969	analizovati	v.tr. ipf.
16411	anaľny	adj.
23209	analogičny	adj.
23208	analogija	f.
32110	anamneza	f.
24311	ananas	m.
5057	anarhija	f.sg.
5058	anarhist	m.anim.
23491	anarhizm	m.sg.
23494	anatomičny	adj.
23493	anatomija	f.sg.
24312	Andora	f.sg.
5718	anekdota	f.
36190	aneksija	f.
36191	aneksovati	v.tr. ipf./pf.
20331	anemičny	adj.
20332	anemija	f.sg.
19633	anestezija	f.sg.
36752	anestezija	f.
229	angel	m.anim.
24314	anglicizm	m.
20333	Angličan, Angličanin	m.anim.
35052	Anglija	f.sg.
19634	anglijskojęzyčny	adj.
23464	anglijsky rožek	m.
2850	anglijsky	adj.
19635	anglosaksonsky	adj.
256	Angola	f.sg.
36537	animacija	f.
36700	animovany film	m.
36798	anis	m.sg.
3797	anketa	f.
32722	anketa	f.
35755	anomalija	f.
3949	anonimny	adj.
34753	antagonist	m.anim.
35738	antagonizm	m.
4898	Antarktida	f.sg.
32494	antena	f.
16368	anti-	prefix
36753	antibiotik	m.
16367	antičnosť	f.
16369	antičny	adj.
17120	antihrist	m.anim.
35717	antikvariat	m.
32493	antilopa	f.
22629	antimon	m.sg.
35432	antipatija	f.
22808	antisemitizm	m.sg.
36754	antitělo	n.
35825	antologija	f.
23495	antropologija	f.sg.
4952	anulacija	f.
37	anulovati	v.tr. ipf./pf.
16250	anus	m.
19636	aorist	m.
6263	aparat	m.
39	apelacija	f.
15689	apelacijny sųd	m.
15690	apelacijny	adj.
15692	apelant	m.anim.
60	apelovati	v.intr. ipf.
6422	apendektomija	f.sg.
15764	apendiks	m.
150	apetit	m.sg.
36574	aplikacija	f.
15240	aplodovańje	n.sg.
5624	aplodovati	v.tr. ipf.
36316	apokalipsa	f.
36315	apokaliptičny	adj.
32728	aposteriorny	adj.
6167	apostol	m.anim.
32556	apostrof	m.
4026	aprilj	m.sg.
32727	apriorny	adj.
35575	Arab	m.anim.
35576	Arabka	f.
2166	arabsky	adj.
36413	aranževati	v.tr. ipf./pf.
36414	aranžman	m.
19637	arbiter	m.anim.
36761	arbitraž	m.
38	arcivojevoda	m.anim.
5789	arešt	m.sg.
122	areštovati	v.tr. ipf.
22388	Argentina	f.sg.
22389	argentinsky	adj.
22614	argon	m.sg.
19638	argument	m.
19639	argumentacija	f.
19640	argumentovati	v.intr. ipf.
4382	arhaičny	adj.
4383	arhaizm	m.
4419	arheolog	m.anim.
4420	arheologičny	adj.
4418	arheologija	f.sg.
6166	arhiepiskop	m.anim.
36677	arhipelag	m.
4893	arhitekt	m.anim.
4894	arhitektura	f.sg.
35659	arhitekturny	adj.
35235	arhiv	m.
35281	arhivny	adj.
35236	arhivovati	v.tr. ipf./pf.
5721	aristokracija	f.sg.
5720	aristokrat	m.anim.
5722	aristokratičny	adj.
17124	aristokratka	f.
21256	aritmetika	f.sg.
17126	arka	f.
23500	Arktičny okean	m.sg.
5920	arktičny	adj.
6206	Arktika	f.sg.
5059	Armenija	f.sg.
5060	arměnsky	adj.
123	armija	f.
1851	arogancija	f.sg.
35635	arogantny	adj.
24324	aromat	m.
22625	arsen	m.sg.
34	arsenal	m.
35705	artefakt	m.
15244	arterija	f.
24325	artikulacija	f.
24326	artilerija	f.sg.
33	artist	m.anim.
15768	artističny	adj.
31843	as	m.
24327	asfalt	m.sg.
24328	asfaltobeton	m.sg.
36762	asimetričny	adj.
16263	asimilacija	f.sg.
6246	asimilovati	v.tr. ipf.
35787	asociacija	f.
19641	aspekt	m.
21257	asteroid	m.
31854	astma	f.sg.
22973	astrolog	m.anim.
16264	astrologičny	adj.
4895	astrologija	f.sg.
24330	astronavt	m.anim.
21258	astronom	m.anim.
16265	astronomičny	adj.
18	astronomija	f.sg.
32	ataka	f.
3970	atakovati	v.tr. ipf.
23503	ateist	m.anim.
23502	ateizm	m.sg.
16923	atematičny	adj.
23526	Atiny	f.pl.
23497	Atlantičny okean	m.sg.
35020	atlantičny	adj.
35093	atlet	m.anim.
35095	atletičny	adj.
35094	atletika	f.sg.
35084	atmosfera	f.
4661	atom	m.
23321	atomna bomba	f.
23184	atrakcija	f.
35788	atraktivny	adj.
36065	atut	m.
36825	au!	intj.
36757	aura	f.
36767	aureola	f.
36748	autist	m.anim.
36749	autističny	adj.
36747	autizm	m.
24332	avangarda	f.
24334	avanpost	m.
24335	avans	m.
24337	avansovati	v.intr. ipf./pf.
24339	avansovy	adj.
24346	Avar	m.anim.
5766	avarija	f.
24348	avarijny	adj.
3053	avgust	m.sg.
62	aviacija	f.sg.
17133	aviakarta	f.
64	avialinija	f.
24356	aviator	m.anim.
233	avizo	n.
36074	avokado	n.
70	Avstralija	f.sg.
5756	avstralijsky	adj.
75	Avstrija	f.sg.
35339	Avstrijec	m.anim.
35338	avstrijsky	adj.
22810	avtentičny	adj.
2888	avto	n.
24363	avtobiografičny	adj.
24365	avtobiografija	f.
14449	avtobomba	f.
82	avtobus	m.
35255	avtobusna linija	f.
35254	avtobusna postojka	f.
24370	avtograf	m.
24371	avtohton	m.anim.
24374	avtokracija	f.
24375	avtokrat	m.anim.
83	avtomagistralj	m.
4358	avtomat	m.
24377	avtomat	m.
4360	avtomatično	adv.
4359	avtomatičny	adj.
24383	avtomatika	f.sg.
24384	avtomatizacija	f.sg.
24385	avtomatizm	m.
24386	avtomatizovati	v.tr. ipf.
23496	avtomobil	m.
14451	avtomobiľny	adj.
17129	avtonomija	f.sg.
17130	avtonomny	adj.
6449	avtopromysl	m.sg.
87	avtor	m.anim.
24393	avtoritarny	adj.
10869	avtoritativno	adv.
10871	avtoritativny	adj.
15772	avtoritet	m.
15774	avtoritetno	adv.
15775	avtoritetnosť	f.sg.
15776	avtoritetny	adj.
15773	avtoritety	m.pl.
5034	avtorizacija	f.
5033	avtorizovati	v.tr. ipf.
35314	avtorka	f.
35237	avtorsko pravo	n.
24398	avtorsky	adj.
17131	avtorstvo	n.sg.
35868	avtostop	m.
35870	avtostopnik	m.anim.
35869	avtostopovati	v.intr. ipf./pf.
24399	avtostrada	f.
6451	avtostrahovka	f.
6452	avtozavod	m.
24400	avtožir	m.
24401	azalija	f.
36744	azbest	m.
16924	azbuka	f.
76	Azerbajdžan	m.sg.
92	Azija	f.sg.
542	azijatsky	adj.
24407	azimut	m.
22600	azot	m.sg.
24409	azotisty	adj.
24410	azotny	adj.
17135	Azovsko morje	n.sg.
36440	aztečsky	adj.
36439	Aztek	m.anim.
24411	azurny	adj.
3591	až	adv.
2435	baba	f.
6460	babica	f.
24425	babin	adj.
24429	babka	f.
24430	babsky	adj.
6459	babuška	f.
35187	bacil	m.
32766	badminton	m.sg.
5070	bagatela	f.
1579	bagatelizovati	v.tr. ipf.
2438	bagaž	m.
384	bagno	n.
22453	bahamsky	adj.
22452	Bahamy	f.pl.
24437	bajati	v.intr. ipf.
34833	bajati	v.intr. ipf.
6465	bajka	f.
36392	bajonet	m.
6466	bajt	m.
24443	bak	m.
24444	bak	m.
24445	bakalavr	m.
24448	baken	m.
35440	bakenbardy	f.pl.
24453	baklažan	m.
23505	bakterija	f.
24458	bakteriologija	f.sg.
24459	bal	m.
31963	bala	f.
24461	balada	f.
24464	balalajka	f.
2440	balans	m.
24467	balansir	m.
24468	balansovati	v.intr. ipf.
24469	balast	m.sg.
24470	baldahin	m.
24471	balerina	f.
6102	balet	m.
24474	balističny	adj.
24476	balistika	f.sg.
35340	balkansky	adj.
16824	Balkany	m.pl.
153	balkon	m.
24482	balon	m.
24483	balotovati	v.tr. ipf./pf.
23506	Baltičsko morje	n.sg.
4737	baltičsky	adj.
24484	balustrada	f.
31785	balvan	m.
31786	balvan	m.
24487	balzam	m.
24489	balzamovati	v.tr. ipf./pf.
24490	bambus	m.
31717	banaľny	adj.
24492	banan	m.
2439	banda	f.
24494	bandaž	m.
493	bandit	m.anim.
24499	banditizm	m.sg.
24500	bandura	f.
24502	bandžo	n.
21847	baner	m.
24503	banja	f.
4668	bank	m.
24506	banka	f.
33326	banka	f.
24507	banket	m.
24508	bankir	m.anim.
16925	banknota	f.
36391	bankrot	m.anim.
24510	bankrotstvo	n.
23757	baobab	m.
24513	baptist	m.anim.
24514	baptizm	m.
24515	bar	m.
24516	baraban	m.
14453	barak	m.
32414	barak	m.
2436	baran	m.anim.
24520	baranina	f.sg.
24522	barbaris	m.
24524	bard	m.anim.
6471	barel	m.
159	bariera	f.
24529	barikada	f.
24530	barikadovati	v.tr. ipf.
24533	barkarola	f.
24534	barkas	m.
31977	barmen	m.anim.
154	barok	m.sg.
24535	baroko	n.
24536	barometr	m.
24538	baron	m.anim.
24539	baronesa	f.
20334	barsuk	m.anim.
1868	barva	f.
24541	barvinȯk	m.
5873	barviti	v.tr. ipf.
5872	barvivo	n.
21259	barvna olovka	f.
24542	baryj	m.sg.
24544	baryton	m.
24545	barža	f.
24546	bas	m.
2437	basen	m.
36210	Bask	m.anim.
24549	basketbol	m.sg.
36209	baskijsky	adj.
1846	basnj	f.
6483	basnjesloveny	adj.
19642	basnjevy	adj.
24552	basta	intj.
35240	bastard	m.
24553	bastion	m.
36569	baškirsky	adj.
24559	batalion	m.
24560	baterija	f.
35632	Bavarija	f.sg.
35724	bavarsky	adj.
2418	baviti	v.tr. ipf.
157	bavȯlna	f.sg.
6487	baza danyh	f.
156	baza	f.
24565	bazalt	m.sg.
16730	bazar	m.
24567	bazilik	m.
31749	bazilika	f.
20335	bazilisk	m.anim.
19643	bazovati na	v.tr. ipf.
24570	bazovati sę na	v.refl. ipf.
20336	bděńje	n.sg.
20338	bděti	v.intr. ipf.
20339	bditeljnosť	f.sg.
20340	bditeljny	adj.
2442	běda	f.sg.
3836	běda	f.sg.
2443	bědny	adj.
2444	bedrenec	m.anim.
24576	bedreny	adj.
2445	bedro	n.
20341	běg	m.
20342	běg	m.
20343	běg	m.
35981	běgaj!	intj.
2441	běgati	v.intr. ipf.
20344	běglosť	f.sg.
20345	běgly	adj.
36637	běgly	adj.
32533	běgstvo	n.
1219	běgti	v.intr. ipf.
20346	běgun	m.anim.
35523	bejsbol	m.sg.
24583	bělavy	adj.
24584	bělěti	v.intr. ipf.
2865	Belgija	f.sg.
4426	belgijsky	adj.
23521	Bělgråd	m.sg.
24586	bělilo	n.
31731	běliti	v.tr. ipf.
22454	Beliz	m.sg.
2446	bělmo	n.
24591	bělobrådy	adj.
24595	bělȯk	m.
24600	bělopery	adj.
2447	Bělorus	m.anim.
2448	Běloruś	f.sg.
2864	bělorussky	adj.
24604	bělosť	f.sg.
24605	bělovlåsy	adj.
24606	bělozųby	adj.
2679	běly	adj.
23409	benzin	m.
19493	Berlin	m.sg.
36647	berserk	m.anim.
22601	berylij	m.sg.
24609	běs	m.anim.
1811	besěda	f.
2880	besědovati	v.intr. ipf.
24612	běsiti sę	v.refl. ipf.
31757	běsnosť	f.sg.
24613	běsny	adj.
1721	beton	m.sg.
3972	betonny	adj.
3044	betonomešalka	f.
3415	bez malogo	adv.
4946	bez obzira na	prep.
1434	bez	prep.
3971	bezbarvny	adj.
19644	bezbolěsno	adv.
19645	bezbolěsny	adj.
33128	bezbožje	n.sg.
33131	bezbožnik	m.anim.
33123	bezbožny	adj.
33127	bezbožny	adj.
24618	bezbrådy	adj.
35125	bezbrånny	adj.
17137	bezčesťje	n.sg.
24620	bezčestny	adj.
31742	bezčestny	adj.
4837	bezdětny	adj.
2335	bezdna	f.
24626	bezdomny	adj.
24627	bezdȯnny	adj.
24628	bezdȯžďje	n.sg.
14455	bezdrěvny	adj.
24630	bezdušny	adj.
19646	bezdyšny	adj.
24633	bezglåvy	adj.
24635	bezhvosty	adj.
14458	bezhybny	adj.
6515	bezimenno	adv.
6516	bezimenny	adj.
36638	bezizhodnosť	f.sg.
17138	bezizhodny	adj.
35411	bezkarnosť	f.sg.
35410	bezkarny	adj.
14457	bezkolorny	adj.
6517	bezkonečje	n.sg.
4296	bezkonečno	adv.
6519	bezkonečnosť	f.sg.
6520	bezkonečny	adj.
6522	bezkoristny	adj.
24637	bezkostny	adj.
31733	bezkrily	adj.
24638	bezkrȯvny	adj.
6524	bezlěsny	adj.
6525	bezlistny	adj.
24644	bezljudny	adj.
20348	bezměrnosť	f.sg.
33138	bezměrny	adj.
20351	bezmȯlvny	adj.
24646	bezmozgy	adj.
36175	bezmytny	adj.
36721	beznadějnosť	f.
4345	beznadějny	adj.
24647	beznogy	adj.
17141	bezolovny	adj.
20842	bezopasnosť	f.sg.
20844	bezopasny	adj.
24650	bezpamętny	adj.
19494	bezpartijny	adj.
20846	bezpečnosť	f.sg.
20847	bezpečny	adj.
24652	bezpery	adj.
20848	bezplatny	adj.
24653	bezplodny	adj.
33019	bezplodny	adj.
19649	bezpokojęći	adj.
22974	bezpokojeńje	n.
36698	bezpokojiti sę	v.refl. ipf.
19654	bezpokojiti	v.tr. ipf.
19659	bezpokojny	adj.
19661	bezpokojstvo	n.sg.
5837	bezpomoćno	adv.
5836	bezpomoćnosť	f.sg.
5835	bezpomoćny	adj.
5090	bezposrědnje	adv.
1792	bezposrědnji, bezposrědny	adj.
178	bezprecedentny	adj.
3517	bezprěryvno	adv.
6536	bezprěryvny	adj.
3493	bezpričinny	adj.
33236	bezprikladny	adj.
33232	bezpriměrny	adj.
17142	bezråbotica	f.sg.
28504	bezradostny	adj.
36639	bezrodny	adj.
24655	bezrogy	adj.
24656	bezrųky	adj.
24657	bezsiľny	adj.
20352	bezsmyslica	f.sg.
21261	bezsmysľny	adj.
24658	bezsněžny	adj.
24659	bezsȯnnica	f.sg.
24660	bezsȯnny	adj.
24661	bezstrašny	adj.
16267	bezstydnosť	f.sg.
16266	bezstydny	adj.
3974	bezšumnosť	f.sg.
177	bezšumny	adj.
6544	beztęžno	adv.
6545	beztęžnosť	f.sg.
6546	beztęžny	adj.
24008	bezumje	n.sg.
15247	bezumnik	m.anim.
15248	bezumny	adj.
4214	bezusiľje	n.sg.
4213	bezusiľno	adv.
4215	bezusiľnosť	f.sg.
4212	bezusiľny	adj.
21263	bezuslovny	adj.
33156	bezuspěšny	adj.
33157	bezutěšny	adj.
33436	bezvěŕje	n.sg.
5051	bezvěstny	adj.
24664	bezvětŕje	n.
24665	bezvinny	adj.
34434	bezvkųsny	adj.
22486	bezvladnosť	f.sg.
22487	bezvladnosť	f.sg.
22485	bezvladny	adj.
22484	bezvlasťje	n.sg.
24666	bezvlåsy	adj.
24668	bezvodny	adj.
17143	bezvyhodny	adj.
35126	bezzaščitny	adj.
179	běženec	m.anim.
6552	běženica	f.
23754	běžeńje	n.
24671	beževy	adj.
24672	bezzųby	adj.
5040	bezzvųčny	adj.
4760	Biblija	f.
5844	biblijsky	adj.
35088	bibliografičny	adj.
35087	bibliografija	f.
4364	biblioteka	f.
4365	bibliotekaŕ	m.anim.
24673	bič	m.
34987	bičevati	v.tr. ipf.
35994	bifštek	m.
35872	bilbord	m.
1760	bilet	m.
35293	binarny	adj.
35227	binoklj	m.
20849	biografija	f.
3975	biolog	m.anim.
3976	biologičny	adj.
1780	biologija	f.sg.
17145	biskup	m.anim.
35992	biskvit	m.
22635	bismut	m.sg.
4049	biti	v.tr. ipf.
24678	biťje	n.
24679	bitka	f.
20353	bitva	f.
35833	Bizantija	f.sg.
35834	Bizantijska imperija	f.sg.
35341	bizantijsky	adj.
637	biznes	m.
15785	biznesmen	m.anim.
14464	biznesny	adj.
32788	bizon	m.anim.
24681	bižuterija	f.
35181	bjuleten	m.
3978	bjurokracija	f.
2452	bjurokrat	m.anim.
3979	bjurokratičny	adj.
3176	bjust	m.
17146	blågo	n.
4927	blågodarę	prep.
4885	blågodarim, blågodarjų	intj.
4889	blågodariti	v.tr. ipf.
6575	blågodarjeńje	n.
6576	blågodarno	adv.
4905	blågodarnosť	f.sg.
4903	blågodarny	adj.
23755	blågomilosť	f.
15251	blågomily	adj.
23756	blågoprijętny	adj.
21264	blågorodny	adj.
22975	blågosklonnosť	f.sg.
14466	blågosklonny	adj.
19662	blågosklonny	adj.
5574	blågoslavjati	v.tr. ipf.
5573	blågosloviti	v.tr. pf.
5901	blågoslovjeńje	n.
6587	blågoslovjeńje	n.
6588	blågoslovny	adj.
21713	blågostańje	n.sg.
22146	blågotvorny	adj.
22214	Blågověšćeńje	n.sg.
22297	blågovolěti	v.intr. ipf.
22299	blågovoljny	adj.
35598	blågozvųčnosť	f.sg.
35599	blågozvučny	adj.
36893	blågoželańje	n.
6050	blågoželati	v.intr. ipf.
620	blågy	adj.
24683	blåna	f.
36376	blåtna kųpělj	f.
14225	blåtna lavina	f.
24684	blåtny	adj.
3463	blåto	n.
312	blazn	m.anim.
24688	blazniti sę	v.refl. ipf.
24689	blaznovati	v.intr. ipf.
24690	blědněti	v.intr. ipf.
24692	blědosť	f.sg.
2453	blědy	adj.
24693	blejati	v.intr. ipf.
33405	blekdžek	m.sg.
24694	blen	m.
5073	blěsk	m.
2456	blěskati	v.intr. ipf.
5066	blěskavica	f.
24717	blěskavy	adj.
5869	blěsklivy	adj.
2035	blěsknųti	v.intr. pf.
24697	blěstěti	v.intr. ipf.
24698	blin	m.
3426	bliz	adv.
3746	blizko	adv.
4916	blizko	prep.
3980	blizkosť	f.sg.
6603	Blizky Iztok	m.sg.
2455	Blizky Vȯzhod	m.sg.
3287	blizky	adj.
192	bliznec	m.anim.
7406	blizneci	m.pl.
24701	Blizneci	m.pl.
7404	bliznečky	f.pl.
7407	bliznečsky	adj.
6610	blizši	adj.
6609	bliže	adv.
24702	bližiti sę	v.refl. ipf.
24703	bližnji, bližny	adj.
35437	bljudce	n.
24704	bljudo	n.
36473	bljudo	n.
24705	bljunųti	v.intr. pf.
2458	bljušč	m.
24707	bljuvati	v.intr. ipf.
36781	bljuvotina	f.
16778	blog	m.
2460	blȯha	f.
2459	blok	m.
4953	blokada	f.
33085	blokflejta	f.
193	blokovati	v.tr. ipf.
17150	blondin	m.anim.
2457	blondinka	f.
6189	blųd	m.
2461	blųditi	v.intr. ipf.
24713	blųdny	adj.
24714	blųkati	v.intr. ipf.
20850	boa	f.
701	bob	m.
24721	bobovy	adj.
2434	bobr	m.anim.
6620	bobŕja damba	f.
15253	bobŕji	adj.
36502	bobslej	m.
323	boćan	m.anim.
14454	bȯčka	f.
36179	bočny poględ	m.
3981	bočny	adj.
14452	bȯčva	f.
31753	bodati sę	v.refl. ipf.
24726	bodati	v.tr. ipf.
24727	bodec	m.
24728	bodlivy	adj.
24730	bȯdnaŕ	m.anim.
36422	bodnųti sę	v.refl. pf.
36421	bodnųti	v.tr. pf.
20354	bodrosť	f.sg.
20355	bodry	adj.
2855	bog	m.anim.
14471	bogač	m.anim.
24736	bogatěti	v.intr. ipf.
6624	bogatosť	f.sg.
6628	bogatstvo	n.
6629	bogatši	adj.
212	bogaty	adj.
14473	bogatyr	m.anim.
17152	bogatyrsko	adv.
17151	bogatyrsky	adj.
4510	bogohuliti	v.intr. ipf.
4512	bogohuljeńje	n.sg.
4511	bogohuľnik	m.anim.
6636	bogohuľno	adv.
4513	bogohuľny	adj.
17153	bogohuľstvo	n.
17154	Bogojavjeńje	n.sg.
20357	bogomolka	f.
17156	Bogorodica	f.sg.
17157	bogoslovec	m.anim.
17158	bogoslovje	n.sg.
17159	bogoslužba	f.
17160	bogoslužeńje	n.
16926	bogyni	f.
32037	bohanka	f.
35231	Bohemija	f.sg.
2464	boj	m.
20358	boj	m.
2465	bojati sę	v.refl. ipf.
6641	bojazlivo	adv.
6642	bojazlivy	adj.
4769	bojaznj	f.
6644	bojazno	adv.
6645	bojazny	adj.
24746	bojec	m.anim.
2466	bojevati	v.intr. ipf.
6169	bojevnik	m.anim.
6651	bojevy	adj.
2324	bojka	f.
4954	bojkot	m.
2919	bojkotovati	v.tr. ipf.
35420	bojna glåvica	f.
24748	bojny	adj.
765	bok	m.
6657	bolěsno	adv.
6658	bolěsny	adj.
2011	bolěti	v.intr. ipf.
36690	bolěti	v.intr. ipf.
6661	bolězlivo	adv.
31784	bolězlivy	adj.
14475	bolěznj	f.
14028	bolěznjetvorny	adj.
23478	boliglåv	m.
2467	bolinka	f.
22434	Bolivija	f.sg.
22435	bolivijsky	adj.
1132	bolj	m.
34901	bolje ili menje	adv.
16915	bolje	adv.
201	boljnica	f.
202	boljny	adj.
1824	boljšesť	f.
35660	boljši	adj.
208	bomba	f.
2469	bombardovati	v.tr. ipf.
24758	bonbon	m.
22602	bor	m.sg.
24759	bor	m.
207	boŕba	f.sg.
23988	bordelj	m.
24763	Bordo	m.sg.
24764	bordovy	adj.
17165	borec	m.anim.
17168	boriti sę	v.refl. ipf.
24766	borovik	m.
1852	bȯršč	m.sg.
24769	bȯrščevnik	m.
1379	Bosnija i Hercegovina	f.sg.
35871	Bosnija	f.sg.
606	bosnijsky	adj.
20359	bosnjačsky	adj.
6170	Bosnjak	m.anim.
24772	bosonogy	adj.
31754	bosti sę	v.refl. ipf.
24733	bosti	v.tr. ipf.
2463	bosy	adj.
23325	botaničny sad	m.
23324	botaničny	adj.
23323	botanik	m.anim.
23322	botanika	f.sg.
36488	Botsvana	f.sg.
1455	bȯz	m.
36282	bȯzina	f.
26843	božja kråvka	f.
6262	božji	adj.
5295	božsky	adj.
17169	božstvo	n.
2479	bråda	f.
24782	brådač	m.anim.
24783	brådaty	adj.
5886	brådavica	f.
473	brådavička	f.
36028	brådobrivec	m.anim.
24786	brahtati sę	v.refl. ipf.
36111	Brajlovo pismo	n.
24787	brak	m.
34778	brakonier	m.anim.
34777	brakonierstvo	n.sg.
2478	bråna	f.
24792	bråniti	v.tr. ipf.
23984	braslet	m.
7405	brat bliznec	m.anim.
1588	brat ili sestra	m.anim.
219	brat	m.anim.
24795	bratati sę	v.refl. ipf.
1877	brati	v.tr. ipf.
23522	Bratislava	f.sg.
24799	bratja	m.pl.
6098	bratobijstvo	n.
24801	bratov	adj.
6681	bratska ljubȯv	f.sg.
6021	bratsky	adj.
1461	bratstvo	n.
35655	bravo	intj.
221	bråzda	f.
24805	bråzditi	v.intr. ipf.
2473	Brazilija	f.sg.
4753	braziľsky	adj.
6081	Brěg Slonovoj Kosti	m.sg.
2474	brěg	m.
24808	brěgovy	adj.
24810	brěk	m.
24811	breknųti	v.intr. ipf.
16338	brěmę	n.
17170	brěmennosť	f.
17171	brěmenny	adj.
24815	brenčati	v.intr. ipf.
214	brend	m.
24818	brenknųti	v.intr. ipf.
17173	brěst	m.
24836	brešljan	m.
218	brěza	f.
6697	brězenj	m.sg.
24824	brěžny	adj.
6699	bridko	adv.
2475	bridky	adj.
6698	bridky	adj.
21265	bridž	m.sg.
24826	briket	m.
6702	Britanske Děvičje Ostrovy	m.pl.
2470	britansky	adj.
34140	briti sę	v.refl. ipf.
5283	briti	v.tr. ipf.
2480	britva	f.
24828	brjuhaty	adj.
2477	brjuho	n.
36592	brjušny	adj.
1337	bŕlog	m.
24831	Brno	n.sg.
4772	brod	m.
24833	broditi	v.intr. ipf.
31789	broditi	v.intr. ipf.
17175	broj	m.
22626	brom	m.sg.
16797	brȯnja	f.
6706	bronza	f.
36153	bronzova doba	f.
6707	bronzovy	adj.
35183	brošura	f.
2308	brȯv	f.
24837	brť	f.
24838	brtnik	m.anim.
17176	brukva	f.
24842	brus	m.
36810	Bruselj	m.
24843	brusiti	v.tr. ipf.
6711	brusnica	f.
162	brutaľnosť	f.
2483	brutaľny	adj.
24845	bruto	adv.
24847	bŕvno	n.
24849	bryzgati	v.tr. ipf.
24850	bryzgnųti	v.tr. pf.
36783	brza pomoć	f.sg.
23651	brzina	f.
5584	brzo	adv.
5583	brzy	adj.
17177	buba	f.
1802	bųben	m.
33328	bųblina	f.
2484	bučati	v.intr. ipf.
223	buda	f.
19665	Budapest	m.sg.
22979	bųde/bųdųt	v.aux. ipf.
20360	budiľnik	m.
23511	budist	m.anim.
22980	buditelj	m.anim.
34791	buditi sę	v.tr. ipf.
2485	buditi	v.tr. ipf.
23510	budizm	m.sg.
14481	budka	f.
918	budovati	v.tr. ipf.
1847	bųdųći	adj.
224	bųdųćnosť	f.sg.
1968	budynȯk	m.
22972	budžet	m.
36675	bufer obměna	m.
36674	bufer	m.
36676	buferna pamęť	f.
35103	bufet	m.
24860	buhati	v.intr. ipf.
24863	buhnųti	v.intr. pf.
24864	buhta	f.
6722	bujno	adv.
6723	bujnosť	f.sg.
24867	bujny	adj.
2309	buk	m.
1325	buket	m.
2486	bukva	f.
16755	bukvaľno	adv.
16754	bukvaľny	adj.
24871	bukvica	f.
4725	Bulgar, Bulgarin	m.anim.
1541	Bulgarija	f.sg.
17179	bulgarizacija	f.sg.
6729	Bulgarka	f.
2482	bulgarsky	adj.
36095	bulj-bulj	intj.
24873	bulka	f.
35245	bulvar	m.
31762	bumerang	m.
32996	bunker	m.
35033	bunt	m.
6732	buntovati sę	v.refl. ipf.
226	buntovnik	m.anim.
1801	buriti	v.tr. ipf.
6736	burja větra	f.
2451	burja	f.
24876	burjan	m.
6737	buŕlivy	adj.
24878	buŕny	adj.
16745	butylka	f.
1821	by	particle
24886	byček	m.anim.
24885	byčji	adj.
1791	byk	m.anim.
24887	Byk	m.anim.
17180	bylina	f.
24889	bylina	f.
6743	byly	adj.
1498	bystro	adv.
3977	bystrosť	f.sg.
1762	bystry	adj.
24894	byt	m.sg.
35085	byti dȯlžen	v.aux. ipf.
6750	Byti ili ne byti? To jest pytańje	phrase
10343	byti ostråžny	v.ipf.
17182	byti podobny	v.ipf.
23728	byti prěhlåđeny	v.ipf.
2449	byti prinuđeny	v.ipf.
4190	byti sȯglåsny	v.ipf.
593	byti	v.intr. ipf.
24896	byti	v.intr. ipf.
160	byťje	n.sg.
6753	bytosť	f.
14462	bytosť	f.
17183	byvati	v.intr. ipf.
24900	byvol	m.anim.
2993	byvši	adj.
33361	bzděti	v.intr. ipf.
33362	bzdnųti	v.intr. pf.
5758	caŕ	m.anim.
17187	carica	f.
17188	carica	f.
35835	Carigrad	m.sg.
35940	caŕsky	adj.
24903	caŕstvo	n.
24904	cědilo	n.
2374	cěditi	v.tr. ipf.
883	cegla	f.
19666	ceglina	f.
2204	cěliti	v.intr. ipf.
421	cělj	m.
34996	ćelja	f.
36353	cěljeva grupa	f.
36358	cěljevy język	m.
4391	cělkom	adv.
3009	cělkovito	adv.
4143	cělkovity	adj.
36585	cělo čislo	n.
32747	cělo	adv.
34925	cělodenny	adj.
34924	cělodnevny	adj.
19667	cělosť	f.sg.
6767	cělovańje	n.sg.
6769	cělovatelj	m.anim.
3010	cělovati	v.tr. ipf.
1027	cěly	adj.
3008	cement	m.
1568	cěna	f.
24918	cěniti	v.tr. ipf.
2281	cěnnosť	f.
1409	cěnny	adj.
23017	centigram	m.
23021	centilitr	m.
4422	centimetr	m.
1263	centr	m.
1706	centrala	f.
23223	centraľna nervna sistema	f.sg.
31748	Centraľny Komitet	m.
1727	centraľny	adj.
2194	centrizm	m.sg.
5296	cenzura	f.sg.
5297	cenzurovati	v.tr. ipf.
2193	cěp	m.
4649	cepelin	m.
35692	cěsaŕ	m.anim.
35693	cěsaŕstvo	n.
32252	Cetińje	n.sg.
24921	cěvka	f.
34775	cibulica	f.
1543	cibulja	f.
6784	cibuljevity	adj.
14486	cibuljevy	adj.
116	cicka	f.
6786	cicky	f.pl.
17210	cifra	f.
35119	cigara	f.
460	cigareta	f.
32070	cikl	m.
32071	cikličny	adj.
22628	cin	m.sg.
22624	cink	m.sg.
6265	cirk	m.
24924	cirkulacija	f.sg.
24925	cirkulj	m.
36390	cirkumfleks	m.
4955	citat	m.
2999	citovati	v.tr. ipf.
36832	citra	f.
2998	civil	m.anim.
23527	civilizacija	f.
35749	civilizovany	adj.
1879	civiľny	adj.
32266	cmokati	v.intr. ipf.
35435	colj	m.
16928	crkȯv	f.
4386	crkȯvnoslovjansky	adj.
35168	crkȯvny	adj.
1707	crkva	f.
22748	ćuđezemec	m.anim.
25079	ćuđezemny	adj.
610	ćuđi	adj.
36629	ćuđi	adj.
3416	ćuđina	f.sg.
1182	ćuđinec	m.anim.
6928	ćuđinka	f.
31965	cukina	f.
2243	cukr	m.sg.
3838	cukrka	f.
6103	cunami	n.indecl.
6794	cvekla	f.
24929	cvěliti	v.intr. ipf.
24937	cvěsti	v.intr. ipf.
1720	cvět	m.
14487	cvět	m.
8792	cvětati	v.intr. ipf.
8791	cvětenj	m.sg.
24933	cvěteńje	n.sg.
35014	cvětna kapusta	f.
8794	cvětnųti	v.intr. ipf.
22985	cvětny pyl	m.
24935	cvětny	adj.
8793	cvětųći	adj.
20852	cviliti	v.intr. ipf.
35090	cvŕček	m.anim.
33590	cvŕkati	v.intr. ipf.
33591	cvŕkot	m.
24939	čad	m.
24941	čaditi	v.intr. ipf.
1714	čaj	m.
6796	čajiljnja	f.
23472	čajka	f.
23473	čajka	f.
35626	čajna lȯžička	f.
36256	čajna vrěčka	f.
4792	čajnik	m.
36255	čajny paketik	m.
4883	čao!	intj.
2372	čaplja	f.
2212	čar	m.
4831	čaroděj	m.anim.
4830	čarodějnica	f.
16870	čarovati	v.intr. ipf.
6802	čarovnica	f.
6805	čarovnik	m.anim.
24953	čarovny	adj.
24954	čary	m.pl.
4270	čas	m.
1278	časina	f.
33334	časom	adv.
17190	časoměr	m.
17191	časopis	m.
21266	časoslov	m.
23639	časova zona	f.
17073	časovańje	n.sg.
2165	časovnik	m.
23640	časovy pas	m.
29	časovy	adj.
1732	čaša	f.
24961	čaška	f.
35294	čat	m.
5921	čečensky	adj.
24964	čečetka	f.
2312	Čečnja	f.sg.
24942	čędo	n.
4730	Čeh	m.anim.
2991	Čehija	f.sg.
17193	čehoslovačsky	adj.
17194	Čehoslovakija	f.sg.
17195	čehoslovakizm	m.sg.
3497	ček	m.
23319	čekaljnja	f.
17196	čekańje	n.sg.
3003	čekati	v.intr. ipf.
23460	čelesta	f.
17197	čeličny	adj.
17198	čelik	m.sg.
24967	čeljaď	f.sg.
6820	čeljusť	f.
36026	čelka	f.
24969	čeľny	adj.
6821	čelo	n.
24971	čelo	n.
14491	čem	conj.
23459	čembalo	n.
24973	čemerica	f.
1705	čempion	m.anim.
2492	čempionat	m.
1194	čemu	adv.
4034	čemu-nebųď	adv.
1753	čep	m.
24975	čepec	m.
6825	čerep	m.
2356	čerešnja	f.
24985	česalo	n.
2227	česati	v.tr. ipf.
510	česnȯk	m.sg.
1730	čęsť mȯlvy	f.
24993	čęsť světa	f.
1731	čęsť	f.
3033	česť	f.
19669	čęstěje	adv.
6810	čęsti mȯlvy	f.pl.
6839	čęstica	f.
6840	čęstično	adv.
17202	čestigodny	adj.
32531	čestiljubivy	adj.
6842	čestitati	v.tr. ipf./pf.
5944	čestiti	v.tr. ipf.
4664	čęstka	f.
22981	čestnosť	f.
1551	čestny	adj.
137	čęsto	adv.
17208	čęstota	f.
2273	čęsty	adj.
36642	Češka	f.
2417	češsky	adj.
16454	četveraky	num.diff.
16427	četverčęta	n.pl.
16458	četverka	num.subst.
16441	četverny	num.mult.
16431	četvero	num.coll.
5275	četvŕt	m.
6853	četvŕtina	num.fract.
638	četvŕtȯk	m.
636	četvŕty	num.ord.
2856	četyri	num.card.
2857	četyridesęť, četyridesęti	num.card.
19668	četyridesęty	num.ord.
16448	četyrikråtno	adv.
1180	četyrinadsęť	num.card.
23682	četyrinadsęty	num.ord.
1022	četyrista, četyristo	num.card.
15269	četyrivųgȯľnik	m.
15268	četyrokųtnik	m.
6254	či	conj.
14495	či	particle
1179	čij	pron.poss.
19601	čijkoli	pron.poss.
14496	čij-libo	pron.poss.
190	čij-nebųď	pron.poss.
5759	Čile	n.sg.
6867	Čilijec	m.anim.
6868	Čilijka	f.
5760	čilijsky	adj.
25011	čim ... tym ...	adv.
17211	čim raněje	adv.
17212	čim skorěje	adv.
14497	čimno	adv.
1594	čin	m.
6872	činitelj	m.
906	činiti	v.tr. ipf.
6876	činovnica	f.
584	činovnik	m.anim.
6880	čip	m.
6879	čips	m.
25014	čir	m.
33589	čir	m.
17214	čisliti	v.tr. ipf.
25015	čisľny	adj.
590	čislo	n.
17215	čislo	n.
17074	čislovnik	m.
25018	čistina	f.
4465	čistiti	v.tr. ipf.
25020	čistosť	f.sg.
25021	čistota	f.sg.
582	čisty	adj.
4366	čitaljnja	f.
4363	čitatelj	m.anim.
35827	čitateljnik	m.
6885	čitati	v.tr. ipf.
17216	čitkody	m.pl.
25026	čiž	m.anim.
14499	članȯk	m.
640	člen	m.anim.
25028	člen	m.
25029	člen	m.
32620	členistonogy	m.anim.
598	členȯk	m.
599	členstvo	n.
6261	člověčji	adj.
14500	člověčnosť	n.sg.
25031	člověčny	adj.
25032	člověčsky	adj.
600	člověčstvo	n.sg.
592	člověk	m.anim.
6894	člověkoljubec	m.anim.
36604	člověkoljubivy	adj.
6893	člověkoljubje	n.sg.
6892	člověk-pavųk	m.anim.
601	čmelj	m.anim.
3499	čokolada	f.
25037	čȯln	m.
2959	črěda	f.
25040	črěmha	f.
5299	črěp	m.
25045	črěvo	n.
4473	črěz	prep.
23336	črězměrno	adv.
22983	črězměrnosť	f.sg.
22984	črězměrny	adj.
4716	črka	f.
23508	črna dira	f.
1343	Črna Gora	f.sg.
32943	črna vdova	f.
25048	črněti	v.intr. ipf.
17219	črnica	f.
25049	črnica	f.
6906	črnik	m.anim.
3695	črnilo	n.
25051	črniti	v.tr. ipf.
6908	Črno morje	n.sg.
25052	črnobylj	m.
14504	črnoględnica	f.
14505	črnoględnik	m.anim.
6027	črnoględnosť	f.sg.
6026	črnoględny	adj.
349	Črnogorjan, Črnogorjanin	m.anim.
348	črnogorsky	adj.
25053	črnota	f.
25054	črnuška	f.
520	črny	adj.
24978	črpak	m.
619	črpati	v.tr. ipf.
24981	črstvěti	v.intr. ipf.
24982	črstvy	adj.
24983	črt	m.anim.
696	črta	f.
3569	črtati	v.tr. ipf.
25058	črtež	m.
24984	črtov	adj.
345	črv	m.anim.
25060	črvec	m.anim.
19514	Črvena Armija	f.
33403	Črvena Kapučka	f.
6914	črvene fasolje	f.pl.
6915	črvenec	m.anim.
25061	črveněti	v.intr. ipf.
6916	črvenica	f.
6830	črvenj	m.sg.
23662	črvenogrlka	f.
6919	črveny krvinȯk	m.
101	črveny	adj.
36530	črvilo	n.
25066	črvivy	adj.
2266	črvjak	m.anim.
25068	črvotočina	f.
17220	čtiti	v.tr. ipf.
34620	čto bolje	adv.
21268	čto sę tyče	prep.
16762	čto vyše	adv.
19670	čto	pron.int.
19602	čtokoli	pron.indef.
14502	čto-libo	pron.indef.
1786	čto-nebųď	pron.indef.
25070	čub	m.
25071	čubaty	adj.
25072	čučati	v.intr. ipf.
4251	čudak	m.anim.
23677	čudesny	adj.
5044	čuditi sę	v.refl. ipf.
25073	čuditi	v.tr. ipf.
17231	čudno	adv.
17232	čudny	adj.
25074	čudny	adj.
1184	čudo	n.
25077	čudom	adv.
25078	čudotvorec	m.anim.
19671	čudovistny	adj.
608	čudovišče	n.
36098	čuma	f.
611	čuti	v.tr. ipf.
6931	čuťje	n.
6933	čuťje	n.
6934	čutlivo	adv.
4165	čutlivosť	f.sg.
4164	čutlivy	adj.
25083	čutny	adj.
17223	čuvańje	n.sg.
17224	čuvańje	n.sg.
36570	Čuvašija	f.sg.
4909	čuvašsky	adj.
17228	čuvati sę	v.refl. ipf.
17226	čuvati	v.intr. ipf.
17227	čuvati	v.intr. ipf.
6938	čuvstveno	adv.
6939	čuvstveny	adj.
2896	čuvstvo	n.
12869	da by	conj.
2371	da	intj.
17233	da	conj.
17234	da	particle
25087	dača	f.
25088	dadaizm	m.sg.
25090	dagerotipija	f.
3031	Dagestan	m.sg.
6945	dakle	adv.
25092	daktylologija	f.sg.
25093	daktyloskopija	f.sg.
5219	daleko	adv.
35228	dalekoględ	m.
17236	dalekoskok	m.
6950	Daleky Iztok	m.sg.
4758	Daleky Vȯzhod	m.sg.
612	daleky	adj.
25098	daleměr	m.
3566	dalj	m.
1177	dalje	adv.
25102	daljnji, daljny	adj.
3032	daljši	adj.
35907	Dalmatija	f.sg.
35908	dalmatinsky	adj.
25103	daltonist	m.anim.
25104	daltonizm	m.sg.
17237	dama	f.
25105	dama	f.
25106	dama	f.
34966	damast	m.
3548	dane	m.pl.
1178	Danija	f.sg.
5063	danina	f.
25111	danj	f.
25112	dannik	m.anim.
14509	danȯk	m.
25113	dansing	m.
4427	dansky	adj.
5697	dany	adj.
36467	daoizm	m.
4520	dar krve	m.
6960	dar	m.
17240	dar	m.
4521	daritelj krve	m.anim.
4325	daritelj	m.anim.
4324	dariti	v.tr. ipf.
17241	dariti	v.tr.ipf
25122	darmojed	m.anim.
36842	darmovo	adv.
25123	darmovy	adj.
6966	darovańje krve	n.
6965	darovańje	n.
6970	darovati	v.tr. ipf.
17242	darovati	v.tr. ipf.
17243	darovity	adj.
25127	darvinist	m.anim.
25128	darvinizm	m.sg.
1967	data	f.
1966	dateljnik, dateljny padež	m.
6973	dati råbotų	v.pf.
22987	dati zajem	v.pf.
664	dati	v.tr. pf.
16930	dativ	m.
25133	datovati	v.tr. ipf./pf.
36072	datulja	f.
15276	daunlodovańje	n.sg.
15278	daunlodovati	v.tr. ipf.
25134	davač	m.anim.
6979	davati råbotų	v.ipf.
22986	davati zajem	v.ipf.
2898	davati	v.tr. ipf.
25136	davec	m.anim.
25137	daviti	v.tr. ipf.
25139	davno	adv.
2861	davny	adj.
1982	daže	adv.
2623	dbati	v.intr. ipf.
1236	debata	f.
25144	debatovati	v.intr. ipf.
25146	debelěti	v.intr. ipf.
25147	debely	adj.
25148	debet	m.
25150	debjut	m.
25151	debjutant	m.anim.
25152	debjutovati	v.intr. ipf./pf.
25153	deblokovati	v.intr. ipf./pf.
25155	decembr	m.sg.
25158	Děd Mråz	m.anim.
1436	děd	m.anim.
7068	dědȯk	m.anim.
25161	dědov	adj.
25162	dedukcija	f.
25163	deduktivny	adj.
25164	defekt	m.
2907	defenestracija	f.sg.
25165	deficit	m.
2624	definicija	f.
4956	definiovati	v.tr. ipf.
23693	definitivno	adv.
23692	definitivny	adj.
288	defis	m.
15281	defisovańje	n.sg.
15282	defisovany	adj.
15280	defisovati	v.tr. ipf.
289	deformovati	v.tr. ipf.
25167	degenerat	m.anim.
25168	degenerativny	adj.
25169	degenerovati	v.intr. ipf./pf.
25170	degeť	m.
25171	degradacija	f.
25172	degradovati	v.tr. ipf./pf.
25173	degustacija	f.
25175	degustovati	v.tr. ipf./pf.
25089	dęgylj	m.
6986	dějajųći premier-ministr	m.anim.
36057	dějańja apostolov	n.pl.
6987	dějańja	n.pl.
6988	dějańje	n.
6990	dějateljnosť	f.sg.
6992	dějati sę	v.refl. ipf.
6991	dějati	v.tr. ipf.
33034	dekadent	m.anim.
33035	dekadentsky	adj.
33036	dekadentstvo	n.sg.
751	dekembr	m.sg.
35941	deklamovati	v.tr. ipf./pf.
216	deklaracija	f.
35906	dekolonizacija	f.sg.
36123	dekolt	m.
23170	dekoracija	f.
296	dękovati	v.intr. ipf.
3175	dekret	m.
4884	dękujų	intj.
4899	dękujųći	prep.
2612	děl	m.
2613	děl	m.
3771	děl	m.
211	dělati	v.tr. ipf.
25182	dělba	f.
35170	delegacija	f.
35171	delegat	m.anim.
20361	delfin	m.anim.
25184	delfińji	adj.
25185	delikatno	adv.
25186	delikatnosť	f.sg.
19672	delikatny	adj.
15694	delikt	m.
19673	deliričny	adj.
36012	děliti sę	v.refl. ipf.
1754	děliti	v.tr. ipf.
3545	děljeńje	n.
2616	dělo	n.
17246	dělo	n.
35514	dělo	n.
699	deminutiv	m.
760	demisija	f.
35279	demografičny	adj.
35280	demografija	f.sg.
2878	demokracija	f.
2621	demokrat	m.anim.
2622	demokratičny	adj.
772	demonstracija	f.
623	demonstrativny	adj.
6266	demonstrovati	v.tr. ipf.
7016	denj oplakyvańja	m.
4053	denj poslě dnja	adv.
5199	denj rođeńja	m.
1845	denj	m.
25194	denny	adj.
17264	denonočje	n.
25195	dentist	m.anim.
36772	departament	m.
36773	departament	m.
2487	deportacija	f.
398	deportovati	v.tr. ipf./pf.
17248	depresija	f.
36183	depresivny	adj.
36184	deprimovany	adj.
36182	deprimovati	v.tr. ipf./pf.
36441	deprimujųći	adj.
35469	desert	m.
1517	desęť	num.card.
16437	desętero	num.coll.
2851	desętilěťje	n.
7024	desętina	num.fract.
16464	desętka	num.subst.
1515	desęty	num.ord.
276	dęsna	f.
25202	desnica	f.
32169	desnorųky	adj.
25203	desny	adj.
32478	despot	m.anim.
1516	despotičny	adj.
35734	destabilizacija	f.sg.
35733	destabilizovati	v.tr. ipf./pf.
17250	destalinizacija	f.sg.
79	deševy	adj.
2619	detalj	m.
19674	detaljevany	adj.
298	dětę	n.
35472	detektiv	m.anim.
1308	dętel	m.anim.
17251	dętelina	f.
7033	dětętko	n.
16731	děti sę	v.refl. ipf.
1191	děti	v.tr. ipf.
4832	děti	f.pl.
7035	dětinsko	adv.
4836	dětinskosť	f.sg.
4834	dětinsky	adj.
4833	dětinstvo	n.sg.
35828	detonator	m.
4835	dětsky	adj.
25212	dětstvo	n.sg.
16414	děva	f.
25213	Děva	f.
25215	devalvacija	f.
16413	děvčę	n.
300	děvčina	f.
5959	děvėc	m.anim.
299	děveŕ	m.anim.
2620	devęť	num.card.
2181	devęťdesęt	num.card.
23689	devęťdesęty	num.ord.
16436	devętero	num.coll.
16404	devętina	num.fract.
16463	devętka	num.subst.
886	devętnadsęť	num.card.
23685	devętnadsęty	num.ord.
1298	devęťsȯt, devęťsto	num.card.
1922	devęty	num.ord.
7069	Děvica Marija	f.sg.
5956	děvica	f.
5960	Děvičje Ostrovy	m.pl.
7053	děvičji	adj.
5958	děvičstvo	n.sg.
25230	deviz	m.
25231	děvka	f.
25233	devon	m.
25234	děvstvo	n.sg.
25238	dezerter	m.anim.
25239	dezertovati	v.intr. ipf./pf.
25240	dezinfekcija	f.sg.
25241	dezinfikovati	v.tr. ipf./pf.
19675	dezinformacija	f.
25243	dezinsekcija	f.sg.
25244	děža	f.
25246	dežurny	adj.
31822	dežurstvo	n.
32111	diagnostičny	adj.
35672	diagnostika	f.sg.
32109	diagnoza	f.
35795	diagram	m.
35943	diahroničny	adj.
305	diakon	m.anim.
17252	diakritičny znak	m.
15807	dialekt	m.
35942	dialektičny	adj.
56	dialog	m.
17253	diamant	m.
25248	diamantovy	adj.
1591	diametr	m.
34934	diapozitiv	m.
31836	diareja	f.sg.
35243	diaspora	f.
36831	diatoničny	adj.
2975	diavȯl	m.anim.
35991	diavȯľsko	adv.
35577	dieta	f.
16931	digitaľny	adj.
35258	digraf	m.
36132	dihotomija	f.
14521	diko	adv.
21270	dikobraz	m.anim.
14522	dikosť	f.sg.
3182	diktator	m.anim.
23533	diktatura	f.
33140	diktovati	v.tr. ipf./pf.
15296	diky labęď	m.anim.
15297	diky mak	m.
14520	diky	adj.
34846	dilema	f.
35622	diler	m.anim.
22995	dinamičny	adj.
22996	dinamika	f.sg.
34762	dinamit	m.sg.
34591	dinamo	n.
35873	dinar	m.
1735	dinastija	f.
32476	dinozavr	m.anim.
23534	dioda	f.
36634	diplodok	m.
35628	diplom	m.
23535	diplomacija, diplomatija	f.
275	diplomat	m.anim.
382	diplomatičny	adj.
23507	dira	f.
25467	diravy	adj.
739	direktiva	f.
272	direktor	m.anim.
23509	dirigent	m.anim.
36034	dirkovač	m.
6104	disciplina	f.
35739	disertacija	f.
35510	diskreditovati	v.tr. ipf./pf.
36170	diskretny	adj.
32602	diskriminacija	f.sg.
32603	diskriminovati	v.intr. ipf./pf.
2488	diskusija	f.
15818	diskusijny	adj.
301	diskutovati	v.intr. ipf.
35296	diskvalifikacija	f.
35295	diskvalifikovati	v.tr. ipf./pf.
1101	displej	m.
35944	distancevati sę	v.refl. ipf./pf.
304	distribucija	f.
25252	divan	m.
25253	divina	f.sg.
25254	diviti	v.tr. ipf.
7063	divnějši	adj.
3531	divny	adj.
3351	divo	n.
14523	divo	adv.
14528	divosť	f.sg.
14525	divy	adj.
36173	dizajn	m.
32466	dizelj	m.sg.
32467	dizeľny motor	m.
2489	dlånj	f.
25259	dlåto	n.
7071	dlja uspěha!	intj.
1557	dlja	prep.
21271	dnem	adv.
36885	Dněpr	m.sg.
5288	dneś	adv.
36886	Dněstr	m.sg.
17256	dnešnje	adv.
17254	dnešnji, dnešny	adj.
7077	dnevnica	f.
17257	dnevnik	m.
25265	dnevny	adj.
17259	dniti sę	v.refl. ipf.
2490	dno	n.
7082	do časa	adv.
7083	do dneś	adv.
7085	do dolu	adv.
17260	do doma	adv.
17261	do gory	adv.
4879	do viděńja!	intj.
2134	do	prep.
17263	doba	f.
21272	dobaviti	v.tr. pf.
21273	dobavjati	v.tr. ipf.
25269	doběgati do	v.intr. ipf.
7105	Dobra noć!	intj.
7091	dobra volja	f.
25273	dobrěti	v.intr. ipf.
14291	dobro informovany	adj.
7095	Dobro jutro!	intj.
7096	dobro nastrojeńje	n.
7097	dobro obdarjeny	adj.
7098	dobro orųdovany	adj.
15131	dobro osvědomjeny	adj.
16276	Dobro utro!	intj.
2491	dobro	adv.
17268	dobro	n.
19481	dobrobyt	m.sg.
17273	dobročinnosť	f.sg.
17275	dobročinstvo	n.
25274	dobroděj	m.anim.
4878	Dobrodošli!	intj.
7101	dobrodušny	adj.
32465	dobronaměrny	adj.
5870	dobropoględny	adj.
4410	dobrosť	f.sg.
25275	dobrota	f.sg.
25276	dobrovoljec	m.anim.
17277	dobrovoljny	adj.
16277	Dobry denj!	intj.
7106	Dobry večer!	intj.
1144	dobry	adj.
35371	dobyti ponovno	v.tr. pf.
3192	dobyti	v.tr. pf.
7110	dobyti	v.tr. pf.
1145	dobytȯk	m.
22988	dobyvatelj	m.anim.
35370	dobyvati ponovno	v.tr. ipf.
3191	dobyvati	v.tr. ipf.
7113	dobyvati	v.tr. ipf.
1084	dȯćera	f.
7117	dȯćerka	f.
7119	dȯćerska ljubȯv	f.
6023	dȯćersky	adj.
35250	dȯći	f.
7114	dočasny	adj.
311	dodati	v.tr. pf.
7124	dodati	v.tr. pf.
36195	dodatno	adv.
36196	dodatny	adj.
35191	dodatȯčno	adv.
7126	dodatȯčny	adj.
4088	dodatȯk	m.
4089	dodatȯk	m.
7129	dodava	f.
1704	dodavati	v.tr. ipf.
7133	dodavati	v.tr. ipf.
35706	dodneś	adv.
35222	dodo	m.anim.
25287	doganjati	v.tr. ipf.
25285	dogarjati	v.tr. ipf.
7135	doględati	v.tr. ipf.
7138	doględěti	v.tr. pf.
25286	dognati	v.tr. pf.
14534	dogoditi sę	v.refl. pf.
31826	dogorěti	v.tr. pf.
5534	dogovarjati sę	v.refl. ipf.
2899	dogovarjati	v.tr. ipf.
125	dogovor	m.
583	dogovor	m.
4192	dogovoriti sę	v.refl. pf.
655	dogovoriti	v.tr. pf.
35158	dogovorny	adj.
17283	dȯhnųti	v.intr. pf.
17284	dohod	m.
5344	dohoditi	v.intr. ipf.
5345	dojdti	v.intr. pf.
5347	dojehati	v.intr. pf.
17285	dojem	m.
5349	dojezd	m.
5348	doježđati	v.intr. ipf.
1181	dojiti	v.tr. ipf.
31810	dok	m.
2041	dokaz	m.
7161	dokazati	v.tr. pf.
25294	dokazati	v.tr. pf.
7162	dokazyvati	v.tr. ipf.
19676	dokladati	v.tr. ipf.
19536	dokolě	adv.
19539	dokolě	conj.
17286	dokonati	v.tr. pf.
7163	dokonce	adv.
7164	dokončeńje	n.
15207	dokončeny	adj.
7165	dokončiti	v.tr. pf.
17288	dokonyvati	v.tr. ipf.
2042	doktor	m.anim.
36424	doktor	m.anim.
35807	doktorat	m.
2040	doktrina	f.
7166	dokųd	adv.
2029	dokument	m.
35270	dokumentacija	f.sg.
35176	dokumentaľny film	m.
35297	dokumentovati	v.tr. ipf./pf.
16480	dol	m.
2933	dolar	m.
1593	dȯlbti	v.tr. ipf.
2030	dȯlg	m.
20363	dȯlgo	adv.
19486	dȯlgočasiti sę	v.refl. ipf.
19485	dȯlgočasiti	v.tr. ipf.
19482	dȯlgočaśje	n.sg.
19487	dȯlgočasnica	f.
19488	dȯlgočasnik	m.anim.
19490	dȯlgočasny	adj.
19489	dȯlgočašeny	adj.
17299	dȯlgodenstvo	n.
33038	dȯlgohvosty papugaj	m.anim.
33037	dȯlgohvosty	adj.
7172	dȯlgosť žiťja	f.
3406	dȯlgosť	f.
25308	dȯlgota	f.
35308	dȯlgotrajny	adj.
7174	dȯlgověčnosť	f.sg.
7175	dȯlgověčny	adj.
17301	dȯlgoživeny	adj.
17302	dȯlgoživosť	f.sg.
17303	dȯlgoživostno råziskyvańje	n.
17304	dȯlgoživostny	adj.
3051	dȯlgy	adj.
2883	dolina	f.
35488	doľno oblěčeńje	n.sg.
185	doľnolužičsky	adj.
19677	doľnosŕbsky	adj.
19678	doľny	adj.
20364	doložiti	v.tr. pf.
7179	dȯlžen	adj.
31743	dȯlžina valy	f.
23656	dȯlžina vȯlny	f.
23657	dȯlžina	f.
25312	dȯlžiti	v.tr. ipf.
25313	dȯlžnik	m.anim.
3699	dȯlžnosť	f.
3573	dȯlžny	adj.
6161	dȯlžny	adj.
3162	dom	m.
16825	doma	adv.
36433	domašnja gospodynja	f.
23194	domašnje životno	n.
17311	domašnji spor	m.
23195	domašnji zvěŕ	m.anim.
17305	domašnji, domašny	adj.
7186	domče	n.
36356	domen	m.
36357	domenno imę	n.
20365	doměška	f.
35172	dominacija	f.sg.
36109	dominanta	f.
22455	Dominikanska Republika	f.sg.
694	dominovati	v.tr. ipf.
17308	domněvati	v.tr. ipf.
17310	domorodny	adj.
21274	domorodny	adj.
25318	domosěd	m.anim.
16826	domov	adv.
17312	domovina	f.
17313	domovy arešt	m.sg.
25319	domovy	adj.
20366	domysl	m.
20369	domysliti sę	v.refl. pf.
20368	domysljati sę	v.refl. ipf.
20370	domysľny	adj.
3813	donesti	v.tr. pf.
4275	donositelj	m.anim.
20372	donositelj	m.anim.
3691	donositi	v.tr. ipf.
7198	dopis	m.
6065	dopisnik	m.anim.
6062	dopisyvańje	n.
6064	dopisyvatelj	m.anim.
6061	dopisyvati	v.tr. ipf.
6208	dopoka ne	conj.
6207	dopoka	conj.
36242	dopȯlniteljny	adj.
7204	dopȯlniti	v.tr. pf.
7206	dopȯlnjati	v.tr. ipf.
7205	dopȯlnjeńje	n.
34890	dopȯlnjeńje	n.
17317	dopȯlnjeny	adj.
34868	dopȯlzati	v.intr. ipf.
34869	dopȯlzti	v.intr. pf.
17320	dopŕva	adv.
36755	dopustimy	adj.
7207	dopustiti	v.tr. pf.
20862	dopustiti	v.tr. pf.
7208	dopušćati	v.tr. ipf.
20859	dopušćati	v.tr. ipf.
7211	dorastati	v.intr. ipf.
16416	doråsti	v.intr. pf.
23050	doråstla	f.
7212	doråstlosť	f.sg.
15304	doråstly	adj.
22992	doråstly	m.anim.
7213	doråzuměti sę	v.refl. pf.
7214	doråzuměvańje	n.sg.
7215	doråzuměvati sę	v.refl. ipf.
7216	dorųčati	v.tr. ipf.
7218	dorųčiti	v.tr. pf.
17322	dosada	f.
17326	dosaditi sę	v.refl. pf.
17325	dosaditi	v.tr. pf.
21276	dosaditi	v.tr. pf.
17327	dosadny	adj.
17328	dosadny	adj.
21277	dosadny	adj.
17324	dosađati sę	v.refl. ipf.
17323	dosađati	v.tr. ipf.
21275	dosađati	v.tr. ipf.
7221	dosęgajemy	adj.
1686	dosęgati	v.tr. ipf.
5104	dosęgneńje	n.
1059	dosęgnųti	v.tr. pf.
7228	dosęžeńje	n.
7222	dosęženy	adj.
2039	dȯska	f.
4208	doskonaliti	v.tr. ipf.
4210	doskonalosť	f.sg.
4207	doskonaly	adj.
17330	doslědno	adv.
35162	doslědnosť	f.sg.
17331	doslědny	adj.
16753	doslovno	adv.
16752	doslovny	adj.
423	dosť	adv.
1900	dostati	v.tr. pf.
7241	dostati	v.tr. pf.
7242	dostatȯčno	adv.
7244	dostatȯčnosť	f.sg.
2510	dostatȯčny	adj.
3791	dostatȯk	m.
21716	dostatȯk	m.
7248	dostava	f.
2511	dostavati	v.tr. ipf.
7266	dostavati	v.tr. ipf.
21715	dostavati	v.tr. ipf.
7253	dostavitelj internetnej služby	m.anim.
7251	dostavitelj	m.anim.
3105	dostaviti	v.tr. pf.
21727	dostaviti	v.tr. pf.
20	dostavjati	v.tr. ipf.
21726	dostavjati	v.tr. ipf.
23420	dostavka i popytka	phrase
5577	dostavka	f.
21853	dostigati	v.tr. ipf.
21855	dostigati	v.tr. ipf.
21854	dostignųti	v.tr. pf.
21856	dostignųti	v.tr. pf.
21721	dostojenstvo	n.
21722	dostojenstvo	n.
21725	dostojnik	m.anim.
484	dostojnosť	f.sg.
3057	dostojny	adj.
3842	dostojny	adj.
21719	dostojny	adj.
21720	dostojny	adj.
17334	dostųp	m.
6045	dostųpnosť	f.sg.
3054	dostųpny	adj.
7258	dostųpny	adj.
25345	dosyta	adv.
25344	dȯščeny	adj.
22119	dotknųti sę	v.refl. pf.
481	dotknųti	v.tr. pf.
19622	dotolě	adv.
465	dotųd	adv.
22120	dotykati sę	v.refl. ipf.
1146	dotykati	v.tr. ipf.
21280	dovědati sę	v.refl. ipf.
21283	dověděti sę	v.refl. pf.
36845	dověriti sę	v.refl. pf.
3844	dověriti	v.tr. pf.
36844	dověrjati sę	v.refl. ipf.
3843	dověrjati	v.tr. ipf.
36843	dověrjati	v.intr. ipf.
23982	dověŕje	n.sg.
7271	dověrjeńje	n.sg.
22325	dověrny	adj.
35918	dovesti do/k	v.tr. pf.
7274	dovezti	v.tr. pf.
22372	dovnųtra	prep.
22373	dovnųtra	adv.
3310	dovod	m.
22249	dovod	m.
35917	dovoditi do/k	v.tr. ipf.
7276	dovoljno	adv.
25348	dovoljny	adj.
7277	dovoz	m.
22414	dovoz	m.
7278	dovoziti	v.tr. ipf.
7279	dovoznik	m.anim.
22566	dovŕšati	v.tr. ipf.
35298	dovŕšenosť	f.sg.
35289	dovŕšeny	adj.
22567	dovŕšiti	v.tr. pf.
14539	dozad	adv.
22891	dozor	m.
4115	dozrěly	adj.
14301	dozrěno vino	n.
14302	dozrěny	adj.
4113	dozrěti	v.intr. pf.
4114	dozrěvati	v.intr. ipf.
17338	dozvaljaje sę	phrase
435	dozvaljati	v.tr. ipf.
7283	dozvolimy	adj.
414	dozvoliti	v.tr. pf.
32670	dozvoljeńje	n.
7287	dozvoljeny	adj.
1902	dȯžď	m.
35032	dȯžďevy črvjak	m.anim.
25352	dȯžďevy	adj.
7291	dȯžditi	v.intr. ipf.
25355	dȯždlivy	adj.
7292	dȯždnik	m.
4486	dožiti	v.tr. pf.
3719	dožitny	adj.
17335	doživeti	v.tr. ipf.
17339	drabina	f.
419	dråga	f.
35839	drågocěnnosť	f.sg.
23995	drågocěnny	adj.
35042	drågoukazatelj	m.
432	drågy	adj.
36362	drågy	adj.
20373	drakon	m.anim.
23694	drama	f.
36340	dramatično	adv.
1903	dramatičny	adj.
35790	dramaturgija	f.
436	drapati	v.tr. ipf.
442	drapnųti	v.tr. pf.
440	drastičny	adj.
23220	dražlivy	adj.
25360	dražniti	v.tr. ipf.
35036	dråžny znak	m.
35037	dråžny	adj.
2513	drěmati	v.intr. ipf.
31832	drěmlivosť	f.sg.
31831	drěmlivy	adj.
449	drěmnųti	v.intr. pf.
25362	drěmota	f.
25363	drěn	m.
36112	dresura	f.
33986	dreti grlo	phrase
1529	dreti	v.tr. ipf.
7307	drěvěny dom	m.
23455	drěvěny dyhovy instrument	m.
2512	drěvěny	adj.
35197	drěvny vųgȯlj	m.
7308	drěvny	adj.
25368	drěvny	adj.
2137	drěvo	n.
5292	drěvo	n.
7312	drěvorěžeńje	n.sg.
17340	drěvorųb	m.anim.
7314	drgańje	n.sg.
14540	drgati	v.intr. ipf.
34661	drgnųti	v.intr. pf.
7318	dŕkańje	n.sg.
4693	dŕkati	v.intr. ipf.
7319	dŕkatnik	m.anim.
25371	drn	m.
36415	drob	m.
25374	drobiti	v.tr. ipf.
36062	drobjenec	m.
7320	drobne	m.pl.
25375	drobny	adj.
25376	dropja	f.
16423	drozd	m.anim.
1603	drožđe	f.pl.
14542	drug	m.anim.
7328	drugar	m.anim.
17342	drugorędny	adj.
784	drugy	num.ord.
5076	drugy	adj.
7331	družba	f.
25384	družba	m.anim.
25385	družica	f.
5882	družina	f.
7333	družiti sę	v.refl. ipf.
25388	družka	f.
7336	družny	adj.
25389	družny	adj.
7337	družstvo	n.
25392	drva	n.pl.
17341	drvosěk	m.anim.
35027	dŕzati	v.intr. ipf.
25395	dŕzky	adj.
25396	dŕznųti	v.intr. pf.
25397	dŕzosť	f.sg.
5231	dŕžak	m.
25398	držalo	n.
6185	dŕžati glådovkų	v.ipf.
17344	dŕžati sę něčego	v.refl. ipf.
2617	dŕžati	v.tr. ipf.
25399	držati	v.intr. ipf.
1756	dŕžava	f.
17346	dŕžavnik	m.anim.
35173	dŕžavnosť	f.sg.
6268	dŕžavny	adj.
7343	dŕžka	f.
451	dųb	m.
25404	dųbiti	v.tr. ipf.
7345	dubliti	v.tr. ipf.
14544	dubljeńje	n.
25405	dųbovy	adj.
25407	duda	f.
25408	dudaŕ	m.anim.
17347	dudy	f.pl.
36091	duel	m.
292	dųga	f.
434	duh	m.anim.
17348	duh	m.
6198	duhovenstvo	n.sg.
6197	duhovnik	m.anim.
284	duhovny	adj.
2520	dumati	v.tr. ipf.
23532	Dunaj	m.sg.
25416	dųnųti	v.intr. pf.
1655	dupa	f.
36513	dupja	f.
35291	duplikat	m.
36512	duplo	n.
25424	durenj	m.anim.
34192	durěti	v.intr. ipf.
14546	durno	adv.
14547	durnosť	f.
2521	durny	adj.
34087	duš	m.
703	duša	f.
7357	dušeńje	n.sg.
17349	duševny	adj.
2543	dušiti	v.tr. ipf.
7358	dušlivy	adj.
7359	dušny	adj.
683	dųti	v.tr. ipf.
5233	duty	adj.
7364	duzina	f.
14548	duže	adv.
4459	duži	adj.
457	dva	num.card.
458	dvadesęť, dvadesęti	num.card.
19681	dvadesęty	num.ord.
2515	dvanadsęť	num.card.
23680	dvanadsęty	num.ord.
2964	dvasto	num.card.
7369	dvě tretiny	num.fract.
2929	dveri	f.pl.
7393	dveŕnik	m.anim.
23678	dvěstě	num.card.
469	dvigati sę	v.refl. ipf.
468	dvigati	v.tr. ipf.
471	dvignųti	v.tr. pf.
3180	dvižeńje	n.
36092	dvoboj	m.
16452	dvojaky	num.diff.
17355	dvojce toliko	adv.
16426	dvojčany	adj.
15306	dvojčę	n.
7402	dvojčęta	n.pl.
472	dvoje	num.coll.
19682	dvojina	f.
25443	dvojiti	v.tr. ipf.
7414	dvojka	num.subst.
25445	dvojka	f.
7415	dvojna komnata	f.
17357	dvojnik	m.anim.
7417	dvojno	adv.
7412	dvojny agent	m.anim.
14552	dvojny standard	m.
476	dvojny	adj.
15310	dvojostry meč	m.
15309	dvojostry	adj.
16492	dvojstveno čislo	n.
22118	dvojtočka	f.
5212	dvor	m.
25452	dvor	m.
16810	dvorjan, dvorjanin	m.anim.
16811	dvorjansky	adj.
7421	dvorjanstvo	n.sg.
16763	dvucifreny	adj.
14549	dvuetapovy	adj.
14550	dvuetažny avtobus	m.
7376	dvuetažny	adj.
17358	dvuglåska	f.
25440	dvuglåvy	adj.
22994	dvujęzyčnosť	f.sg.
22993	dvujęzyčny	adj.
7370	dvukolesny	adj.
1800	dvukråtno	adv.
7410	dvukråtny	adj.
7380	dvulicevy	adj.
17359	dvuličny	adj.
7381	dvumotorovy	adj.
17361	dvupěv	m.
17362	dvusmysľnosť	f.
17363	dvusmysľny	adj.
2882	dvustrånny	adj.
7371	dvustųpny	adj.
7389	dvutonovy	adj.
25456	dvuvlasťje	n.sg.
31872	dvuvyměrny	adj.
17365	dvuznačnosť	f.
17367	dvuznačny	adj.
22852	dvuznačny	adj.
25457	dvuženec	m.anim.
17364	dvuženstvo	n.sg.
7057	dyh	m.
3468	dyhańje	n.sg.
25459	dyhati	v.intr. ipf.
25460	dyhavica	f.sg.
23454	dyhovy instrument	m.
25461	dyhtěti	v.intr. ipf.
2027	dym	m.
5582	dymiti cigaretojų	v.ipf.
1257	dymiti	v.intr. ipf.
25463	dymnik	m.
2310	dynja	f.
17368	dyšati	v.intr. ipf.
35481	dyšnik	m.
35482	dyšno grlo	n.
5049	džaz	m.sg.
475	đban	m.
7426	đbanȯk	m.
17369	džem	m.
3291	džentelmen	m.anim.
35893	džin	m.
19683	džinsy	m.pl.
31851	džoker	m.anim.
507	Džordžija	f.sg.
23583	džudo	n.sg.
21286	džungla	f.
36326	ebenovo drěvo	n.
22074	edem	m.
16932	edukacija	f.sg.
16933	edukacijny	adj.
3580	efekt	m.
19684	efektivnosť	f.sg.
480	efektivny	adj.
19685	egalitarny	adj.
36741	Egejsko morje	n.
35865	Egipćan, Egipćanin	m.anim.
4756	Egipt	m.sg.
4757	egiptsky	adj.
22393	egoist	m.anim.
22394	egoističny	adj.
22392	egoizm	m.sg.
17370	egotizm	m.sg.
3600	egzistencija	f.sg.
15832	egzistovańje	n.sg.
4087	egzistovati	v.intr. ipf.
35789	egzotičny	adj.
23998	eho	n.
14558	ejakulacija	f.
17558	ejakulat	m.
14559	ejakulovati	v.intr. ipf.
5883	ekipa	n.
2519	ekolog	m.anim.
35267	ekologičny	adj.
23540	ekologija	f.sg.
16795	ekonom	m.anim.
1778	ekonomičny	adj.
17371	ekonomija	f.
15834	ekonomika	f.sg.
7438	ekran	m.
15836	ekskavator	m.
26665	ekskavator	m.
2077	ekskluzivny	adj.
3597	ekskursija	f.
3582	ekspansija, ekspanzija	f.sg.
35716	ekspedicija	f.
4851	eksperiment	m.
20374	eksperimentaľny	adj.
4852	eksperimentovati	v.intr. ipf.
1049	ekspert	m.anim.
5639	eksploatacija	f.sg.
5638	eksploatovati	v.tr. ipf.
4802	eksplodovati	v.intr. ipf.
4797	eksplozija	f.
4799	eksplozivny	adj.
35974	eksponencialny	adj.
4960	eksport	m.sg.
371	eksportovati	v.tr. ipf.
25473	eksterier	m.
25474	ekstragovati	v.tr. ipf./pf.
35131	ekstrakt	m.
35128	ekstrapolacija	f.
16905	ekstremist	m.anim.
1685	ekstremističny	adj.
16906	ekstremizm	m.sg.
35683	ekumeničny	adj.
22436	Ekvador	m.sg.
22437	ekvadorsky	adj.
34928	ekvator	m.
35285	ekvivalent	m.
36133	ekvivalentny	adj.
23228	elastičnosť	f.sg.
19686	elastičny	adj.
21287	elegantny	adj.
53	električnosť	f.sg.
4444	električny	adj.
23675	elektrifikacija	f.sg.
36373	elektrik	m.anim.
23674	elektrokucija	f.
4660	elektron	m.
23542	elektronična pošta	f.sg.
4445	elektroničny	adj.
2302	elektronika	f.sg.
35	elektrostancija	f.
2922	elektrošokovo orųžje	n.
36374	elektrotehnik	m.anim.
23541	elektrotehnika	f.sg.
17372	element	m.
35208	elementarny	adj.
35169	eliminovati	v.tr. ipf./pf.
17373	elisa	f.
19687	elita	f.
1314	elizija	f.sg.
35750	emancipacija	f.sg.
6082	embargo	n.
4957	emigracija	f.
4963	emigrant	m.anim.
2213	emigrovati	v.intr. ipf.
35971	eminencija	f.
2522	emisija	f.
5300	emocija	f.
561	emocionaľny	adj.
19688	enciklopedičny	adj.
19689	enciklopedija	f.
33567	endemičny	adj.
35673	energetičny	adj.
2936	energetika	f.sg.
35674	energičny	adj.
1909	energija	f.sg.
485	entitet	m.
3586	entuziast	m.anim.
7448	entuziastično	adv.
7449	entuziastičny	adj.
7452	entuziazm	m.sg.
7451	entuziazmovati	v.tr. ipf.
23543	enzim	m.
6172	eparhija	f.
7453	epicentr zemjetręseńja	m.
35019	epicentr	m.
35919	epičsky	adj.
33566	epidemija	f.
25475	epigraf	m.
6171	episkop	m.anim.
35894	episkopaľny	adj.
35603	epitet	m.
35581	epizod	m.
4698	epoha	f.
4497	era	f.
6105	erotičny	adj.
23695	erupcija	f.
25478	esej	m.
15858	eskadron	m.
35367	eskalacija	f.
35366	eskalovati	v.intr. ipf./pf.
486	eskortovati	v.tr. ipf.
31775	esperantist	m.anim.
7456	esperanto	n.
7455	esperantsky	adj.
35110	estetičny	adj.
35109	estetika	f.sg.
488	Estonija	f.sg.
4435	estonsky	adj.
23240	estrada	f.
33598	estuarij	m.
23244	etap	m.
2524	etaž	m.
23545	etičny	adj.
23544	etika	f.sg.
23696	etiketa	f.
4369	etimologičny	adj.
4368	etimologija	f.sg.
22776	Etiopija	f.sg.
22777	etiopsky	adj.
6173	etnična čistka	f.
35224	etničnosť	f.
1734	etničny	adj.
20863	etnograf	m.anim.
20864	etnografija	f.sg.
5052	evakuacija	f.
5053	evakuovati	v.tr. ipf.
17376	evangeľje	n.
19690	eventuaľno	adv.
2033	eventuaľny	adj.
25481	Evfrat	m.sg.
23546	evolucija	f.sg.
25482	Evrazija	f.sg.
946	evro	n.
1555	Evropa	f.sg.
3038	Evropejec	m.anim.
35822	Evropejka	f.
7467	Evropejska Unija	f.sg.
1906	Evropejsky Sȯjųz	m.sg.
1905	evropejsky, evropsky	adj.
490	fabrika	f.
35570	fabrikant	m.anim.
25487	fabrikovati	v.tr. ipf.
23437	fagot	m.
34759	fajka	f.
14562	fajl	m.
36201	faklja	f.
5180	faks	m.
2525	fakt	m.
35391	faktičny	adj.
16781	faktor	m.
35537	faktura	f.
35167	fakultativny	adj.
35530	fakultet	m.
35487	falsifikacija	f.
35486	falsifikovati	v.tr. ipf./pf.
5301	falšivy	adj.
768	fanat	m.
19691	fanatično	adv.
687	fanatičny	adj.
23457	fanfara	f.
3959	fantastičny	adj.
35909	fantastika	f.sg.
19692	fantazija	f.
25491	fantom	m.anim.
32516	faraon	m.anim.
5095	farba	f.
5096	farbovati	v.tr. ipf.
36484	Farerske ostrovy	m.pl.
36485	farersky	adj.
6269	farsa	f.
34923	fartuh	m.
31794	fasada	f.
23273	fasolja	f.
5303	fašist	m.anim.
35751	fašističny	adj.
5302	fašizm	m.sg.
31793	fataľny	adj.
25493	fatamorgana	f.
140	faulj	m.
19693	faza	f.
23470	fazan	m.anim.
23246	fazovańje	n.sg.
3063	federacija	f.
3013	federaľny	adj.
1320	federativny	adj.
35959	fehtovańje	n.sg.
33198	fejerverk	m.
23555	feminizm	m.sg.
32719	feniks	m.anim.
19694	fenomen	m.
413	fermer	m.anim.
2139	festival	m.
34782	feudalizm	m.sg.
34783	feudaľny	adj.
2303	fevruaŕ	m.sg.
17377	fialka	f.
25497	figa	f.
1673	figura	f.
17378	fikcija	f.sg.
17379	fiktivny	adj.
36605	filantrop	m.anim.
36606	filantropičny	adj.
36607	filantropija	n.sg.
7482	filial	m.
7483	filiaľny	adj.
36487	filipinsky	adj.
36486	Filipiny	f.pl.
36288	film črtany	m.
36287	film rysovany	m.
418	film	m.
35177	filmografija	f.
495	filmovati	v.tr. ipf./pf.
35344	filolog	m.
35343	filologija	f.sg.
2526	filozof	m.anim.
496	filozofija	f.
36442	filozofsky	adj.
4949	filtr	m.
4950	filtrovati	v.tr. ipf.
17380	financije	f.pl.
15874	finančnik	m.anim.
2527	finansist	m.anim.
5150	finansovati	v.tr. ipf.
1931	finansovy	adj.
36073	finik	m.
35937	finitny	adj.
3028	Finlandija	f.sg.
4434	finsky	adj.
5274	fioletovy	adj.
16780	firma	f.
36528	fiskaľny	adj.
35490	fitilj	m.
3027	fizičny	adj.
2498	fizika	f.sg.
32498	fizioterapija	f.sg.
32499	fizioterapist	m.anim.
36087	fjuzelaž	m.
20375	flamingo	m.anim.
19695	flavorizacija	f.
32277	flegma	f.sg.
32278	flegmatičny	adj.
23434	flejta	f.
23465	flejta-pikolo	f.
35542	fleka	f.
19696	fleksibiľny	adj.
25504	fleksija	f.
16746	fleška	f.
32902	flirtovati	v.intr. ipf.
16744	fljaška	f.
36009	flomaster	m.
32384	flota	f.
32385	flotilja	f.
22604	fluor	m.sg.
25506	fokus	m.
25507	fokus	m.
36784	folija	f.
17382	folklor	m.
35792	folklorny	adj.
34950	fon	m.
1016	fond	m.
25508	fonema	f.
2678	fonetičny	adj.
35945	fonetika	f.sg.
36416	fonologičny	adj.
2499	fonologija	f.sg.
36417	font	m.
2001	forma	f.
19697	formalizacija	f.sg.
19698	formalizovati	v.tr. ipf.
35600	formaľnosť	f.
20376	formaľny	adj.
35048	format	m.
25511	formovańje	n.
25512	formovati	v.tr. ipf./pf.
5181	formula	f.
5182	formulaŕ	m.
19699	formulovati	v.tr. ipf.
23430	fortepiano	n.
2306	fortifikacija	f.sg.
3026	forum	m.
22611	fosfor	m.sg.
34932	fotka	f.
4398	fotografičny	adj.
807	fotografija	f.
4396	fotografovati	v.tr. ipf.
19700	fragment	m.
19701	fragmentacija	f.sg.
36463	fragmentarny	adj.
21288	frak	m.
1342	frakcija	f.
1188	Francija	f.sg.
20377	Francuz	m.anim.
19702	francuzskojęzyčny	adj.
1020	francuzsky	adj.
21290	frank	m.
35780	franksky	adj.
14563	fraze	n.indecl.
17383	fraznik	m.
35648	freska	f.
19703	freudovsky	adj.
36027	frizer	m.anim.
19704	front	m.
34678	frustracija	f.
34677	frustrovany	adj.
34676	frustrovati	v.tr. ipf./pf.
17384	fundacija	f.
19705	fundament	m.
23559	fundamentalističny	adj.
23558	fundamentalizm	m.sg.
2583	funikulor	m.
1289	funkcija	f.
35303	funkcionaľny	adj.
227	funkcionovati	v.intr. ipf.
5723	funt	m.
7499	funt	m.
25518	furgon	m.
2585	futbol	m.sg.
17386	futro	n.
35830	fuzija	f.
25520	gabardin	m.sg.
36178	gaće	f.pl.
7505	gad	m.anim.
16477	gad	m.anim.
25529	gadati	v.intr. ipf.
7506	gaďji	adj.
25533	gaďji	adj.
25530	gadny	adj.
35157	gadžet	m.
2586	gaj	m.
22438	Gajana	f.sg.
22439	gajansky	adj.
17387	gajdy	f.pl.
23564	galaktika	f.
25537	galanterija	f.
25539	galantny	adj.
25540	galera	f.
995	galerija	f.
25542	galeta	f.
6174	Galicija	f.sg.
25543	galicizm	m.
25544	galij	m.sg.
6175	Galisija	f.sg.
25551	galon	m.
25552	galop	m.
25553	galopovati	v.intr. ipf./pf.
1725	galųź	f.
17388	galųzka	f.
25557	galvanizacija	f.
25558	galvanizm	m.sg.
25559	galvanizovati	v.intr. ipf./pf.
25547	galvanometr	m.
25560	gama	f.
25561	gamaša	f.
25562	gambit	m.
2587	Gana	f.sg.
25564	gangrena	f.
25566	gangster	m.anim.
2588	gansky	adj.
3648	garancija	f.
14565	garant	m.anim.
14567	garantovany	adj.
14568	garantovati	v.tr. ipf.
2589	garaž	m.
25574	gardenija	f.
25575	garderoba	f.
33584	gargulja	f.
25578	garnirovati	v.tr. ipf.
25579	garnitura	f.
2203	garnizon	m.
25583	gasilo	n.
4232	gasitelj	m.anim.
25584	gasiti	v.tr. ipf.
514	gaslo	n.
2670	gasnųti	v.intr. ipf.
25586	gastrit	m.sg.
25587	gastronom	m.anim.
25589	gaubica	f.
818	gavrån	m.anim.
1990	gaz	m.
25593	gaza	f.
25594	gazela	f.
4064	gazeta	f.
36876	gazna komora	f.
25599	gazovana voda	f.
25600	gazovati	v.tr. ipf./pf.
25601	gazovati	v.intr. ipf.
1991	gazovod	m.
35567	gej	m.anim.
36407	gekon	m.anim.
34722	gel	m.
17390	gen	m.
25603	generacija	f.
1605	general	m.anim.
35427	generalizacija	f.
35424	generalizovati	v.tr. ipf./pf.
19706	generaľno	adv.
32061	generaľny sekretaŕ	m.anim.
1276	generaľny	adj.
35910	generator	m.
23993	generičny	adj.
31890	generovati	v.tr. ipf./pf.
35554	genetičny	adj.
35808	genetika	f.
19707	geneza	f.
17391	geniaľnosť	f.
17392	geniaľny	adj.
17394	genij	m.anim.
17091	genitiv	m.
5065	genocid	m.
17395	genoterapija	f.
17396	genovo ozdravjeńje	n.sg.
23996	geograf	m.anim.
23997	geografičny	adj.
2382	geografija	f.
23569	geolog	m.anim.
23570	geologičny	adj.
23568	geologija	f.sg.
23571	geometrija	f.
35129	geopolitičny	adj.
32471	gepard	m.anim.
21291	geranj	m.
829	gerb	m.
35813	geriatričny	adj.
35812	geriatrija	f.
25608	germanizacija	f.
4736	germansky	adj.
589	gest	m.
32127	gestikulovati	v.intr. ipf.
2667	geto	n.
33540	gigabajt	m.
836	gigant	m.anim.
33535	gigantsky	adj.
36536	gimnastika	f.
23444	gitara	f.
1766	glåd	m.
25616	gladiti	v.tr. ipf.
25617	gladiti	v.tr. ipf.
25618	gladkosť	f.
837	gladky	adj.
5235	glådny	adj.
25621	glådovati	v.intr. ipf.
6186	glådovka	f.
827	glågol	m.
35155	glagolica	f.
35678	glagoličny, glagoľsky	adj.
5824	glågoľny vid	m.
2365	glås	m.
17398	glås	m.
17400	glåsiti	v.tr. ipf.
17401	glåska	f.
35652	glåsne struny	f.pl.
4545	glåsnik	m.
7538	glåsno	adv.
5246	glåsny	adj.
1336	glåsovańje	n.
3780	glåsovatelj	m.anim.
58	glåsovati	v.intr. ipf.
40	glåva	f.
3306	glåva	f.
17403	glåva	f.
25629	glåvaŕ	m.anim.
25630	glåvaty	adj.
25631	glåvica	f.
7546	glåvna strånica	f.
4408	glåvnik	m.anim.
36202	glåvnja	f.
5852	glåvno	adv.
3508	glåvnokomandovač	m.anim.
2012	glåvny gråd	m.
2671	glåvny	adj.
14572	glåvolomka	f.
35578	ględač	m.anim.
7561	ględęći na	prep.
2003	ględěti	v.intr. ipf.
17407	ględišče	n.
25637	ględnųti	v.intr. pf.
25639	glezenj	m.
7562	glina	f.
7566	gliněny	adj.
1765	glist	m.anim.
35077	globalizacija	f.
35794	globalizovati	v.tr. ipf./pf.
2002	globaľno potepljeńje	n.sg.
34758	globaľny	adj.
35899	globus	m.
25645	glodati	v.tr. ipf.
25646	glog	m.
36685	glosarij	m.
51	glųb	m.
7571	glųbina	f.
14573	glųbinny	adj.
36361	glųbinny	adj.
19708	glųboko	adv.
1757	glųboky	adj.
5867	glųbši	adj.
36094	glug-glug	intj.
25656	gluhnųti	v.intr. ipf.
33005	gluhoněmy	adj.
25657	gluhota	f.
33007	gluhuněmota	f.
1128	gluhy	adj.
991	glupec	m.anim.
25661	glupěti	v.intr. ipf.
7579	glupo	adv.
7580	gluposť	f.
1751	glupy	adj.
25666	glušiti	v.tr. ipf.
1815	gnati	v.tr. ipf.
35483	gněde vųglje	m.pl.
1812	gnědy	adj.
1305	gnesti	v.tr. ipf.
110	gnet	m.sg.
1127	gněv	m.sg.
7593	gněvati sę	v.refl. ipf.
2250	gněvati	v.tr. ipf.
25677	gněvlivy	adj.
3433	gněvny	adj.
25680	gnězditi sę	v.refl. ipf.
35650	gnězdko	n.
2666	gnězdo	n.
727	gnida	f.
25683	gnilosť	f.
5307	gnily	adj.
5306	gniti	v.intr. ipf.
25684	gniťje	n.sg.
2183	gnoj	m.
25687	gnoj	m.
25689	gnojišče	n.
25692	gnojiti sę	v.refl. ipf.
25691	gnojiti	v.tr. ipf.
31893	gnojivo	n.
36126	gnom	m.anim.
25695	gnusny	adj.
31897	gnusny	adj.
17411	gnųti	v.intr. ipf.
14576	go	pron.pers.
3083	god	m.
17412	godišnica	f.
14578	godišnje	adv.
14579	godišnji, godišny	adj.
17413	goditi sę	v.refl. ipf.
7598	godnosť	f.
2584	godny	adj.
17415	godovati	v.intr. ipf.
14581	godovno	adv.
14582	godovy	adj.
14583	gody	m.pl.
25701	gogolj	m.anim.
25702	gojiti	v.tr. ipf.
25704	golěnj	f.
21292	golf	m.sg.
34141	goliti sę	v.refl. ipf.
25707	goliti	v.tr. ipf.
25708	goliti	v.tr. ipf.
25709	gȯlk	m.
25710	golobrådy	adj.
25712	gololed	m.sg.
21293	goloslovny	adj.
25715	golota	f.
7600	gȯltańje	n.sg.
17418	gȯltati sȯlzy	v.ipf.
5304	gȯltati	v.tr. ipf.
25649	gȯltka	f.
25650	gȯltnųti	v.tr. pf.
7599	gȯltȯk	m.
1656	golųb	m.anim.
25719	golųbica	f.
25718	golųbji	adj.
25722	goly	adj.
25724	gon	m.
17419	gonec	m.anim.
32990	gong	m.
17420	gonišče	n.
17421	goniti	v.tr. ipf.
25728	gonitva	f.
17422	gonka	f.
17424	gonščik avtomobiljev	m.anim.
17423	gonščik	m.anim.
1429	gora	f.
17425	gorčica	f.
25732	gorčiti	v.intr. ipf.
5666	gȯrdosť	f.
2673	gȯrdy	adj.
3665	goręće	adv.
3666	goręći	adj.
3659	goręćnja	f.
17427	goręčka	f.
17426	gorělka	f.
401	gorěti	v.intr. ipf.
25735	goricvět	m.
34427	gorila	f.
5232	goristy	adj.
25730	gorjan, gorjanin	m.anim.
7607	gorka	f.
25738	goŕknųti	v.intr. ipf.
25739	goŕkosť	f.
2381	goŕky	adj.
17428	gorlivy	adj.
32528	gorlivy	adj.
1376	gornik	m.anim.
68	gornolužičsky	adj.
19709	gornosŕbsky	adj.
36024	gorsko pasmo	n.
36023	gorsky lanec	m.
25743	gorsky	adj.
7619	gorše	adv.
1985	gorši	adj.
17430	goršiti	v.tr. ipf.
25745	gospoď	m.anim.
25746	gospodaŕ	m.anim.
31902	gospodaŕ	m.anim.
16793	gospodaŕstvo	n.
16794	gospodaŕstvo	n.
36197	gospodica	f.
3290	gospodin	m.anim.
5258	gospodynja	f.
25749	gospođa	f.
1854	gosť	m.anim.
35029	gosteprijemny	adj.
35028	gosteprijemstvo	n.sg.
7627	gostiljnja	f.
25752	gostinec	m.
5234	gostinica	f.
35031	gostinnosť	f.
35030	gostinny	adj.
1693	gostiti	v.tr. ipf.
35927	gotičsky	adj.
25761	gotovina	f.
257	gotoviti	v.tr. ipf.
7631	gotovo	adv.
2289	gotovy	adj.
35926	gotsky	adj.
7634	govędina	f.
25765	govęďji	adj.
25763	govędo	n.
25766	govněny	adj.
316	govno	n.
2674	govor	m.
4544	govoritelj	m.anim.
754	govoriti	v.tr. ipf.
2676	grab	m.
23406	graběž	f.
952	grabiti	v.tr. ipf.
23399	grabiti	v.intr. ipf.
25771	grabiti	v.tr. ipf.
25774	grabje	f.pl.
671	gråd	m.
2665	grad	m.
25782	grådišče	n.
17433	grådonačeľnik	m.anim.
17435	grådsky	adj.
2905	gråđan, gråđanin	m.anim.
15698	gråđan, gråđanin	m.anim.
7660	gråđanka	f.
7663	gråđansky	adj.
7653	gråđanstvo	n.sg.
7654	gråđanstvo	n.sg.
36779	grafična karta	f.
35684	grafičny	adj.
17436	grafitka	f.
2545	gråh	m.
25789	gråhovy	adj.
23015	gram	m.
6328	gramatičny	adj.
1831	gramatika	f.
33087	gramofon	m.
33210	gramota	f.
33207	gramotnosť	f.
33208	gramotnosť	f.
33205	gramotny	adj.
33206	gramotny	adj.
36279	granat	m.
36281	granata	f.
36280	granatno jablȯko	n.
1265	granatomet	m.
1264	granica	f.
25793	graničiti	v.intr. ipf.
23999	granit	m.sg.
35793	grant	m.
2668	gravirovati	v.tr. ipf.
23572	gravitacija	f.
2347	grb	m.
23891	grbač	m.anim.
16407	grbaty	adj.
25798	grbiti sę	v.refl. ipf.
5665	grditi	v.tr. ipf.
1920	grebenj	m.
738	grebti	v.tr. ipf.
25802	grebti	v.tr. ipf.
33926	grebti	v.tr. ipf.
2675	Grecija	f.sg.
3474	greča	f.
3183	grečsky	adj.
1750	grěh	m.
36068	grejpfrut	m.
20378	Grek	m.anim.
782	greměti	v.intr. ipf.
3181	gremųća zmija	f.
36482	Grenlandija	f.sg.
36483	grenlandsky	adj.
2010	grěšiti	v.intr. ipf.
17438	grěšiti	v.intr. ipf.
17441	grěška	f.
7680	grěšnica	f.
2625	grěšnik	m.anim.
25813	grěšny	adj.
1882	grěti	v.tr. ipf.
25815	gręź	f.
2544	gręznųti	v.intr. ipf.
673	grib	m.
20379	grifon	m.anim.
23422	gril	m.
4271	grip	m.sg.
4272	gripovy	adj.
674	griva	f.
722	grivna	f.
25821	grivna	f.
25822	grlica	f.
492	grlo	n.
5272	grn	m.
25826	grnčaŕ	m.anim.
35192	grnčaŕstvo	n.sg.
2282	grnec	m.
69	grnųti	v.tr. ipf.
688	grob	m.
3506	grob	m.
4138	grobaŕ	m.anim.
17442	grobišče	n.
7693	grobokopatelj	m.anim.
25837	grohtati	v.intr. ipf.
2990	grom	m.
6327	gromada	f.
25839	gromada	f.
17443	gromaditi	v.tr. ipf.
676	gronostaj	m.anim.
17444	groš	m.
2567	groši	m.pl.
19710	groteskovy	adj.
690	groza	f.
1885	groźba	f.
25849	grozď	m.
36079	grozdinka	f.
25846	grozďje	n.
2568	groziti	v.intr. ipf.
691	grozny	adj.
7701	grozny	adj.
1930	grsť	f.
1927	grtanj	f.
25855	grubosť	f.
680	Gruby Nacionaľny Produkt [GNP]	m.sg.
36063	gruby pěsȯk	m.
1736	gruby	adj.
17445	grųď	f.
2611	gruda	f.
25860	grųdny	adj.
1787	grupa	f.
3950	grupovati	v.tr. ipf.
16935	grupovy	adj.
2569	grupy	f.pl.
2570	gruša	f.
25863	gruševy	adj.
698	Gruzija	f.sg.
1040	gruzinsky	adj.
7688	gryzati	v.tr. ipf.
668	gryzti	v.tr. ipf.
2171	gųba	f.
7712	gųba	f.
32332	gubernator	m.anim.
13416	gubi sę!	intj.
36652	gubiti sę	v.refl. ipf.
36253	gubiti tęžinų	v.intr. ipf.
17447	gubiti	v.tr. ipf.
25871	gubiti	v.tr. ipf.
17446	gųbka	f.
5281	guma	f.
1752	gumno	n.
2571	gųś	m.anim.
36100	gųsak	m.anim.
25882	gųsę	n.
429	gųsenica	f.
25883	gųśji	adj.
14591	gųslaŕ	m.anim.
7715	gųsli	m.pl.
16469	gųsljaŕ	m.anim.
16468	gųslje	f.pl.
25888	gųstěti	v.intr. ipf.
25890	gųstiti	v.tr. ipf.
25899	gųsťje	n.
25892	gųsto	adv.
25893	gųstosť	f.
25894	gųstota	f.
5308	gųsty	adj.
25896	gųšća	f.
22384	Gvatemala	f.sg.
22385	gvatemaľsky	adj.
16782	Gvineja	f.sg.
2574	gvozď	m.
2912	gybati	v.intr. ipf.
35205	gybkosť	f.
17397	gybky	adj.
2917	gybnųti	v.intr. pf.
25904	ha!	intj.
25525	haček	m.
22456	Haiti	m.indecl.
22457	haitiansky	adj.
31874	hak	m.
25910	halucinacija	f.
25911	halucinovati	v.intr. ipf.
25912	halupa	f.
3651	halva	f.
25913	hamak	m.
35190	hamburger	m.
35823	hameleon	m.anim.
25914	handbol	m.sg.
25915	hantelj	f.
33502	haos	m.
33504	haotično	adv.
33503	haotičny	adj.
3184	harakter	m.
16936	harakterističny	adj.
1763	harakteristika	f.
16937	harakterizovati	v.tr. ipf.
25921	harem	m.
23445	harfa	f.
25922	harmoničny	adj.
3656	harmonija	f.
25924	harmonika	f.
7724	harmonizovati	v.intr. ipf.
25928	harpun	m.
3012	harta	f.
23199	hašiš	m.sg.
7727	hata	f.
25930	hazard	m.
25931	hazardna igra	f.
19711	hebrejsky	adj.
16938	hegemonija	f.
35359	hej	intj.
23408	heker	m.anim.
25905	hektar [ha]	m.
23020	hektolitr	m.
23023	hektometr	m.
22598	helij	m.sg.
25933	helikopter	m.
14592	helma	f.
4663	hemičny	adj.
2573	hemija	f.
2572	hemikalija	f.
7743	hepa	f.
7744	hepatit	m.sg.
7745	hepovy	adj.
2575	heroin	m.sg.
7747	heroina	f.
3185	heroj	m.anim.
32180	herpes	m.sg.
19712	heterogennosť	f.
20380	heterogenny	adj.
32804	hiacint	m.
4864	hidravličny	adj.
20381	hiena	f.
25936	hierarh	m.anim.
25937	hierarhičny	adj.
19714	hierarhija	f.
25940	hieroglif	m.
25941	hieroglifny	adj.
35188	higiena	f.
35189	higieničny	adj.
33365	hihot	m.sg.
33364	hihotati sę	v.refl. ipf.
7748	himera	f.
7750	himersky	adj.
4865	himn	m.
23574	hinduizm	m.sg.
4548	hiperlink	m.
17448	hipersvęź	f.
19715	hipnotizovati	v.tr. ipf.
19716	hipnoza	f.
20382	hipopotam	m.anim.
34999	hipoteka	f.
19518	hipotetičny	adj.
19517	hipoteza	f.
17449	hirugičny	adj.
17450	hirugija	f.
17451	hirurg	m.anim.
36829	histeričny	adj.
36828	histerija	f.sg.
16466	historičny	adj.
2496	historija	f.
34889	historik	m.anim.
2576	hlåd	m.
25951	hlåděti	v.intr. ipf.
5276	hlådiľnik	m.
17456	hlåditi sę	v.refl. ipf.
17454	hlåditi	v.tr. ipf.
7759	hlådnějši	adj.
4466	hlådno	adv.
4617	hlådnosť	f.
2579	hlådny	adj.
17453	hlåđeńje	n.sg.
1109	hlåpčik	m.anim.
3335	hlåpec	m.anim.
4338	hlåpstvo	n.sg.
89	hlěb	m.
90	hlěv	m.
17457	hlipati	v.intr. ipf.
17458	hlipnųti	v.intr. pf.
22613	hlor	m.sg.
33719	hloroform	m.sg.
2578	hmelj	m.sg.
25975	hmeljny	adj.
32815	hmuriti sę	v.refl. ipf.
32816	hmuriti sę	v.refl. ipf.
32814	hmuriti	v.tr. ipf.
23575	hobi	m.indecl.
35271	hobist	m.anim.
25979	hobot	m.
3742	hod	m.sg.
3845	hoďba	f.
25982	hodec	m.anim.
7784	hoditelj	m.anim.
17461	hoditeljka	f.
2590	hoditi	v.intr. ipf.
7782	hodnik	m.
25984	hodulja	f.
7780	hođeńje	n.sg.
5802	hokej na ledu	m.sg.
5801	hokej	m.sg.
35740	Holandija	f.sg.
35741	holandsky	adj.
35099	holera	f.
17462	holesterol	m.sg.
544	hȯlm	m.
20384	homjak	m.anim.
23412	homogenizovati	v.tr. ipf.
19717	homogennosť	f.
19718	homogenny	adj.
17463	homonim	m.
35566	homoseksualist	m.anim.
1511	homoseksuaľny	adj.
2582	homųt	m.
22386	Honduras	m.sg.
22387	hondurassky	adj.
23449	hor	m.
32504	horeografija	f.
19719	horizont	m.
19720	horizontaľny	adj.
23011	horoskop	m.
706	horųgva	f.
25997	hoť by	adv.
2581	hoť, hoti	conj.
35268	hotel	m.
2971	hotěti	v.aux. ipf.
1828	hovati	v.tr. ipf.
25999	hråbrec	m.anim.
4611	hråbrosť	f.
2607	hråbry	adj.
4890	hram	m.
26006	hrånitelj	m.anim.
36791	hråniti sę	v.refl. ipf.
19721	hråniti	v.tr. ipf.
17464	hrånjenec	m.anim.
17466	hrapati	v.intr. ipf.
1639	hråpavy	adj.
17467	hrapnųti	v.intr. pf.
26013	hrčati	v.intr. ipf.
20385	hrček	m.anim.
841	hrebet	m.
1928	hrebet	m.
67	hrebetny mozȯk	m.
26012	hrebetny	adj.
3114	hrěn	m.
26015	hrěnovy	adj.
35996	hrěnviršla	f.
35826	hrestomatija	f.
26010	hręšč	m.
35456	hriply	adj.
302	hristijan, hristijanin	m.anim.
17468	hristijanizacija	f.
17470	hristijanka	f.
2606	hristijansky	adj.
1640	hristijanstvo	n.sg.
17471	Hristos	m.anim.
22620	hrom	m.sg.
26018	hromati	v.intr. ipf.
36830	hromatičny	adj.
34408	hroměti	v.intr. ipf.
26019	hromosť	f.
26021	hromy	adj.
35718	hronika	f.
35774	hronikaŕ	m.anim.
35398	hronologičny	adj.
35397	hronologija	f.
2577	hrt	m.anim.
26024	hrupati	v.intr. ipf.
31916	hrupkavy	adj.
1245	hrust	m.
26026	hrustati	v.intr. ipf.
26028	hrųšč	m.anim.
4727	Hrvat	m.anim.
2580	Hrvatija	f.sg.
4728	hrvatsky	adj.
7739	htěti	v.aux. ipf.
26030	htivy	adj.
36251	hudnųti	v.intr. ipf.
17472	hųdožnica	f.
14594	hųdožnik	m.anim.
17473	hųdožno	adv.
14595	hųdožny	adj.
17474	hųdožstvo	n.
26033	hudy	adj.
2064	huj	m.
14596	hujesȯs	m.anim.
6226	huligan	m.anim.
35744	humanističny	adj.
2592	humanitarny	adj.
35743	humanizm	m.sg.
3668	humor	m.
19722	humorističny	adj.
19495	hunta	f.
35656	hura	intj.
35837	husit	m.anim.
14598	Hvala!	intj.
2593	hvala	f.
7828	hvala	prep.
26041	hvalebny	adj.
2890	hvaliti	v.tr. ipf.
17477	hvastati sę	v.refl. ipf.
35476	hvat	m.
2591	hvatati	v.tr. ipf.
34776	hvějati sę	v.refl. ipf.
708	hvějati	v.tr. ipf.
20865	hvějati	v.tr. ipf.
7835	hvilja nazad	adv.
7836	hvilja tomu	adv.
3846	hvilja	f.
17482	hvoja	f.
26045	hvoja	f.
36260	hvojny lěs	m.
26047	hvorěti	v.intr. ipf.
17483	hvoroba sŕdca	f.
3543	hvoroba	f.
7840	hvoroblivo	adv.
36691	hvoroblivy	adj.
3541	hvory	adj.
17484	hvost	m.
26051	hvošč	m.
26052	hyba	f.
26053	hybiti	v.intr. ipf.
10362	hybny	adj.
7751	hytrec	m.anim.
15329	hytrica	f.
7752	hytro	adv.
7753	hytrosť	f.
17452	hytry	adj.
36224	i ... i ...	conj.
36223	I slěpa veverica poněkȯgda najde orěh	phrase
36343	i t.d.	adv.
36341	i tako dalje	adv.
718	i	conj.
26056	ibis	m.anim.
3457	ibo	conj.
206	ideal	m.
26058	idealist	m.anim.
26059	idealističny	adj.
26060	idealizacija	f.
26061	idealizm	m.sg.
26062	idealizovati	v.tr. ipf./pf.
2595	ideaľny	adj.
3372	ideja	f.
12913	identični blizneci	m.pl.
35748	identičnosť	f.
2597	identičny	adj.
16421	identifikacija	f.
35274	identifikator	m.
15906	identifikovati	v.tr. ipf.
19723	identitet	m.sg.
26069	ideografija	f.
2103	ideolog	m.anim.
23576	ideologičny	adj.
715	ideologija	f.
26073	idila	f.
26074	idiličny	adj.
26075	idiom	m.
36363	idiomatičny	adj.
23229	idiot	m.anim.
26077	idiotizm	m.
23230	idiotsky	adj.
26078	idol	m.anim.
26079	idolopoklonnik	m.anim.
13823	idti vprěd	v.ipf.
15654	idti vzad	v.ipf.
2104	idti	v.intr. ipf.
2105	igla	f.
36259	iglasty lěs	m.
36258	iglasty	adj.
26082	iglica	f.
26083	iglu	n.indecl.
26084	ignorovańje	n.sg.
2596	ignorovati	v.tr. ipf.
26086	igo	n.
2598	igra	f.
19724	igrač	m.anim.
19725	igračka	f.
22390	igračka	f.
16940	igrašna karta	f.
2599	igrati	v.tr. ipf.
26094	igrek	m.
2600	igrišče	n.
26096	igrivy	adj.
26097	iguana	f.
26098	igumen	m.anim.
26099	igumenja	f.
26100	ikati	v.intr. ipf.
26101	ikava	f.
303	ikra	f.
3504	il	m.sg.
766	ili ... ili ...	conj.
724	ili	conj.
36561	Ilinojs	m.sg.
1504	Ilir	m.anim.
26106	iljm	m.
26107	ilovy	adj.
35300	ilustracija	f.
19726	ilustrovati	v.tr. ipf.
35602	iluzija	f.
34849	iluzionist	m.anim.
26108	iluzorny	adj.
36882	imajmo nadějų	adv.
16340	imę	n.
16342	imę	n.
5975	imeniteljnik, imeniteljny padež	m.
874	iměńje	n.
786	imennik	m.
3745	imennik	m.anim.
17486	imenno	adv.
3486	imenovati	v.tr. ipf.
3325	iměti dělo s	v.ipf.
36890	iměti na myslji	v.tr. ipf.
36928	iměti na umu	v.tr. ipf.
17485	iměti nadějų	v.ipf.
33179	iměti njuh za něčto	phrase
876	iměti pravdų	v.ipf.
36402	iměti smysl	v. ipf.
23339	iměti važnosť	v.intr. ipf.
23340	iměti značeńje	v.intr. ipf.
3847	iměti žalj	v.ipf.
417	iměti, imati	v.aux. ipf.
875	iměti, imati	v.tr. ipf.
4958	imigracija	f.
98	imigrant	m.anim.
4959	imigrovati	v.intr. ipf.
36437	imitacija	f.
36438	imitovati	v.tr. ipf./pf.
896	imperator	m.anim.
2630	imperatorica	f.
16942	imperfekt	m.sg.
23852	imperializm	m.sg.
35710	imperija	f.
35953	implantovati	v.tr. ipf./pf.
23846	imponovati	v.tr. ipf.
23847	imponujųći	adj.
4961	import	m.sg.
4962	importovati	v.tr. ipf.
36856	impotencija	f.
36857	impotentny	adj.
23848	improvizacija	f.
16943	improvizovati	v.intr. ipf.
1206	impuls	m.
23850	impulsivny	adj.
17487	imųći	adj.
35814	imunitet	m.sg.
35815	imunny	adj.
17488	imųtȯk	m.
3764	inače	adv.
7904	inako	adv.
7905	inaky	adj.
19572	inamo	adv.
19727	inavguraľny	adj.
35035	incest	m.sg.
4914	incident	m.
2631	inde	adv.
16783	indeks	m.
26122	indigo	n.
1068	Indija	f.sg.
6405	Indijan, Indijanin	m.anim.
6406	Indijanka	f.
6408	indijansky	adj.
36364	Indijec	m.anim.
36365	Indijka	f.
23498	Indijsky okean	m.sg.
4749	indijsky	adj.
15915	individ	m.anim.
26123	individuaľnosť	f.
5138	individuaľny	adj.
2634	indoarijsky	adj.
897	indoevropejsky	adj.
1667	indoiransky	adj.
6106	Indonezija	f.sg.
19728	indonezsky	adj.
35180	industriaľny	adj.
23474	indyk	m.anim.
36823	inercija	f.
2006	infekcija	f.
521	infinitiv	m.
16784	inflacija	f.
769	informacija	f.
7895	informant	m.anim.
36448	informatik	m.anim.
36447	informatika	f.sg.
19729	informativny	adj.
862	informovany	adj.
863	informovati	v.tr. ipf.
23579	infračrveno světlo	n.
35756	infračrveny	adj.
16364	infrastruktura	f.
35558	ingredient	m.
209	Inguš	m.anim.
1783	Ingušetija	f.sg.
1300	ingušsky	adj.
32377	inicializacija	f.
32376	inicializovati	v.tr. ipf./pf.
5309	iniciativa	f.
26125	inje	n.
26128	injekcija	f.
33250	inkubator	m.
1319	inočij	pron.poss.
307	inočto	pron.indef.
2633	inȯgda, inȯgdy	adv.
26129	inohod	m.sg.
155	inokto	pron.indef.
19594	inoliky	adj.
35275	inoplanetjan, inoplanetjanin	m.anim.
5855	inoskazańje	n.
21873	inostrånec	m.anim.
35685	inovacija	f.
35753	inovativny	adj.
7912	inovrěmenno	adv.
7913	inozemec	m.anim.
7914	inozemny	adj.
17490	insekt	m.anim.
35897	inspiracija	f.
35896	inspirovati	v.tr. ipf./pf.
2495	instalacija	f.
4968	instalovati	v.tr. ipf.
32805	instinkt	m.
19730	institucija	f.
26131	institut	m.
11062	instruktor	m.anim.
15478	instruktorka	f.
2858	instrument	m.
16944	instrumental	m.
4789	instrumentaľny	adj.
34947	integracija	f.
36084	integritet	m.
34946	integrovati	v.tr. ipf./pf.
3174	intelektual	m.anim.
19731	intelektuaľny	adj.
36332	intensivnosť	f.
2859	intensivny	adj.
34853	interakcija	f.
34852	interaktivny	adj.
1330	interes	m.
19732	interesno	adv.
2500	interesny	adj.
15928	interesovati sę	v.refl. ipf.
34992	interesovati	v.tr. ipf.
7916	interfejs	m.
36231	interier	m.
36232	interierny dizajn	m.
31778	interlingvist	m.anim.
31777	interlingvističny	adj.
31776	interlingvistika	f.
31779	internacionalizm	m.sg.
3177	internacionalizovati	v.tr. ipf.
17491	internet	m.sg.
35278	internetny	adj.
4988	interpretacija	f.
4987	interpretovati	v.tr. ipf.
23620	interpunkcija	f.
16945	interrogativny zaimennik	m.
35867	interval	m.
35304	intervencija	f.
1819	intervju	n.indecl.
35512	intriga	f.
35809	intrigovati	v.tr. ipf.
35810	intrigujųći	adj.
12090	introspekcija	f.
6159	intuicija	f.
35161	intuitivny	adj.
2493	inųdy	adv.
34576	invalid	m.anim.
34575	invalidsky vozȯk	m.
19496	invazija	f.
23851	inventarizacija	f.
4986	investicija	f.
15933	investor	m.anim.
1480	investovati	v.tr. ipf.
864	iny	adj.
4846	inženjer	m.anim.
290	inženjerstvo	n.sg.
4658	ion	m.
1613	iračsky	adj.
2505	Irak	m.sg.
1782	Iran	m.sg.
2497	iransky	adj.
32474	irbis	m.anim.
22631	iridij	m.sg.
34967	iris	m.
34968	iris	m.
188	Irlandija	f.sg.
4432	irlandsky	adj.
19733	ironičny	adj.
19734	ironija	f.
7924	iskaľnik	m.
36573	iskańje	n.
7925	iskatelj	m.anim.
1012	iskati	v.tr. ipf.
1011	iskra	f.
3848	iskrenosť	f.
2024	iskreny	adj.
26141	iskriti	v.intr. ipf.
23580	islam	m.sg.
35559	islamsky	adj.
4430	Islandija	f.sg.
4431	islandsky	adj.
7935	istina	f.
7936	istinlivo	adv.
7937	istinlivy	adj.
7938	istinno	adv.
5108	istinnosť	f.
3309	istinny	adj.
14604	istnovati	v.intr. ipf.
3333	isto	adv.
5310	isty	adj.
26147	Isus Hristos	m.anim.
17492	Isus	m.anim.
7947	itak	adv.
2503	Italija	f.sg.
20386	Italijan, Italijanin	m.anim.
643	italijansky	adj.
35301	iteracija	f.
26150	iva	f.
1646	iver	m.
26152	ivovy	adj.
12065	iz drugoj stråny	adv.
12067	iz jednoj stråny	adv.
644	iz	prep.
7953	iz-	prefix
641	izba	f.
26155	izbava	f.
26156	izbavitelj	m.anim.
5887	izbaviti sę	v.refl. pf.
17493	izbaviti	v.tr. pf.
17495	izbaviti	v.tr. pf.
5888	izbavjati sę	v.refl. ipf.
17497	izbavjati	v.tr. ipf.
17499	izbavjati	v.tr. ipf.
26160	izbavjeńje	n.sg.
1647	izběgati	v.intr. ipf.
1953	izběgati	v.intr. ipf.
36474	izběgati	v.intr. ipf.
7962	izběgomy	adj.
642	izběgti	v.intr. pf.
1875	izběgti	v.intr. pf.
36475	izběgti	v.intr. pf.
26161	izbica	f.
7964	izbirajemosť	f.
7965	izbiramy	adj.
7966	izbirańje	n.sg.
7968	izbiratelj	m.anim.
7974	izbirateljstvo	n.
4334	izbirati	v.tr. ipf.
23862	izbiti	v.tr. pf.
23864	izbivati	v.tr. ipf.
26163	izbljuvati	v.intr. pf.
1641	izbombardovati	v.tr. pf.
7977	izbor ljudij	m.
4333	izbor	m.
7970	izborny koledž	m.
7971	izborny komitet	m.
7969	izborny podvod	m.
1642	izbory	m.pl.
17509	izbrany	adj.
4335	izbrati	v.tr. pf.
1630	izbudovati	v.tr. pf.
4796	izbuh	m.
4800	izbuhati	v.intr. ipf.
4798	izbuhlivy	adj.
4801	izbuhnųti	v.intr. pf.
26167	izbytȯk	m.
26169	izcěliti sę	v.refl. pf.
36660	izcěliti	v.tr. pf.
31720	izcěljati sę	v.refl. ipf.
36661	izcěljati	v.tr. ipf.
35983	izčezaj!	intj.
3550	izčezati	v.intr. ipf.
7988	izčezneńje	n.
3557	izčeznųti	v.intr. pf.
5879	izčisliti	v.tr. pf.
5878	izčisljati	v.tr. ipf.
3417	izčisljeńje	n.
16726	izčistiti	v.tr. pf.
17511	izčrkańje	n.
3253	izčrkati	v.tr. ipf.
3271	izčrknųti	v.tr. pf.
2143	izčrpati	v.tr. pf.
1643	izčrpyvati	v.tr. ipf.
36226	izdajnik	m.anim.
21295	izdaleka	adv.
16733	izdańje	n.
19873	izdatelj	m.anim.
4855	izdateljstvo	n.
29069	izdati zamųž	v.tr. pf.
4854	izdati	v.tr. pf.
17514	izdati	v.tr. pf.
4779	izdavati sę	v.refl. ipf.
34252	izdavati zamųž	v.tr. ipf.
4853	izdavati	v.tr. ipf.
17517	izdavati	v.tr. ipf.
3732	izdělati	v.tr. pf.
2384	izdojiti	v.tr. pf.
19272	izdȯlbti	v.tr. pf.
1798	izdŕžlivy	adj.
7996	izdumati	v.tr. pf.
17523	izganjańje	n.sg.
1692	izganjati	v.tr. ipf.
26175	izgladiti	v.tr. pf.
1696	izglåsiti	v.tr. pf.
749	izglašati	v.tr. ipf.
5812	izględ	m.
5811	izględati	v.intr. ipf.
33354	izględati	v.intr. ipf.
13923	izględka	f.
33355	izględnųti	v.intr. pf.
17527	izgnanec	m.
17528	izgnańje	n.sg.
19279	izgnanstvo	n.sg.
1695	izgnati	v.tr. pf.
5593	izgniti	v.intr. pf.
16827	izgoda	f.
17531	izgodny	adj.
26179	izgojiti	v.tr. pf.
1795	izgorěti	v.intr. pf.
5553	izgovarjati	v.tr. ipf.
1797	izgovor	m.
4370	izgovoriti	v.tr. pf.
33706	izgovorka	f.
26181	izguba	f.
36653	izgubiti sę	v.refl. pf.
36254	izgubiti tęžinų	v.intr. pf.
26182	izgubiti	v.tr. pf.
26183	izgubiti	v.tr. pf.
26174	izgynųti	v.intr. pf.
17532	izhod luny	m.
5356	izhod	m.
32745	izhod	m.
5355	izhoditi	v.intr. ipf.
35259	izhodny kod	m.
14606	izigrańje	n.sg.
3936	izigratelj	m.anim.
1674	izigrati	v.tr. pf.
1703	izigryvati	v.tr. ipf.
5515	izimati	v.tr. ipf.
35372	iziskati ponovno	v.tr. pf.
17540	iziskati	v.tr. pf.
35373	iziskyvati ponovno	v.tr. ipf.
17543	iziskyvati	v.tr. ipf.
4145	izjasniti	v.tr. pf.
4144	izjasnjati	v.tr. ipf.
4146	izjasnjeńje	n.
3413	izjaviti sę	v.refl. pf.
17547	izjaviti	v.tr. pf.
3412	izjavjati sę	v.refl. ipf.
17548	izjavjati	v.tr. ipf.
35474	izjavjeńje	n.sg.
5484	izjehati	v.intr. pf.
5514	izjęti	v.tr. pf.
5497	izjezd	m.
5485	izježđati	v.intr. ipf.
1610	izkalkulovati	v.tr. pf.
16946	izkazańje	n.
19735	izkladati	v.tr. ipf.
20387	izključajųći	prep.
2504	izključati	v.tr. ipf.
3918	izključati	v.tr. ipf.
8018	izključeńje	n.
8024	izključeńje	n.
8025	izključiteljno	adv.
8026	izključiteljny	adj.
482	izključiti	v.tr. pf.
3920	izključiti	v.tr. pf.
17552	izključno	adv.
8023	izkljuvati	v.tr. ipf.
5777	izkonavči	adj.
2523	izkopati	v.tr. pf.
17555	izkopyvati	v.tr. ipf.
26191	izkoreniti	v.tr. pf.
32044	izkorenjati	v.tr. ipf.
5155	izkoristati	v.tr. pf.
35261	izkoristiti	v.tr. pf.
5570	izkoristyvati	v.tr. ipf.
17557	izkositi	v.tr. pf.
36922	izkovati	v.tr. pf.
36921	izkovyvati	v.tr. ipf.
8033	izkrikati	v.tr. ipf.
8035	izkriknųti	v.tr. pf.
8031	izkrviti do smŕti	v.tr. pf.
4515	izkrviti	v.tr. pf.
31422	izkup	m.
3445	izkųpati	v.tr. pf.
26193	izkupiti	v.tr. pf.
19736	izkus	m.
3603	izkusiti	v.tr. pf.
19743	izkusny	adj.
4781	izkušati	v.tr. ipf.
19740	izkušeńje	n.
3606	izkušenosť	f.
3607	izkušeny	adj.
35776	izkydati	v.tr. ipf.
35777	izkydnųti	v.tr. pf.
19744	izlagati	v.tr. ipf.
36663	izlěčiti sę	v.refl. pf.
4131	izlěčiti	v.tr. pf.
36549	izlęgti sę	v.refl. pf.
36547	izlęgti	v.tr. pf.
17561	izlet	m.
26196	izlišek	m.
27228	izlišnji, izlišny	adj.
26197	izliti	v.tr. pf.
36396	izlivati	v.tr. ipf.
26198	izlomiti	v.tr. pf.
26199	izloviti	v.tr. pf.
19745	izložiti	v.tr. pf.
33357	izmagateljstvo	n.sg.
31423	izmagati	v.tr. ipf.
5737	izmama	f.
15699	izmamitelj	m.anim.
5736	izmamiti	v.tr. pf.
5735	izmamjati	v.tr. ipf.
15701	izmamnica	f.
5738	izmamnik	m.anim.
4915	iz-među	prep.
3944	izměna	f.
1081	izměniti	v.tr. pf.
711	izměnjati	v.tr. ipf.
3496	izměnjeńje	n.
5596	izměriti	v.tr. pf.
26204	izmesti	v.tr. pf.
19748	izměstiti	v.tr. pf.
19746	izměšćati	v.tr. ipf.
19747	izměšćeńje	n.sg.
35982	izmětaj sę!	intj.
32600	izmětati	v.tr. ipf.
17568	izmirati	v.intr. ipf.
1597	izmočiti	v.intr. pf.
36917	izmodelovati	v.tr. pf.
36924	izmodelovati	v.tr. pf.
33356	izmogti	v.tr. pf.
26205	izmoriti	v.tr. pf.
17569	izmrěti	v.intr. pf.
3599	izmųčeny	adj.
1595	izmysl	m.
8060	izmyslitelj	m.anim.
8061	izmysliti	v.tr. pf.
8063	izmysljati	v.tr. ipf.
17570	izmysljeńje	n.
3610	izmysljeny	adj.
17571	izmysljeny	adj.
1796	iz-nad	prep.
36802	iznahoditi	v.tr. ipf.
8068	iznahodlivo	adv.
8069	iznahodlivosť	f.
8070	iznahodlivy	adj.
603	iznahodnik	m.anim.
36804	iznahodȯk	m.
36803	iznajdti	v.tr. pf.
23316	iznajęti	v.tr. pf.
23315	iznajmati	v.tr. ipf.
26207	iznemogti	v.intr. pf.
23729	iznenada	adv.
26208	iznenadsko	adv.
5459	iznesti	v.tr. pf.
26209	izniknųti	v.intr. pf.
35758	izniščeńje	n.
35759	izniščiti	v.tr. pf.
5458	iznositi	v.tr. ipf.
4680	iznova	adv.
33358	iznuda	f.
33360	iznuditi	v.tr. pf.
33359	iznuđati	v.tr. ipf.
16391	iznuriti	v.intr. pf.
8082	iznurjati	v.intr. ipf.
26211	izobara	f.
20395	izobličati	v.tr. ipf.
20396	izobličiti	v.tr. pf.
771	izobraziti	v.tr. pf.
1865	izobražati	v.tr. ipf.
19750	izobražeńje	n.
26213	izoglosa	f.
5354	izȯjdti	v.intr. pf.
4965	izolacija	f.
26214	izolator	m.
21298	izolovany	adj.
2015	izolovati	v.tr. ipf.
31929	izopačati	v.tr. ipf.
26216	izopačiti	v.tr. pf.
26217	izorati	v.tr. pf.
26218	izpadati	v.intr. ipf.
36716	izpasti	v.intr. pf.
26219	izpekti	v.tr. pf.
26220	izpepeliti	v.tr. pf.
36799	izphańje	n.
32917	izphati	v.tr. pf.
32918	izphati	v.tr. pf.
32915	izpihati	v.tr. ipf.
32916	izpihati	v.tr. ipf.
2608	izpiti	v.tr. pf.
8087	izplaćati	v.tr. ipf.
26222	izplåšiti	v.tr. pf.
4277	izplata	f.
8089	izplatiti	v.tr. pf.
13945	izplatny spisȯk	m.
26223	izplěti	v.tr. pf.
35124	izpljunųti	v.tr. pf.
35123	izpljuvati	v.tr. ipf.
34907	izpluti	v.intr. pf.
34311	izplyvati	v.intr. ipf.
34313	izplyvati	v.intr. ipf.
36726	izplyvati	v.intr. ipf.
34314	izplyvti	v.intr. pf.
34315	izplyvti	v.intr. pf.
2926	iz-pod	prep.
597	izpȯlniti	v.tr. pf.
2501	izpȯlnjati	v.tr. ipf.
36609	izpȯlnjeńje	n.sg.
17573	izpȯlzati	v.intr. ipf.
17574	izpȯlzti	v.intr. pf.
19752	izpověď	f.
22218	izpovědati	v.tr. ipf.
22219	izpověděti	v.tr. pf.
22798	izprašati	v.tr. ipf.
32299	izprati mozg	v.tr. pf.
32305	izprati	v.tr. pf.
2502	izpraviti	v.tr. pf.
2507	izpravjati	v.tr. ipf.
26231	izpråzdniti	v.tr. pf.
31723	izpråzdnjati	v.tr. ipf.
3043	iz-prěd	prep.
32773	izpręgati	v.tr. ipf.
32774	izpręgti	v.tr. pf.
17575	izprobovańje	n.sg.
17576	izprobovati	v.tr. pf.
17577	izprobovyvati	v.tr. ipf.
16735	izprodany	adj.
22797	izprositi	v.tr. pf.
26232	izpŕva	adv.
26233	izpųditi	v.tr. pf.
13952	izpųkly	adj.
5240	izpustiti	v.tr. pf.
5241	izpušćati	v.tr. ipf.
16396	izpytati	v.tr. pf.
20868	izpytati	v.tr. pf.
16395	izpytyvati	v.tr. ipf.
20869	izpytyvati	v.tr. ipf.
681	izråbiti	v.tr. pf.
8103	izråbotati	v.tr. pf.
8106	izråbotyvati	v.tr. ipf.
6084	izrađati sę	v.refl. ipf.
26239	Izraelec	m.anim.
4741	Izraelj	m.sg.
4742	izraeľsky	adj.
1688	izråsti	v.intr. pf.
3725	izråvniti sę	v.refl. pf.
19754	izråvniti	v.tr. pf.
3723	izravnjati sę	v.refl. ipf.
19753	izravnjati	v.tr. ipf.
8115	izraz	m.
36718	izraziti sę	v.refl. pf.
2609	izraziti	v.tr. pf.
17584	izraznosť	f.
17586	izrazny	adj.
36717	izražati sę	v.refl. ipf.
682	izražati	v.tr. ipf.
719	izražeńje	n.
21301	izrěčeńje	n.
21303	izrěkati	v.tr. ipf.
21305	izrěkti	v.tr. pf.
8120	izrězati	v.tr. pf.
36918	izrězyvati	v.tr. ipf.
6085	izroditi sę	v.refl. pf.
31433	izrodȯk	m.anim.
21307	izrođeńje	n.sg.
6086	izrođeny	adj.
17587	izrųbati	v.tr. pf.
17588	izrųbyvati	v.tr. ipf.
23867	izrvati	v.tr. pf.
23866	izryvati	v.tr. ipf.
36425	izsěkati	v.tr. ipf.
19755	izsěkti	v.tr. pf.
36426	izseliti sę	v.refl. pf.
5710	izseliti	v.tr. pf.
36427	izseljati sę	v.refl. ipf.
5711	izseljati	v.tr. ipf.
17589	izseljenec	m.anim.
17590	izseljenica	f.
5712	izseljeńje	n.sg.
8123	izslati	v.tr. pf.
20398	izslavjati sę	v.refl. ipf.
20397	izslavjati	v.tr. ipf.
32751	izslědȯk	m.
35390	izslědovańje	n.sg.
1937	izslědovatelj	m.anim.
21308	izslědovati	v.tr. ipf.
20400	izsloviti sę	v.refl. pf.
20399	izsloviti	v.tr. pf.
12348	izslušańje	n.
36533	izslušati	v.tr. pf.
36532	izslušivati	v.tr. ipf.
13967	izsmějati	v.tr. pf.
13965	izsmějivańje	n.sg.
4133	izsmějivati	v.tr. ipf.
13968	izsměška	f.
4134	izsměšnik	m.anim.
17591	izsměvka	f.
34583	izsȯhnųti	v.intr. pf.
4151	izsȯsati	v.tr. pf.
20401	iz-srěd	prep.
8126	izstava, izstavka	f.
16614	izstava	f.
2602	izstaviti	v.tr. pf.
931	izstavjati	v.tr. ipf.
35563	izstavjeńje	n.sg.
33599	izstrěl	m.
35676	izstrěliti	v.tr. pf.
3505	izstųpati	v.intr. ipf.
21985	izstųpati	v.intr. ipf.
3535	izstųpiti	v.intr. pf.
21993	izstųpiti	v.intr. pf.
13947	izsunųti	v.tr. pf.
13951	izsunųťje	n.sg.
13953	izsunųty	adj.
33097	izsušati	v.tr. ipf.
33098	izsušiti	v.tr. pf.
13949	izsuvati	v.tr. ipf.
34582	izsyhati	v.intr. ipf.
17592	izsylańje	n.sg.
8131	izsylati	v.tr. ipf.
26245	izsypati	v.tr. pf.
5567	izsysati	v.tr. ipf.
34002	izšiti	v.tr. pf.
34001	izšivati	v.tr. ipf.
4845	izškoliti	v.tr. pf.
22052	iztęg	m.
3850	iztęgati	v.tr. ipf.
3849	iztęgnųti	v.tr. pf.
6070	iztěkati	v.intr. ipf.
22066	iztěkati	v.intr. ipf.
6072	iztekti	v.intr. pf.
22067	iztekti	v.intr. pf.
2393	iztirati	v.tr. ipf.
26247	iztkati	v.tr. pf.
26249	iztočiti	v.tr. pf.
23538	Iztočna Evropa	f.sg.
22070	iztočnik	m.
17594	iztočnoslovjansky	adj.
13636	iztočny	adj.
15642	iztok	m.sg.
26250	iztok	m.
26251	iztȯlkti	v.tr. pf.
3277	iztratiti	v.tr. pf.
34955	iztręsati	v.tr. ipf.
34954	iztręsti	v.tr. pf.
5545	iztreti	v.tr. pf.
22139	iztrgati	v.tr. ipf.
22140	iztrgnųti	v.tr. pf.
3820	iztŕpěti	v.tr. pf.
16400	iztvarjati	v.tr. ipf.
16397	iztvor	m.
16398	iztvoriti	v.tr. pf.
16399	iztvorjeńje	n.sg.
31724	izučati	v.tr. ipf.
26256	izučiti	v.tr. pf.
13934	izumirańje	n.sg.
5774	izumirati	v.intr. ipf.
20402	izumrěly	adj.
5769	izumreti	v.intr. pf.
36915	izvajati	v.tr. pf.
763	izvaljnjati	v.tr. ipf.
22217	izvědy	m.pl.
558	izvesti	v.tr. pf.
36764	izvesti	v.tr. pf.
17596	izvěstitelj	m.anim.
3688	izvěstiti	v.tr. pf.
17595	izvěsťje	n.
14314	izvěstnik	m.anim.
26264	izvěstny	adj.
14315	izvěstoglåsitelj	m.anim.
14316	izvěstoglåšeńje	n.
22215	Izvěstovańje	n.sg.
3692	izvěšćati	v.tr. ipf.
5511	izvezti	v.tr. pf.
8146	izvezti	v.tr. pf.
26265	izvihnųti	v.tr. pf.
3390	izvini, izvinite	intj.
32398	izviniti sę	v.refl. pf.
634	izviniti	v.tr. pf.
32400	izvinjajųći	adj.
32397	izvinjati sę	v.refl. ipf.
633	izvinjati	v.tr. ipf.
32399	izvinjeńje	n.
22512	izvlastniti	v.tr. pf.
22511	izvlastnjati	v.tr. ipf.
36722	izvlěkati	v.tr. ipf.
26267	izvlěkti	v.tr. pf.
26269	izvně	adv.
22395	izvnųtra	adv.
22276	izvod	m.
22280	izvod	m.
5540	izvoditi	v.tr. ipf.
36763	izvoditi	v.tr. ipf.
8156	izvodlivosť	f.
8157	izvodlivy	adj.
17598	izvođeńje	n.
8158	izvolimosť	f.
8159	izvolimy	adj.
14611	izvoliti	v.tr. pf.
14612	izvoljeńje	n.
8168	izvoljeny	adj.
2956	izvoljniti	v.tr. pf.
14610	izvoljny	adj.
26270	izvor	m.
5907	izvoz	m.
5510	izvoziti	v.tr. ipf.
16181	izvoziti	v.tr. ipf.
22662	izvraćati	v.tr. ipf.
5629	izvråćeny	adj.
22661	izvråtiti	v.tr. pf.
2506	iz-za	prep.
8172	iže	pron.rel.
26272	ižica	f.
5858	izznačati	v.tr. ipf.
5859	izznačeńje	n.
5857	izznačiti	v.tr. pf.
8177	izzȯv	m.
6244	izzvati	v.tr. pf.
6243	izzyvati	v.tr. ipf.
2932	izžęti	v.tr. pf.
1602	ja	pron.pers.
17601	jablånj	f.
26275	jablȯčny	adj.
282	jablȯko	n.
2109	jad	m.
26282	jadovity	adj.
36740	Jadransko morje	n.
1576	jagnę	n.
26285	jagnętina	f.
26284	jagnęťji	adj.
26286	jagniti sę	v.refl. ipf.
1580	jagoda	f.
26287	jagoda	f.
26289	jagodny	adj.
32472	jaguar	m.anim.
4708	jajca	n.pl.
1478	jajce	n.
8209	jajcebělȯk	m.
8214	jaječko	n.
36552	jajėčna skorlupa	f.
35431	jaječny krem	m.
26291	jaječny	adj.
36848	jak	m.
17602	jalovec	m.
26293	jalověti	v.intr. ipf.
26294	jalovica	f.
26296	jalovy	adj.
36640	jalovy	adj.
36641	jalovy	adj.
4995	jama	f.
16785	Jamajka	f.sg.
22458	jamajsky	adj.
2106	januaŕ	m.sg.
19756	Japonec	m.anim.
3052	Japonija	f.sg.
1528	japonsky	adj.
118	jar	m.
26299	jar	m.
35544	jard	m.
26303	jarka	f.
26304	jarky	adj.
3042	jaŕmo	n.
26306	jarosť	f.
26307	jarovy	adj.
26308	jasenėc	m.
17603	jasenj	m.
17605	jasla-sadȯk	m.
26311	jasli	m.pl.
26312	jasněti	v.intr. ipf.
17607	jasno	adv.
4147	jasnosť	f.
26317	jasnota	f.
13615	jasnovidec	m.anim.
13614	jasnovidka	f.
17608	jasnovidnosť	f.
734	jasny	adj.
33082	jasny	adj.
527	jastręb	m.anim.
878	jaščer	m.anim.
26324	jatrȯv	f.
17609	java	f.
17611	java	f.
36480	Java	f.sg.
36481	javansky	adj.
534	javiti sę	v.refl. pf.
36730	javiti sę	v.refl. pf.
3612	javjati sę	v.refl. ipf.
36731	javjati sę	v.refl. ipf.
8240	javjeńje	n.
17612	javjeńje	n.
26327	javno	adv.
8241	javny	adj.
26329	javor	m.
26330	javorovy	adj.
26331	jaź	m.anim.
26332	jaz	m.
20403	jazvec	m.anim.
8245	je, jest	v.ipf.
4461	jebańje	n.sg.
8248	jebany	adj.
8249	jebatelj	m.anim.
528	jebati	v.tr. ipf.
35993	jebeno	adv.
2862	jęčati	v.intr. ipf.
1574	jęčmenj	m.
36479	jęčmenj	m.
16798	jęčmenny	adj.
2944	jeda	f.
26340	jedak	m.anim.
8259	jedańje	n.sg.
15347	jedatelj	m.anim.
1592	jedati	v.intr. ipf.
16799	jedeńje	n.sg.
532	jedin drugogo	pron.rec.
8268	jedin protiv drugomu	adv.
531	jedin	num.card.
19757	jedinačka	f.
19758	jedinak	m.anim.
26345	jedinec	m.anim.
5174	jedinica	f.
36735	jedinka	num.subst.
533	jedinnadsęť	num.card.
23679	jedinnadsęty	num.ord.
8278	jedino pytańje vrěmene	phrase
5098	jedino	adv.
17615	jedinovy	adj.
915	jedinstveno čislo	n.
8282	jedinstveny	adj.
19759	jedinstveny	adj.
8283	jedinstvo	n.sg.
999	jediny	adj.
26349	jedivo	n.
8255	jedlivy	adj.
8296	jednako	adv.
24009	jednakovy	adj.
21309	jednakože, jednakže	adv.
2702	jednaky	adj.
35251	jednina	f.
17617	jednobožstvo	n.sg.
3852	jednočasno	adv.
3851	jednočasny	adj.
17618	jednoglåsno	adv.
17619	jednoglåsny	adj.
19761	jednojęzyčny	adj.
741	jednokråtno	adv.
33398	jednokråtny	adj.
8276	jednonočka	f.
8275	jednonočny seks	m.sg.
8274	jednonočny	adj.
26352	jednonogy	adj.
21310	jednoobrazny	adj.
26353	jednooky	adj.
32326	jednopoly	adj.
21311	jednorodnosť	f.
21312	jednorodny	adj.
19762	jednorog	m.anim.
26355	jednorųky	adj.
16947	jednosložny	adj.
8301	jednosměrny	adj.
740	jednosť	f.
5673	jednostajnosť	f.
5674	jednostajny	adj.
8306	jednostrånno	adv.
1781	jednostrånny	adj.
16948	jednovrěmenno	adv.
22574	jednovrěmenny	adj.
17620	jednoznačno	adv.
17625	jednoznačny	adj.
19764	jednoznačny	adj.
19763	jednoženstvo	n.sg.
22943	jedomy	adj.
8200	jędrna energija	f.
8201	jędrna sposobnosť	f.
8202	jędrno odstrašeńje	n.sg.
8205	jędrny reaktor	m.
2108	jędrny	adj.
3748	jędrny	adj.
2107	jędro	n.
2354	jedva	adv.
14627	jedvab	m.sg.
512	jego	pron.poss.
716	jego	pron.pers.
6256	jegov	pron.poss.
8320	jehati želěznicejų	v.ipf.
2175	jehati	v.intr. ipf.
2195	jej	pron.poss.
3015	jej	pron.pers.
6257	jejin	pron.poss.
26364	jela	f.
26365	jelec	m.anim.
26366	jelenę	n.
26368	jelenina	f.
2202	jelenj	m.anim.
26367	jeleńji	adj.
3058	jelito	n.
17616	jelo	n.
3017	jemela	f.
5922	Jemen	m.sg.
2771	jemu	pron.pers.
26374	jen	m.
8328	jer	conj.
15354	jerbo za	prep.
8329	jerbo	conj.
26375	jerębina	f.
25939	jerej	m.anim.
26376	jeremiada	f.
443	jesenj	f.
26378	jesennji, jesenny	adj.
26379	jesetr	m.anim.
26380	jesetrina	f.
19765	jestestvo	n.sg.
19767	jestestvo	n.sg.
19491	jesti	v.tr. ipf.
23673	jestli ne	conj.
8335	jestli trěba	adv.
2353	jestli	conj.
14605	jestvovati	v.intr. ipf.
8341	ješče dva	num.
1076	ješče	adv.
16800	jęti	v.tr. ipf.
14628	jętra	n.pl.
2322	Jevrej	m.anim.
2546	jevrejskoslovjansky	adj.
255	jevrejsky	adj.
3572	jezda	f.
17629	jezdec	m.anim.
26388	jezdec	m.anim.
19175	jezditi na velosipedu	v.ipf.
540	jezditi	v.intr. ipf.
8349	jezerny	adj.
2547	jezero	n.
26392	jezuit	m.anim.
17630	Jezus	m.anim.
31978	języček	m.
31979	języčkovy	adj.
17631	języčny	adj.
541	język	m.
545	język	m.
36102	językolomka	f.
17632	językoslovec	m.anim.
19768	językotvoritelj, językotvorec	m.anim.
19770	językotvorjeńje, językotvorstvo	n.sg.
551	językověd	m.anim.
4443	językovědstvo	n.sg.
17633	językoznańje	n.sg.
8354	językoznavec	m.anim.
19772	językoznavstvo	n.sg.
846	jež	m.anim.
3825	ježdna čęsť	f.
26394	ježina	f.
34830	ježiti sę	v.refl. ipf.
26395	ježiti	v.tr. ipf.
35952	jidiš	m.sg.
2601	jih	pron.poss.
2603	jih	pron.pers.
6258	jihny	pron.poss.
1871	jim	pron.pers.
22630	jod	m.sg.
23660	joga	f.
4638	jogurt	m.
5923	Jordanija	f.sg.
4436	jordansky	adj.
4815	jų	pron.pers.
5924	jubilej	m.
23582	judaizm	m.sg.
1527	jug	m.sg.
36380	jugoiztočny	adj.
36381	jugoiztok	m.sg.
129	Jugoslavija	f.sg.
35350	jugoslavizm	m.sg.
4867	jugoslavsky	adj.
36382	jugovȯzhod	m.sg.
36383	jugovȯzhodny	adj.
36384	jugozapad	m.sg.
36385	jugozapadny	adj.
3125	julij	m.sg.
26403	junak	m.anim.
26404	junak	m.anim.
26405	junec	m.anim.
2550	junij	m.sg.
5803	junior	m.anim.
26407	junoš, junoša	m.anim.
26408	juny	adj.
21313	Jupiter	m.sg.
2549	jurisdikcija	f.
26410	jurȯk	m.anim.
26412	jutrenja	f.
8364	jutrišnji, jutrišny	adj.
8366	jutro	n.
4746	Južna Amerika	f.sg.
22772	Južna Koreja	f.sg.
8367	južna polsfera	f.sg.
10849	južno sijańje	n.sg.
4186	južno	adv.
553	Južnoafrikanska Republika	f.sg.
35018	južnoafrikansky	adj.
4747	južnoamerikansky	adj.
35136	južnoevropejsky	adj.
22774	južnokorejsky	adj.
4425	južnoslovjansky	adj.
23501	Južny okean	m.sg.
23634	Južny polus	m.sg.
2548	južny	adj.
518	k, ko	prep.
26417	kabaček	m.
26420	kabala	f.
26421	kabalističny	adj.
26423	kabare, kabaret	m.
26424	kabarga	f.
4409	kabelj	m.
36002	kabina	f.
36715	kabinet	m.
17635	kačer	m.anim.
519	kaď	f.
26429	kadiľnica	f.
26430	kadilo	n.
26432	kaditi	v.intr. ipf.
22627	kadmij	m.sg.
658	kadȯlb	m.
11144	kadry	m.pl.
35874	kafe	n.indecl.
24439	kajak	f.
26437	kajati sę	v.refl. ipf.
1193	kak, kako	adv.
2043	kak, kako	prep.
3437	kak, kako	adv.
34784	kakao	n.indecl.
26439	kakati	v.intr. ipf.
1421	kako ... tako i ...	conj.
5035	kako by	conj.
17637	kako možno ranějše	adv.
17638	kako možno skorěje	adv.
36619	kako prědtym	adv.
36618	kako prěđe	adv.
36620	kako raněje	adv.
17639	kako sę govori	phrase
6107	kako sę tvŕdi	phrase
16828	kako toliko	adv.
23868	kakoby	adv.
19606	kakokoli	adv.
14630	kako-libo	adv.
2712	kako-nebųď	adv.
3796	kakosť	f.
497	kakostny	adj.
34756	kaktus	m.
1454	kaky	pron.indef.
19605	kakykoli	pron.indef.
14631	kaky-libo	pron.indef.
2711	kaky-nebųď	pron.indef.
341	kal	m.sg.
26442	kal	m.sg.
22616	kalcij	m.sg.
20870	kalendaŕ	m.
35817	Kalifornija	f.sg.
20871	kaligraf	m.anim.
35687	kaligrafičny	adj.
20872	kaligrafija	f.
22615	kalij	m.sg.
26444	kalina	f.
26447	kaliti	v.tr. ipf.
6164	kalka	f.
4966	kalkulacija	f.
2553	kalkulovati	v.tr. ipf.
26449	kaľny	adj.
448	kaluža	f.
26453	kameněti	v.intr. ipf.
26455	kamenisty	adj.
1313	kamenj	m.
36154	kamenna doba	f.
26459	kamenny	adj.
20404	kamenolom	m.
26461	kamenovati	v.tr. ipf.
851	kamera	f.
4227	kameraman	m.anim.
26462	kamion	m.
19553	kamo	adv.
19607	kamokoli	adv.
19569	kamo-libo	adv.
19568	kamo-nebųď	adv.
2556	kampanija	f.
35824	kamuflaž	m.sg.
2321	Kanada	f.sg.
2561	kanadsky	adj.
23266	kanal	m.
23269	kanalizacija	f.
23268	kanalizovati	v.tr. ipf.
23489	kanarka	f.
16723	kancelarija	f.
36330	kancler	m.anim.
2007	kandidat	m.anim.
33406	kandidatura	f.
6270	kandidovati	v.tr. ipf.
22959	kanibal	m.anim.
22960	kanibalizm	m.sg.
22961	kanibaľsky	adj.
927	kanja	f.
26465	kanja	f.
5202	kanoe	n.indecl.
17640	kanon	m.
35914	kanoničny	adj.
5761	kanonizovati	v.tr. ipf.
2557	kapati	v.intr. ipf.
36103	kapela	f.
32457	kaper	m.anim.
32458	kaperstvo	n.sg.
32707	kapital	m.
23513	kapitalist	m.anim.
23514	kapitalističny	adj.
23512	kapitalizm	m.sg.
3489	kapitan	m.anim.
2558	kapitulacija	f.
4969	kapitulovati	v.tr. ipf.
1813	kapja	f.
33402	kapjušon	m.
26470	kapnųti	v.intr. pf.
604	kapriz	m.
4252	kaprizny	adj.
4253	kaprizovati	v.intr. ipf.
2559	kapsula	f.
33401	kapuca	f.
36423	kapusta	f.
631	kara	f.
16815	karabin	m.
19773	karaibsky	adj.
35441	karamel	m.
2683	karantina	f.
2564	karaś	m.anim.
23584	karate	n.indecl.
2565	karati	v.tr. ipf.
35408	karati	v.tr. ipf.
35694	kardinal	m.anim.
23699	kareta	f.
35015	karfiol	m.
36577	kari	n.
21314	kariera	f.
2566	karierist	m.anim.
26750	karies	m.sg.
36286	karikatura	f.
2426	karlik	m.anim.
35970	karnaval	m.
19774	karny	adj.
32225	karo	n.
870	karp	m.anim.
2868	karta	f.
23239	karta	f.
20873	kartina	f.
2989	kartofelj	m.
22803	karton	m.
36538	karuselj	f.
36369	kaseta	f.
34586	kastracija	f.
26478	kastrovati	v.tr. ipf./pf.
2563	kaša	f.
1830	kašelj	m.
3520	kašljati	v.intr. ipf.
5979	kaštan	m.
17641	kaštanovy	adj.
4729	Kašub	m.anim.
176	kašubsky	adj.
26485	kat	m.anim.
36586	kat	m.
19775	katalansky	adj.
33415	katalog	m.
35059	Katalonija	f.sg.
32447	Katar	m.sg.
32453	katarsky	adj.
4911	katastrofa	f.
4913	katastrofičny	adj.
17643	katę	n.
165	katedrala	f.
36705	kategorično	adv.
35597	kategoričny	adj.
47	kategorija	f.
19776	kategorizacija	f.
36113	kategorizovati	v.tr. ipf./pf.
2233	katka	f.
17644	katȯčka	f.
23516	katolicizm	m.sg.
2985	katoličsky	adj.
3000	katolik	m.anim.
2560	kava	f.
32075	kavalerija	f.
3484	kavarnja	f.
26487	kavka	f.
35062	Kavkaz	m.sg.
26488	kavovy	adj.
23645	kazahsky, kazašsky	adj.
1410	Kazahstan	m.sg.
32415	kazarna	f.
3116	kazati sę	v.refl. ipf.
1971	kazati	v.tr. ipf.
26491	kazati	v.tr. ipf.
32512	kazino	n.
26492	kaziti	v.tr. ipf.
26493	kazniti	v.tr. ipf.
26494	kaznj	f.
8428	každodenny	adj.
8429	každogodišnje	adv.
8430	každogodišnji, každogodišny	adj.
8431	každoročno	adv.
8432	každoročny	adj.
937	každy	adj.
942	kde	adv.
19603	kdekoli	adv.
14569	kde-libo	adv.
1794	kde-nebųď	adv.
35857	kelner	m.anim.
36644	kelnerka	f.
35726	Kelt	m.anim.
4738	keltsky	adj.
32138	kemping	m.
20406	kenguru	m.anim.
35194	keramičny	adj.
35193	keramika	f.
16764	kěšenj	f.
26497	khaki	n.indecl.
34921	kilim	m.
33538	kilobajt	m.
2275	kilogram	m.
4421	kilometr	m.
35046	kinematografija	f.
4795	kino	n.
36261	kinooperator	m.anim.
34848	kiosk	m.
452	Kipr	m.sg.
1417	kirilica	f.
34781	kiriličsky, kirilsky	adj.
36529	kisla smetana	f.
26513	kita	f.
4752	Kitaj	m.sg.
8448	Kitajec	m.anim.
8449	Kitajka	f.
552	kitajsky	adj.
36070	kivi	n.indecl.
2340	klåda	f.
26520	klådec, klådeź	m.
26522	kladivo	n.
19777	klanjati sę	v.refl. ipf.
23433	klarnet	m.
2265	klås	m.
3503	klas	m.
35257	klasa	f.
8458	klasična muzika	f.
36156	klasičny kostjum	m.
8459	klasičny	adj.
4967	klasifikacija	f.
2892	klasifikovati	v.tr. ipf.
26526	klåsiti sę	v.refl. ipf.
35532	klasna komnata	f.
901	klasti	v.tr. ipf.
26528	klåti	v.tr. ipf.
32009	klåti	v.tr. ipf.
36765	klåti	v.tr. ipf.
36546	klåtiti sę	v.refl. ipf.
574	klåtiti	v.tr. ipf.
23458	klavesin	m.
8462	klaviatura	f.
23431	klavir	m.
8461	klaviša	f.
2555	klęčati	v.intr. ipf.
1540	klej	m.
26532	klejiti	v.tr. ipf.
23297	klejky	adj.
26534	klęknųti	v.intr. pf.
26536	klen	m.
1274	klěnj	m.anim.
26537	klenovy	adj.
4091	klěskańje	n.sg.
4090	klěskati	v.tr. ipf.
20408	klěšč	m.anim.
26545	klěšča	f.
1662	klěšče	f.pl.
17655	klęti	v.intr. ipf.
4518	klětka krve	f.
787	klětka	f.
4517	klětka	f.
14645	klětȯčna terapija	f.
8472	klětȯčno ozdravjeńje	n.sg.
8473	klětȯčny	adj.
17657	klętva	f.
17658	klętva	f.
3001	kleveta	f.
26555	klevetati	v.intr. ipf.
26556	klevetnik	m.anim.
5121	klicati	v.tr. ipf.
32575	klicati	v.tr. ipf.
32573	klička	f.
5139	klient	m.anim.
14646	klienti	m.pl.
14647	klientsky	adj.
8476	klientstvo	n.sg.
8477	klik	m.
32567	klik	m.
32561	klika	f.
5120	kliknųti	v.tr. pf.
32579	kliknųti	v.tr. pf.
17659	klima	f.
2986	klimaks	m.
2214	klimat	m.
35878	klimatizacija	f.
35877	klimatizator	m.
8482	klimatsko potepljeńje	n.sg.
8481	klimatsky	adj.
1368	klin	m.
19779	kliničny	adj.
35555	klinika	f.
8484	kliše	n.indecl.
2240	ključ	m.
26560	ključaŕ	m.anim.
32016	ključna kosť	f.
26562	ključnica	f.
19784	ključnik	m.anim.
35216	ključno slovo	n.
19786	ključny	adj.
26564	kljukva	f.
19787	kljun	m.
26566	kljunųti	v.tr. pf.
1958	kljusati	v.intr. ipf.
788	kljuvati	v.tr. ipf.
26570	klobuk	m.
2191	klȯk	m.
26571	klokot	m.sg.
26572	klokotati	v.intr. ipf.
19780	klon	m.
19782	kloniti sę	v.refl. ipf.
789	kloniti	v.tr. ipf.
32136	kloun	m.anim.
26576	klozet	m.
31886	klub	m.
26578	klųbȯk	m.
36805	kmin	m.
17660	kmotr	m.anim.
17661	kmotra	f.
8501	knęgynja	f.
8502	knęź	m.anim.
17662	knęžić	m.anim.
26585	knęžna	f.
16801	knęžny	adj.
35911	knęžstvo	n.
1981	kniga	f.
32056	knigarnja	f.
6204	kniževnosť	f.
6205	kniževny	adj.
4405	knižka	f.
17663	knopka	f.
35489	knot	m.
20409	koala	f.
550	koalicija	f.
22622	kobalt	m.sg.
26588	kobčik	m.anim.
20410	kobra	f.
20411	kobyla	f.
26592	kočerga	f.
16951	kod	m.
16950	kodifikacija	f.
35695	kodifikovati	v.tr. ipf./pf.
8505	kodovati	v.tr. ipf.
31966	kofein	m.sg.
2230	kȯgda, kȯgdy	adv.
26594	kȯgda, kȯgdy	conj.
19610	kȯgdakoli, kȯgdykoli	adv.
14649	kȯgda-libo, kȯgdy-libo	adv.
120	kȯgda-nebųď, kȯgdy-nebųď	adv.
143	kogo	pron.int.
35931	kohezija	f.
5693	koj	pron.int.
5694	koj	pron.rel.
21315	kojkoli	pron.indef.
5695	koj-nebųď	pron.indef.
23196	kokain	m.sg.
23701	koketka	f.
32900	koketny	adj.
32901	koketovati	v.intr. ipf.
25534	kokodakati	v.intr. ipf.
36274	kokos	m.
36276	kokosova palma	f.
36275	kokosovy orěh	m.
26596	kokoška	f.
2253	kokot	m.anim.
33643	koktejl	m.
1949	kol	m.
26599	kȯl	m.
1957	kolač	m.
81	kolaps	m.
2370	kȯlbasa	f.
8504	kȯlbasa	f.
36539	kolěbanka	f.
21316	kolěbati sę	v.refl. ipf.
26605	kolěbati	v.tr. ipf.
26607	kolěbka	f.
26608	kolęda	f.
8519	koledž	m.
5762	kolega	m.anim.
19788	kolěja	f.
36603	kolekcija	f.
32739	kolektiv	m.
32740	kolektivny	adj.
2201	kolěno	n.
35875	kolhoz	m.
4174	kolibri	m.anim.
26619	količek	m.
17665	koliko ja věm	adv.
5780	koliko ja znajų	adv.
1275	koliko	adv.
1948	koliko	conj.
19613	kolikokoli	adv.
14655	koliko-libo	adv.
23100	koliko-nebųď	adv.
16952	kolikoraky	adj.
4869	kolikosť	f.
19595	kolikråt	adv.
19587	koliky	adj.
8518	koljce	n.
1332	kolo	n.
4917	kolo	prep.
17666	kolokrěslo	n.
16953	kolona	f.
32072	kolona	f.
20412	koloniaľny	adj.
34179	kolonija	f.
36494	kolonist	m.anim.
4970	kolonizacija	f.
36493	kolonizator	m.anim.
283	kolonizovati	v.tr. ipf./pf.
1955	kolor	m.
35890	kolorovati	v.tr. ipf.
19790	kolovati	v.intr. ipf.
17668	kolovråt	m.
23700	kolpak	m.
22440	Kolumbija	f.sg.
22441	kolumbijsky	adj.
26615	kȯlzati sę	v.refl. ipf.
26616	kȯlzky	adj.
2242	koma	f.
23428	koma	f.
3855	komanda	f.
2876	komar	m.anim.
16954	kombinacija	f.
26625	kombinatorny	adj.
16955	kombinovati	v.tr. ipf.
36645	komedija	f.
2877	komentaŕ	m.
36317	komentator	m.anim.
568	komentovati	v.tr. ipf.
5148	komerciaľny	adj.
23427	kometa	f.
3507	komfort	m.
26627	komfortno	adv.
36478	komfortny	adj.
4403	komičny	adj.
8537	komik	m.anim.
36289	komiks	m.
8538	komin	m.
8539	kominjaŕ	m.anim.
854	komisaŕ	m.anim.
1964	komisija	f.
1110	komitet	m.
815	komnata	f.
1842	komora	f.
36880	komorna muzika	f.sg.
36878	komorny concert	m.
36879	komorny orkestr	m.
33088	kompakt-disk	m.
793	kompanija	f.
32931	kompas	m.
35376	kompatibiľnosť	f.
35375	kompatibiľny	adj.
4972	kompensacija	f.
524	kompensovati	v.tr. ipf./pf.
35965	kompetentnosť	f.
35964	kompetentny	adj.
820	kompeticija	f.
17670	kompetitivny	adj.
15957	kompjuter	m.
15958	kompjuterizovany	adj.
15959	kompjuterizovati	v.tr. ipf.
32313	kompjuterna myš	f.
15960	kompjuterny	adj.
34675	kompleks	m.
36587	kompletno	adv.
4378	kompletnosť	f.
4377	kompletny	adj.
4971	komplikacija	f.
15952	komplikovany	adj.
821	komplikovati	v.tr. ipf.
20148	komponent	m.
8544	komponovati	v.tr. ipf.
35582	kompozicija	f.
816	kompozitor	m.anim.
16956	kompromis	m.
16957	kompromisny	adj.
736	komunikacija	f.
1277	komunikovati	v.intr. ipf.
2074	komunist	m.anim.
1065	komunističny	adj.
4402	komunizm	m.sg.
35120	koncentracija	f.
16958	koncentrovati	v.tr. ipf.
15963	koncepcija	f.
20413	konceptuaľny	adj.
4782	koncert	m.
4785	koncert	m.
23363	končati sę	v.refl. ipf.
535	končati	v.tr. ipf.
16960	končina	f.
21697	kondicija	n.
16959	kondicional	m.
35876	kondicioner	m.
15683	konduktor	m.anim.
15365	konec tydnja	m.
536	konec	m.
14659	konečnik	m.
17674	konečno	adv.
17676	konečnosť	f.
8557	konečny	adj.
35912	konfederacija	f.
799	konferencija	f.
844	konfiskovati	v.tr. ipf.
822	konflikt	m.
824	konfrontacija	f.
32454	Kongo	n.sg.
32455	kongolezsky	adj.
823	kongres	m.
26640	koničina	f.
26642	konina	f.
1038	konj	m.anim.
17673	konj	m.anim.
4645	konjak	m.
26645	konjaŕ	m.anim.
32074	konjaŕ	m.anim.
809	konjugacija	f.
808	konjunkcija	f.
20414	konkluzija	f.
23108	konkretno	adv.
810	konkretny	adj.
4973	konkurencija	f.
17679	konkurencijny	adj.
35262	konkurent	m.anim.
811	konkurovati	v.intr. ipf.
812	konkurs	m.
26650	konnica	f.
19792	konnik	m.anim.
26652	konny	adj.
8572	konopja	f.
26657	konopjany	adj.
35013	konotacija	f.
33321	konserva	f.
17680	konservativec	m.anim.
8574	konservativnosť	f.
2889	konservativny	adj.
8583	konservatizm	m.sg.
8584	konservovany	adj.
1120	konservovati	v.tr. ipf.
2119	konsilium	m.
19793	konsistencija	f.
26658	konsky	adj.
26659	konsonant	m.
17681	konspiracija	f.
36049	konspirator	m.anim.
35836	Konstantinopol	m.sg.
1984	konstitucija	f.
35233	konstitucijny	adj.
4873	konstrukcija	f.
4872	konstruovati	v.tr. ipf.
5926	konsul	m.anim.
5927	konsulat	m.
5127	konsultacija	f.
35568	konsultant	m.anim.
1856	konsumerizm	m.sg.
2054	kontakt	m.
36206	kontaktna sočevica	f.
36395	kontejner	m.
19794	kontekst	m.
2112	kontinent	m.
6210	kontinentaľny šelf	m.
15973	kontingent	m.
35332	kontinuum	m.
3328	konto	n.
4156	kontrabanda	f.
8576	kontrabanda	f.
4158	kontrabandnik	m.anim.
4159	kontrabandny	adj.
15367	kontrabandovańje	n.sg.
4157	kontrabandovati	v.tr. ipf.
23441	kontrabas	m.
35844	kontracepcija	f.
19795	kontrakcija	f.
2146	kontrarevolucija	f.
19796	kontrast	m.
33001	kontratenor	m.anim.
3483	kontrola, kontrolj	f.
832	kontrolovati	v.tr. ipf.
3482	kontrolovati	v.tr. ipf.
19797	konvencija	f.
35047	konvencionaľny	adj.
19798	konvent	m.
36684	konversija	f.
16372	konvoj	m.
1669	kooperacija	f.
839	kooperovati	v.intr. ipf.
36213	koordinacija	f.
35225	koordinata	f.
835	koordinator	m.anim.
35226	koordinovati	v.tr. ipf./pf.
26664	kopa	f.
3739	kopaljnja	f.
26666	kopańje	n.sg.
834	kopati	v.tr. ipf.
32080	kopějka	f.
36813	Kopenhagen	m.
2113	kopija	f.
3519	kopijovati, kopirovati	v.tr. ipf.
26674	kopje	n.
26679	kopȯť	f.
828	kopr	m.
538	kopriva	f.
26678	koprivny	adj.
8596	koprova supa	f.
8597	koprove ogurky	m.pl.
14662	koprovy	adj.
35838	koptsky	adj.
26680	kopytnik	m.
2116	kopyto	n.
764	kora	f.
26685	kora	f.
358	korab	m.
17682	korabnica	f.
17683	korabnik	m.anim.
21317	korabokrušenec	m.anim.
21318	korabokrušeńje	n.
26688	koral	m.anim.
26689	Koran	m.
848	kordon	m.
6176	Koreja	f.sg.
22768	korejsky	adj.
26694	korekcija	f.
26696	korektny	adj.
26697	korektor	m.anim.
17684	korelativ	m.
26699	korenisty	adj.
26700	koreniti sę	v.refl. ipf.
2913	korenj	m.
26702	korenj	m.
6063	korespondencija	f.
6056	korespondent	m.anim.
26707	koriandr	m.sg.
26708	korica	f.
1435	koričnevy	adj.
26709	koridor	m.
19799	korigovati	v.tr. ipf.
1509	korisť	f.
5189	koristati	v.tr. ipf.
35260	koristiti	v.tr. ipf.
16961	koristnik	m.anim.
6271	koristny	adj.
8610	koriti	v.tr. ipf.
4302	korka	f.
36833	kornet	m.
35663	kornijsky	adj.
23189	korȯk	m.
857	korona	f.
35682	koronacija	f.
36462	koronavirus	m.
1623	koronovati	v.tr. ipf.
35383	korporacija	f.
35527	korporativny	adj.
4618	korpus	m.
867	korupcija	f.
26718	korveta	f.
26719	koryfej	m.anim.
649	koryto	n.
26725	koryto	n.
1622	kos	m.anim.
2965	kosa	f.
26729	kosa	f.
26731	kosaŕ	m.
26732	kośba	f.
17689	kositi	v.tr. ipf.
26738	kosm	m.
26739	kosmaty	adj.
36682	kosmetička	f.
36680	kosmetičny	adj.
36681	kosmetik	m.anim.
36679	kosmetika	f.sg.
17690	kosmična stancija	f.
17692	kosmičny korab	m.
17691	kosmičny	adj.
26741	kosmonavt	m.anim.
17694	kosmos	m.
26743	kosooky	adj.
1508	Kosovo	n.sg.
868	kosovsky	adj.
871	kosť	f.
22459	Kostarika	f.sg.
22460	kostarikansky	adj.
8623	kostel	m.
33588	kostěnka	f.
26744	kostěny	adj.
26751	kostjum	m.
26746	kostka	f.
26748	kostlivy	adj.
23330	kostno jędro	n.
733	kostny mozȯk	m.
26749	kostny	adj.
2635	kosy	adj.
5658	koš odpadov	m.
5194	koš	m.
5195	košaŕka	f.
26754	košeńje	n.sg.
32090	košerny	adj.
1465	koštovati	v.tr. ipf.
4794	košulja	f.
1093	kot	m.anim.
26759	kotę	n.
23185	kotel	m.
34416	kotiti sę	v.refl. ipf.
26763	kotka	f.
26764	kotlaŕ	m.anim.
35880	kotlet	m.
26765	kotlina	f.
26766	kotlovina	f.
26772	kotva	f.
2419	kovač	m.anim.
26774	kovaljnja	f.
26775	kovańje	n.sg.
530	kovati	v.tr. ipf.
33929	kovčeg	m.
34922	koverec	m.
34168	koverta	f.
8635	kovina	f.
26780	kovny	adj.
26781	kovylj	m.sg.
74	koza	f.
8637	kozačsky	adj.
8638	kozak	m.anim.
32021	kozel odpušćeńja	m.anim.
26784	kozel	m.anim.
26785	kozina	f.
26786	koźja bråda	f.
32096	koźja bråda	f.
26787	koźji	adj.
26791	Kozorog	m.anim.
36064	kozyŕ	m.
1473	koža	f.
23212	koženy	adj.
17695	kožuh	m.
26798	kožuhaŕ	m.anim.
17696	krab	m.anim.
791	kråbka	f.
26802	kradež	f.
36171	kradom	adv.
855	krađa	f.
4124	krah	m.
860	kraj	m.
3579	kraj	m.
36164	krajec	m.
4998	krajevid	m.
36211	Krajina Baskov	f.
4559	krajina	f.
19801	krajina	f.
8647	krajnec	m.anim.
8650	krajno opasny	adj.
30	krajno	adv.
8651	krajnosť	f.
36207	krajny termin	m.
757	krajny	adj.
25790	krakati	v.intr. ipf.
26816	krålica	f.
20415	krålik	m.anim.
1380	krålj	m.anim.
17697	krålj	m.anim.
31852	krålj	m.anim.
26812	kråljev	adj.
1658	kråljeva	f.
20874	kråljevska boa	f.
20875	kråljevsky udav	m.anim.
1832	kråljevsky	adj.
559	kråljevstvo	n.
1094	krasa	f.
16725	krasavec	m.anim.
16724	krasavica	f.
26823	krasiti	v.tr. ipf.
20416	krasivosť	f.
8660	krasivši	adj.
2698	krasivy	adj.
8662	krasnějši	adj.
8663	krasnica	f.
21319	krasnorěčivosť	f.
21320	krasnorěčivy	adj.
8664	krasnosť	f.
3790	krasny	adj.
20876	krasopis	m.
20877	krasopisec	m.anim.
2695	krasota	f.
2642	kråsta	f.
26829	kråstavy	adj.
26804	krasti sę	v.refl. ipf.
627	krasti	v.tr. ipf.
19803	kråtko	adv.
26833	kråtkonogy	adj.
26836	kråtkosť	f.
35282	kråtkotrajny	adj.
8669	kråtkovidnik	m.anim.
8671	kråtkovidnosť	f.
8673	kråtkovidny	adj.
2641	kråtky	adj.
8668	-kråtno	suffix
1600	kråva	f.
17698	kravata	f.
26840	kråvji	adj.
849	krč	m.
850	krčiti	v.tr. ipf.
847	krčma	f.
26848	kreativnosť	f.
32029	kreativny	adj.
3495	kreda	f.
35104	kredenc	m.
3525	kredit	m.
26869	krěhky	adj.
32032	krem	m.
26853	kremenisty	adj.
3039	kremenj	m.
26856	kremenny	adj.
36198	Kremlj	m.
22609	kremnij	m.sg.
26858	kremovy	adj.
35905	kreol	m.
19804	kreoľsky	adj.
26859	krěpěti	v.intr. ipf.
26860	krěpiti	v.tr. ipf.
26862	krěpkosť	f.
4047	krěpky	adj.
3022	krěposť	f.
26864	kresalo	n.
26865	kresati	v.tr. ipf.
2700	krěslo	n.
2428	krest	m.
35720	krestitelj	m.anim.
2699	krestiti	v.tr. ipf.
17704	krestna mati	f.
17705	krestny otec	m.anim.
6177	krestovy pohod	m.
6182	krešćeńje	n.
23231	kreten	m.anim.
23233	kretensky	adj.
33641	krevetka	f.
1091	kričati	v.tr. ipf.
895	krijumčariti	v.tr. ipf.
3215	krik	m.
35091	kriket	m.
747	kriknųti	v.tr. pf.
26943	krilaty	adj.
2637	krilo	n.
35707	kripta	f.
23162	kristal	m.
35365	kristalizovati	v.tr. ipf./pf.
23163	kristaľny	adj.
19807	kriterij	m.
2639	kritičny	adj.
80	kritik	m.anim.
35039	kritika	f.
2164	kritikovati	v.tr. ipf.
26879	kriva	f.
19808	krivda	f.
19809	krivda	f.
3752	krivditi	v.intr. ipf.
3534	krivina	f.
19811	kriviti	v.tr. ipf.
26882	krivoboky	adj.
26883	krivonogy	adj.
19814	krivoprisęžničstvo	n.sg.
26888	krivošija	f.
26890	krivota	f.
4762	krivověrnik	m.anim.
4763	krivověrstvo	n.sg.
748	krivy	adj.
3366	krivy	adj.
4765	krivy	adj.
26893	krivy	adj.
138	kriza	f.
6181	križ	m./f.
35934	križenosec	m.anim.
33748	križevka	f.
17708	križišče	n.
26850	krjakati	v.intr. ipf.
758	krma	f.
859	krmiti	v.tr. ipf.
3735	krmjeńje	n.
8717	krmna trųbka	f.
14666	krmny	adj.
8722	kroček	m.
26868	krȯha	f.
19816	kroj	m.
19817	kroj	m.
19818	krojač	m.anim.
19819	krojiti	v.tr. ipf.
852	krok	m.
35447	kroket	m.
35448	kroket	m.
5298	krokodil	m.anim.
3461	kromě togo	adv.
318	kromě	prep.
35719	kronika	f.
35775	kronikaŕ	m.anim.
26906	kropilo	n.
26907	kropiti	v.intr. ipf.
32052	krȯšiti sę	v.refl. ipf.
26916	krȯšiti	v.tr. ipf.
508	krȯt	m.anim.
26910	krotiti	v.tr. ipf.
26911	krotky	adj.
26912	krotosť	f.
1899	krȯv	f.
14667	krȯvna infekcija	f.
4519	krȯvno těljče	n.
4523	krȯvny pritisk	m.
17709	krȯvny	adj.
26920	krtovina	f.
880	krųg	m.
15371	krųgla	f.
19497	krųgly stol	m.
2341	krųgly	adj.
26925	krųgovy	adj.
26926	krupa	f.
26929	krušina	f.
19823	krųtiti sę	v.refl. ipf.
19820	krųtiti	v.tr. ipf.
26931	kruty	adj.
26932	krųžeńje	n.
32054	krųžiti sę	v.refl. ipf.
26933	krųžiti	v.tr. ipf.
36543	krųžno križišče	n.
4514	krvaviti	v.intr. ipf.
36436	krvavjeńje	n.
8738	krvavši	adj.
4524	krvavy	adj.
4516	krvinȯk	m.
6434	krvonosny sųd	m.
26941	krvopijec	m.anim.
26940	krvoproliťje	n.sg.
22065	krvotok	m.
17710	Krym	m.sg.
35234	krymsky	adj.
17711	krysa	f.
17712	kryti sę	v.refl. ipf.
2638	kryti	v.tr. ipf.
17713	krzno	n.
32027	ksenofob	m.anim.
32026	ksenofobija	f.
4786	ksilofon	m.
3019	kto	pron.int.
21322	ktokoli	pron.indef.
322	kto-nebųď	pron.indef.
2643	ktory	pron.rel.
4189	ktory	pron.int.
19614	ktorykoli	pron.indef.
14670	ktory-libo	pron.indef.
2954	ktory-nebųď	pron.indef.
240	kub	m.
16278	Kuba	f.sg.
2646	Kubanec	m.anim.
16279	kubansky	adj.
35956	kubičny	adj.
5779	kubȯk	m.
26955	kųdělj	f.
498	kųdeŕ	m.
26958	kųdlaty	adj.
26960	kųdravy	adj.
244	kųdy	adv.
19615	kųdykoli	adv.
19551	kųdy-libo	adv.
2688	kųdy-nebųď	adv.
34761	kufer	m.
3518	kuhaŕ	m.anim.
8755	kuhaŕka	f.
35196	kuhaŕsky	adj.
23567	kuhaŕstvo	n.sg.
8756	kuhati	v.tr. ipf.
8758	kuhenny	adj.
1790	kuhnja	f.
26963	kukati	v.intr. ipf.
22397	kukla	f.
254	kųkolj	m.
17714	kukučka	f.
8760	kukuruza	f.
26966	kulik	m.anim.
35195	kulinarny	adj.
3475	kulja	f.
1295	kuljemet	m.
26967	kuljgati	v.intr. ipf.
26968	kuljgavy	adj.
8764	kulminacija	f.
8765	kulminovati	v.intr. ipf.
36308	kult	m.
35723	kultivar	m.
1301	kultura	f.
2647	kulturny	adj.
17715	kum	m.anim.
17716	kuma	f.
4771	kuna	f.
26974	kup	m.
1294	kupa	f.
3452	kųpaljnja	f.
3454	kųpańje	n.sg.
26977	kųpati sę	v.refl. ipf.
3453	kųpati	v.tr. ipf.
26979	kupec	m.anim.
26980	kupec	m.anim.
3451	kųpělj	f.
26982	kųpina	f.
258	kupiti	v.tr. pf.
26984	kupja	f.
26987	kupola	f.
35016	kupon	m.
17717	kupoprodaž	f.
2648	kupovatelj	m.anim.
2884	kupovati	v.tr. ipf.
26989	kur	m.anim.
1231	kura	f.
8776	kurec	m.
26992	kurętina	f.
26993	kurgan	m.
33722	kuriozny	adj.
26996	kuriti	v.tr. ipf.
26997	kurivo	n.
26994	kuŕji	adj.
26999	kurnik	m.
27000	kuropatva	f.
265	kurort	m.
3229	kurs	m.
245	kursiv	m.sg.
32231	kursivny	adj.
36243	kursor	m.
246	kurva	f.
27002	kųs	m.
32123	kus	m.
17718	kųsati	v.tr. ipf.
27005	kųsnųti	v.tr. pf.
247	kųsȯk	m.
23800	kust	m.
17720	kustomizovańje	n.
17721	kustomizovati	v.tr. ipf./pf.
27007	kusy	adj.
27009	kusy	adj.
249	kųt	m.
27011	kųtny	adj.
23151	kuvalda	f.
2645	Kuvejt	m.sg.
35571	kuzen	m.anim.
35572	kuzina	f.
27013	kuznja	f.
4415	kvadrat	m.
4416	kvadratny	adj.
27016	kvakati	v.intr. ipf.
36460	kvalifikacija	f.
20417	kvalifikovati	v.tr. ipf.
35736	kvalitet	m.
35323	kvantitativny	adj.
23621	kvantova mehanika	f.
32030	kvarc	m.sg.
36838	kvarta	f.
1538	kvartal	m.
27017	kvartira	f.
8787	kvas	m.
27018	kvas	m.sg.
2644	kvasiti	v.intr. ipf.
6272	kvestija	f.
20878	kvičati	v.intr. ipf.
36839	kvinta	f.
27024	kvintesencija	f.
35477	kvitancija	f.
34847	kviz	m.
27026	kvokati	v.intr. ipf.
2728	kvorum	m.
406	kydati	v.tr. ipf.
2352	kydnųti	v.tr. pf.
17645	kyhati	v.intr. ipf.
17646	kyhnųti	v.intr. pf.
360	kyj	m.
17647	Kyjev	m.sg.
35662	kyjevsky	adj.
26501	kyla	f.
17649	kymati	v.intr. ipf.
17650	kymnųti	v.intr. pf.
26503	kypěńje	n.sg.
2366	kypěti	v.intr. ipf.
23644	kyrgyzsky	adj.
152	Kyrgyzstan	m.sg.
14644	kysle ogurky	m.pl.
23038	kyslina	f.
22603	kyslorod	m.sg.
1418	kysly	adj.
26510	kysnųti	v.intr. ipf.
20407	kyt	m.anim.
17652	kyvati	v.intr. ipf.
17653	kyvnųti	v.intr. pf.
36888	Laba	f.sg.
1303	labęď	m.anim.
27028	labęďji	adj.
35560	laboratorija	f.
27030	lageŕ	m.
21323	lagodno	adv.
21327	lagodnosť	f.
21331	lagodny	adj.
27032	laj	m.
27033	lajańje	n.sg.
253	lajati	v.intr. ipf.
27036	lajno	n.sg.
36849	lak	m.
27037	lakomec	m.anim.
27039	lakomstvo	n.
27040	lakomy	adj.
32146	lakoničny	adj.
385	låkȯť	m.
36850	lakovati	v.tr. ipf.
33581	lama	f.
27041	lamańje	n.
266	lamati	v.tr. ipf.
20879	lampa	f.
17723	lancuh	m.
17724	lanec	m.
27044	lanjėc	m.
5951	lanji	adv.
32142	lanjka	f.
5953	lansky	adj.
502	lapa	f.
4701	lapati	v.tr. ipf.
35499	lapka	f.
27049	Laplandija	f.
23585	laser	m.
268	lasica	f.
27052	laska	f.
32147	laska	f.
32148	laska	f.
32150	laska	f.
267	laskati	v.tr. ipf.
27053	laskati	v.tr. ipf.
3226	laskavy	adj.
32152	laskavy	adj.
32153	laskavy	adj.
32154	laskavy	adj.
5675	laso	n.
2650	lastovica	f.
27059	latati	v.tr. ipf.
32263	lateks	m.anim.
16962	latinica	f.
2649	latinsky	adj.
879	Latvija	f.sg.
4724	Latyš	m.anim.
4723	latyšsky	adj.
32157	lava	f.
32601	lavanda	f.
8807	lavina	f.
27062	lavka	f.
33569	lavr	m.
32220	lavreat	m.anim.
19825	laziti	v.intr. ipf.
19826	laziti	v.intr. ipf.
27066	laznja	f.
27067	le	adv.
32158	le	adv.
27068	lěčebny	adj.
8809	lěčeńje	n.
4269	lěčiljnja	f.
14673	lěčitelj	m.anim.
36662	lěčiti sę	v.refl. ipf.
4130	lěčiti	v.tr. ipf.
2729	led	m.sg.
17725	leděna gora	f.
36230	leděna svěća	f.
27072	leděněti	v.intr. ipf.
27073	leděniti	v.tr. ipf.
27074	leděny	adj.
27076	lednik	m.
5908	ledolomač	m.
32159	ledovec	m.
19827	ledovity	adj.
14674	ledva	adv.
8816	lędvica	f.
8818	lędvičny kamenj	m.
8817	lędvičny	adj.
19498	legalizovati	v.tr. ipf.
19499	legaľny	adj.
20420	lęgati	v.tr. ipf.
1307	legenda	f.
35920	legendarny	adj.
35353	legija	f.
35352	legion	m.
35504	legitimny	adj.
8826	legke pěnęzy	m.pl.
2652	legko	adv.
19829	legkomysljny	adj.
3286	legkosť	f.
16482	legkověrny	adj.
884	legky	adj.
27273	legovišče	n.
19830	legše	adv.
17726	legši	adj.
36548	lęgti sę	v.refl. ipf.
20418	legti	v.intr. pf.
20421	lęgti	v.tr. ipf.
894	lehitsky	adj.
23758	lejka	f.
27098	lejtenant	m.anim.
407	lěk	m.
2873	lěkaŕ	m.anim.
27103	lěkaŕka	f.
8831	lěkaŕsky	adj.
27105	lěkaŕstvo	n.
2694	lekcija	f.
35946	leksika	f.
16963	leksikaľny	adj.
295	leksikon	m.
35210	lektor	m.anim.
27110	lelek	m.anim.
2653	lemeš	m.
306	len	m.sg.
27114	lenišče	n.
27115	lěniti sę	v.refl. ipf.
15374	lěnivec	m.anim.
8836	lěnivo	adv.
27118	lěnivosť	f.
8837	lěnivy	adj.
27122	lěnjesť	f.
1482	lěnji	adj.
32469	leopard	m.anim.
27126	lepetańje	n.sg.
27127	lepetati	v.intr. ipf.
23296	lěpilo	n.
32869	lěpiti sę	v.refl. ipf.
2298	lěpiti	v.tr. ipf.
8839	lěpje	adv.
27207	lěpkosť	f.
23294	lěpky	adj.
23872	lěpo	adv.
27131	lěpota	f.
32468	lepra	f.
2299	lěpši	adj.
3315	lěpy	adj.
2651	lěs	m.
36334	lesbijka	f.
36335	lesbijsky	adj.
17731	lěsisty	adj.
2654	lěska	f.
2655	leskati	v.intr. ipf.
2697	lesknųti	v.intr. pf.
27141	lěsnik	m.anim.
27140	lěsny orěh	m.
8848	lěsny požar	m.
23461	lěsny rog	m.
3632	lěsny	adj.
5850	lěsȯk	m.
27145	lesť	f.
17732	lěstvica	f.
27147	lešč	m.anim.
27148	leščina	f.
3626	let	m.
14676	lěta	n.pl.
19831	letač	m.anim.
16879	lětajųća myš	f.
8852	lětalo	n.
8855	lětańje	n.sg.
1202	lětati	v.intr. ipf.
19832	letěti	v.intr. ipf.
16275	letišče	n.
309	-lěťje	n.
17733	lětnji sȯlncevråt	m.
27156	lětnji, lětny	adj.
2661	lěto	n.
35962	letȯk	m.
20880	lětopis	m.
20882	lětopisec	m.anim.
17734	letova kabina	f.
27161	lětovati	v.intr. ipf.
27162	lětovišče	n.
2656	lev	m.anim.
27163	Lev	m.anim.
27165	lěvak	m.anim.
2696	lěvica	f.
27167	lěvica	f.
8859	levji	adj.
32167	lěvorųky	adj.
308	lěvy	adj.
2660	lězti	v.intr. ipf.
19833	lězti	v.intr. ipf.
2659	ležati	v.intr. ipf.
35987	ležęći velosiped	m.
35988	ležiped	m.
2427	ležišče	n.
14678	ležkovina	f.
17735	lgańje	n.sg.
17736	lgaŕ	m.anim.
17737	lgaŕka	f.
2658	lgati	v.intr. ipf.
2657	li	conj.
17738	li	particle
32448	Liban	m.sg.
32449	libansky	adj.
19502	liberalizacija	f.
19501	liberalizm	m.sg.
19503	liberalizovati	v.tr. ipf.
205	liberaľny	adj.
317	Libija	f.sg.
2710	libijsky	adj.
22300	libovoljny	adj.
889	lice	n.
8872	lice	n.
8876	liceměr	m.anim.
27186	liceměriti	v.intr. ipf.
3011	liceměŕje	n.sg.
8875	liceměrka	f.
8877	liceměrno	adv.
8878	liceměrny	adj.
35778	licencija	f.
36277	liči	n.indecl.
20422	ličinka	f.
19834	lično	adv.
3261	ličnosť	f.
770	ličny	adj.
321	lider	m.anim.
2663	lift	m.
17740	liga	f.
16964	ligatura	f.
35484	lignit	m.sg.
2687	Lihtenštejn	m.sg.
27192	lihva	f.
32170	lihva	f.
32172	lihvaŕ	m.anim.
32176	lihvaŕsky	adj.
32177	lihvaŕstvo	n.sg.
5313	lihy	adj.
5315	lihy	adj.
27193	lihy	adj.
36366	lihy	adj.
32873	liker	m.
32883	likvidacija	f.
32887	likvidator	m.anim.
32877	likvidovati	v.tr. ipf./pf.
27196	lilovy	adj.
33323	limfa	f.
33324	limfatičny vųzel	m.
319	limitovati	v.tr. ipf.
5239	limon	m.
35585	limonada	f.
34755	limuzina	f.
27198	lin	m.anim.
36846	linčevati	v.tr. ipf./pf.
35711	linearny	adj.
19835	lingvističny	adj.
2664	linija	f.
8885	linijka	f.
2885	linjati	v.intr. ipf.
6329	link	m.
32726	linza	f.
342	lipa	f.
27200	lipan	m.anim.
8890	lipenj	m.sg.
36811	Lisabon	m.
27212	lisę	n.
327	lisica	f.
27215	lisička	f.
27214	liśji	adj.
1397	list	m.
2863	list	m.
27221	lisťje	n.sg.
27219	listny	adj.
23859	listȯk	m.
8895	listopad	m.sg.
27223	listopad	m.sg.
35963	listovka	f.
335	lišaj	m.
27225	lišaj	m.
36435	lišati	v.tr. ipf.
20423	lišiti	v.tr. pf.
27229	litera	f.
6203	literarny	adj.
340	literatura	f.
27231	literaturny język	m.
35017	literaturny	adj.
338	liti	v.tr. ipf.
20424	liti	v.tr. ipf.
22599	litij	m.sg.
343	litȯvsky	adj.
23019	litr	m.
332	liturgičny	adj.
16965	liturgija	f.
331	Litva	f.sg.
4720	Litvanec	m.anim.
8903	Litvanka	f.
333	liva	f.
14683	livada	f.
27236	livny	adj.
27237	lizańje	n.sg.
334	lizati	v.tr. ipf.
8907	liznųti	v.tr. pf.
22398	ljaljka	f.
27242	ljněny	adj.
27144	ljstiti	v.tr. ipf.
32205	ljstivy	adj.
14684	ljuba	f.
8908	ljubezno	adv.
3225	ljubezny	adj.
20431	ljubimec	m.anim.
27245	ljubimy	adj.
20432	ljubitelj	m.anim.
35593	ljubitelj	m.anim.
356	ljubiti	v.tr. ipf.
32248	Ljubljana	f.sg.
20433	ljubopytnosť	f.
20434	ljubopytny	adj.
32202	ljubosť	f.
5247	ljubȯv	f.
8916	ljubȯvnica	f.
5248	ljubȯvnik	m.anim.
8918	ljubȯvno	adv.
5892	ljubȯvny	adj.
8919	ljubȯvny	adj.
27256	ljuby	m.anim.
27257	ljud	m.
1941	ljudi	f.pl.
27259	ljudny	adj.
14686	ljudobijstvo	n.sg.
17749	ljudojed	m.anim.
22953	ljudojedsky	adj.
17750	ljudojedstvo	n.sg.
8921	ljudova sila	f.
22956	ljudožerec	m.anim.
22958	ljudožersky	adj.
22957	ljudožerstvo	n.sg.
8924	ljudskomašinovy interfejs	m.
5316	ljudskosť	f.
4306	ljudsky	adj.
8925	ljudstvo	n.sg.
14688	ljudstvo	n.sg.
23759	ljuljati	v.tr. ipf.
34760	ljuljka	f.
35768	ljutnja	f.
27266	ljutosť	f.
8928	ljuty	m.sg.
27267	ljuty	adj.
27166	ljvę	n.
27168	ljvica	f.
2494	lȯb	m.
8929	lobanja	f.
34851	lobi	m.indecl.
17741	lobist	m.anim.
27269	loboda	f.
5788	lobovati	v.intr. ipf.
537	loď	f.
2886	lodka	f.
32130	logaritm	m.
19836	logično	adv.
363	logičny	adj.
8933	logika	f.
32186	logopedija	f.
17742	logovati sę	v.refl. ipf.
20426	loj	m.sg.
32757	lojalist	m.anim.
32756	lojaľnosť	f.
1249	lojaľny	adj.
27276	lojiti	v.tr. ipf.
35702	lokalitet	m.
27280	lokati	v.tr. ipf.
16966	lokativ	m.
27282	loknųti	v.tr. pf.
5669	lokomotiva	f.
27286	lom	m.
32192	lom	m.
27287	lomiti	v.tr. ipf.
27288	lomjeńje	n.sg.
19837	lomlivy	adj.
23523	London	m.sg.
366	lono	n.
17744	lono	n.
367	lopata	f.
27298	lopatka	f.
27302	lopuh	m.
35455	lori	m.anim.
386	loś	m.anim.
32264	losion	m.
36036	loskotati	v.tr. ipf.
27309	losoś	m.anim.
27308	lososina	f.
8941	loše	adv.
3446	loši	adj.
35229	loterija	f.
352	lov	m.
17745	lovec	m.anim.
32197	lovec	m.anim.
27314	lovečsky	adj.
8944	lovhata	f.
27315	lovišče	n.
8945	lovitelj	m.anim.
12057	loviti rybų	v.ipf.
1564	loviti	v.tr. ipf.
27318	loviti	v.tr. ipf.
27319	lovitva	f.
8947	lovjeńje	n.sg.
27321	lovny	adj.
36158	loza	f.
16268	lȯž	f.
20429	lože	n.
1893	lȯžica	f.
20430	ložišče	n.
353	lȯžka	f.
27329	lȯžnosť	f.
32196	lȯžnosť	f.
17746	lȯžny	adj.
339	luč	m./f.
375	lučiti	v.tr. ipf.
20436	lučše	adv.
14533	lučši	adj.
27338	ludy	adj.
374	lųk	m.
17751	luk	m.
27340	lųk	m.
376	lųka	f.
27344	lukavstvo	n.sg.
27345	lukavy	adj.
36646	lųkostrělėc	m.anim.
31866	lukovica	f.
17752	lukovy	adj.
2701	Luksemburg	m.sg.
4910	luksemburžsky	adj.
23588	luminescencija	f.
2690	luna	f.
27348	lunatik	m.anim.
4119	lunno světlo	n.sg.
15988	lunny	adj.
27351	lupina	f.
27352	lupiti	v.tr. ipf.
27353	luska	f.
27355	luskati	v.tr. ipf.
27358	luščina	f.
27359	luščiti	v.tr. ipf.
35796	luteransky	adj.
2691	lužičsky	adj.
2662	lyko	n.
27365	lysěti	v.intr. ipf.
27366	lysina	f.
27368	lyska	f.
329	lysy	adj.
6108	lyža	f.
27374	lžec	m.anim.
27375	lživosť	f.
17753	lživy	adj.
379	maćeha	f.
16786	Madagaskar	m.sg.
359	Madjar	m.anim.
8964	Madjarija	f.sg.
27381	madjarizacija	f.
8966	Madjarka	f.
2681	madjarsky	adj.
36812	Madrid	m.
19838	magazin	m.
23989	magazin	m.
19839	magičny	adj.
3230	magistr	m.anim.
36066	magnat	m.anim.
23589	magnet	m.
23590	magnetičny	adj.
12198	magnetny polus	m.
33086	magnetofon	m.
22607	magnezij	m.sg.
20438	mah	m.
5729	mahati glåvojų	v.ipf.
34490	mahati hvostom	phrase
960	mahati	v.intr. ipf.
23132	mahinacija	f.
5730	mahnųti glåvojų	v.pf.
203	mahnųti	v.intr. pf.
264	maj	m.sg.
27391	majak	m.
19840	majonez	m.
35079	major	m.anim.
23697	majsky hrųšč	m.anim.
20884	majstr	m.anim.
20885	majstrovsko dělo	n.
34779	majstrovsky	adj.
1451	mak	m.
3256	Makedonec	m.anim.
4726	Makedonija	f.sg.
2866	makedonsky	adj.
34785	makijaž	m.sg.
27397	makovka	f.
27399	maksimaľno	adv.
16422	maksimaľny	adj.
2689	maksimum	m.
22770	malajsky	adj.
22769	Malajzija	f.sg.
35107	malarija	f.
20446	malenjkosť	f.
8982	malenjky	adj.
27401	malěti	v.intr. ipf.
1621	malina	f.
27405	malinovy	adj.
20886	maljaŕ	m.anim.
36551	maljaŕ	m.anim.
5097	maljevati	v.tr. ipf.
1535	malo	adv.
17755	malodušny	adj.
20447	malokrvje	n.sg.
20448	malolětny	adj.
27412	maloljudny	adj.
32226	maloměrny	adj.
20450	malomȯlvny	adj.
27415	malosť	f.
31981	malosť	f.
20451	malovažny	adj.
22323	malověrny	adj.
27416	malovodny	adj.
383	malpa, malpica	f.
220	Malta	f.sg.
36817	maltejsky	adj.
35010	maltretovati	v.tr. ipf.
2682	maly	adj.
2707	mama	f.
27423	mamin	adj.
17757	mamiti	v.tr. ipf.
27429	mamlivy	adj.
33537	mamut	m.anim.
2708	mandat	m.
32507	mandolina	f.
3236	manera	f.
16747	maněrka	f.
32333	manevr	m.
35921	manevrovati	v.tr. ipf./pf.
32334	manevry	m.pl.
22621	mangan	m.sg.
36071	mango	n.
35348	manifest	m.
4984	manipulacija	f.
4983	manipulovati	v.tr. ipf.
32445	manžeta	f.
35754	mapa	f.
32995	marakasy	m.pl.
36075	marakuja	f.
34443	marcipan	m.sg.
8997	marec	m.sg.
27434	marena	f.
35747	marginalizacija	f.
35746	marginalizovati	v.tr. ipf./pf.
34419	marginaľny	adj.
22806	marihuana	f.
32989	marimba	f.
22400	marionetka	f.
22848	marka	f.
36008	marker	m.
17762	marlivo	adv.
17763	marlivosť	f.
17764	marlivy	adj.
35436	marmelada	f.
5928	Maroko	n.sg.
23592	Mars	m.sg.
23593	Marsian, Marsianin	m.anim.
19504	marš	m.
35369	maršal	m.
2869	marširovati	v.intr. ipf.
35589	maršrut	m.
27436	maršrutka	f.
36891	marulja	f.
34420	marža	f.
23594	masa	f.
36337	masakra	f.
19841	masakrovati	v.tr. ipf.
33370	masaž	m.
33371	masirovati	v.tr. ipf.
33372	masivny	adj.
27438	maska	f.
32129	maskovati	v.tr. ipf./pf.
2703	maslina	f.
9002	maslinovy olej	m.
9001	maslinovy	adj.
27440	masljak	m.
2704	maslo	n.
5804	masovy	adj.
2686	masť	f.
27441	mastiti	v.tr. ipf.
4974	masturbacija	f.
15995	masturbovańje	n.sg.
2685	masturbovati	v.intr. ipf.
2684	mašina	f.
27446	mašinaľno	adv.
17765	mašinist	m.anim.
17766	mašinopisec	m.anim.
17767	mašinostrojeńje	n.sg.
27447	mat	m.
36664	matč	m.
4322	matčina	f.
36602	matematičny	adj.
2709	matematik	m.anim.
892	matematika	f.
204	material	m.
27449	materiaľny	adj.
3289	materija	f.
27450	materin	adj.
20452	materinsky	adj.
27452	materinstvo	n.sg.
23650	maternica	f.
17769	materska klětka	f.
9008	materska ljubȯv	f.
6022	matersky	adj.
17770	mati	f.
35975	matrica	f.
27459	matuška	f.
4891	mavzolej	m.
2705	maź	f.
1934	mazati	v.tr. ipf.
36262	mazati	v.tr. ipf.
20453	mazilo	n.
20455	mazivo	n.
1935	mę	pron.pers.
163	mebelj	m.
32971	meblovati	v.tr. ipf./pf.
32999	mecosopran	m.
164	meč	m.
909	męč	m.
911	męčkati	v.tr. ipf.
35443	mečta	f.
35445	mečtatelj	m.anim.
35446	mečtateljny	adj.
35444	mečtati	v.intr. ipf.
639	med	m.sg.
2715	měď	m./f.
27471	medalist	m.anim.
27472	medalistka	f.
5805	medalj	f.
16004	medbrat	m.anim.
4897	medicina	f.
6275	medija	n.pl.
5045	meditacija	f.
5043	meditovati	v.intr. ipf.
36451	medium	m.anim.
4525	medliti	v.intr. ipf.
14691	medlo	adv.
2421	medly	adj.
14692	medly	adj.
23456	mědny dyhovy instrument	m.
27474	mědny, měděny	adj.
27478	medonosny	adj.
27479	medovar	m.anim.
27480	medovina	f.
27481	medovy	adj.
396	medsestra	f.
27482	medunka	f.
20458	meduza	f.
2394	medvěď	m.anim.
20459	medvěď-grizli	m.anim.
27484	medvědica	f.
32508	medvědik	m.
9034	medvěďje objęťje	n.
27488	medvěďji	adj.
9035	medvědny	adj.
27486	medvěđę	n.
27487	medvěđina	f.
2280	međa	f.
27490	međny	adj.
16863	među drugymi	adv.
16829	među inymi	adv.
2713	među	prep.
4929	među	prep.
32246	međudŕžavny	adj.
27492	međugoŕje	n.
35879	međugrådny	adj.
31841	međugrådsky	adj.
31839	međukontinentaľny	adj.
35745	međukulturny	adj.
19843	međuljudsky	adj.
19842	međumeťje	n.
2714	međunarodny	adj.
32413	međuplanetarny	adj.
27494	međurěčje	n.
31842	međuregionaľny	adj.
4442	međuslovjansky	adj.
17772	međusobny	adj.
1789	međutym	adv.
22483	međuvlasťje	n.
22575	međuvrěmę	n.
17773	međuvrěmenno	adv.
31840	međuzvězdny	adj.
33539	megabajt	m.
403	měh	m.
4862	mehaničny	adj.
35773	mehanik	m.anim.
4863	mehanika	f.
4861	mehanizm	m.
4353	měhuŕ	m.
9046	měhurny	adj.
33327	měhurȯk	m.
35368	mejnstrim	m.sg.
27501	mekati	v.intr. ipf.
27502	mękčeti	v.intr. ipf.
17784	mękčiti	v.tr. ipf.
27507	mękko	adv.
4245	mękkosť	f.
36336	mękkotěly	m.anim.
515	mękky	adj.
2870	meksikansky	adj.
22461	Meksiko	n.sg.
9047	mękše	adv.
27511	mělina	f.
27513	mělj	f.
1459	mělky	adj.
27515	měľnik	m.anim.
35947	melodičny	adj.
4767	melodija	f.
32239	memorandum	m.
27517	memorial	m.
1489	měna	f.
4803	mene	pron.pers.
33809	menedžer	m.anim.
27525	menj	m.anim.
32926	měnjati sę	v.refl. ipf.
20461	měnjati	v.tr. ipf.
2854	menje	adv.
23042	menju	m.indecl.
27527	měnlivy	adj.
17774	menstruacija	f.
391	menši	adj.
1537	menšinstvo	n.
19844	mentaľnosť	f.
19845	mentaľny	adj.
34933	mentor	m.anim.
2076	měra	f.
27533	meridian	m.
20466	měrilo	n.
1995	měriti	v.tr. ipf.
27536	měriti	v.intr. ipf.
885	měrjeńje	n.
20467	měrka	f.
23649	Merkurij	m.sg.
27539	měrny	adj.
27541	měrny	adj.
20468	měrodajny	adj.
23041	měrodajny	adj.
20887	męsaŕ	m.anim.
20888	męsarnja	f.
1456	měsęc	m.
4697	měsęc	m.
27546	měsęčina	f.
9066	měsęčna gazeta	f.
17776	měsęčnica	f.
27547	měsęčnik	m.
9063	měsęčno světlo	n.
14696	měsęčno	adv.
9065	měsęčny žurnal	m.
4116	měsęčny	adj.
14695	měsęčny	adj.
27552	męsisty	adj.
20480	měsiti	v.tr. ipf.
27553	męsnik	m.anim.
27554	męsny	adj.
513	męso	n.
17785	męsojed	m.anim.
22944	męsojedny	adj.
27557	Mesopotamija	f.sg.
22945	męsožerec	m.anim.
22946	męsožerny	adj.
3464	městečko	n.
19847	mesti	v.tr. ipf.
36142	městne izbory	m.pl.
16493	městnik, městny padež	m.
3436	městnosť	f.
3728	městny	adj.
5200	město rođeńja	n.
2721	město	n.
9076	městoimę	n.
17778	městopoložeńje	n.
27564	mešalka	f.
20470	měšanec	m.anim.
20471	měšanec	m.anim.
20475	měšanina	f.
4155	měšatelj	m.
2839	měšati	v.tr. ipf.
20478	měšćan, měšćanin	m.anim.
20479	měšćanstvo	n.sg.
27569	měšek	m.
19848	met	m.
27630	męta	f.
34863	meta	f.
35816	metabolizm	m.sg.
19849	metafor	m.
5255	metal	m.
36247	metaličny	adj.
35098	metalurgija	f.sg.
17780	metati monetų	v.ipf.
17781	metati těnj na	v.ipf.
2716	metati	v.tr. ipf.
2720	mětati	v.tr. ipf.
27573	meteńje	n.
36003	meteorit	m.
1424	meteorolog	m.anim.
5974	mętež	m.
27575	mętežny	adj.
27576	męti	v.tr. ipf.
19850	metla	f.
17783	metnųti těnj na	v.pf.
397	metnųti	v.tr. pf.
2867	metoda	f.
2719	metr	m.
35948	metrika	f.
2979	metro	n.
32882	metropolija	f.
27582	mezalians	m.
1369	mězga	f.
951	mgla	f.
9093	mglati	v.intr. ipf.
4135	mglisty	adj.
4804	mi	pron.pers.
36338	midija	f.
9095	mig	m.
9097	migańje	n.sg.
2180	migati	v.intr. ipf.
5980	migdalj	m.
858	mignųti	v.intr. pf.
35246	migracija	f.
27597	mikrobus	m.
23018	mikrogram	m.
23012	mikroskop	m.
23013	mikroskopičny	adj.
31744	mikrovaľna peć	f.
31745	mikrovȯlnova peć	f.
2724	miliard	num.card.
2218	milicija	f.
23016	miligram	m.
23022	mililitr	m.
23014	milimetr	m.
235	milion	num.card.
5317	militantny	adj.
32741	militarizm	m.sg.
21341	milja	f.
2726	miljny kamenj	m.
16485	milosŕďje	n.sg.
16486	milosŕdny	adj.
23333	milosť	f.
27599	milostivy	adj.
34780	milostynja	f.
9110	milovany	adj.
9111	milovati	v.tr. ipf.
27606	milovati	v.tr. ipf.
36249	milovati	v.tr. ipf.
1898	mily	adj.
34881	mim	m.anim.
32128	mimičny	adj.
34882	mimika	f.
746	mimo	prep.
19851	mimohodęći	adv.
17786	mimohodny	adj.
5992	mimohodȯm	adv.
22303	mimovoljno	adv.
22302	mimovoljny	adj.
405	minaret	m.
16301	mineral	m.
16302	mineraľna voda	f.
9117	minet	m.
35302	miniatura	f.
27613	minibus	m.
36355	minimalističny	adj.
36354	minimalizm	m.sg.
18718	minimalizovati	v.tr. ipf./pf.
2916	minimaľny	adj.
2732	minimum	m.
23466	Ministerstvo Finansov	n.
23477	Ministerstvo Obråny	n.
35642	Ministerstvo Pravosųďja	n.
23326	Ministerstvo Vněšnjih Děl	n.
23327	Ministerstvo Vnųtrišnjih Děl	n.
2730	ministerstvo	n.
2733	ministr	m.anim.
20482	minovati	v.tr. ipf.
23520	Minsk	m.sg.
17788	minųlosť	f.sg.
2734	minųly	adj.
16969	minus	m.
2727	minuta	f.
888	minųti	v.tr. pf.
2401	mir	m.sg.
20488	mir	m.sg.
27623	miraž	m.
20489	miriti	v.tr. ipf.
404	mirny	adj.
893	misija	f.
35360	misionaŕ	m.
5201	miska	f.
23300	mističny	adj.
35601	mistifikacija	f.
23299	mistik	m.anim.
23281	mit	m.
23282	mitičny	adj.
23284	mitologičny	adj.
23283	mitologija	f.
33009	mizantrop	m.anim.
33010	mizantropija	f.
36099	mjau	intj.
36596	mjaukati	v.intr. ipf.
36597	mjauknųti	v.intr. pf.
32735	mjuzikl	m.
27631	mlåćeńje	n.sg.
17789	mlådčica	f.
17790	mlådčik	m.anim.
27633	mlådę	n.
167	mlådec	m.anim.
9146	mlådečstvo	n.sg.
27636	mlådenec	m.anim.
27637	mlådensky	adj.
27638	mlåděti	v.intr. ipf.
27639	mlådež	f.
35305	mlådežny	adj.
9131	mlådica	f.
9133	mlådosť	f.
9134	mlådostno	adv.
15387	mlådostnosť	f.
9135	mlådostny	adj.
9136	mlådoženih	m.anim.
27632	mlådoženka	f.
9137	mlådši	adj.
499	mlådy	adj.
23152	mlåt	m.
27650	mlåťba	f.
27649	mlåtiti	v.tr. ipf.
310	mlåtȯk	m.
34439	mlavy	adj.
27654	mlěčaj	m.
23566	Mlěčna dråga	f.
23565	Mlěčny pųť	m.sg.
9142	mlěčny	adj.
27657	mlěkaŕ	m.anim.
2735	mlěko	n.
925	mlěti	v.tr. ipf.
27661	mlězivo	n.sg.
27662	mljaskati	v.intr. ipf.
34441	mlo	adv.
34440	mlosť	f.
34438	mly	adj.
23140	mlyn	m.
23150	mlynaŕ	m.anim.
1183	mně	pron.pers.
917	mněńje	n.
2923	mněti	v.tr. ipf.
17796	mněvati	v.tr. ipf.
34865	mnih	m.anim.
19852	mniška	f.
2736	mnogo	adv.
2738	mnogo	adv.
19853	mnogobarvny	adj.
17797	mnogobožstvo	n.sg.
20490	mnogocentričny	adj.
27674	mnogočisľny	adj.
19854	mnogojęzyčny	adj.
16450	mnogokråtno	adv.
32565	mnogokråtny	adj.
19855	mnogokulturny	adj.
16333	mnogokųtnik	m.
5131	mnogolětny	adj.
19856	mnogoljudny	adj.
32617	mnogonožky	f.pl.
20491	mnogoraky	adj.
21343	mnogorěčivy	adj.
21344	mnogoslovny	adj.
16971	mnogosložny	adj.
34917	mnogostrånny	adj.
16334	mnogovųgȯľnik	m.
17077	mnogy	adj.
35252	množina	f.
3698	množinstvo	n.
16972	množiteljny čislovnik	m.
19858	množiti	v.tr. ipf.
2740	množstveno čislo	n.
3084	množstvo	n.
36434	množstvo	n.
4975	mobilizacija	f.
2741	mobilizovati	v.tr. ipf.
35742	mobiľnosť	f.
32256	mobiľny telefon	m.
32257	mobiľny	adj.
635	moć	f.
27687	moćněti	v.intr. ipf.
9165	moćno	adv.
9166	moćnosť	f.
9167	moćnosť	f.
2743	moćny	adj.
27677	moč	f.
624	močar	m.
27681	močarny	adj.
27683	močevina	f.
1829	močiti sę	v.refl. ipf.
4161	močiti	v.tr. ipf.
15389	moda	f.
19859	model	m.
36916	modelovati	v.tr. ipf.
36923	modelovati	v.tr. ipf.
5905	modernizacija	f.
5904	modernizovati	v.tr. ipf.
900	moderny	adj.
35647	modifikacija	f.
35646	modifikovati	v.tr. ipf./pf.
27691	modistka	f.
9169	modny	adj.
27692	modrěti	v.intr. ipf.
27693	modrina	f.
27694	modriti	v.tr. ipf.
27695	modrooky	adj.
2742	modry	adj.
910	mogti	v.aux. ipf.
20495	mogųći	adj.
27700	mogųtny	adj.
2008	mogyla	f.
2754	mȯh	m.sg.
920	moj	pron.poss.
27710	moknųti	v.intr. ipf.
27711	mokrěti	v.intr. ipf.
27712	mokrica	f.
17801	mokrišče	n.
14705	mokriti	v.tr. ipf.
27715	mokrosť	f.
27716	mokrota	f.
2147	mokry	adj.
27718	mȯlčalivy	adj.
3361	mȯlčańje	n.sg.
1862	mȯlčati	v.intr. ipf.
9187	mȯlčno	adv.
9188	mȯlčny	adj.
3258	Moldavija, Moldova	f.sg.
27722	moldavsky	adj.
23596	molekula	f.
16011	molekularny	adj.
35011	molestovati	v.tr. ipf.
27727	molitevnik	m.
494	moliti sę	v.refl. ipf.
2178	molitva	f.
1861	molj	m.anim.
27730	mȯlknųti	v.intr. ipf.
5050	mȯlnja	f.
9192	mȯlva	f.
2179	mȯlviti	v.tr. ipf.
1859	moment	m.
5119	momentaľno	adv.
34864	monah	m.anim.
34866	monahynja	f.
27734	Monako	n.sg.
1860	monarh	m.anim.
1863	monarhija	f.
34073	monastyr	m.
4464	moneta	f.
22764	Mongolija	f.sg.
22765	mongoľsky	adj.
27736	monisto	n.
32838	monogram	m.
32254	monolit	m.
32255	monolitny	adj.
32253	monolog	m.
19520	monopol	m.
23597	monoteizm	m.sg.
4205	montaža	f.
15390	montovańje	n.sg.
5682	montovati	v.tr. ipf.
1858	monument	m.
4118	monumentaľny	adj.
35045	moped	m.
20496	mor	m.
2761	mora	f.
27740	moral	m.
23698	moralizovati	v.intr. ipf.
24000	moraľnosť	f.
32285	moraľny	adj.
14711	morati	v.aux. ipf.
2753	Moravija	f.sg.
35840	moravsky	adj.
23704	morda	f.
19860	morfem	m.
23202	morfin	m.sg.
35217	morfologija	f.
34832	moriti sę	v.refl. ipf.
20497	moriti	v.tr. ipf.
20498	moriti	v.tr. ipf.
5935	morjak	m.anim.
2745	morje	n.
5934	morjeplavatelj	m.anim.
20890	morjeplavstvo	n.sg.
19861	morny	adj.
9217	moŕska stěna	f.
32938	moŕska trava	f.
32937	moŕska vodoråsť	f.
20499	moŕska zvězda	f.
929	moŕsko dno	n.
36625	moŕsky jež	m.
20500	moŕsky konik	m.anim.
27754	moŕsky	adj.
36085	morva	f.
35452	morž	m.anim.
4722	moskȯvsky	adj.
4721	Moskva	f.sg.
2747	most	m.
27761	mošna	f.
27763	mošna	f.
3211	motati	v.tr. ipf.
32628	motiv	m.
646	motivacija	f.
2749	motivovati	v.tr. ipf.
36290	motocikl	m.
27767	motȯk	m.
21345	motor	m.
27769	motovilo	n.
27770	motto	n.
5676	motvųz	m.
645	motyka	f.
2748	motylik	m.anim.
21346	motylj	m.anim.
2750	Mozambik	m.sg.
935	mozg	m.
9230	mozgova proteza	f.
17805	mozgovy udar	m.
9229	mozgovy	adj.
2395	mozȯčna kosť	f.
27777	mozolj	f.
934	može byti	phrase
9232	može	adv.
9246	možlivo	adv.
2752	možlivosť	f.
280	možlivy	adj.
19144	možno najskorěje	adv.
926	možno	adv.
3395	možnosť	f.
3336	možny	adj.
27788	mråčiti sę	v.refl. ipf.
27789	mråčnosť	f.
6033	mråčny	adj.
6031	mråk	m.
35051	mramor	m.sg.
17810	mråvišče	n.
19862	mråvja kopa	f.
27795	mråvji	adj.
785	mråvka	f.
32505	mråvojed	m.anim.
27797	mråz	m.
4496	mråzilka	f.
9269	mråzina	f.
4140	mråziti	v.tr. ipf.
27800	mråzny	adj.
17812	mråzosušati	v.tr. ipf.
9264	mråzosušeńje	n.sg.
9270	mråzosušeny	adj.
9263	mråzosušiti	v.tr. pf.
17811	mråženy	adj.
27802	mrčati	v.tr. ipf.
34493	mrdati	v.intr. ipf.
34497	mrdnųti	v.intr. pf.
286	mrěža	f.
27806	mŕknųti	v.intr. ipf.
928	mrkva	f.
23899	mrmjati	v.tr. ipf.
22954	mŕša	f.
27807	mŕščina	f.
31912	mrščiti brvi	v.intr. ipf.
27809	mrščiti sę	v.refl. ipf.
27808	mrščiti	v.tr. ipf.
22955	mŕšejed	m.anim.
27810	mŕtvec	m.anim.
27811	mŕtvečina	f.
27813	mŕtvěti	v.intr. ipf.
32295	mŕtvěti	v.intr. ipf.
22908	mŕtvozornik	m.anim.
1793	mŕtvy	adj.
3339	mŕtvy	adj.
34463	mŕzavec	m.anim.
34466	mŕzko	adv.
34459	mŕzkosť	f.
3561	mŕzky	adj.
2746	mrznųti	v.intr. ipf.
5599	msta	f.
27820	mstitelj	m.anim.
5597	mstiti	v.tr. ipf.
5600	mstivy	adj.
23595	mša	f.
14717	mu	pron.pers.
32309	mučańje	n.sg.
32310	mučati	v.intr. ipf.
27824	mųčenica	f.
32296	mųčeničstvo	n.sg.
27825	mųčenik	m.anim.
3856	mųčeńje	n.
9274	mųčiljnja	f.
9275	mųčitelj	m.anim.
27828	mųčiteljny	adj.
9273	mųčiti do smŕti	v.ipf.
1173	mųčiti	v.tr. ipf.
9279	mudak	m.anim.
27833	mųdo	n.
23760	mųdrec	m.anim.
27835	mųdrěti	v.intr. ipf.
9280	mųdrosť	f.
2751	mųdry	adj.
2760	muha	f.
27843	muholovka	f.
27844	muholovka	f.
27845	muhomor	m.
905	mųka	f.
17816	mųka	f.
27849	mukańje	n.sg.
27850	mukati	v.intr. ipf.
27851	mulj	m.sg.
35797	multikulturny	adj.
32364	mumija	f.
14719	musěti	v.aux. ipf.
3995	muskul	m.
32513	muskus	m.sg.
32514	muskusna krysa	f.
922	musliman, muslimanin	m.anim.
35798	muslimanka	f.
35799	muslimansky	adj.
27858	muška	f.
20501	mųť	f.
19863	mutant	m.anim.
20503	mųtiti	v.tr. ipf.
20504	mųtiti	v.tr. ipf.
27861	mųtněti	v.intr. ipf.
27862	mųtnosť	f.
20506	mųtny	adj.
936	muzej	m.
198	muzika	f.
32737	muzikaľna grupa	f.
4791	muzikaľny	adj.
1452	muzikant	m.anim.
1521	mųž	m.anim.
3313	mųž	m.anim.
27871	mųžev	adj.
3402	mųžiti sę	v.refl. ipf.
9292	mųžskosť	f.
2755	mųžsky rod	m.
5251	mųžsky	adj.
4406	mųžstvo	n.
2722	my	pron.pers.
27882	myliti sę	v.refl. ipf.
27880	myliti	v.tr. ipf.
27881	myliti	v.tr. ipf.
36144	myľnica	f.
1878	mylo	n.
27885	mys	m.
27887	myslim, mysljų	phrase
9310	myslimo	adv.
32318	myslimy	adj.
27888	myslitelj	m.anim.
14724	mysliti o	v.tr. ipf.
2744	mysliti	v.tr. ipf.
2731	myslj	f.
27905	mysljeńje	n.sg.
27886	mysljenny	adj.
1573	myš	f.
27898	myšasty	adj.
9129	myšca	f.
23045	myšelovka	f.
27904	myškovati	v.intr. ipf.
1788	myti	v.tr. ipf.
36176	mytnica	f.
27911	myto	n.
2757	na dol	adv.
27957	na dȯlgo	adv.
9317	na dolu	adv.
33735	na glås	adv.
16765	na glåvų naseljeńja	adv.
17821	na javu	adv.
28005	na javu	adv.
17822	na počętku	adv.
36212	na polovině drågy	adv.
19864	na prěkor	prep.
9318	na ščęsťje	adv.
17823	na vŕhu	adv.
17825	na vśakų okoľnosť	adv.
17824	na vśaky slučaj	adv.
2758	na žalosť	adv.
33330	na živo	adv.
33331	na živo	adv.
2756	na	prep.
4939	na	prep.
27916	nabajati	v.intr. pf.
34834	nabajati	v.intr. pf.
20508	naběg	m.
27920	naběgati sę	v.refl. pf.
17826	nabirati	v.tr. ipf.
20513	nabiti	v.tr. pf.
20511	nabivati	v.tr. ipf.
20516	naboj	m.
17829	nabožny	adj.
17831	nabrati	v.tr. pf.
27930	nabreknųti	v.intr. pf.
27931	nabrěžna	f.
32382	nabuhati	v.intr. ipf.
27932	nabuhnųti	v.intr. pf.
27933	nabyti	v.tr. pf.
32383	nabyvati	v.tr. ipf.
33363	nabzděti	v.intr. pf.
22823	nacionalist	m.anim.
17834	nacionalističny	adj.
2759	nacionalizacija	f.
5318	nacionalizm	m.sg.
4964	nacionalizovati	v.tr. ipf.
1522	nacist	m.anim.
2739	nacističny	adj.
22824	nacizm	m.sg.
34203	načaditi	v.intr. pf.
9323	načeľnik policije	m.anim.
9324	načeľnik štaba	m.anim.
948	načeľnik	m.anim.
9325	načęlo	n.
1502	načęti sę	v.refl. pf.
22780	načęti	v.tr. pf.
14727	načęťje	n.
27937	načętȯk	m.
5516	načinati sę	v.refl. ipf.
22779	načinati	v.tr. ipf.
27940	načitati sę	v.refl. pf.
27938	načrpati	v.tr. pf.
21347	načrtati	v.tr. pf.
27941	načto	adv.
2765	nad	prep.
4932	nad	prep.
9330	nad-	prefix
17835	nadalje	adv.
25121	nadarmo	adv.
17083	nadati	v.tr. pf.
16974	nadavati	v.tr. ipf.
3132	naděja	f.
17836	nadějati sę	v.refl. ipf.
36881	nadějny	adj.
32618	nadělati	v.tr. pf.
17837	naděti	v.tr. pf.
17838	naděti	v.tr. pf.
17840	naděvati	v.tr. ipf.
17841	naděvati	v.tr. ipf.
27952	nadežny	adj.
17843	nadglåvišče	n.
5814	nadględati	v.ipf.
5817	nadględěti	v.pf.
5357	nadigrati	v.tr. pf.
5358	nadigryvati	v.tr. ipf.
36556	nadir	m.
19865	nadljudsky	adj.
23335	nadměrno	adv.
23334	nadměrnosť	f.
20517	nadměrny	adj.
36457	nadmnožstvo	n.
35396	nadnacionaľny	adj.
22162	nadobyčajny	adj.
6278	nadȯhneńje	n.sg.
6277	nadȯhnųti	v.tr. pf.
19866	nadoprošćeny	adj.
20892	nadpis	m.
27958	nadpis	m.
36310	nadprirodny	adj.
5621	nadųti	v.tr. pf.
33039	nadųty	adj.
33040	nadųty	adj.
19867	nadųvati	v.tr. ipf.
22936	nadužiti	v.tr. pf.
22935	naduživati	v.tr. ipf.
6276	nadyhati	v.tr. ipf.
2924	nadzirati	v.tr. ipf.
2766	nadzor	m.
35186	nadzornik	m.anim.
2763	nafta	f.
2762	naftoprovod	m.
32806	naganjati strah někomu	phrase
32811	naganjati	v.tr. ipf.
36236	naglåvna nametka	f.
36672	naględny	adj.
4247	naglo	adv.
9350	nagly kolaps	m.
2764	nagly	adj.
15398	nagly	adj.
32808	nagnati strah někomu	phrase
27975	nagnati	v.tr. pf.
27976	nagnojiti	v.tr. pf.
17846	nagnųti	v.tr. pf.
9353	nagorno	adv.
27981	nagorny	adj.
27982	nagosť	f.
27983	nagota	f.
28644	nagȯtky	m.pl.
27984	nagovoriti	v.tr. ipf.
943	nagråda	f.
4121	nagråditi	v.tr. pf.
4122	nagrađati	v.tr. ipf.
27991	nagrěti	v.tr. pf.
32416	nagrěvati	v.tr. ipf.
17850	nagromaditi	v.tr. pf.
17848	nagromađati	v.tr. ipf.
17849	nagromađeńje	n.
5319	nagy	adj.
17845	nagybati	v.tr. ipf.
27998	nahmuriti	v.tr. pf.
32818	nahmurjeny	adj.
14285	nahoditi sę	v.refl. ipf.
2055	nahoditi	v.tr. ipf.
15399	nahodka	f.
17851	nahodnosť	f.
28002	nahvatati	v.tr. pf.
17854	naigrati	v.tr. pf.
17856	naigryvati	v.tr. ipf.
9357	naivnik	m.anim.
16722	naivnosť	f.
16721	naivny	adj.
28004	naj-	prefix
9359	najblizši	adj.
9358	najbliže	adv.
9360	najbogatši	adj.
16916	najbolje	adv.
35661	najboljši	adj.
20519	najčęstěje	adv.
23044	najdalje	adv.
23043	najdaljši	adj.
9361	najdivnějši	adj.
781	najdti	v.tr. pf.
32423	najedati sę	v.refl. ipf.
9365	najem	m.sg.
28010	najemnica	f.
32854	najemnik	m.anim.
9409	najemny råbotnik	m.anim.
32860	najemny ubijca	m.anim.
28012	najemny	adj.
28006	najesti sę	v.refl. pf.
9410	najęti	v.tr. pf.
17861	najęti	v.tr. pf.
17860	najezd	m.
36046	najezdnik	m.anim.
34831	naježiti sę	v.refl. pf.
31962	naježiti	v.tr. pf.
5868	najglųbši	adj.
9369	najgorše	adv.
779	najgorši	adj.
9371	najhlådnějši	adj.
9372	najkrasivši	adj.
9373	najkrasnějši	adj.
9374	najkrvavši	adj.
17862	najlegši	adj.
17863	najlěpje	adv.
2770	najlěpši	adj.
3280	najlučši	adj.
9377	najmalo	adv.
32859	najmatelj	m.anim.
5512	najmati	v.tr. ipf.
9408	najmati	v.tr. ipf.
35889	najmě	adv.
9379	najmękši	adj.
4718	najmenje	adv.
9381	najmenši	adj.
2769	najmnogo	adv.
9382	najnizši	adj.
3841	najnovějši	adj.
16282	najpozdněje	adv.
9383	najpozdnějši	adj.
17866	najprostějši	adj.
19868	najpŕvo	adv.
16283	najraněje	adv.
9384	najranši	adj.
9386	najstarějši, najstarši	adj.
20520	najvęće	adv.
9364	najvęćši	adj.
14734	najveliky	adj.
1488	najvyše	adv.
9390	najzimnějši	adj.
3281	najzly	adj.
32013	nakalati	v.tr. ipf.
28022	nakapati	v.intr. pf.
5790	nakaz na arešt	m.
9393	nakaz	m.
3061	nakazati	v.tr. pf.
3112	nakazyvati	v.tr. ipf.
19869	naklad	m.
19871	naklad	m.
28027	naklad	m.
6087	nakladati	v.tr. ipf.
28028	nakladati	v.tr. ipf.
21348	naklanjati	v.tr. ipf.
28032	naklåti na	v.tr. pf.
19875	naklon	m.
21349	nakloniti	v.tr. pf.
35936	naklonjeńje	n.
28040	naklonjeny	adj.
19876	naklonnosť	f.
28041	nakolěnnik	m.
17869	nakonec	adv.
28042	nakopati	v.tr. pf.
32865	nakopyvati	v.tr. ipf.
23040	nakovaljnja	f.
5594	nakrmiti	v.tr. pf.
23703	nakryti	v.tr. pf.
23702	nakryvati	v.tr. ipf.
28025	nakydati	v.tr. pf.
32677	nakydyvati	v.tr. ipf.
28051	nalagati	v.tr. ipf.
32679	nalagati	v.tr. ipf.
20521	nalegati	v.intr. ipf.
20522	nalegti	v.intr. pf.
19878	nalet	m.
9398	nalěvo	adv.
1010	naležati	v.intr. ipf.
20523	naležity	adj.
28058	naliti	v.tr. ipf.
28059	nalivati	v.tr. pf.
28060	nalivka	f.
21350	nalivno pero	n.
6088	naložiti	v.tr. pf.
28030	naložiti	v.tr. pf.
20525	naložnica	f.
2925	nam	pron.pers.
28065	namastiti	v.tr. pf.
32875	namašćati	v.tr. ipf.
32233	namazati	v.tr. pf.
32234	namazyvati	v.tr. ipf.
9402	naměr	m.
5153	naměriti	v.tr. pf.
5151	naměrjati	v.tr. ipf.
20527	naměstnik	m.anim.
4162	namočiti	v.tr. pf.
9405	namokriti	v.tr. pf.
9406	namontovati	v.tr. pf.
23705	namordnik	m.
28074	namotati	v.tr. pf.
32866	namotyvati	v.tr. ipf.
32320	namyliti	v.tr. pf.
32321	namyljati	v.tr. ipf.
28077	nanesti	v.tr. pf.
33511	nanizati	v.tr. pf.
3858	nanos	m.
28080	nanositi	v.tr. ipf.
5964	nanovo	adv.
35419	naočila	n.pl.
28081	naopak	adv.
28082	naostriti	v.tr. pf.
3441	napad	m.
20894	napad	m.
955	napadati	v.tr. ipf.
2031	napadati	v.tr. ipf.
28084	napadnik	m.anim.
20898	napadny	adj.
28089	napajati	v.tr. ipf.
32705	napajati	v.tr. ipf.
36250	napajati	v.tr. ipf.
36807	napaljeny	adj.
16750	napamęť	adv.
36724	naparfumovati sę	v.refl. pf.
23878	naparfumovati	v.tr. pf.
32948	napasti sę	v.refl. pf.
957	napasti	v.intr. pf.
28091	napasti	v.tr. pf.
9417	napastnik	m.anim.
28095	napęti	v.tr. pf.
20900	napętosť	f.
20901	napęty	adj.
28096	napěv	m.
32923	naphati	v.tr. pf.
28097	napihati	v.tr. ipf.
28098	napinati	v.tr. ipf.
28099	napirati	v.intr. ipf.
6280	napis	m.
958	napisati	v.tr. pf.
28102	napiti sę	v.refl. pf.
32955	napiti sę	v.refl. pf.
2927	napitȯk	m.
32956	napivati sę	v.refl. ipf.
32957	napivati sę	v.refl. ipf.
28106	napljuvati	v.intr. pf.
20903	naplyv	m.
4094	napoj	m.
28109	napojiti	v.tr. pf.
32706	napojiti	v.tr. pf.
35531	napojnica	f.
17876	napȯlniti perami	v.tr. pf.
1089	napȯlniti	v.tr. pf.
2928	napominati	v.tr. ipf.
23875	napomněńje	n.
2768	napomněti	v.tr. pf.
20904	napor	m.
20905	napor	m.
17877	naposlěd	adv.
17880	naposlědȯk	adv.
16975	napr.	adv.
3292	napravdų	adv.
5548	napraviti sę	v.refl. pf.
5550	napraviti	v.tr. pf.
28120	napraviti	v.tr. pf.
33047	napraviti	v.tr. pf.
3658	napravjati sę	v.refl. ipf.
5549	napravjati	v.tr. ipf.
33051	napravjati	v.tr. ipf.
33053	napravjati	v.tr. ipf.
28121	napravo	adv.
28122	napråzdno	adv.
28123	napråzdny	adj.
2791	naprěd	adv.
20907	naprěd	adv.
28129	naprěti	v.intr. pf.
20909	napręžeńje	n.
28130	napriklad	adv.
28131	napriměr	adv.
15403	naprostrina	f.
4067	naprotiv	prep.
28135	napŕstȯk	m.
2767	naprųžeńje	n.
20910	naprųžiti	v.tr. pf.
20913	napustiti	v.tr. pf.
20912	napušćati	v.tr. ipf.
33056	narastati	v.intr. ipf.
28139	naråsti	v.intr. pf.
36238	narcis	m.
36240	narcističny	adj.
36239	narcizm	m.
21351	narěčena	f.
21352	narěčeny	m.anim.
9440	narěčje	n.
9441	narěčje	n.
21353	narěkańje	n.
21354	narěkati	v.intr. ipf.
33141	narěkati	v.tr. ipf.
28145	narěkti	v.tr. pf.
28148	narězati	v.tr. ipf.
950	narkoman	m.anim.
36284	narkomanija	f.
33077	narkotik	m.
36285	narkoza	f.
28149	naročito	adv.
21356	naročity	adj.
1013	narod	m.
28153	naroditi	v.tr. pf.
9444	narodna vojna	f.
16976	narodnosť	f.
4307	narodny	adj.
6096	narodobijstvo	n.sg.
20914	narodopis	m.
17884	narodopisec	m.anim.
28156	narođeńje	n.
28157	narožny	adj.
36788	narųčati	v.tr. ipf.
36787	narųčiti	v.tr. pf.
28158	narųčje	n.sg.
23985	narųčka	f.
36790	narųčka	f.
28159	narųčny časovnik	m.
2788	narušati	v.tr. ipf.
9445	narušeńje	n.
1645	narušiti	v.tr. pf.
28163	narvati	v.tr. pf.
5542	narysovati	v.tr. pf.
33188	naryvati	v.tr. ipf.
982	nas	pron.pers.
33191	nasad	m.
28169	nasaditi	v.tr. pf.
33190	nasađati	v.tr. ipf.
34136	nascati	v.intr. pf.
28172	nasěděti sę	v.refl. pf.
21360	nasědka	f.
28174	nasěkati	v.tr. ipf.
17885	nasěkomo	n.
28175	nasěkti	v.tr. pf.
3776	naseliti	v.tr. pf.
3781	naseljati	v.tr. ipf.
2787	naseljeńje	n.
3782	naseljeny	adj.
578	nasiľje	n.sg.
21361	nasiľnik	m.anim.
9453	nasiľno	adv.
9454	nasiľnosť	f.
9455	nasiľny	adj.
36043	nasilovańje	n.
36865	naskakati	v.intr. ipf.
36866	naskakati	v.intr. ipf.
36867	naskakati	v.intr. ipf.
28183	naskočiti	v.intr. pf.
28184	naskočiti	v.intr. pf.
36864	naskočiti	v.intr. pf.
9456	naskoro	adv.
14737	naskroz	adv.
28186	naslåda	f.
28189	naslåditi sę	v.refl. pf.
28187	naslåditi	v.tr. pf.
33275	naslađati sę	v.refl. ipf.
33278	naslađati	v.tr. ipf.
1195	naslěditi	v.tr. pf.
9459	naslědnica	f.
969	naslědnik	m.anim.
9462	naslědnik	m.anim.
9464	naslědnosť	f.
15404	naslědny	adj.
161	naslědȯk	m.
28196	naslědovańje	n.
36688	naslědovańje	n.sg.
9466	naslědovati	v.tr. ipf.
21363	naslědovati	v.tr. ipf.
761	naslědstvo	n.
28200	naslušati sę	v.refl. pf.
28204	nasmeška	f.
28206	nasmoliti	v.tr. pf.
35866	nasos	m.
28209	naspati sę	v.refl. pf.
21730	nastati	v.intr. pf.
21728	nastavati	v.intr. ipf.
9468	nastaviti	v.tr. pf.
9469	nastaviti	v.tr. pf.
28215	nastaviti	v.tr. pf.
33149	nastaviti	v.tr. pf.
33150	nastavjati	v.tr. ipf.
33151	nastavjati	v.tr. ipf.
33152	nastavjati	v.tr. ipf.
33153	nastavjati	v.tr. ipf.
17888	nastavjeńja	n.pl.
17889	nastavjeńje	n.
21733	nastavȯk	m.
28219	nastěnny	adj.
28220	nastěž	adv.
28221	nastignųti	v.tr. pf.
21732	nastojati	v.intr. pf.
28225	nastojčivy	adj.
2779	nastojęći	adj.
36847	nastojivati	v.intr. ipf.
20915	nastoľna lampa	f.
20916	nastoľna světilka	f.
28227	nastradati sę	v.refl. pf.
33420	nastrajati	v.tr. ipf.
33421	nastrajati	v.tr. ipf.
36673	nastrašiti sę	v.refl. pf.
28228	nastrašiti	v.tr. pf.
21906	nastråžiti sę	v.refl. pf.
2777	nastrojeńje	n.
9472	nastrojevy	adj.
28232	nastrojiti	v.tr. pf.
28233	nastrojiti	v.tr. pf.
17891	nastrojky	f.pl.
3040	nastųpajųći	adj.
21928	nastųpati	v.intr. ipf.
33299	nastųpati	v.intr. ipf.
21929	nastųpiti	v.intr. pf.
28236	nastųpiti	v.intr. pf.
28238	nastųpnica	f.
28239	nastųpnik	m.anim.
9474	nastųpny	adj.
19879	nasųćny	adj.
33096	nasųćny	adj.
28260	nasyćati	v.tr. pf.
28261	nasyćeńje	n.sg.
21998	nasyp	m.
28259	nasypati	v.tr. pf.
28262	nasytiti	v.tr. pf.
1993	naš	pron.poss.
2776	naša era	f.
28251	našeptati	v.tr. pf.
17886	našijnik	m.
28253	našiti	v.tr. pf.
28255	našivati	v.tr. ipf.
28265	natęgati	v.tr. ipf.
28267	natęgnųti	v.tr. ipf.
28146	natěšiti sę	v.refl. pf.
14741	natipkati	v.tr. pf.
28271	natirati	v.tr. ipf.
2775	natisk	m.
4826	natiskati	v.tr. ipf.
3755	natisknųti	v.tr. pf.
28278	natočiti	v.tr. pf.
33428	natočiti	v.tr. pf.
28280	natoliko	adv.
5601	natȯlkati sę	v.refl. ipf.
2790	natȯlkti sę	v.refl. pf.
28285	natreti	v.tr. pf.
22606	natrij	m.sg.
28288	natŕpěti sę	v.refl. pf.
28290	natruditi sę	v.refl. pf.
22044	natųga	f.
3411	naturalističny	adj.
3410	naturalizm	m.sg.
3409	naturaľny	adj.
28292	natvoriti	v.tr. pf.
9483	natvrđeńje	n.sg.
985	naučiti sę	v.refl. pf.
3540	naučiti	v.tr. pf.
2782	naučnik	m.anim.
3997	naučny	adj.
2005	nauka	f.
28306	naušnica	f.
28307	naušnik	m.
16748	naušniky	m.pl.
28309	navaga	f.
22186	naval	m.
22221	navěditi	v.tr. pf.
22220	navěđati	v.tr. ipf.
28319	navěky	adv.
28322	navěsiti	v.tr. pf.
28316	navesti	v.tr. pf.
31938	navesti	v.tr. pf.
28324	navěšati	v.tr. ipf.
9490	navet	adv.
17892	navětrny	adj.
20529	navęzati	v.intr. pf.
28326	navęzati	v.tr. pf.
20530	navęzyvati	v.intr. ipf.
33213	navęzyvati	v.tr. ipf.
20531	navigacija	f.
35898	navigator	m.anim.
28334	naviti	v.tr. pf.
28335	navivati	v.tr. ipf.
28336	navlåčka	f.
22519	navlåka	f.
29781	navlåžiti	v.tr. pf.
33464	navlěkati	v.tr. ipf.
28338	navlěkti	v.tr. pf.
28342	navoditi	v.tr. ipf.
31933	navoditi	v.tr. ipf.
35500	navodnica	f.
22551	navodniti	v.tr. pf.
28343	navodnjańje	n.
22550	navodnjati	v.tr. ipf.
28346	navoščiti	v.tr. pf.
28351	navråžiti	v.intr. pf.
22161	navyk	m.
17893	navyše	adv.
28355	navznak	adv.
2781	nazad	adv.
9494	nazadno	adv.
9495	nazadnosť	f.
9496	nazadny	adj.
32964	nazdråviti	v.intr. pf.
32962	nazdravjati	v.intr. ipf.
28357	nazemny	adj.
3622	naznačati	v.tr. ipf.
22855	naznačati	v.tr. ipf.
22858	naznačati	v.tr. ipf.
23292	naznačeny	adj.
3623	naznačiti	v.tr. pf.
22856	naznačiti	v.tr. pf.
22859	naznačiti	v.tr. pf.
5183	nazva	f.
971	nazvany	adj.
2786	nazvati	v.tr. pf.
16284	nazyvati sę	v.refl. ipf.
2783	nazyvati	v.tr. ipf.
5987	ne bųde	adv.
5986	ne bylo	adv.
9553	ne dozvaljaje sę	phrase
3563	ne ględęći na	prep.
17895	ne imaje značeńja	phrase
35354	ne ljubiti	v.tr. ipf.
21368	ne poslušati	v.tr. pf.
14751	ne pozvaljaje sę	phrase
21367	ne slušati	v.tr. ipf.
35248	ne sȯglasiti sę, ne sųglasiti sę	v.refl. pf.
35247	ne sȯglašati sę, ne sųglašati sę	v.refl. ipf.
9525	Ne trati vrěmene!	phrase
9526	ne trěba	phrase
16285	Ne trěba	phrase
2784	ne	adv.
3989	ne	intj.
2020	neadekvatnosť	f.
19880	neadekvatny	adj.
34429	neandertalec	m.anim.
972	nebesky	adj.
5683	nebesno tělo	n.
9530	nebesny	adj.
3547	nebezpečnosť	f.
3549	nebezpečny	adj.
4904	neblågodarny	adj.
2792	nebo	n.
33199	nebodrap	m.
17896	nebogy	adj.
9537	nebojazlivosť	f.
9540	nebojazlivy	adj.
9541	nebojaznik	m.anim.
35387	nebožčik	m.
14757	nebrěžnosť	f.
14756	nebrěžny	adj.
19881	nebsky	adj.
14745	nebystry	adj.
28375	nebyťje	n.sg.
17898	nebyvaly	adj.
4033	něčemu	adv.
28376	nečestivy	adj.
28378	nečestny	adj.
2772	něčij	pron.poss.
2481	nečistota	f.
3556	nečisty	adj.
19882	něčto	pron.indef.
14746	nedaleky	adj.
9545	nedavno	adv.
963	nedavny	adj.
16253	nedbalosť	f.
16255	nedbaly	adj.
35389	nedějųći	adj.
9547	nedělja	f.
36671	nedobro	adv.
28389	nedobry	adj.
33135	nedobry	adj.
20532	nedomȯlvka	f.
20533	nedonosȯk	m.anim.
36114	nedopustimy	adj.
20534	nedoråzuměńje	n.
20535	nedoråzuměti	v.tr. pf.
20536	nedoråzuměvati	v.tr. ipf.
32227	nedoråzvity	adj.
35664	nedoslědno	adv.
35665	nedoslědnosť	f.
35666	nedoslědny	adj.
19883	nedostatȯčno	adv.
17899	nedostatȯčnosť sŕdca	f.
1018	nedostatȯk	m.
21737	nedostatȯk	m.
36148	nedostavati	v.intr. ipf.
19885	nedostojny	adj.
17900	nedostųpny	adj.
36083	nedotykajemosť	f.
36082	nedotykajemy	adj.
22172	nedouměńje	n.sg.
33435	nedověra	f.
35299	nedovŕšenosť	f.
35290	nedovŕšeny	adj.
36686	nedozvoljeny	adj.
35955	nedŕžavny	adj.
28396	nedųg	m.
34772	nedvižimosť	f.
35916	neefektivny	adj.
20537	neformaľny	adj.
2173	negativny	adj.
28398	negodny	adj.
33183	negodny	adj.
33186	negodny	adj.
17907	negodovańje	n.sg.
9555	negotovy	adj.
28400	negramotnosť	f.
33200	negramotnosť	f.
33202	negramotny	adj.
33204	negramotny	adj.
34915	negybky	adj.
9556	Nehaj sila bųde s tobojų!	phrase
9558	nehaj	particle
2900	nehati	v.tr. pf.
33112	neizběžno	adv.
33115	neizběžnosť	f.
33111	neizběžny	adj.
35074	neizgoda	f.
35075	neizgodny	adj.
35511	neizgovorlivy	adj.
36418	neizměnjeny	adj.
19886	neizměnny	adj.
33136	neizměrimy	adj.
16861	neizvěstny	adj.
35264	nejasny	adj.
35388	nejestvujųći	adj.
23262	nejlon	m.
23263	nejlonovy	adj.
2297	někako	adv.
983	někaky	adj.
19567	někamo	adv.
35412	nekaznivosť	f.
35413	nekaznivy	adj.
2172	někde	adv.
2794	někȯgda, někȯgdy	adv.
5696	někoj	pron.indef.
9575	několiko dnjev nazad	adv.
17911	několiko dnjev tomu	adv.
9576	několiko razov	adv.
2396	několiko	adv.
16451	několikokråtno	adv.
19888	nekompetencija	f.
19889	nekompletny	adj.
19890	nekonsistencija	f.
17912	nekrasna katȯčka	f.
17913	nekrasny	adj.
4082	někto	pron.indef.
5692	něktory	adj.
1001	někųdy	adv.
1767	nelegaľny	adj.
28414	neljudsky	adj.
19891	nelogičny	adj.
5985	nemaje, ne imaje	adv.
2793	nemalo	adv.
28417	nemaly	adj.
2774	Němcija	f.sg.
2780	Němec	m.anim.
984	němečsky	adj.
28421	něměti	v.intr. ipf.
23764	nemilosŕdno	adv.
23763	nemilosŕdny	adj.
28424	nemilosť	f.
28423	nemilostivy	adj.
28425	nemily	adj.
33120	neminujemosť	f.
33118	neminujemy	adj.
28427	nemirny	adj.
28428	Němka	f.
967	nemnogo	adv.
28431	nemnogy	adj.
21364	nemnožko	adv.
20539	nemoć	f.
20540	nemoćny	adj.
32286	nemoraľny	adj.
28435	němosť	f.
28436	němota	f.
16286	nemožlivosť	f.
4561	nemožlivy	adj.
20541	nemožno	adv.
9587	nemožnosť	f.
9588	nemožny	adj.
28438	nemųdry	adj.
949	němy	adj.
32387	nenadežny	adj.
32623	nenaměrjeny	adj.
19893	nenarušimy	adj.
33816	nenasytnik	m.anim.
33013	nenasytnosť	f.
28441	nenasytny	adj.
16977	nenaučny	adj.
968	nenaviděti	v.tr. ipf.
5293	nenavisť	f.sg.
28446	nenavistny	adj.
33261	neniščimy	adj.
4105	nenormaľno	adv.
4104	nenormaľnosť	f.
4103	nenormaľny	adj.
33109	neobhodimosť	f.
33105	neobhodimy	adj.
19894	neobjasnimy	adj.
28447	neobjętny	adj.
17914	neobrazovany	adj.
23706	neobyčno	adv.
6281	neobyčny	adj.
22893	neobzrimy	adj.
3860	neočekyvano	adv.
9598	neočekyvanosť	f.
9599	neočekyvany	adj.
33229	neodčuđajemy, neodčuđimy	adj.
35690	neoddělimy	adj.
9601	neodgovorno	adv.
9602	neodgovornosť	f.
9603	neodgovorny	adj.
23881	neodložny	adj.
36651	neodobrjeńje	n.sg.
4063	neodpovědaľnosť	f.
4062	neodpovědaľny	adj.
28450	neodstųpny	adj.
33116	neodvråtimy	adj.
35165	neoficiaľno	adv.
35164	neoficiaľny	adj.
19895	neograničeny	adj.
28451	neohota	f.
14750	neohotno	adv.
9607	neohotny	adj.
35714	neolit	m.sg.
35715	neolitičny	adj.
35949	neologizm	m.
22605	neon	m.sg.
19896	neopisujemy	adj.
9608	neoprěděljeno	adv.
9609	neoprěděljeny	adj.
9638	neoriginaľny	adj.
33467	neoskvŕnjeny	adj.
9610	neosnovany	adj.
35324	neosporimy	adj.
35864	neostråžno	adj.
35863	neostråžny	adj.
16978	neoznačeny	adj.
16979	neoznačiteljny zaimennik	m.
32450	Nepal	m.sg.
32451	nepaľsky	adj.
20542	nepamętny	adj.
33230	neparno čislo	n.
28455	neparny	adj.
19897	nepisany	adj.
28457	neplodny	adj.
2017	nepodatlivy	adj.
28459	nepodobny	adj.
17917	nepogoda	f.
3378	nepokoj	m.sg.
36699	nepokojiti sę	v.refl. ipf.
3862	nepokojiti	v.tr. ipf.
28464	nepokorny	adj.
17918	nepȯlnomožnica	f.
17920	nepȯlnomožnik	m.anim.
17922	nepȯlnomožnosť	f.
17924	nepȯlnomožny	adj.
17926	nepȯlnosposobnica	f.
17928	nepȯlnosposobnik	m.anim.
17930	nepȯlnosposobnosť	f.
17932	nepȯlnosposobny	adj.
28465	nepȯlny	adj.
19898	nepomoćny	adj.
33634	nepopravimy	adj.
36339	nepopravimy	adj.
9614	nepopravny	adj.
28466	neporędny	adj.
994	neporędȯk	m.sg.
28468	neporočny	adj.
36081	neporušimosť	f.
36080	neporušimy	adj.
28469	neposěda	m.anim.
36397	neposědlivosť	f.
21365	neposědlivy	adj.
23707	neposlušnosť	f.
23708	neposlušny	adj.
992	neposrědnje	adv.
5798	neposrědnji, neposrědny	adj.
9618	neposrědnosť	f.
28471	nepostojanny	adj.
5786	nepotrěbny	adj.
6004	nepovaga	f.
35641	nepoznajemy	adj.
36687	nepozvoljeny	adj.
35160	nepraktičnosť	f.
35156	nepraktičny	adj.
19899	nepravda	f.
28476	nepravdivy	adj.
35202	nepravdopodobny	adj.
3364	nepraviľny	adj.
28480	nepravy	adj.
28481	nepravy	adj.
34838	neprědvidimy	adj.
34839	neprědvidlivy	adj.
17937	neprěhodny	adj.
19901	neprěstanno	adv.
28482	neprěstanny	adj.
28483	neprigodnosť	f.
28484	neprigodny	adj.
1160	neprijatelj	m.anim.
28487	neprijateljsky	adj.
28488	neprijateljstvo	n.sg.
33016	neprijemlivy	adj.
28493	neprijemny	adj.
23810	neprijętnosť	f.
28490	neprijętny	adj.
28494	neprimětny	adj.
9637	neprirodny	adj.
22809	neprirodny	adj.
28495	nepristojnosť	f.
28496	nepristojny	adj.
28497	nepristųpnosť	f.
28498	nepristųpny	adj.
28499	nepritomny	adj.
33495	nepritomny	adj.
35881	neprivykly	adj.
17938	neprodyšny	adj.
28501	neprohodny	adj.
33821	nepromokajemy	adj.
14752	neprosty	adj.
9628	neprozråčimosť	f.
9629	neprozråčno	adv.
9630	neprozråčnosť	f.
9631	neprozråčny	adj.
23598	Neptun	m.sg.
28502	neråbotny	adj.
19902	neracionaľny	adj.
28503	nerado	adv.
28511	neråvnosť	f.
9639	neråvny	adj.
36689	neråvny	adj.
28505	neråzlųčny	adj.
19903	neråzuměńje	n.sg.
16980	neråzumlivy	adj.
28507	neråzumny	adj.
34515	neråzvity	adj.
28508	neręd	m.sg.
36443	nerědko	adv.
33505	nerędnosť	f.
16982	nerędny	adj.
28509	nerędny	adj.
23776	neregularno	adv.
33506	neregularnosť	f.
16981	neregularny	adj.
23213	nerv	m.
23224	nervny	adj.
23226	nervoznosť	f.
23222	nervozny	adj.
19905	nesamovoljny	adj.
35618	nesčisljeny	adj.
17959	nesgoda	f.
28516	neskromny	adj.
28517	neslavny	adj.
28518	neslyhany	adj.
17939	nesmělo	adv.
17940	nesmělosť	f.
9640	nesměly	adj.
9641	nesmysľny	adj.
20544	nesnosny	adj.
33509	nesȯglåśje, nesųglåśje	n.
996	nesȯvŕšeny vid	m.
35256	nesȯvŕšeny	adj.
9642	nespokojny	adj.
5909	nespokojstvo	n.sg.
35636	nesposobny	adj.
19908	nespravědlivy	adj.
23879	nesrųčny	adj.
35929	nestabiľnosť	f.
35276	nestabiľny	adj.
9644	nestaly	adj.
35574	nestera	f.
20547	nesti jajca	v.tr. ipf.
1161	nesti	v.tr. ipf.
3203	nesųmněno	adv.
6540	nesųmněny	adj.
9648	nesvědomo	adv.
6222	nesvědomosť	f.
6223	nesvědomy	adj.
19904	nesvęzany	adj.
14753	neščęsťje	n.
19906	neščęsťje	n.
9652	neščęstlivo	adv.
9653	neščęstlivy	adj.
16908	neščęstny slučaj	m.
3386	neščęstny	adj.
31991	neškodlivy	adj.
35573	netij	m.anim.
3682	netočny	adj.
35067	netolerantnosť	f.
35069	netolerantny	adj.
16862	netopyŕ	m.anim.
28532	netrězvy	adj.
36709	netŕpělivosť	f.sg.
28533	netŕpělivy	adj.
28534	netŕpěńje	n.sg.
35068	netŕpimosť	f.
19909	netŕpimy	adj.
35070	netŕpimy	adj.
9660	neubojazno	adv.
9661	neubojazny	adj.
28535	neučeny	adj.
28536	neučtivy	adj.
34975	neudačnik	m.anim.
34974	neudačny	adj.
17941	neudobno	adv.
17942	neudobny	adj.
35073	neudobstvo	n.
28538	neugasimy	adj.
22163	neuk	m.anim.
22164	neuk	m.anim.
28540	neuměńje	n.sg.
28541	neuměrny	adj.
35638	neuměstny	adj.
28542	neumny	adj.
34980	neumolimy	adj.
9662	neumorjeno	adv.
9663	neumorjenosť	f.
9664	neumorjeny	adj.
32625	neumysľno	adv.
28543	neumysľny	adj.
24654	neurodny	adj.
21370	neurođaj	m.
6550	neuspěh	m.
28546	neuspěšny	adj.
9665	neustalo	adv.
9666	neustalosť	f.
9667	neustaly	adj.
9668	neustrašno	adv.
9669	neustrašnosť	f.
9672	neustrašny	adj.
36649	neustųplivosť, neustųpnosť	adj.
17943	neustųplivy, neustųpny	adj.
28548	neutěšimy	adj.
17944	nevažno	intj.
23341	nevažny	adj.
4901	nevdęčny	adj.
19912	nevědomy	adj.
28551	neveliky	adj.
28554	nevěŕje	n.sg.
22326	nevěrnik	m.anim.
28555	nevěrnosť	f.
28556	nevěrny	adj.
28557	nevěrny	adj.
4562	nevěrojętny	adj.
997	nevěsta	f.
9677	nevěstinsky	adj.
22222	nevěža	f.
23710	nevidimo	adv.
23709	nevidimy	adj.
5957	nevinnosť	f.
1157	nevinny	adj.
28568	nevinovaty	adj.
9679	nevojnovy	adj.
22308	nevolja	f.
22310	nevolja	f.
28575	nevoljnica	f.
22311	nevoljnik	m.anim.
28577	nevoljny	adj.
28578	nevoljny	adj.
4533	nevrolog	m.anim.
4535	nevrologičny	adj.
4534	nevrologija	f.sg.
9680	nevromorfny	adj.
35832	nevtralizacija	f.
35831	nevtralizovati	v.tr. ipf./pf.
5037	nevtraľnosť	f.
5036	nevtraľny	adj.
4659	nevtron	m.
17947	nezabųďka	f.
31774	nezabytny	adj.
17948	nezadovaljati	v.tr. ipf.
17953	nezadovoliti	v.tr. pf.
17950	nezadovoljeny	adj.
3679	nezakonny	adj.
17955	nezaležno	adv.
1019	nezaležnosť	f.sg.
1425	nezaležny	adj.
9684	nezasluženy	adj.
17956	nezavisno	adv.
17957	nezavisnosť	f.
17958	nezavisny	adj.
28582	nezdråvy	adj.
3059	nezgrabny	adj.
28587	nezly	adj.
9686	neznačny	adj.
17960	neznajemy	adj.
28589	neznańje	n.sg.
28590	neznany	adj.
217	než	conj.
6260	neželi	conj.
36162	neženjenec	m.anim.
16983	neživy	adj.
36612	neživy	adj.
23711	něžnosť	f.
23712	něžny	adj.
1628	ni ... ni ...	conj.
4032	ničemu	adv.
993	ničij	pron.poss.
19913	ničto	pron.indef.
1021	niderlandsky	adj.
2795	Niderlandy	m.pl.
4754	Nigerija	f.sg.
4755	nigerijsky	adj.
3344	nijedin	pron.indef.
1835	nikako	adv.
3345	nikaky	adj.
19570	nikamo	adv.
16787	Nikaragua	f.sg.
22463	nikaraguansky	adj.
2186	nikde	adv.
22623	nikelj	m.sg.
2908	nikȯgda, nikȯgdy	adv.
19585	nikoliko	adv.
32835	nikotin	m.sg.
4	nikto	pron.indef.
1106	nikųdy	adv.
23599	Nil	m.sg.
20548	niľsky konj	m.anim.
36713	nimfa	f.
36714	nimfa	f.
9709	niša	f.
36725	niša	f.
33262	niščęći	adj.
3554	niščeńje	n.
8073	niščimy	adj.
5749	niščitelj	m.
5767	niščitelj	m.anim.
19749	niščiteljsky	adj.
2799	niščiti	v.tr. ipf.
8076	niščivo kritikovańje	n.sg.
8075	niščivo	adv.
8078	niščivosť	f.
8077	niščivy	adj.
14762	niševy	adj.
1738	niť	f.
17966	nitka	f.
956	niva	f.
9712	nizańje	n.sg.
28617	nizati	v.tr. ipf.
1205	nizina	f.
28619	nizinny	adj.
9716	nizko	adv.
28622	nizkosť	f.
33267	nizkosť	f.
402	nizky	adj.
28620	nizky	adj.
9719	nizši	adj.
1002	niže	adv.
19914	nižnosť	f.
19915	nižny	adj.
28627	njuans	m.
28628	njuh	m.
1003	njuhati	v.intr. ipf.
28631	njuhnųti	v.intr. pf.
14764	no	conj.
23600	Nobelova nagråda	f.
195	noć	f.
21371	noćejų	adv.
3863	noćevati	v.intr. ipf.
17967	noćiś	adv.
28637	noćleg	m.
31887	noćny klub	m.
4343	noćny	adj.
28638	nočnik	m.anim.
17969	Noeva arka	f.
1230	noga	f.
23124	nogavica	f.
23120	nogavice	f.pl.
23125	nogavka	f.
23121	nogavky	f.pl.
1229	nogȯť	m.
2060	nomer	m.
2812	nominacija	f.
16984	nominativ	m.
4976	nominovati	v.tr. ipf.
34926	non-stop	adv.
36643	nonšalantny	adj.
28648	nora	f.
21372	norka	f.
36131	norma	f.
16985	normaľno	adv.
23354	normaľnosť	f.
5260	normaľny	adj.
28651	norovisty	adj.
4428	Norvegija	f.sg.
4429	norvežsky	adj.
961	nos	m.
28655	nosač	m.anim.
20550	nosilka	n.pl.
20553	nosilka	n.pl.
28658	nositelj	m.anim.
1034	nositi	v.tr. ipf.
1037	nositi	v.tr. ipf.
28660	nosny	adj.
28661	nosȯk	m.
28662	nosȯk	m.
20555	nosorog	m.anim.
23981	nosovka	f.
36266	nosovy ubrusok	m.
28663	nosovy	adj.
4620	nostalgičny	adj.
4619	nostalgija	f.
28665	nošeńje	n.sg.
23451	nota	f.
36115	notacija	f.
15707	notaŕ	m.anim.
16986	notorično	adv.
36319	notoričnosť	f.
16987	notoričny	adj.
22759	noty	f.pl.
22775	Nova Zelandija	f.sg.
28666	novak	m.anim.
9737	novembr	m.sg.
28668	novina	f.
28669	novina	f.
28672	novinka	f.
9738	noviny	f.pl.
34904	novogodišnja jelka	f.
34903	novogodišnje drěvo	n.
36449	novogrėčsky	adj.
20556	novohebrejsky	adj.
19916	novonarođeny	adj.
35616	novoprišelec	m.anim.
35485	novorođenec	m.anim.
9739	novoslověnsky	adj.
1237	novosť	f.
33264	novosť	f.
1510	novosti	f.pl.
22147	novotvor	m.
22148	novotvor	m.
4907	novozelandsky	adj.
2804	novy	adj.
2397	nozdra	f.
1014	nož	m.
5282	nožice	f.pl.
28687	nožnica	f.
28691	nråv	m.
28692	nråv	m.
28693	nrěst	m.
33248	nrěstilišče	n.
33249	nrěstilišče	n.
28694	nrěstiti sę	v.refl. ipf.
19917	nu	intj.
17971	nuda	f.
17974	nuditi sę	v.refl. ipf.
17973	nuditi	v.tr. ipf.
17975	nudny	adj.
1426	nųđa	f.
2807	nųđa	f.
33251	nųđa	f.
35677	nuklearna fuzija	f.
35675	nuklearny	adj.
1015	nula	num.card.
2809	nulovy	num.ord.
35841	numeričny	adj.
36608	nutrija	f.
28707	nužny	adj.
5698	nyně	adv.
19918	nyněšnji, nyněšny	adj.
28700	nyrec	m.anim.
9750	nyrjańje	n.sg.
9751	nyrjatelj	m.anim.
9752	nyrjati	v.intr. ipf.
3113	nyrka	f.
9756	nyrkovy kamenj	m.
9755	nyrkovy	adj.
28712	nyrnųti	v.intr. pf.
9757	o, ob	prep.
28713	o	intj.
34376	oaza	f.
998	oba	num.card.
19535	obače	adv.
28716	obadva	num.card.
16842	obagriti	v.tr. pf.
16988	obćeslovjansky	adj.
35783	obćežiťje	n.
1000	obći	adj.
20917	občina	f.
20919	občiti s	v.ipf.
20918	občiti	v.intr. ipf.
23085	občudovańje	n.
23713	občudovatelj	m.anim.
23084	občudovati	v.tr. ipf.
1493	obdariti	v.tr. pf.
5544	obdarjati	v.tr. ipf.
4550	obdarjeny	adj.
28724	obdirati	v.tr. ipf.
23083	obdiv	m.sg.
23078	obdivjati	v.tr. ipf.
9770	obdobje	n.
34086	obdreti	v.tr. pf.
9771	obdumati	v.tr. pf.
9772	oběćańje	n.
990	oběćati	v.tr. pf.
22401	oběćivati	v.tr. ipf.
2038	oběd	m.
9775	obědati	v.intr. ipf./pf.
28729	obědny	adj.
28731	oběgati	v.tr. pf.
28732	obělěti	v.intr. pf.
28733	oběliti	v.tr. pf.
16848	obezčestiti	v.tr. pf.
16850	obezčestiti	v.tr. pf.
16849	obezčešćeńje	n.
773	obezglåviti	v.tr. pf.
1587	obezglåvjati	v.tr. ipf.
5376	obezhråbriti	v.tr. pf.
5375	obezhrabrjati	v.tr. ipf.
19655	obezpokojiti	v.tr. pf.
5374	obezsiliti	v.tr. pf.
5373	obezsiljati	v.tr. ipf.
16854	obezuměti	v.intr. pf.
17980	obezuměvati	v.intr. ipf.
3727	obględati	v.tr. ipf.
3729	obględěti	v.tr. pf.
28738	obglodati	v.tr. pf.
9783	obgovarjati	v.tr. ipf.
9782	obgovoriti	v.tr. pf.
28740	obgryzati	v.tr. ipf.
28741	obgryzti	v.tr. pf.
28743	obhod	m.
33195	obhod	m.
23103	obhoditi sę bez	v.refl. ipf.
17988	obhoditi sę s	v.refl. ipf.
28745	obhoditi sę	v.refl. ipf.
5369	obhoditi	v.tr. ipf.
28746	obhodna dråga	f.
17990	obhvaćati	v.tr. ipf.
17992	obhvatiti	v.tr. pf.
2806	obida	f.
28749	obiděti	v.tr. pf.
34071	obiđati	v.tr. ipf.
28750	obiľje	n.
35207	obiľno	adv.
35206	obiľny	adj.
3476	obimati	v.tr. ipf.
1005	objasniti	v.tr. pf.
2023	objasnjati	v.tr. ipf.
3608	objasnjeńje	n.
28758	objava	f.
1006	objaviti sę	v.refl. pf.
9801	objaviti sę	v.refl. pf.
9798	objaviti	v.tr. pf.
17995	objaviti	v.tr. pf.
17996	objaviti	v.tr. pf.
17997	objavjańje	n.
9803	objavjati sę	v.refl. ipf.
9804	objavjati sę	v.refl. ipf.
9802	objavjati	v.tr. ipf.
17998	objavjati	v.tr. ipf.
17999	objavjati	v.tr. ipf.
28762	objedati sę	v.refl. ipf.
9806	objediniti	v.tr. pf.
9807	objedinjati	v.tr. ipf.
13222	objedinjeńje	n.sg.
2811	Objedinjeno Kråljevstvo	n.sg.
2810	objedinjeno	adv.
9810	objedinjeny	adj.
28766	objehati	v.tr. pf.
3759	objekt	m.
19920	objektiv	m.
32934	objektivnosť	f.
19921	objektivny	adj.
18000	objem	m.sg.
28765	objesti sę	v.refl. pf.
3477	objęti	v.tr. pf.
5010	objęťje	n.
23882	objezd	m.
28774	objezditi	v.tr. pf.
28776	obježđati	v.tr. ipf.
19922	obkaljati	v.tr. ipf.
19923	obkoliti	v.tr. pf.
28779	obkradati	v.tr. ipf.
33740	obkrasti	v.tr. pf.
22532	oblačati	v.tr. ipf.
28784	oblaček	m.
28782	oblåčeńje	n.
22528	oblåčiti	v.tr. pf.
28783	oblåčny	adj.
20557	oblagati	v.tr. ipf.
20559	oblagati	v.tr. ipf.
28786	oblajati	v.tr. pf.
34077	oblajivati	v.tr. ipf.
1125	oblåk	m.
28788	oblamyvati	v.tr. ipf.
1570	oblasť	f.
9820	oblasť	f.
9822	oblastny	adj.
23530	oblěčeńje	n.
23740	oblěčeny	adj.
28794	obleděněti	v.intr. pf.
19926	oblegčati	v.tr. ipf.
28795	oblegčeńje	n.
19929	oblegčiti	v.tr. pf.
22524	oblěkati	v.tr. ipf.
22526	oblěkati	v.tr. ipf.
22520	oblěkti	v.tr. pf.
22523	oblěkti	v.tr. pf.
28801	oblet	m.
28802	oblětati	v.tr. ipf.
28803	obletěti	v.tr. pf.
1880	obličje	n.
20560	obličje	n.
28809	oblik	m.
28810	oblinjati	v.tr. pf.
3786	obliti	v.tr. pf.
3785	oblivati	v.tr. ipf.
18004	oblizati	v.tr. pf.
18005	oblizyvati	v.tr. ipf.
10172	obljubjeny	adj.
28817	oblomiti	v.tr. pf.
20561	obložiti	v.tr. pf.
20563	obložiti	v.tr. pf.
36222	obložka	f.
28822	oblupiti	v.tr. pf.
28823	obluščiti	v.tr. pf.
1881	obly	adj.
28826	oblysěti	v.intr. pf.
2800	obman	m.
4218	obman	m.
9833	obmannik	m.anim.
5740	obmanųti	v.tr. pf.
18009	obmanųti	v.tr. pf.
9831	obmanyvatelj	m.anim.
4216	obmanyvati	v.tr. ipf.
18014	obmanyvati	v.tr. ipf.
28830	obmazati	v.tr. pf.
36263	obmazati	v.tr. pf.
34091	obmazyvati	v.tr. ipf.
2977	obmeđati	v.tr. ipf.
18016	obmeđeńje	n.
3724	obmeđeny	adj.
2801	obmeđiti	v.tr. pf.
3585	obměn	m.
28835	obměniti	v.tr. pf.
34081	obměnjati	v.tr. ipf.
5371	obmotati	v.tr. pf.
28840	obmotka	f.
5372	obmotyvati	v.tr. ipf.
20564	obmŕlosť	f.
20565	obmŕly	adj.
18020	obmysliti	v.tr. pf.
18018	obmysljati	v.tr. ipf.
23737	obmysljeńje	n.
21373	obnarodovati	v.tr. ipf./pf.
151	obnavjati	v.tr. ipf.
34417	obnavjati	v.tr. ipf.
5321	obnažati sę	v.refl. ipf.
33746	obnažati	v.tr. ipf.
28845	obnažiti sę	v.refl. pf.
5320	obnažiti	v.tr. pf.
28846	obnesti	v.tr. pf.
34078	obnesti	v.tr. pf.
19932	obniziti	v.tr. pf.
19930	obnižati	v.tr. ipf.
19931	obnižeńje	n.
29473	obnjuhati	v.tr. pf.
34442	obnjuhyvati	v.tr. ipf.
28849	obnositi	v.tr. ipf.
28850	obnositi	v.tr. ipf.
28851	obnova	f.
241	obnoviti	v.tr. pf.
29477	obnoviti	v.tr. pf.
9847	obnovjeńje	n.
35425	obobćati	v.tr. ipf.
35428	obobćeńje	n.
35426	obobćiti	v.tr. pf.
28853	obod	m.
242	obogaćati	v.tr. ipf.
28855	obogatěti	v.intr. pf.
2217	obogatiti	v.tr. pf.
14768	obognjeodparnjati	v.tr. ipf.
14767	obognjeodporniti	v.tr. pf.
23432	oboj	m.
28857	obojaky	num.diff.
18025	obȯjdti sę bez	v.refl. pf.
18023	obȯjdti sę	v.refl. pf.
5370	obȯjdti	v.tr. pf.
16438	oboje	num.coll.
28859	obora	f.
9852	oboråvnosť	f.
9853	oboråvny	adj.
21375	obȯrvanec	m.anim.
9855	obosobjeńje	n.
9854	obosobjenosť	f.
28866	obȯzrěti sę	v.refl. pf.
18026	obožańje	n.
2817	obožati	v.tr. ipf.
21685	obråbotati	v.tr. pf.
21377	obråbotyvati	v.tr. ipf.
28867	obraćańje	n.
22682	obraćati sę k	v.refl. ipf.
22674	obraćati sę	v.refl. ipf.
22676	obraćati sę	v.refl. ipf.
22678	obraćati sę	v.refl. ipf.
3206	obraćati	v.tr. ipf.
22665	obraćati	v.tr. ipf.
22667	obraćati	v.tr. ipf.
22670	obraćati	v.tr. ipf.
34146	obraćati	v.tr. ipf.
34850	obraćati	v.tr. ipf.
18027	obråćeńje	n.
28873	obradovati sę	v.refl. pf.
28872	obradovati	v.tr. pf.
3551	obråna	f.
1672	obråniti	v.tr. pf.
973	obranjati	v.tr. ipf.
19933	obrånny mehanizm	m.
35115	obrånny	adj.
33067	obrastati něčim	v.intr. ipf.
28879	obråsti něčim	v.intr. pf.
2852	obråt	m.
22684	obråt	m.
28882	obråt	m.
34112	obråt	m.
14770	obråtitelj	m.anim.
22681	obråtiti sę k	v.refl. pf.
22675	obråtiti sę	v.refl. pf.
22677	obråtiti sę	v.refl. pf.
22679	obråtiti sę	v.refl. pf.
3209	obråtiti	v.tr. pf.
22666	obråtiti	v.tr. pf.
22668	obråtiti	v.tr. pf.
22671	obråtiti	v.tr. pf.
22673	obråtiti	v.tr. pf.
34147	obråtiti	v.tr. pf.
6187	obråtno	adv.
18030	obråtny	adj.
22685	obråtny	adj.
22686	obråtny	adj.
962	obraz	m.
18031	obrazec	m.
21378	obrazec	m.
21380	obrazny	adj.
21384	obrazȯk	m.
1031	obrazovańje	n.
21385	obrazovańje	n.
9872	obrazovany	adj.
35930	obrazovateljny	adj.
19934	obrazovity	adj.
1032	obręd	m.
2798	obrędny	adj.
16844	obrěmeniti	v.tr. pf.
16845	obrěmenjati	v.tr. ipf.
9878	obrězańje	n.
9879	obrězati	v.tr. pf.
34142	obriti sę	v.refl. pf.
28907	obriti	v.tr. pf.
28909	obŕnųti sę	v.refl. pf.
34151	obŕnųti sę	v.refl. pf.
28908	obŕnųti	v.tr. pf.
34153	obŕnųti	v.tr. pf.
34154	obŕnųti	v.tr. pf.
21387	obrok	m.
21388	obrųb	m.
21390	obrųb	m.
2796	obrųč	m.
9885	obrųčka	f.
21392	obrušati sę	v.refl. ipf.
21393	obrušiti sę	v.refl. pf.
28919	obrvati	v.tr. pf.
5263	obrys	m.
9887	obrysovati	v.tr. ipf.
28923	obryvati	v.tr. ipf.
28925	obryvȯk	m.
28926	obryzgati	v.tr. ipf.
29585	obsada	f.
29587	obsaditi	v.tr. pf.
34553	obsađati	v.tr. ipf.
28928	obscati	v.tr. pf.
33477	obscennosť	f.
33476	obscenny	adj.
28929	obsęg	m.sg.
28930	obsęgati	v.tr. ipf.
28931	obsęgnųti	v.tr. pf.
29597	obsějati	v.tr. pf.
28935	obsějivati	v.tr. ipf.
33383	obsěkati	v.tr. ipf.
28933	obsěkti	v.tr. pf.
23247	observacija	f.
35763	observatorija	f.
19935	observovati	v.tr. ipf.
36309	obsesija	f.
35142	obsęžny	adj.
18032	obsidian	m.
4225	obslědovańje	n.
9891	obslědovatelj	m.anim.
4224	obslědovati	v.tr. ipf.
5706	obsluga	f.
5167	obslugovati	v.tr. ipf.
5704	obslužiti	v.tr. pf.
28939	obsȯhnųti	v.intr. pf.
34123	obsȯhnųti	v.intr. pf.
34124	obsȯhnųti	v.intr. pf.
28940	obsrati	v.tr. pf.
18034	obsrědina	f.
9895	obstajati	v.intr. ipf.
9897	obstajati	v.intr. ipf.
1090	obstanavjati sę	v.refl. ipf.
34789	obstanavjati	v.tr. ipf.
2797	obstanoviti sę	v.refl. pf.
34790	obstanoviti	v.tr. pf.
21930	obstųpati	v.tr. ipf.
21931	obstųpiti	v.tr. pf.
3067	obsvětliti	v.tr. pf.
1713	obsvětljati	v.tr. ipf.
28950	obsyhati	v.intr. ipf.
34125	obsyhati	v.intr. ipf.
34127	obsyhati	v.intr. ipf.
9888	obsypati	v.tr. pf.
16287	obsypyvati	v.tr. ipf.
32822	obširno	adv.
32821	obširnosť	f.
28946	obširny	adj.
36219	obšiťje	f.
36218	obšivka	f.
3133	obtestovati	v.tr. pf.
16846	obtęžati	v.tr. ipf.
16847	obtęžiti	v.tr. pf.
34174	obtirati sę	v.refl. ipf.
28960	obtirati	v.tr. ipf.
34173	obtreti sę	v.refl. pf.
28962	obtreti	v.tr. pf.
28965	obučati	v.tr. ipf.
28966	obučeńje	n.
28967	obučiti	v.tr. pf.
28969	obuh	m.
19936	obustrånny	adj.
28970	obuti sę	v.refl. pf.
22760	obuv	f.
28972	obuvati sę	v.refl. ipf.
22761	obuvka	f.
32087	obuvnik	m.anim.
28974	obuzdati	v.tr. pf.
33815	obuzdyvati	v.tr. ipf.
4488	obvadnjati	v.tr. ipf.
16288	obvažati	v.tr. ipf.
14771	obvažiti	v.tr. pf.
28980	obvesti	v.tr. pf.
22225	obvěstiti	v.tr. pf.
22224	obvěšćati	v.tr. ipf.
3760	obvęzati	v.tr. pf.
28989	obvęzati	v.tr. ipf.
36610	obvęzno	adv.
35885	obvęzny	adj.
95	obvęzȯk	m.
3757	obvęzyvati	v.tr. ipf.
34191	obvęzyvati	v.tr. ipf.
762	obviniti za	v.tr. pf.
16291	obvinjati za	v.tr. ipf.
4504	obvinjeńje	n.
28998	obviti	v.tr. pf.
28999	obvivati	v.tr. ipf.
22250	obvod	m.
29000	obvoditi	v.tr. ipf.
4489	obvodniti	v.tr. pf.
2930	obyčaj	m.
18036	obyčajno	adv.
18040	obyčajny	adj.
22165	obyčajny	adj.
3341	obyčno	adv.
2019	obyčny	adj.
3199	obydva	num.card.
4069	obyvatelj	m.anim.
9794	obyvatelj	m.anim.
18043	obyvati	v.tr. ipf.
29007	obzirati sę	v.refl. ipf.
22894	obzor	m.
29008	obzor	m.
29009	obžegti	v.tr. pf.
22965	obžerstvo	n.sg.
29011	obžigati	v.tr. ipf.
29015	obžirati sę	v.refl. ipf.
32650	obžrati sę	v.refl. pf.
18049	ocelj	f.sg.
18050	oceljevy	adj.
14	ocěniti	v.tr. pf.
144	ocěnjati	v.tr. ipf.
5147	ocěnjeńje	n.
29019	ocěnka	f.
1035	ocet	m.
9920	očariti	v.pf.
9921	očarovany	adj.
21395	očarovateljny	adj.
9923	očarovati	v.tr. pf.
18045	očarovati	v.pf.
16893	očarovyvati	v.tr. ipf.
18047	očarovyvati	v.ipf.
35230	očekyvańje	n.
36884	očekyvany	adj.
1233	očekyvati	v.tr. ipf.
20920	očevidec	m.anim.
3960	očevidno	adv.
3961	očevidny	adj.
4876	oči	f.pl.
29028	očistitelj	m.anim.
29029	očistiti	v.tr. pf.
29030	očišćati	v.tr. ipf.
29031	očišćeńje	n.
29033	očny	adj.
20566	očrkati	v.tr. ipf.
20567	očrknųti	v.tr. pf.
29035	očrniti	v.tr. pf.
32657	očrnjati	v.tr. ipf.
23690	od davna	adv.
18054	od nyně	adv.
3638	od počętka	adv.
18058	od sejčas	adv.
3060	od stråny	prep.
613	od	prep.
1234	od	prep.
34139	oda	f.
5649	odbačati vlěvo	v.intr. ipf.
36711	odbačati vpravo/vdesno	v.intr. ipf.
29040	odběgati	v.intr. ipf.
29042	odběgti	v.intr. pf.
19937	odbirati	v.tr. ipf.
29045	odbirati	v.tr. ipf.
29050	odbiti sę	v.refl. pf.
34100	odbiti sę	v.refl. pf.
20572	odbiti	v.tr. pf.
20573	odbiti	v.tr. pf.
34101	odbiti	v.tr. pf.
34103	odbivati sę	v.refl. ipf.
34104	odbivati sę	v.refl. ipf.
20568	odbivati	v.tr. ipf.
20570	odbivati	v.tr. ipf.
34102	odbivati	v.tr. ipf.
29052	odblěsk	m.
5650	odbočiti vlěvo	v.intr. pf.
36712	odbočiti vpravo/vdesno	v.intr. pf.
29055	odbor	m.
19938	odbrati	v.tr. pf.
32534	odbrati	v.tr. pf.
16741	odbyti sę	v.refl. pf.
16740	odbyvati sę	v.refl. ipf.
34209	odčajano	adv.
29057	odčajany	adj.
29058	odčajati sę	v.refl. pf.
34215	odčajati	v.tr. pf.
34224	odčajivati sę	v.refl. ipf.
34210	odčajivati	v.tr. ipf.
9938	odčiniti	v.tr. pf.
18060	odčinjati	v.tr. ipf.
6284	odčitati	v.tr. pf.
6283	odčityvati	v.tr. ipf.
6211	odčuđati	v.tr. ipf.
6212	odčuđiti	v.tr. pf.
19939	odčuvati	v.tr. ipf.
34237	oddaliti sę	v.refl. pf.
29065	oddaliti	v.tr. pf.
34236	oddaljati sę	v.refl. ipf.
29066	oddaljati	v.tr. ipf.
29063	oddaljeńje	n.
16989	oddaljeny	adj.
29067	oddańje	n.
35533	oddanosť	f.
18062	oddany	adj.
5379	oddati	v.tr. pf.
5378	oddavati	v.tr. ipf.
5187	odděl	m.
14820	odděl	m.
2951	odděliti	v.tr. pf.
3016	odděljati	v.tr. ipf.
29072	odděljeńje	n.
907	odděljeny	adj.
3991	odděľno	adv.
3990	odděľny	adj.
34253	oddirati	v.tr. ipf.
5604	oddȯhnųti	v.intr. pf.
29074	oddreti	v.tr. pf.
14775	oddyh	m.
4072	oddyhati	v.intr. ipf.
16837	oděđa	f.
16840	oděti	v.tr. pf.
23742	oděty	adj.
16838	oděvati	v.tr. ipf.
18065	oděž	f.
5971	odgadati	v.tr. pf.
5970	odgadyvati	v.tr. ipf.
16831	odglås	m.
29114	odgnųti	v.tr. pf.
35938	odgovarjajųći	adj.
5382	odgovarjati	v.tr. ipf.
34094	odgovarjati	v.tr. ipf.
3240	odgovor	m.
3242	odgovoriti	v.tr. pf.
29087	odgovoriti	v.tr. pf.
9953	odgovorno	adv.
9954	odgovornosť	f.
9955	odgovorny	adj.
29089	odgrebati	v.tr. ipf.
29090	odgrebti	v.tr. pf.
5648	odgryzati	v.tr. ipf.
5647	odgryzti	v.tr. pf.
34261	odgybati	v.tr. ipf.
23743	odhod	m.
2968	odhoditi	v.intr. ipf.
14777	odhođeńje	n.
15415	odidti od	v.tr. pf.
19941	odigrati sę	v.refl. pf.
19943	odigryvati roljų	v.ipf.
19944	odigryvati sę	v.refl. ipf.
33739	odimańje	n.
18066	odimati	v.tr. ipf.
18067	odimati	v.tr. ipf.
33737	odimati	v.tr. ipf.
8	odinųd	adv.
18068	odjaviti sę	v.refl. pf.
18070	odjavjati sę	v.refl. ipf.
35979	odjebi sę!	intj.
5486	odjehati	v.intr. pf.
18072	odjęti	v.tr. pf.
18073	odjęti	v.tr. pf.
33738	odjęti	v.tr. pf.
5498	odjezd	m.
5487	odježđati	v.intr. ipf.
9964	odkazańje	n.
4626	odkazati sę	v.refl. pf.
19946	odkazati	v.tr. pf.
4629	odkazyvati sę	v.refl. ipf.
19948	odkazyvati	v.tr. ipf.
2225	odkladati	v.tr. ipf.
5568	odkladati	v.tr. ipf.
19954	odklanjati	v.tr. ipf.
36870	odklanjati	v.tr. ipf.
34255	odklejati sę	v.refl. ipf.
34254	odklejati	v.tr. ipf.
34256	odklejiti sę	v.refl. pf.
29108	odklejiti	v.tr. pf.
23128	odključati sę	v.refl. ipf.
23130	odključati	v.tr. ipf.
23129	odključiti sę	v.refl. pf.
23131	odključiti	v.tr. pf.
19958	odkloniti	v.tr. pf.
36871	odkloniti	v.tr. pf.
18075	odklonjeńje	n.
36872	odklonjeńje	n.
14781	odkȯgda, odkȯgdy	adv.
19529	odkȯgda, odkȯgdy	conj.
1017	odkryti	v.tr. pf.
3559	odkryťje	n.
19963	odkrytka	f.
35473	odkryvańje	n.
9979	odkryvatelj	m.anim.
2028	odkryvati	v.tr. ipf.
750	odkųd	adv.
1166	odkųd-nebųď	adv.
19617	odkųdykoli	adv.
14782	odkųdy-libo	adv.
4703	odkųsiti	v.tr. pf.
4702	odkųšati	v.tr. ipf.
1004	odkydati	v.tr. ipf.
132	odkydnųti	v.tr. pf.
5587	odlamyvati	v.tr. ipf.
34258	odlěpiti sę	v.refl. pf.
29110	odlěpiti	v.tr. pf.
34259	odlěpjati sę	v.refl. ipf.
34257	odlěpjati	v.tr. ipf.
2978	odlětati	v.intr. ipf.
2025	odletěti	v.intr. pf.
19965	odličati	v.tr. ipf.
19966	odličiti	v.tr. pf.
10377	odlično	adv.
10378	odličny	adj.
36920	odliti	v.tr. pf.
20574	odliv	m.
36919	odlivati	v.tr. ipf.
18076	odlogovati sę	v.refl. ipf./pf.
2026	odlomiti	v.tr. pf.
5741	odlomȯk	m.
2984	odložiti	v.tr. pf.
5569	odložiti	v.tr. pf.
18080	odmesti	v.tr. pf.
18081	odmětati	v.tr. ipf.
19973	odmetati	v.tr. ipf.
19974	odmetati	v.tr. ipf.
19971	odmeteńje	n.
19977	odmetnųti	v.tr. pf.
19978	odmetnųti	v.tr. pf.
1255	odmstiti	v.tr. pf.
1728	odněkųd	adv.
23343	odnesti sę k	v.refl. pf.
4672	odnesti	v.tr. pf.
10000	odnesti	v.tr. pf.
1222	odnikųd	adv.
1746	odnositeljno	adv.
16990	odnositeljny zaimennik	m.
35263	odnositeljny	adj.
20577	odnositi sę k	v.refl. ipf.
4671	odnositi	v.tr. ipf.
10004	odnositi	v.tr. ipf.
4107	odnosno	prep.
10007	odnosno	adv.
1992	odnošeńje	n.
10012	odobriti	v.tr. pf.
10013	odobrjati	v.tr. ipf.
10011	odobrjeńje	n.sg.
181	odȯjdti	v.intr. pf.
29115	odolěti	v.tr. pf.
34272	odolěvati	v.tr. ipf.
35850	odomašniti	v.tr. pf.
35849	odomašnjati	v.tr. ipf.
23536	odomašnjeńje	n.
18083	odomašnjeny	adj.
19545	odonųd	adv.
21397	odosobniti	v.tr. pf.
21396	odosobnjati	v.tr. ipf.
19544	odovųd	adv.
5662	odpadati	v.intr. ipf.
20921	odpadky	m.pl.
20924	odpadnik	m.anim.
5657	odpady	m.pl.
5663	odpasti	v.intr. pf.
23610	odpečętati	v.tr. pf.
23613	odpečętȯk	m.
32536	odpečętyvati	v.tr. pf.
29124	odpęti	v.tr. pf.
32921	odphati	v.tr. pf.
32919	odpihati	v.tr. ipf.
29128	odpiliti	v.tr. pf.
34280	odpiljati	v.tr. ipf.
29129	odpinati	v.tr. ipf.
10016	odpirati sę	v.refl. ipf.
34298	odpis	m.
29136	odpisati	v.tr. pf.
29137	odpisati	v.tr. pf.
34295	odpisyvati	v.tr. ipf.
34296	odpisyvati	v.tr. ipf.
10020	odpiši vsim	phrase
4480	odplaćati	v.tr. ipf.
4481	odplaćati	v.tr. ipf.
34305	odplaćati	v.tr. ipf.
500	odplata	f.
29143	odplata	f.
29144	odplata	f.
4479	odplatiti	v.tr. pf.
4482	odplatiti	v.tr. pf.
29146	odplatiti	v.tr. pf.
29148	odplesti	v.tr. pf.
29147	odpletati	v.tr. ipf.
34909	odpluti	v.intr. pf.
19980	odplyvati	v.intr. ipf.
36727	odplyvati	v.intr. ipf.
19981	odplyvti	v.intr. pf.
5605	odpočęti	v.intr. pf.
3296	odpočinȯk	m.sg.
3295	odpočivati	v.intr. ipf.
19982	odpor	m.
10032	odpornosť	f.
4235	odporny	adj.
2390	odpověď	f.
10035	odpovědaľno	adv.
10042	odpovědaľnosť	f.
320	odpovědaľny	adj.
2189	odpovědati	v.tr. ipf.
3161	odpovědati	v.tr. ipf.
2972	odpověděti	v.tr. pf.
6282	odpovědnik	m.
34106	odprašati sę	v.refl. ipf.
34107	odprašati sę	v.refl. ipf.
16293	odprašati	v.tr. ipf.
10045	odpråšiti	v.tr. pf.
20926	odprava	f.
29167	odpraviti sę	v.refl. pf.
20929	odpraviti	v.tr. pf.
20931	odpraviti	v.tr. pf.
34348	odpravjati sę	v.refl. ipf.
20933	odpravjati	v.tr. ipf.
20934	odpravjati	v.tr. ipf.
29169	odpravjeńje	n.
29170	odpravny punkt	m.
10017	odprěti sę	v.refl. pf.
29181	odprositi sę	v.refl. pf.
34105	odprositi sę	v.refl. pf.
20935	odpųditi	v.tr. pf.
5054	odpusk	m.
34299	odpust	m.
18089	odpustiti	v.tr. pf.
29187	odpustiti	v.tr. pf.
18087	odpušćati	v.tr. ipf.
29191	odpušćati	v.tr. ipf.
20937	odpušćeńje	n.
36889	Odra	f.sg.
21398	odračati	v.tr. ipf.
29196	odraditi	v.tr. pf.
34349	odrađati	v.tr. ipf.
29198	odraz	m.
29200	odraziti sę	v.refl. pf.
5558	odraziti	v.tr. pf.
21401	odraziti	v.tr. pf.
13479	odråzlika	f.
29202	odražati sę	v.refl. ipf.
5557	odražati	v.tr. ipf.
21400	odražati	v.tr. ipf.
29203	odrěčeńje	n.
35644	odrěčeńje	n.
21402	odrěčny	adj.
22356	odręd	m.
21404	odrěkati sę	v.refl. ipf.
21406	odrěkati	v.tr. ipf.
21410	odrěkti sę	v.refl. pf.
21408	odrěkti	v.tr. pf.
29213	odrěz, odrězȯk	m.
4439	odrězati	v.tr. pf.
5556	odrězyvati	v.tr. ipf.
21415	odročiti	v.tr. pf.
18091	odroda	f.
18093	odrųbati	v.tr. pf.
18094	odrųbyvati	v.tr. ipf.
29223	odrvati	v.tr. pf.
29226	odryti	v.tr. pf.
29227	odryvati	v.tr. ipf.
34361	odryvati	v.tr. ipf.
29233	odsěděti	v.tr. pf.
34369	odsěđati	v.tr. ipf.
29239	odsěkati	v.tr. ipf.
29240	odsěkti	v.tr. pf.
5547	odskakati	v.intr. ipf.
3708	odskočiti	v.intr. pf.
29248	odslanjati	v.tr. ipf.
29116	odslati	v.tr. pf.
34374	odsloniti	v.tr. pf.
29249	odslužiti	v.tr. pf.
29250	odsȯhnųti	v.intr. pf.
3714	odstati	v.intr. pf.
10054	odstava	f.
3713	odstavati	v.intr. ipf.
19983	odstaviti	v.tr. pf.
19985	odstavjati	v.tr. ipf.
10058	odstråniti	v.tr. pf.
21878	odstråniti	v.tr. pf.
21880	odstråniti	v.tr. pf.
21882	odstråniti	v.tr. pf.
21874	odstranjati	v.tr. ipf.
21876	odstranjati	v.tr. ipf.
21877	odstranjati	v.tr. ipf.
21881	odstranjati	v.tr. ipf.
4371	odstrašati	v.tr. ipf.
4372	odstrašiti	v.tr. pf.
5110	odstrěliti	v.tr. pf.
29253	odstrigati	v.tr. ipf.
29255	odstrigti	v.tr. pf.
21948	odstųp	m.
21949	odstųp	m.
21950	odstųp	m.
14787	odstųpańje	n.
29257	odstųpańje	n.
4627	odstųpati	v.intr. ipf.
5074	odstųpati	v.intr. ipf.
10063	odstųpati	v.intr. ipf.
21934	odstųpati	v.intr. ipf.
21937	odstųpati	v.tr. ipf.
15417	odstųpiti od	v.tr. pf.
4628	odstųpiti	v.intr. pf.
5075	odstųpiti	v.intr. pf.
21941	odstųpiti	v.intr. pf.
21942	odstųpiti	v.intr. pf.
21945	odstųpiti	v.tr. pf.
10065	odstųpjeńje	n.
21951	odstųpnik	m.anim.
36228	odstųpnik	m.anim.
19541	odśųd	adv.
20938	odsunųti	v.tr. pf.
36665	odsųtnosť	f.sg.
33492	odsųtny	adj.
10066	odsųtstvo	n.sg.
36666	odsųtstvovati	v.intr. ipf.
20940	odsuvati	v.tr. ipf.
34375	odsyhati	v.intr. ipf.
29271	odsylati	v.tr. pf.
29264	odščepiti	v.tr. pf.
29265	odščepjati	v.tr. ipf.
29266	odščepȯk	m.
4304	odšlupati	v.tr. pf.
5552	odšlupyvati	v.tr. ipf.
29274	odtajati	v.tr. pf.
29275	odtęgati	v.tr. ipf.
29277	odtęgnųti	v.tr. pf.
29278	odtěkati	v.intr. ipf.
34382	odtěkati	v.intr. ipf.
29279	odtekti	v.intr. pf.
34383	odtekti	v.intr. pf.
29280	odtěnȯk	m.
34384	odtirati	v.tr. ipf.
3756	odtisk pŕsta	m.
22095	odtisk	m.
22096	odtisk	m.
22097	odtisk	m.
23611	odtiskati	v.tr. ipf.
23612	odtisknųti	v.tr. pf.
29282	odtreti	v.tr. pf.
54	odtųd	adv.
16295	odučati	v.tr. ipf.
10071	odučeny	adj.
10072	odučiti	v.tr. pf.
29284	odurěti	v.intr. pf.
10074	odvadnjati	v.tr. ipf.
1423	odvaga	f.
3420	odvažny	adj.
4674	odvesti	v.tr. pf.
10085	odvět	m.
36387	odvęzati	v.tr. pf.
5509	odvezti	v.tr. pf.
14788	odvezti	v.tr. pf.
36386	odvęzyvati	v.tr. ipf.
5380	odvinųti	v.tr. pf.
5381	odvivati	v.tr. ipf.
22538	odvlåčivati	v.tr. ipf.
23884	odvlåčivati	v.tr. ipf.
23886	odvlěčeńje	n.
23885	odvlěčeny	adj.
22536	odvlěkati	v.tr. ipf.
36873	odvlěkati	v.tr. ipf.
22537	odvlěkti	v.tr. pf.
23883	odvlěkti	v.tr. pf.
4673	odvoditi	v.tr. ipf.
10093	odvodniti	v.tr. pf.
5508	odvoziti	v.tr. ipf.
14789	odvoziti	v.tr. ipf.
10098	odvožeńje	n.
1042	odvraćati	v.tr. ipf.
4688	odvraćati	v.tr. ipf.
22691	odvraćati	v.tr. ipf.
4689	odvråćeńje	n.
1121	odvråtiti	v.tr. pf.
4687	odvråtiti	v.tr. pf.
22692	odvråtiti	v.tr. pf.
10107	odvråtlivy	adj.
4679	odvråtno	adv.
10110	odvråtny	adj.
19987	odvŕgańje	n.
1175	odvŕgati	v.tr. ipf.
797	odvŕgnųti	v.tr. pf.
32868	odvŕtka	f.
1122	odvśųd	adv.
36321	odvykati sę	v.refl. ipf.
36320	odvykati	v.tr. ipf.
36323	odvyknųti sę	v.refl. pf.
36322	odvyknųti	v.tr. pf.
14790	odzavisiti	v.tr. pf.
15420	odzavisny	adj.
22865	odznaka	f.
29809	odzvati sę	v.refl. pf.
32459	odzvati	v.tr. pf.
22915	odzyv	m.
29822	odzyvati sę	v.refl. ipf.
32460	odzyvati	v.tr. ipf.
19505	oficer	m.anim.
16991	oficiaľno	adv.
291	oficiaľny	adj.
3761	ofis	m.
29291	ogarȯk	m.
29292	ogladiti	v.tr. pf.
173	oglåsiti	v.tr. pf.
1481	oglašati	v.tr. ipf.
5078	oglåšeńje	n.
29296	oglåvnik	m.
18099	oględ	m.
3379	oględati	v.tr. ipf.
5551	oględěti	v.tr. pf.
29304	ogluhnųti, oglušeti	v.intr. pf.
29305	oglupěti	v.intr. pf.
29307	oglušiti	v.tr. pf.
18101	ognišče	n.
29308	ognjeny	adj.
4236	ognjeodporny	adj.
29314	ognojiti	v.tr. pf.
34143	ogoliti sę	v.refl. pf.
29316	ogoliti	v.tr. pf.
29317	ogoliti	v.tr. pf.
18103	ogon	m.
826	ogȯnj	m.
18104	ogorčati	v.tr. ipf.
18106	ogorčiti	v.tr. pf.
34395	ogovarjańje	n.
34393	ogovarjati	v.tr. ipf.
34394	ogovarjati	v.tr. ipf.
18108	ogovor	m.
29318	ogovoriti	v.tr. pf.
34396	ogovoriti	v.tr. pf.
23401	ograbiti	v.tr. pf.
23400	ograbjati	v.tr. ipf.
3613	ogråda	f.
18112	ogråditi	v.tr. pf.
18109	ograđati	v.tr. ipf.
29328	ogråđeńje	n.
16297	ograničati	v.tr. ipf.
10129	ograničeńje	n.
19988	ograničeny	adj.
10131	ograničiti	v.tr. pf.
4329	ogražati	v.tr. ipf.
29331	ogrěti	v.tr. pf.
29332	ogrěvati	v.tr. ipf.
18113	ogrlica	f.
1048	ogromny	adj.
14794	ogromny	adj.
4328	ogroziti	v.tr. pf.
10138	ogrožeńje	n.
10139	ogroženy	adj.
29340	ogurȯk	m.
29341	ohati	v.intr. ipf.
29344	ohlåděti	v.intr. pf.
29342	ohlåditi	v.tr. pf.
29345	ohlađati	v.tr. ipf.
29346	ohlåđeńje	n.sg.
3552	ohota	f.
18114	ohotnik	m.anim.
3865	ohotno	adv.
10142	ohotnosť	f.
3864	ohotny	adj.
2118	ohråna	f.
1326	ohråniti	v.tr. pf.
1563	ohranjati	v.tr. ipf.
29353	ohrånny	adj.
29354	ohroměti	v.intr. pf.
29356	oj!	intj.
29357	oje	n.
29361	okameněti	v.intr. pf.
29362	okameněti	v.intr. pf.
5362	okameniti	v.tr. pf.
5364	okameniti	v.tr. pf.
5361	okamenjati	v.tr. ipf.
5363	okamenjati	v.tr. ipf.
32994	okarina	f.
10149	okazalo sę	phrase
1457	okazati sę	v.refl. pf.
19990	okazati	v.tr. pf.
3396	okazija	f.
29365	okazyvaje sę	phrase
1612	okazyvati sę	v.refl. ipf.
19991	okazyvati	v.tr. ipf.
5261	okean	m.
4896	Okeanija	f.sg.
29368	oklevetati	v.tr. pf.
1989	okno	n.
1	oko	n.
19994	okolice	f.pl.
29373	okoličny	adj.
32327	okolina	f.
18117	okoľna priroda	f.
3502	okoľnosť	f.
5797	okoľny	adj.
2117	okolo	prep.
19995	okolo	prep.
36654	okolorovati	v.tr. pf.
36328	okȯnnica	f.
29380	okȯnny	adj.
10159	okop	m.
29385	okotiti sę	v.refl. pf.
29386	okovany	adj.
29387	okovati	v.tr. pf.
18119	okovy	m.pl.
29391	okrajina	f.
34421	okrajina	f.
29392	okrajny	adj.
29398	okrěpnųti	v.intr. pf.
5538	okrestiti	v.tr. pf.
29403	okropiti	v.tr. pf.
29404	okropjati	v.tr. ipf.
19997	okrųg	m.
5366	okrųgliti	v.tr. pf.
5365	okrųgljati	v.tr. ipf.
29410	okrųglosť	f.
29411	okrųgly	adj.
16806	okrutnosť	f.
16805	okrutny	adj.
234	okrųžati	v.tr. ipf.
2803	okrųžiti	v.tr. pf.
29416	okrųžna dråga	f.
146	oksid	m.
36834	oktava	f.
1988	oktobr	m.sg.
35423	okuljary	m.pl.
29422	okunj	m.anim.
10168	okupacija	f.
10169	okupant	m.anim.
2111	okupovati	v.tr. ipf.
1497	olej	m.
36077	olejna rěpka	f.
16788	oligarh	m.anim.
16789	oligarhija	f.
18121	olimpijske igry	f.pl.
35021	olimpijsky	adj.
35006	olivka	f.
684	oljha	f.
29432	olověny	adj.
21417	olovka	f.
10173	olovny	adj.
10	olovo	n.sg.
29434	oltaŕ	m.
4625	omal	adv.
18123	omam	m.
18125	omamiti	v.tr. pf.
18130	omamnik	m.anim.
29435	oman	m.
31814	omar	m.anim.
29436	omastiti	v.tr. pf.
29440	omesti	v.tr. pf.
29439	omětati	v.tr. ipf.
5893	omiljeny	adj.
29441	omlåděti	v.intr. pf.
29442	omlåditi	v.tr. pf.
27642	omlađati	v.tr. ipf.
34436	omlet	m.
29446	omlěti	v.intr. pf.
34437	omlěvati	v.intr. ipf.
29452	omŕtvěti	v.intr. pf.
4686	omŕziti	v.tr. pf.
10178	omŕzlivy	adj.
10179	omŕzno	adv.
10180	omŕzny	adj.
19998	omŕžajųći	adj.
5608	omŕžati	v.tr. ipf.
4685	omŕžeńje	n.
3404	omųženy	adj.
3403	omųžiti sę	v.refl. pf.
29456	omųžiti	v.tr. pf.
2150	on	pron.pers.
792	ona	pron.pers.
10202	onako	adv.
19580	onaky	adj.
19565	onamo	adv.
32515	ondatra	f.
19533	onde	adv.
35621	one	pron.pers.
32831	oněměti	v.intr. pf.
21419	onesměliti	v.tr. pf.
21418	onesměljati	v.tr. ipf.
73	oni	pron.pers.
35615	onlajn, on-lajn	adv.
2821	ono	pron.pers.
16883	onȯgda, onȯgdy	adv.
16885	onȯgda, onȯgdy	adv.
34941	onȯgdašnji, onȯgdašny	adj.
19600	onoj	pron.dem.
19583	onoliko	adv.
19591	onoliky	adj.
36291	onomatopeja	f.
29478	onuća	f.
19548	onųdy	adv.
3062	opačny	adj.
29481	opadati	v.intr. ipf.
36006	opakovańje	n.
36004	opakovati	v.tr. pf.
36007	opakovka	f.
36005	opakovyvati	v.tr. ipf.
29484	opaliti	v.tr. pf.
29485	opaljati	v.tr. ipf.
4136	opalȯk	m.
29486	opariti	v.tr. pf.
34177	oparjati	v.tr. ipf.
14800	opasna burja	f.
10218	opasno prědprijęťje	n.
10217	opasno	adv.
4682	opasnosť	f.
4681	opasny	adj.
29482	opasti	v.intr. pf.
34076	opat	m.anim.
35012	opatka	f.
34075	opatstvo	n.
18132	opcija	f.
35166	opcionaľny	adj.
3302	opeka	f.
3301	opekati	v.tr. ipf.
36267	opeklina	f.
10223	opekun	m.anim.
18133	opekun	m.anim.
20942	opekun	m.anim.
18134	opekunstvo	n.sg.
20943	opekunstvo	n.sg.
29495	openjka	f.
3	opera	f.
18135	operacija	f.
32736	opereta	f.
29498	operiti sę	v.refl. pf.
34508	operjati sę	v.refl. ipf.
29497	operjeńje	n.
685	opęť	adv.
36055	opica	f.
23200	opij	m.sg.
20944	opirati sę	v.refl. ipf.
32540	opirati sę	v.refl. ipf.
20000	opis	m.
35306	opisateljny	adj.
2	opisati	v.tr. pf.
686	opisyvati	v.tr. ipf.
29511	opiti sę	v.refl. pf.
29510	opiti	v.tr. pf.
32713	opivati sę	v.refl. ipf.
32712	opivati	v.tr. ipf.
3766	oplačeny	adj.
10229	oplakati	v.tr. pf.
10230	oplakyvańje	n.sg.
10231	oplakyvati	v.tr. ipf.
29519	oplěti	v.tr. pf.
35122	opljunųti	v.tr. pf.
29521	opljuvati	v.tr. ipf.
18146	oploditi	v.tr. pf.
18139	oplođati	v.tr. ipf.
18141	oplođeńje	n.
18143	oplođeny	adj.
29525	opluti	v.tr. pf.
34310	oplyvati	v.tr. ipf.
20947	opora	f.
20001	oporędčati	v.tr. ipf.
20002	oporędčeny	adj.
20003	oporędčiti	v.tr. pf.
29531	oporny	adj.
29532	opozdniti sę	v.refl. pf.
34518	opozdniti	v.tr. pf.
34517	opozdnjati sę	v.refl. ipf.
34519	opozdnjati	v.tr. ipf.
2820	opozdnjeńje	n.
355	opozicija	f.
10233	opoznati	v.tr. pf.
10234	opoznavati	v.tr. ipf.
1559	oprašćati	v.tr. ipf.
29536	oprava	f.
29537	opravdańje	n.
32538	opravdańje	n.
10235	opravdati	v.tr. pf.
29538	opravdati	v.tr. pf.
10236	opravdyvati	v.tr. ipf.
32537	opravdyvati	v.tr. ipf.
20948	opraviti	v.tr. pf.
20951	opraviti	v.tr. pf.
20953	opravjati	v.tr. ipf.
20957	opravjati	v.tr. ipf.
35415	opravniti	v.tr. pf.
35416	opravnjati	v.tr. ipf.
35414	opravnjeny	adj.
34532	opråzdniti	v.tr. pf.
34536	opråzdnjati	v.tr. ipf.
29544	oprěděliti	v.tr. pf.
32606	oprěděljati	v.tr. ipf.
10237	oprěděljeno	adv.
10238	oprěděljeny	adj.
20958	oprěti sę	v.refl. pf.
29547	oprěti sę	v.refl. pf.
10239	oprętno	adv.
10240	oprętnosť	f.
10241	oprętny	adj.
2132	oprostiti	v.tr. pf.
20004	oprošćeńje	n.
13334	oprošćeny	adj.
22578	oprovŕgati	v.tr. ipf.
22579	oprovŕgnųti	v.tr. pf.
20582	optika	f.
35640	optimaľny	adj.
36352	optimizovati	v.tr. ipf./pf.
794	opublikovati	v.tr. pf.
10244	opuhati	v.intr. ipf.
10243	opuhly	adj.
10245	opuhneny	adj.
16299	opuhnųti	v.intr. pf.
2909	opustašati	v.tr. ipf.
29554	opustěti	v.intr. pf.
10246	opustiti	v.tr. pf.
20966	opustiti	v.tr. pf.
20967	opustiti	v.tr. pf.
14807	opustošeńje	n.
1546	opustošiti	v.tr. pf.
10250	opušćati	v.tr. ipf.
20960	opušćati	v.tr. ipf.
20962	opušćati	v.tr. ipf.
9758	opušćeńje	n.
10249	opušćeny	adj.
23154	opyliti	v.tr. pf.
23153	opyljati	v.tr. ipf.
23155	opyljeńje	n.
20969	opyt	m.
23308	opyt	m.
29559	orač	m.anim.
35895	orakul	m.anim.
34426	orangutan	m.anim.
29561	oranica	f.
29562	orańje	n.
32348	oranžerija	f.
539	oranževy	adj.
34547	orašati	v.tr. ipf.
34548	orašati	v.tr. ipf.
34549	orašati	v.tr. ipf.
34550	orašati	v.tr. ipf.
34551	orašati	v.tr. ipf.
22890	orati	v.ipf.
36774	orbita	f.
35969	orden	m.
36015	orden	m.
1086	orěh	m.
29566	orěhovka	f.
5982	orěhovo maslo	n.
29567	orěhovy	adj.
2398	orel	m.anim.
36768	oreol	m.
34788	orěšarka	f.
20005	organ	m.
36165	organ	m.
36166	organ	m.
20583	organičny	adj.
6343	Organizacija Sěveroatlantičskogo Dogovora	f.sg.
1123	Organizacija Sjedinjenyh Narodov	f.sg.
1064	organizacija	f.
330	organizator	m.anim.
23602	organizm	m.
4977	organizovati	v.tr. ipf./pf.
32595	orgija	f.
1124	orientacija	f.
3801	orientovati sę	v.refl. ipf.
31759	origami	n.indecl.
16036	originaľno	adv.
16037	originaľnosť	f.
1956	originaľny	adj.
33797	oriti	v.tr. ipf.
23448	orkestr	m.
29571	orlę	n.
29572	orľji	adj.
35475	ornament	m.
20006	ornitologičny	adj.
20007	ornitologija	f.sg.
29576	orny	adj.
29577	orositi	v.tr. pf.
34543	orositi	v.tr. pf.
34544	orositi	v.tr. pf.
34545	orositi	v.tr. pf.
34546	orositi	v.tr. pf.
4394	ortografičny	adj.
4393	ortografija	f.
2278	orųďje	n.
29579	orųďje	n.
3434	orųdovańje	n.
3588	orųdovańje	n.
10263	orųdovany	adj.
10264	orųdovati	v.tr. ipf.
10265	orųdovati	v.tr. ipf.
10268	orųžeńje	n.
29580	orųžiti	v.tr. ipf.
2816	orųžje	n.sg.
10269	orųžjenosec	m.anim.
29582	orųžny	adj.
2815	oś	f.
2369	osa	f.
2967	osaditi sę	v.refl. pf.
29588	osaditi	v.tr. pf.
21420	osadȯk	m.
34554	osađati	v.tr. ipf.
29590	osamotiti sę	v.refl. pf.
14812	osamotiti	v.tr. pf.
29591	osědati	v.intr. ipf.
29592	osedlati	v.tr. pf.
29594	osědly	adj.
1112	osel	m.anim.
29599	osel	m.anim.
29603	oseliti sę	v.refl. pf.
36495	oseljenėc	m.anim.
29601	oseljeńje	n.
29595	osęsti	v.intr. pf.
6178	Osetija	f.sg.
36562	osetinsky	adj.
29666	ośevy	adj.
29614	osika	f.
21424	osiliti	v.tr. pf.
21422	osiljati	v.tr. ipf.
22801	osiroćeny	adj.
29616	osirotěti	v.intr. pf.
22800	osirotiti	v.tr. pf.
29618	osivěti	v.intr. pf.
29621	oskopiti	v.tr. pf.
29623	oskubati	v.tr. pf.
34592	oskubyvati	v.tr. ipf.
34608	oskųdno	adv.
34611	oskųdnosť	f.
34602	oskųdny	adj.
29627	oskvŕnitelj	m.anim.
33472	oskvŕniti	v.tr. pf.
33470	oskvŕnjati	v.tr. ipf.
29626	oskvŕnjeńje	n.
29629	oslaběti	v.intr. pf.
4670	oslabiti	v.tr. pf.
14815	oslabiti	v.tr. pf.
4669	oslabjati	v.tr. ipf.
14816	oslabjati	v.tr. ipf.
10290	oslabjeńje	n.
1052	oslabjeny	adj.
10292	oslåditi	v.tr. pf.
29635	oslę	n.
29636	oslěpiti	v.tr. pf.
29637	oslěpjati	v.tr. ipf.
29638	oslěpjeńje	n.
29639	oslěpnųti	v.intr. pf.
29640	oslica	f.
14817	osloženiti	v.tr. pf.
14818	osloženjati	v.tr. ipf.
18153	osložnjeńje	n.
314	osm	num.card.
35345	osmansky	adj.
29646	osmažiti	v.tr. pf.
2970	osmdesęt	num.card.
10283	osmdesęty	num.ord.
29649	osměliti sę	v.refl. pf.
10991	osměliti	v.tr. pf.
34569	osměljati sę	v.refl. ipf.
16317	osměljati	v.tr. ipf.
29650	osmerka	num.subst.
16435	osmero	num.coll.
10296	osmina	num.fract.
16462	osmka	num.subst.
108	osmnadsęť	num.card.
15424	osmnadsętina	num.fract.
16465	osmnadsęty	num.ord.
29653	osmoliti	v.tr. pf.
36136	ośmonog	m.anim.
2838	osmsȯt, osmsto	num.card.
2824	osmy	num.ord.
10299	osmysljeno	adv.
10300	osmysljenosť	f.
10301	osmysljeny	adj.
29656	osněžiti	v.tr. pf.
2049	osnova	f.
29658	osnova	f.
29659	osnova	f.
29660	osnovańje	n.
18156	osnovany na	adj.
10304	osnovatelj	m.anim.
2938	osnovateljny	adj.
2115	osnovati	v.tr. pf.
29663	osnovati	v.tr. pf.
18158	osnovno	adv.
2831	osnovny	adj.
13	osnovyvati	v.tr. ipf.
2210	osoba	f.
5080	osoblivo	adv.
20008	osoblivosť	f.
5747	osoblivy	adj.
10320	osobna pomsta	f.
10312	osobna potrěba	f.
10314	osobna vojna	f.
10315	osobnik	m.anim.
4293	osobno	adv.
10317	osobnosť	f.
29668	osobny avtomobil	m.
10319	osobny kompjuter	m.
16992	osobny zaimennik	m.
4292	osobny	adj.
29670	osoliti	v.tr. pf.
29612	osȯt	m.
18163	osȯvrěmenniti	v.tr. pf.
18159	osȯvrěmennjati	v.tr. ipf.
18161	osȯvrěmennjeńje	n.
21999	ospa	f.
5910	osparjati	v.tr. ipf.
5939	osporiti	v.tr. pf.
32547	osråmiti	v.tr. pf.
32548	osråmiti	v.tr. pf.
29675	osrědȯk	m.
29686	osť	f.
16993	ostaly	adj.
29676	ostanky	m.pl.
29677	ostarěti	v.intr. pf.
466	ostati	v.intr. pf.
3297	ostatny	adj.
1918	ostatȯk	m.
2834	ostavati	v.intr. ipf.
825	ostaviti	v.tr. pf.
21739	ostaviti	v.tr. pf.
505	ostavjati	v.tr. ipf.
21738	ostavjati	v.tr. ipf.
10330	ostavjeńje	n.
3201	ostavjeny	adj.
29683	ostavka	f.
10342	Ostråžno!	intj.
3480	ostråžno	adv.
29688	ostråžnosť	f.
3478	ostråžny	adj.
29691	ostrěgati sę	v.refl. ipf.
18167	ostrěgati	v.tr. ipf.
18166	ostrěgti	v.tr. pf.
23090	ostrěžeńje	n.
31999	ostriga	f.
29693	ostrigati	v.tr. ipf.
5024	ostrigti	v.tr. pf.
32892	ostriti	v.tr. ipf.
29697	ostrižeńje	n.
4499	ostŕje	n.
10339	ostro	adv.
29698	ostroga	f.
18168	ostroumje	n.
10341	Ostrov Man	m.sg.
2044	ostrov	m.
29700	ostrovjan, ostrovjanin	m.anim.
29702	ostrugati	v.tr. pf.
947	ostry	adj.
29713	ostuditi	v.tr. pf.
29715	osųd	m.sg.
2036	osųditi	v.tr. pf.
7	osųđati	v.tr. ipf.
32550	osųđeńje	n.
29718	osušati	v.tr. ipf.
29719	osušiti	v.tr. pf.
34655	osvajati	v.tr. ipf.
34657	osvajati	v.tr. ipf.
15709	osvatiti sę	v.refl. pf.
29721	osvěćati	v.tr. ipf.
32355	osvęćati	v.tr. ipf.
29722	osvěćeńje	n.
23888	osvědamjati sę	v.refl. ipf.
23887	osvědomiti sę	v.refl. pf.
29723	osvętiti	v.tr. pf.
29724	osvětiti	v.tr. pf.
10354	osvětliti	v.tr. pf.
10357	osvětljati	v.tr. ipf.
34650	osvětljeńje	n.
18169	osvěžati	v.tr. ipf.
18171	osvěžiti	v.tr. pf.
18175	osvobađati sę	v.refl. ipf.
450	osvobađati	v.tr. ipf.
18179	osvoboditi sę od	v.refl. pf.
18178	osvoboditi sę	v.refl. pf.
881	osvoboditi	v.tr. pf.
29729	osvobođeńje	n.
29730	osvojiti	v.tr. ipf.
34654	osvojiti	v.tr. ipf.
22000	osypky	m.pl.
16856	ošalěti	v.intr. pf.
29732	oščeniti sę	v.refl. pf.
10364	otcevska ljubȯv	f.
6024	otcevsky	adj.
29737	otčim	m.anim.
4268	otčina	f.
2048	otec	m.anim.
2046	otečstvo	n.
6137	otęgčati	v.tr. ipf.
6138	otęgčati	v.tr. ipf.
6140	otęgčiti	v.tr. pf.
6141	otęgčiti	v.tr. pf.
29743	oteliti sę	v.refl. pf.
18181	otěniti	v.tr. pf.
18180	otěnjati	v.tr. ipf.
5967	otęžeńje	n.
5968	otęženy	adj.
6285	otišati	v.tr. ipf.
6286	otišiti	v.tr. pf.
22073	otok	m.
2823	otrava	f.
29752	otravitelj	m.anim.
3779	otraviti	v.tr. pf.
3777	otravjati	v.tr. ipf.
29751	otravjeńje	n.
29754	otravny	adj.
34957	otręsati	v.tr. ipf.
34958	otręsti	v.tr. pf.
29758	otrězvěti	v.intr. pf.
29759	otrězviti	v.tr. pf.
34674	otrězvjati	v.tr. ipf.
1066	otrųby	f.pl.
6144	otrudniti	v.tr. pf.
6143	otrudnjati	v.tr. ipf.
10381	otrudnjeńje	n.
34693	otųpělosť	f.
34687	otųpěly	adj.
29767	otųpěti	v.intr. pf.
29768	otųpiti	v.tr. pf.
34698	otųpjati	v.tr. ipf.
2399	otvarjati	v.tr. ipf.
3662	otvor	m.
2037	otvoriti	v.tr. pf.
10095	otvorjeny parašut	m.
10094	otvorjeny tenisny čempionat	m.
1056	otvorjeny	adj.
29770	otvŕděti	v.intr. pf.
10387	ov	pron.dem.
10388	ovako	adv.
19579	ovaky	adj.
34986	ovaľny	adj.
19563	ovamo	adv.
628	ovca	f.
32023	ovčaŕ	m.anim.
20009	ovčarnja	f.
32024	ovčaŕsky pes	m.anim.
14821	ovde	adv.
32942	ovdověly	adj.
29773	ovdověti	v.intr. pf.
29774	ovějati	v.tr. pf.
28986	ovějivati	v.tr. ipf.
29775	Oven	m.anim.
29776	oven	m.anim.
18183	ověnčati	v.tr. ipf.
18184	ověnčiti	v.tr. pf.
10391	ověriti	v.tr. pf.
10392	ověrjati	v.tr. ipf.
10390	ověrjeny	adj.
912	oves	m.sg.
20012	ovinųti	v.tr. pf.
20010	ovivati	v.tr. ipf.
22493	ovladnųti	v.tr. pf.
22494	ovladnųti	v.tr. pf.
22489	ovladyvati	v.tr. ipf.
22491	ovladyvati	v.tr. ipf.
2827	ovoć	m.
19525	ovȯgda, ovȯgdy	adv.
29783	ovȯlgnųti	v.intr. pf.
19582	ovoliko	adv.
19590	ovoliky	adj.
29784	ovoščiti	v.tr. pf.
890	ovplyvniti	v.tr. pf.
2828	ovplyvnjati	v.tr. ipf.
36051	ovråtnik	f.
19547	ovųdy	adv.
34715	ozdabjati	v.tr. ipf.
29788	ozdoba	f.
29789	ozdobiti	v.tr. pf.
36544	ozdobny	adj.
29790	ozdråvěti	v.intr. pf.
10400	ozdråviti	v.tr. pf.
10401	ozdravjati	v.tr. ipf.
10402	ozdravjeńje	n.
36819	ozdråvnica	f.
29792	ozębti	v.intr. pf.
29793	ozeleniti	v.intr. pf.
29794	ozelenjati	v.intr. ipf.
10405	ozemisko	adv.
10404	ozemisky	adj.
10403	ozemja	f.
29795	ozimina	f.
29796	ozimy	adj.
36859	ozlobiti sę	v.refl. pf.
29799	ozlobiti	v.tr. pf.
29800	ozlobjeńje	n.
1069	označati	v.tr. ipf.
10414	označati	v.tr. ipf.
22862	označati	v.tr. ipf.
10413	označeńje	n.
18192	označeny	adj.
1070	označiti	v.tr. pf.
18194	označiti	v.tr. pf.
22863	označiti	v.tr. pf.
22864	oznaka	f.
29807	oznamenovati	v.tr. pf.
34735	oznamenovati	v.tr. pf.
34736	oznamenovyvati	v.tr. ipf.
34737	oznamenovyvati	v.tr. ipf.
22861	oznaniti	v.tr. pf.
22860	oznanjati	v.tr. ipf.
32847	ozon	m.sg.
32849	ozonovy sloj	m.sg.
29810	ozvěrěti	v.intr. pf.
3400	oženiti sę	v.refl. pf.
29812	oženiti	v.tr. pf.
3401	oženjeny	adj.
29815	ožiti	v.intr. pf.
29816	oživati	v.intr. ipf.
29818	oživiti	v.tr. pf.
36452	oživjati	v.tr. ipf.
14822	oživjeno	adv.
14823	oživjeny	adj.
29820	ožȯltěti	v.intr. pf.
29821	ožrěbiti sę	v.refl. pf.
10418	pa	conj.
18195	pacient	m.anim.
29824	pad	m.
20970	padalina	f.
1771	padati	v.intr. ipf.
261	padež	m.
20971	padųčnica	f.
32134	pajac	m.anim.
3447	paket	m.
1063	Pakistan	m.sg.
22766	pakistansky	adj.
5471	pakovati	v.tr. ipf.
1058	pala	f.
2830	palac	m.
31750	palačinka	f.
1841	palatalizacija	f.
23305	palatka	f.
35434	palec	m.
2825	palestinsky	adj.
2829	paliti	v.tr. ipf.
14826	paliti	v.tr. ipf.
2826	palivo	n.
944	paljto	n.
29827	palka	f.
16040	palma	f.
36159	palmeta	f.
1961	pamęť	f.
1960	pamętati	v.tr. ipf.
4117	pamętnik	m.
10438	pamętny	adj.
35182	pamflet	m.
350	pan	m.anim.
35932	panaceja	f.
22464	Panama	f.sg.
22465	panamsky	adj.
29832	pancyŕ	m.
4501	pancyrovoz	m.
23261	pančoha	f.
36272	panda	f.
10444	panel orųdij	m.
2359	pani	f.
20014	panika	f.
18197	paniker	m.anim.
35049	panorama	f.
16996	panslavist	m.anim.
16997	panslavističny	adj.
16998	panslavizm	m.sg.
23143	pantofle	m.pl.
1356	papa	m.anim.
36067	papaja	f.
506	papir	m.
35315	papirny	adj.
32614	papirus	m.
29838	papka	f.
1075	papråť	f.
35460	paprika	f.
6109	Papua Nova Gvineja	f.sg.
23144	papuče	f.pl.
4570	papugaj	m.anim.
18200	para prikladov	f.
2257	para	f.
4993	para	f.
29842	parada	f.
16999	paradigm	m.
29843	paradny kostjum	m.
543	paradoks	m.
2377	paradoksaľny	adj.
35421	parafija	f.
15522	paragraf	m.
22442	Paragvaj	m.sg.
22443	paragvajsky	adj.
23206	paralela	f.
23207	paraleľny	adj.
29848	paraliza	f.
16790	paralizovati	v.tr. ipf.
35933	parametr	m.
29849	parapet	m.
4066	parašut	m.
29851	parašutist	m.anim.
23773	paravan	m.
1820	parazit	m.anim.
29855	parazitizm	m.sg.
29856	parazitny	adj.
29857	parazitovati	v.intr. ipf.
23876	parfum	m.
36723	parfumovati sę	v.refl. ipf.
23877	parfumovati	v.tr. ipf.
29859	pariti	v.intr. ipf.
18201	Pariž	m.sg.
4906	parižsky	adj.
32408	park	m.
32410	parkovati sę	v.refl. ipf./pf.
32409	parkovati	v.tr. ipf./pf.
32411	parkovišče	n.
1185	parlament	m.
35061	parlamentarny	adj.
23635	parna mašina	f.
33231	parno čislo	n.
36702	parny valec	m.
29861	parny	adj.
29863	parny	adj.
35218	parodija	f.
35422	parohija	f.
10456	parola	f.
22413	parovoz	m.
32036	paršivy	adj.
17000	particip	m.
2994	partija	f.
23452	partitura	f.
2911	partner	m.anim.
36090	partnerka	f.
5161	partnerstvo	n.
18202	pas	m.
36621	pasaž	m.
36622	pasaž	m.
3005	pasažer	m.anim.
2906	pasažersky	adj.
36710	pasians	m.sg.
2400	pasivny	adj.
5264	pasport	m.
20972	pasť	f.
32945	pasti sę	v.refl. ipf.
5015	pasti	v.intr. pf.
5017	pasti	v.tr. ipf.
20975	pastuh	m.anim.
20978	pastva	f.
20979	pastvišče	n.
20980	pastyŕ	m.anim.
20981	pastyŕ	m.anim.
36302	pat	m.
23769	patent	m.
35680	patriarh	m.anim.
35681	patriarhat	m.
35461	patriot	m.anim.
35462	patriotičny	adj.
35463	patriotizm	m.sg.
20015	patronizovati	v.tr. ipf.
10465	pauza	f.
10466	pauzovati	v.intr. ipf.
33651	pav	m.anim.
23097	pavian	m.anim.
10467	pavųčina	f.
10469	pavųčja niť	f.
431	pavųk	m.anim.
35316	pazigrafija	f.
1697	pazuha	f.
2842	pčela	f.
29868	pčelaŕ	m.anim.
36029	pčelaŕstvo	n.sg.
29869	pčeliny	adj.
29871	pčeľji	adj.
29870	pčeľnik	m.
20983	peć	m.
14829	pečenj	f.
278	pečęť	f.
23616	pečętaŕ	m.anim.
23609	pečętaŕstvo	n.sg.
2358	pečętati	v.tr. ipf.
18203	pečivo	n.
23604	pedagog	m.anim.
23605	pedagogičny	adj.
23603	pedagogika	f.
753	pedofil	m.anim.
1539	pěga	f.
2375	pěgavy	adj.
29872	pěhota	f.
20985	pekaŕ	m.anim.
20986	pekarnja	f.
29873	pekľny	adj.
29874	peklo	n.
20989	pekti sę	v.refl. ipf.
2840	pekti	v.tr. ipf.
2277	pelena	f.
36235	pelerina	f.
16796	pelikan	m.anim.
2256	pelun	m.
32470	pemza	f.
869	pěna	f.
2187	pendžabsky	adj.
14589	pěnęz	m.
4417	pěnęzy	m.pl.
10488	pěnęžny	adj.
16046	penis	m.
16047	penisovy	adj.
1717	penj	m.
36375	pěnna kųpělj	f.
4847	pensija	f.
16050	pensijny fond	m.
16049	pensijny	adj.
2833	pensioner	m.anim.
9340	penthaus	m.
15397	penthausny	adj.
2832	pepel	m.sg.
10490	pepelavy	adj.
34855	pepelisty	adj.
36745	pepeľnik	m.
3136	peprec	m.
29879	percepcija	f.
17001	perfekt	m.
36033	perforator	m.
32613	pergament	m.
32097	periferija	f.
32098	periferijny	adj.
16052	period	m.
35811	periodičny	adj.
4787	perkusija	f.
23289	perla	f.
36177	perlovo proso	n.
2336	pero	n.
3994	pero	n.
10496	perovy	adj.
35900	Persija	f.sg.
35902	persijec	m.anim.
35901	persijsky	adj.
2343	personal	m.
17002	personaľny zaimennik	m.
29883	personaľny	adj.
23079	personaž	m.
36185	personifikacija	f.
4294	perspektiva	f.
10498	Peru	m.indecl.
10499	Peruanec	m.anim.
14830	Peruansky	adj.
10500	Perun	m.anim.
14831	perun	m.
4318	perverzija	f.
4320	perverznik	m.anim.
10503	perverzno	adv.
4319	perverznosť	f.
4317	perverzny	adj.
2345	pes	m.anim.
5750	pěsennik	m.anim.
6030	pesimist	m.anim.
6028	pesimističny	adj.
6029	pesimizm	m.sg.
2344	pěsnja	f.
18207	pěsȯčna burja	f.
29886	pěsȯčny	adj.
426	pěsȯk	m.
1962	pęsť	f.
36248	pesticid	m.
615	pestry	adj.
18208	pěšak	m.anim.
659	pěše	adv.
236	pěšehod, pěšehodec	m.anim.
1079	pěši	adj.
908	pęť	num.card.
44	pęta	f.
2176	pęťdesęt	num.card.
32329	pęťdesętničsky	adj.
23687	pęťdesęty	num.ord.
16455	pęteraky	num.diff.
16428	pęterčęta	n.pl.
34564	pęterka	num.subst.
16443	pęterny	num.mult.
16432	pętero	num.coll.
35848	peticija	f.
10535	pętikųtnik	m.
10533	pętina	num.fract.
10534	pętivųgȯľnik	m.
16459	pętka	num.subst.
2368	pętnadsęť	num.card.
23683	pętnadsęty	num.ord.
35541	pętno	n.
474	pętȯk	m.
2279	pęťsȯt, pęťsto	num.card.
1876	pęty	num.ord.
10537	pěvańje	n.sg.
1469	pěvatelj	m.anim.
237	pěvati	v.tr. ipf.
32924	phati sę do/za	v.refl. ipf.
32905	phati	v.tr. ipf.
32907	phnųti	v.tr. pf.
32491	pianist	m.anim.
32492	pianistka	f.
5825	pica	f.
20016	pidžin	m.
36367	piedestal	m.
34969	pigment	m.
23278	pijanica	m./f.
35728	pijanstvo	n.sg.
14834	pijany	adj.
388	pijavica	f.
10591	pijemy	adj.
35588	pikantny	adj.
15437	pikirovańje	n.
10547	pikirovati	v.intr. ipf.
15436	pikirovka	f.
15439	pikirovnica	f.
10549	pikirovnik	m.anim.
23423	piknik	m.
32223	piky	f.pl.
2222	pila	f.
34282	pilina	f.
34281	piliti	v.tr. ipf.
16305	pilot	m.anim.
33408	pilulka	f.
20990	pinati	v.tr. ipf.
32769	ping-pong	m.sg.
20586	pingvin	m.anim.
6287	pion	m.
3262	pioner	m.anim.
10554	pir	m.
10555	piramida	f.
10556	piramidovy	adj.
1959	pirat	m.anim.
32456	piratstvo	n.sg.
10558	piroman	m.anim.
10560	piromaničny	adj.
10559	piromanija	f.
10563	pirotehničny sklad	m.
10562	pirotehničny	adj.
10564	pirotehnik	m.anim.
10561	pirotehnika	f.
10565	pirovati	v.intr. ipf.
20992	pisaľny stol	m.
10568	pisańje	n.
3939	pisatelj	m.anim.
15680	pisati nanovo	v.ipf.
141	pisati	v.tr. ipf.
5984	pisemny	adj.
1147	piskati	v.intr. ipf.
20993	piśmę	n.
2988	piśmennosť	f.
23119	piśmennosť	f.
3002	piśmo	n.
20995	piśmo	n.
5981	pistacija	f.
2087	pistolet	m.
10580	pistoľnik	m.anim.
14838	pišati	v.intr. ipf.
5684	piščeti	v.intr. ipf.
18209	pišęća mašina	f.
18210	pišęći stroj	m.
1973	piti	v.tr. ipf.
10590	pitna voda	f.
4181	pitny	adj.
35494	pivnica	f.
35495	pivnica	f.
2067	pivo	n.
35730	pivovar	m.anim.
35729	pivovarnja	f.
35731	pivovarsky	adj.
29902	pizda	f.
10598	pižama	f.
3210	plač	m.sg.
10601	plačlivy	adj.
35219	plagiat	m.
2261	plakat	m.
2177	plakati	v.intr. ipf.
380	plåmenj	m.
2872	plan	m.
581	planeta	f.
36624	plankton	m.
650	planovati	v.tr. ipf.
29904	planšet	m.
2373	plast	m.
36925	plastelin	m.
18211	plastičny	adj.
18212	plastik	m.sg.
18213	plastikovy	adj.
2378	plašč	m.
4276	plata	f.
10615	plaťba	f.
10617	plaťbovy	adj.
10616	plaťby	f.pl.
3800	platform	m.
22632	platina	f.sg.
10619	platitelj	m.anim.
2114	platiti	v.tr. ipf.
94	plåtno	n.
10625	plavańje	n.
20997	plavati	v.intr. ipf.
20999	plavny	adj.
21001	plåvy	adj.
5196	plaž	f.
36910	plebiscit	m.
16344	plemę	n.
14841	plemenec	m.anim.
14842	plemenica	f.
23403	plen	m.
23405	pleniti	v.tr. ipf.
18223	pleskańje	n.sg.
18224	pleskati	v.tr. ipf.
18225	plesknųti	v.tr. pf.
2068	plěsnj	f.
5019	plesti	v.tr. ipf.
32092	pletenka	f.
31722	plěti	v.tr. ipf.
36060	plěva	f.
36061	plěvnja	f.
35543	pljama	f.
1348	pljuća	f.
3275	pljunųti	v.intr. pf.
36852	pljuskati	v.intr. ipf.
36853	pljusknųti	v.intr. pf.
32509	pljuš	m.sg.
32510	pljuševy	adj.
1105	pljuvati	v.intr. ipf.
1346	plod	m.
1377	plod	m.
23024	ploditi	v.tr. ipf.
23025	ploditi	v.tr. ipf.
36121	plodnosť	f.
2402	plodny	adj.
5224	plosky	adj.
1372	plošča	f.
1963	plȯť	f.
5223	plot	m.
34867	plȯť	f.
1972	plug	m.
16970	plus	m.
17003	pluskvamperfekt	m.
34913	pluti	v.intr. ipf.
22638	plutonij	m.sg.
10626	plyvti	v.intr. ipf.
18226	pnevmonija	f.
21009	pnųti	v.tr. pf.
36703	po mojemu mněńju	adv.
10648	po mojemu skromnomu mněńju	adv.
18227	po odnošeńju k	prep.
35696	po pričině	prep.
36147	po slučaju	prep.
36233	po strělkě časovnika	adv.
36271	po svaťbě povęzany	adj.
2215	po	prep.
4941	po	prep.
4942	po	prep.
4943	po	prep.
10642	po	prep.
10644	po	prep.
10645	po	prep.
10647	po	prep.
10655	poběda	f.
34982	poběditelj	m.anim.
18232	poběditi	v.intr. pf.
18229	poběđati	v.intr. ipf.
35862	poběgti	v.intr. pf.
4050	pobiti	v.intr. pf.
10652	pobiťje	n.
10653	pobity	adj.
35143	poblågodariti	v.tr. pf.
36892	poblågoželati	v.intr. pf.
20018	poblåžlivosť	f.
20019	poblåžlivy	adj.
10656	poblizu	adv.
103	pobrěžny	adj.
2159	pobuditi	v.tr. pf.
580	pobuđati	v.tr. ipf.
18233	pobuđeńje	n.
4549	pobyťje	n.
112	pocělovati	v.intr. pf.
1129	pocělunȯk	m.
10668	pocěluvka	f.
1085	počekati	v.intr. ipf.
22788	počęti sę	v.tr. pf.
1078	počęti	v.tr. pf.
10672	počęťje	n.
10669	počętkovo	adv.
10670	počętkovy	adj.
20021	počętkujųći	adj.
35335	počętkujųći	m.anim.
1077	počętȯk	m.
18234	počin	m.
10675	počinati sę	v.refl. ipf.
2835	počinati	v.tr. ipf.
23889	počrveněti	v.intr. pf.
29916	počuťje	n.
3134	počva	f.
10678	pod nakazom	prep.
10679	pod voditeljstvom	prep.
10681	pod vodstvom	prep.
737	pod	prep.
4933	pod	prep.
35393	podańje	n.
18235	podanȯk	m.
4323	podariti	v.tr. pf.
5580	podarȯk	m.
5160	podati	v.tr. pf.
18238	podavatelj	m.anim.
18243	podavati parų prikladov	v.ipf.
5159	podavati	v.tr. ipf.
35887	podbirati	v.tr. ipf.
1448	podbrådȯk	m.
35888	podbrati	v.tr. pf.
1626	podčas	prep.
2053	podčrkati	v.tr. ipf.
2837	podčrknųti	v.tr. pf.
4085	poddańje	n.
18244	poddany	m.anim.
4084	poddati sę	v.refl. pf.
36428	poddati	v.tr. pf.
10693	poddavajemosť	f.
10694	poddavajemy	adj.
4083	poddavati sę	v.refl. ipf.
10697	poddavati	v.tr. ipf.
856	poddŕžati	v.tr. pf.
10699	poddŕživańje	n.
1951	poddŕživati	v.tr. ipf.
36400	poddŕžka	f.
5575	podękovati	v.intr. pf.
1952	poděl	m.
36011	poděliti sę	v.refl. pf.
2241	poděliti	v.tr. pf.
18249	poděti sę	v.refl. pf.
18251	poděvati sę	v.refl. ipf.
18253	podglåvnica	f.
16306	podględ	m.
5385	podględati	v.intr. ipf.
5387	podględěti	v.intr. pf.
36558	podgoŕje	n.
18254	podgovarjati	v.tr. ipf.
18255	podgovoriti	v.tr. pf.
23892	podgrěti	v.tr. pf.
23893	podgrěvati	v.tr. ipf.
20022	podgrupa	f.
18256	podhod	m.
18259	podhoditi (k)	v.intr. ipf.
18257	podhoditi	v.intr. ipf.
5176	podimati	v.tr. ipf.
23241	podium	m.
5177	podjęti	v.tr. pf.
20595	podkategorija	f.
35535	podkazka	f.
11099	podklad	m.
32682	podkladati	v.tr. ipf.
36904	podključati sę	v.refl. ipf.
36898	podključati	v.tr. ipf.
36901	podključiti sę	v.refl. pf.
36895	podključiti	v.tr. pf.
453	podkopati	v.tr. pf.
2199	podkopyvati	v.tr. ipf.
36826	podkova	f.
32095	podkovati	v.tr. pf.
26778	podkovyvati	v.tr. ipf.
20024	podkrěpiti	v.tr. pf.
20025	podkrěpjati	v.tr. ipf.
36595	podkryvje	n.
5791	podkup	m.
10724	podkupiti	v.tr. pf.
10723	podkupovati	v.tr. ipf.
10725	podkupstvo	n.sg.
32683	podlagati	v.tr. ipf.
18260	podle	prep.
15446	podlec	m.anim.
20596	podležati	v.intr. ipf.
4493	podliti	v.tr. pf.
4492	podlivati	v.tr. ipf.
20598	podlivka	f.
1115	podloga	f.
20600	podloga	f.
32684	podložiti	v.tr. pf.
36245	podložka dlja myši	f.
36244	podložka	f.
18262	podly	adj.
20603	podměniti	v.tr. pf.
20602	podměnjati	v.tr. ipf.
20027	podmet	m.
36456	podmnožstvo	n.
34631	podmoŕsky	adj.
33718	podnapisy	m.pl.
18264	podnebje	n.
33560	podnebje	n.
18265	podnebne izměny	f.pl.
18266	podnebny	adj.
20604	podnos	m.
18267	podnožišče	n.
10729	podnurjati	v.tr. ipf.
14850	podoba	f.
14851	podoba	f.
18268	podobati sę	v.refl. ipf.
2404	podobno	adv.
3866	podobnosť	f.
1718	podobny	adj.
33514	pododděl	m.
34766	podȯjdti (k)	v.intr. pf.
36534	podȯjdti	v.intr. pf.
34920	podokȯnnik	m.
10739	podȯlg	prep.
36169	podȯšva	f.
16475	podpaliti	v.tr. pf.
15453	podpaljač	m.anim.
16474	podpaljati	v.tr. ipf.
10743	podpaljeńje	n.
35657	podpazuha	f.
10761	podpirany od	adj.
1114	podpirati	v.tr. ipf.
36303	podpis	m.
3086	podpisati	v.tr. pf.
10750	podpiska	f.
10751	podpisnik	m.anim.
1117	podpisyvati	v.tr. ipf.
2296	podpor	m.
10758	podporiti	v.tr. pf.
21010	podporka	f.
10759	podpornik	m.anim.
10760	podporny	adj.
18271	podråstka	f.
18272	podråstȯk	m.anim.
36445	podråzděl	m.
33516	podråzděliti	v.tr. pf.
33517	podråzděljati	v.tr. ipf.
33518	podråzděljeńje	n.
22358	podręditi	v.tr. pf.
22360	podrędny	adj.
22359	podręđati	v.tr. ipf.
21426	podrobnosť	f.
35083	podrobny	adj.
1116	podrųčnik	m.
10763	podrųčny	adj.
10764	podružiti sę	v.refl. pf.
6288	podsekretaŕ	m.anim.
10769	podslušati	v.tr. pf.
10767	podslušivańje	n.
10768	podslušivatelj	m.anim.
22778	podslušivati	v.tr. ipf.
5389	podsměhati sę	v.refl. ipf.
5390	podsměhnųti sę	v.refl. pf.
21752	podstava	f.
36145	podstavka na mylo	f.
10772	podstrěkańje	n.
10774	podstrěkatelj	m.anim.
5612	podstrěkati	v.tr. ipf.
4494	podstrěknųti	v.tr. ipf.
21959	podstųpati k	v.intr. ipf.
21960	podstųpiti k	v.intr. pf.
18273	podsvědomje	n.
10779	podsvědomo	adv.
6220	podsvědomosť	f.
6221	podsvědomy	adj.
35438	podtaliŕka	f.
34623	podtekst	m.
36446	podtip	m.
10783	podtiskańje	n.
10782	podtiskati	v.tr. ipf.
20029	podtisknųti	v.tr. pf.
34627	podton	m.
14860	podtrimati	v.tr. pf.
14861	podtrimyvańje	n.
14862	podtrimyvati	v.tr. ipf.
5267	poduška	f.
17085	podvajati	v.tr. ipf.
35496	podval	m.
6014	podvažati	v.tr. ipf.
6016	podvažiti	v.tr. pf.
22195	podvęzka	f.
18274	podvig	m.
10788	podvisiti	v.tr. pf.
3142	podvodna loď	f.
10727	podvodnica	f.
34629	podvodno těčeńje	n.
23272	podvodny	adj.
17005	podvojiti	v.tr. ipf.
35564	podvŕgańje	n.
22584	podvŕgati	v.tr. ipf.
22585	podvŕgnųti	v.tr. pf.
16310	podzemje	n.
23573	podzemna voda	f.
36655	podzemny svět	m.sg.
16308	podzemny	adj.
10741	podzirati	v.tr. ipf.
10742	podzirlivy	adj.
10740	podzrěny	adj.
1770	podzrěti	v.tr. pf.
2093	podzrěvati	v.tr. ipf.
921	poema	f.
16311	poet	m.anim.
23714	poetičny	adj.
20030	poezija	f.
36041	pogaršati	v.tr. ipf.
34386	pogladiti	v.tr. pf.
34387	pogladiti	v.tr. pf.
18276	poglåvȯk	m.
2405	poględ	m.
3357	poględ	m.
10796	poględańje vitrin	n.
10798	poględatelj vitrin	m.anim.
10797	poględatelj	m.anim.
5819	poględati	v.ipf.
31879	poglųbiti	v.tr. pf.
25654	poglųbjati	v.tr. ipf.
3868	pogoda	f.
18277	pogȯltnųti sȯlzy	v.pf.
10800	pogȯltnųti	v.tr. pf.
18278	pogon	m.
18279	pogon	m.
10801	pogorno	adv.
36042	pogoršiti	v.tr. pf.
36572	pogovoriti	v.intr. pf.
36368	pograničje	n.
36444	pograničny	adj.
5664	pogrdlivy	adj.
35565	pogreb	m.
36498	pogrebati	v.tr. ipf.
36499	pogrebti	v.tr. pf.
18282	pogrěšiti	v.intr. pf.
491	pogrěška	f.
21428	pogrųziti	v.tr. pf.
21427	pogrųžati	v.tr. ipf.
4308	pogynati	v.intr. ipf.
4309	pogynųti	v.intr. pf.
18284	pohmeľje	n.
3661	pohod	m.
18285	pohod	m.
23894	pohodka	f.
18286	pohođeńje	n.
32335	pohođeńje	n.
36318	pohota	f.
23102	pohristijaniti	v.tr. pf.
23101	pohristijanjati	v.tr. ipf.
29921	pohva	f.
10813	pohvala	f.
522	pohvaliti	v.tr. pf.
26040	pohvaľny	adj.
10814	pohvaly	f.pl.
6153	pohybka	f.
10806	pohyćańje	n.
4351	pohyćati	v.tr. ipf.
10808	pohyćenec	m.anim.
4350	pohyćeńje	n.
10809	pohyćeny	adj.
4352	pohytitelj	m.anim.
4349	pohytiti	v.tr. pf.
18289	poiskati	v.tr. pf.
20031	poiskyvati	v.tr. ipf.
29922	pojas	m.
10817	pojaviti sę	v.refl. pf.
16312	pojavjati sę	v.refl. ipf.
10818	pojavjeńje	n.
4027	pojdti	v.intr. pf.
20034	pojedinȯk	m.
3274	pojehati	v.intr. pf.
18291	pojęti	v.tr. pf.
5005	pojęťje	n.
1917	pojezd	m.
32703	pojiti	v.tr. ipf.
17006	pojmańje	n.
18292	pojmati	v.tr. ipf.
10828	poka	conj.
31968	pokajańje	n.
31970	pokajati sę	v.refl. pf.
1916	pokarati	v.tr. pf.
35409	pokarati	v.tr. pf.
20035	pokarjati	v.tr. ipf.
1915	pokazati	v.tr. pf.
20037	pokazny	adj.
1108	pokazyvati	v.tr. ipf.
32062	poker	m.sg.
10829	pokladati	v.tr. ipf.
32591	poklicati	v.intr. ipf.
32592	poklik	m.
36105	poklon	m.
36591	pokloniti sę	v.refl. pf.
18294	pokoj	m.sg.
35386	pokojnik	m.
35385	pokojny	adj.
23115	pokoliko	conj.
2431	pokoljeńje	n.
14847	pokoriti	v.tr. pf.
20040	pokoriti	v.tr. pf.
14846	pokorjeny	adj.
5028	pokornosť	f.
5026	pokorny	adj.
18296	pokositi	v.tr. pf.
23895	pokrčati ramenami	v.ipf.
21429	pokrčiti ramenami	v.pf.
18297	pokrestiti	v.tr. pf.
10838	pokromě	adv.
14867	pokrȯvnik	m.anim.
6158	pokrȯvnosť	f.
6154	pokrȯvny	adj.
1769	pokryti	v.tr. pf.
18298	pokryťje	n.
523	pokryv	m.
4506	pokryva	f.
29926	pokryvalo	n.
158	pokryvati	v.tr. ipf.
32114	pokupka	f.
18299	pokus	m.
23896	pokusiti	v.tr. pf.
23897	pokusiti	v.tr. pf.
347	pokušati	v.tr. ipf.
23898	pokušati	v.tr. ipf.
20043	pokušeńje na něčije žiťje	n.
1172	pokušeńje	n.
23309	pokušeńje	n.
3218	pol-, polu-	prefix
1351	pol	m.
32331	pol	m.
21012	pola	f.
2843	polabsky	adj.
36851	polakovati	v.tr. pf.
23606	polarizacija	f.
10847	polarno sijańje	n.sg.
1514	polarny	adj.
10850	poldenj	m.
36327	polder	m.
21014	poldnik	m.
36203	polěno	n.
10851	polet	m.
2921	poletěti	v.intr. pf.
1352	polěv	prep.
5284	polica	f.
2836	policija	f.
2206	policijnik	m.anim.
10855	policijny	adj.
10857	polirati	v.tr. ipf.
18300	politbjuro	n.
23607	politeizm	m.sg.
23772	politi	v.tr. pf.
373	političny	adj.
853	politik	m.anim.
1950	politika	f.
23636	politologija	f.sg.
23771	polivati	v.tr. ipf.
20605	polivka	f.
1869	Poljak	m.anim.
3671	poljana	f.
3670	poljanka	f.
3614	polje	n.
28406	poljny klen	m.
36139	poljny konik	m.
16918	poljny	adj.
2844	Poljska	f.sg.
2935	poljsky	adj.
10889	poljzovati	v.tr. ipf.
14872	pȯlk	m.
1207	pȯlkovnik	m.anim.
1082	pȯlniti	v.tr. ipf.
3799	pȯlno	adv.
5257	polnoć	f.
10867	pȯlnolětnosť	f.
21003	pȯlnolětny	adj.
18301	pȯlnoluńje	n.
10868	pȯlnomoćje	n.
18302	pȯlnomoćnik	m.anim.
36883	pȯlny naděje	adj.
3141	pȯlny	adj.
17007	polovica	f.
35127	polovičny	adj.
3232	polovina	f.
21015	polovnik	m.anim.
3501	položeńje	n.
10875	položeny	adj.
1284	položiti	v.tr. pf.
4699	polučati	v.tr. ipf.
4700	polučiti	v.tr. pf.
5259	poludńje	n.
3260	poluostrov	m.
10888	poluostrovny	adj.
20044	polus	m.
35842	polusamoglåska	f.
35361	poluvojenny	adj.
18304	pȯlzati	v.intr. ipf.
36045	pȯlzavica	f.
18306	pȯlzti	v.intr. ipf.
36044	pȯlzųća råstlina	f.
18303	pȯlž	m.anim.
2205	pomagati	v.intr. ipf.
14873	pomalo	adv.
14874	pomaly	adj.
4344	pomaranča	f.
10893	pomarančevy	adj.
32232	pomazati	v.tr. pf.
36069	pomelo	n.
20611	poměstiti	v.tr. pf.
23249	poměšany	adj.
20609	poměšćati	v.tr. ipf.
36780	poměščeńje	n.
36476	pomfritky	f.pl.
1283	pomidor	m.
23857	pomilovańje	n.
23855	pomilovati	v.tr. pf.
1745	pomimo	prep.
20655	pomiriti	v.tr. pf.
36037	pomirjeńje	n.sg.
570	pomněti	v.tr. ipf.
29940	pomnik	m.
3945	pomoć	f.
5831	pomoćnik	m.anim.
5834	pomoćnosť	f.
100	pomoćny	adj.
2229	pomogti	v.intr. pf.
585	pomoŕsky	adj.
6089	pompa	f.
34502	pomrdati	v.intr. pf.
14875	pomsta	f.
29461	pomyliti sę	v.refl. pf.
29460	pomyliti	v.tr. pf.
34475	pomyljeny	adj.
29458	pomylka	f.
20045	pomysl	m.
35854	pomysliti	v.tr. pf.
10904	ponad	prep.
18309	pončik	m.
709	ponedělȯk	m.
33343	poněkde	adv.
33335	poněkȯgda, poněkȯgdy	adv.
35113	poněkoj	pron.indef.
35112	poněktory	pron.indef.
10909	poneže	conj.
23271	poni	m.anim.
34860	poniziti	v.tr. pf.
3144	poniž, poniže	prep.
34861	ponižajųći	adj.
34858	ponižati	v.tr. ipf.
34859	ponižeńje	n.
14876	ponje	adv.
5961	ponovno	adv.
5963	ponovny	adj.
23265	ponožka	f.
36268	popaljenina	f.
1133	popel	m.sg.
10912	popelavy	adj.
34854	popelisty	adj.
36746	popeľnica	f.
5560	popiti	v.tr. pf.
4243	popivati	v.tr. ipf.
14877	poplava	f.
10916	poplaviti	v.tr. pf.
16315	poplavjati	v.tr. ipf.
34910	popluti	v.intr. pf.
10917	poplyvti	v.intr. pf.
23627	pop-muzika	f.
10918	popoldenj	m.
10919	popoldenno spańje	n.
10920	popoldenny	adj.
10921	popȯlno	adv.
10922	popȯlnosť	f.
10923	popȯlny	adj.
281	popoludńje	n.
18311	popȯlzati	v.intr. ipf.
18313	popȯlzti	v.intr. pf.
1136	poprav	prep.
21430	poprava	f.
4528	popraviti	v.tr. pf.
4527	popravjati	v.tr. ipf.
4529	popravjeńje	n.
10931	popravka	f.
4531	popravnosť	f.
4530	popravny	adj.
21018	poprěčnik	m.
21019	poprěčny	adj.
20046	poprědnji, poprědny	adj.
228	poprěk	prep.
21021	poprěk	adv.
3428	poprěměnno	adv.
23311	poprobovati	v.tr. pf.
23901	poprositi	v.tr. pf.
4123	popŕśje	n.
21023	poprųga	f.
29944	popularnosť	f.
662	popularny	adj.
35342	populizm	m.sg.
23060	popustiti	v.tr. pf.
23059	popušćati	v.tr. ipf.
23421	popytka i dostavka	phrase
10937	pora spati	phrase
23353	poråbiti	v.tr. pf.
23352	poråbovati	v.tr. ipf.
14878	poraditi	v.tr. pf.
23029	porađati	v.tr. ipf.
23031	porađati	v.tr. ipf.
1135	poraniti	v.tr. pf.
18317	poranjeńje	n.
23903	poråsti	v.intr. pf.
18319	poråvniti	v.tr. pf.
3143	poraziti	v.tr. pf.
21431	poraziti	v.tr. pf.
20612	poråzuměti sę	v.refl. pf.
20613	poråzuměvati sę	v.refl. ipf.
5539	poražati	v.tr. ipf.
21433	poražka	f.
3783	porcija	f.
5198	poręd	prep.
3145	porędȯk	m.
2360	porno	n.sg.
32060	pornografičny	adj.
32059	pornografija	f.
10946	porod	m.
23028	poroditi	v.tr. pf.
36627	poroditi	v.tr. pf.
36628	poroditi	v.tr. pf.
21434	porok	m.
14879	porota	f.
15472	porotnica	f.
15474	porotnik	m.anim.
14880	porotny	adj.
21777	port	m.
17008	portal	m.
23251	porter	m.
23253	portier	m.anim.
34757	portmone	n.indecl.
4793	portret	m.
16424	Portugalec	m.anim.
979	Portugalija	f.sg.
16425	Portugalka	f.
1353	portugaľsky	adj.
18321	porųbati	v.tr. pf.
10961	porųčati sę	v.refl. ipf.
10960	porųčenec	m.anim.
3440	porųčeńje	n.
10955	porųčeny	adj.
5849	porųčitelj	m.anim.
3649	porųčiteljstvo	n.
10959	porųčiti sę	v.refl. pf.
21436	porųčnik	m.anim.
21437	porušiti	v.tr. pf.
21438	poryv	m.
21439	posada	f.
34189	poscati sę	v.refl. pf.
1220	posěćati	v.tr. ipf.
18322	posěćeńje	n.
10965	posědańje	n.
16316	posědatelj	m.anim.
1138	posědati	v.tr. ipf.
10964	posědlivy	adj.
10963	posědnik	m.anim.
33241	posějati	v.tr. pf.
18323	posěkati	v.tr. pf.
18325	posěkti	v.tr. pf.
6058	poseljeńje	n.
17009	posesivny zaimennik	m.
21442	posęsti	v.tr. pf.
25756	posětitelj	m.anim.
1024	posětiti	v.tr. pf.
36794	poskųpiti sę	v.refl. pf.
21443	poslanec	m.anim.
2133	poslańje	n.
2974	poslannik	m.anim.
1912	poslati	v.tr. pf.
2058	poslě	prep.
10975	poslě	adv.
18328	poslědica	f.
2323	poslědnji, poslědny	adj.
4139	poslědovatelj	m.anim.
10980	poslědovateljno	adv.
2333	poslědovateljny	adj.
34870	poslědovati	v.tr. pf.
2327	poslědstvo	n.
18330	poslěporodny	adj.
10984	poslětręšeńje	n.
10968	poslizgnųti sę	v.refl. pf.
71	poslušati	v.tr. pf.
5032	poslušnosť	f.
5031	poslušny	adj.
17010	posluživati sę	v.refl. ipf.
36509	posměšišče	n.
20615	posmotriti	v.intr. pf.
34938	posmŕtno	adv.
34937	posmŕtny	adj.
3430	posȯl	m.anim.
33027	posoliti	v.tr. pf.
33029	posoljeny	adj.
6019	posȯvětovati	v.tr. pf.
33225	pospati	v.intr. pf.
5914	pospěh	m.
3272	pospěšiti	v.intr. pf.
23814	pospěšno	adv.
23056	posrany	adj.
29674	posrěbriti	v.tr. pf.
33384	posrěbrjati	v.tr. ipf.
33385	posrěbrjeny	adj.
3154	posrěd	prep.
3257	posrědkovati	v.intr. ipf.
5172	posrědničstvo	n.sg.
1150	posrědnik	m.anim.
5091	posrědnje	adv.
487	posrědnji, posrědny	adj.
21449	posrědnji, posrědny	adj.
692	posrědstvom	prep.
21745	postanavjati	v.tr. ipf.
21747	postanoviti	v.tr. pf.
21749	postanovjeńje	n.
21453	postarati sę	v.refl. pf.
21455	postarěti	v.intr. pf.
35001	postaviti pytańje	v.pf.
11008	postaviti	v.tr. pf.
16323	postaviti	v.tr. pf.
11009	postavjati	v.tr. ipf.
16320	postavjati	v.tr. ipf.
11010	postavjeńje	n.
16321	postavjeńje	n.
11013	postelina	f.
33443	posteliti	v.tr. pf.
11012	postelj	f.
15477	posteljny klop	m.anim.
21862	postigati	v.tr. ipf.
21864	postignųti	v.tr. pf.
33446	postlati	v.tr. pf.
21741	postojanno	adv.
20047	postojanny	adj.
35253	postojka	f.
5866	postrah	m.
21883	postrånny	adj.
21884	postrånny	adj.
23625	pȯstrųg	m.anim.
36464	postulat	m.
36465	postulovati	v.tr. ipf./pf.
21955	postųp	m.
21957	postųp	m.
4231	postųpańje	n.
21953	postųpati s	v.ipf.
1471	postųpati	v.intr. ipf.
21954	postųpiti s	v.pf.
3148	postųpiti	v.intr. pf.
1174	postųpka	f.
1154	postųpno	adv.
20051	postųpny	adj.
3527	posųda	f.
35478	posuvnik	m.
3070	posvęćati	v.tr. ipf.
35534	posvęćeńje	n.
18333	posvęćeny	adj.
22229	posvědčati	v.tr. ipf.
22227	posvědčiti	v.tr. pf.
35580	posvědčiti	v.intr. pf.
652	posvętiti	v.tr. pf.
1025	posylati	v.tr. ipf.
5751	posylka	f.
34896	poščęditi	v.tr. pf.
3259	poškoditi	v.intr. pf.
16326	poškođeńje	n.
11039	poškođeny	adj.
4642	pošta	f.
21024	poštaŕ	m.anim.
35400	poštny kod	m.
21025	poštny uręd	m.
35399	poštny	adj.
3869	pot	m.sg.
4240	potapjati	v.tr. ipf.
29744	potemněti	v.intr. pf.
3149	potencial	m.
4373	potenciaľny	adj.
4314	potěńje	n.
4313	potěti	v.intr. ipf.
34871	potiti sę	v.refl. ipf.
22075	potok	m.
22077	potok	m.
3150	potom	adv.
3157	potomȯk	m.anim.
32729	potomstvo	n.sg.
3152	potop	m.
4241	potopiti	v.tr. pf.
18334	potrajati	v.intr. pf.
11056	potrěba	f.
29955	potrěbno	adv.
1296	potrěbny	adj.
1165	potrěbovati	v.tr. ipf.
34956	potręsati	v.tr. ipf.
3901	potręsti	v.tr. pf.
29956	potrohų	adv.
3151	potrvati	v.intr. pf.
121	potvŕditi	v.tr. pf.
1167	potvŕđati	v.tr. ipf.
6224	potvŕđeńje	n.
18346	potvŕđeny	adj.
16327	poučati	v.tr. ipf.
11064	poučeńje	n.
11063	poučiti	v.tr. pf.
18353	pouka	f.
6003	povaga	f.
20052	považańje	n.sg.
616	považati	v.tr. ipf.
36108	považeny	adj.
3153	považiti	v.tr. pf.
36296	povědač	m.anim.
3870	povědati	v.tr. ipf.
3871	pověděti	v.tr. pf.
12478	povědka prěd spańjem	f.
3407	povědka	f.
2996	poveliteljny	adj.
22330	pověriti	v.tr. pf.
22332	pověriti	v.tr. pf.
22329	pověrjati	v.tr. ipf.
22331	pověrjati	v.tr. ipf.
22328	pověŕje	n.
22335	pověrjennik	m.anim.
22336	pověrjennik	m.anim.
11074	poveseliti sę	v.refl. pf.
34190	pověsiti	v.tr. pf.
22226	pověsť	f.
20053	povęzanosť	f.
22194	povęzka	f.
5999	povinen	adj.
18357	povinno sę	phrase
29961	povinny	adj.
22539	povlåka	f.
35549	povlěkati za sobojų	v.tr. ipf.
35550	povlěkti za sobojų	v.tr. pf.
11075	povod	m.
36146	povodom	prep.
29962	povoljno	adv.
33708	povoljny	adj.
29963	povoz	m.
3204	povraćati	v.ipf.
3202	povråt	m.
3205	povråtiti	v.pf.
4705	povråtiti	v.pf.
34874	povråtna informacija	f.
11076	povråtna klaviša	f.
11084	povråtna svęź	f.
22694	povråtny bilet	m.
22697	povråtny moment	m.
22695	povråtny	adj.
4706	povråtȯk	m.
18362	povråz	m.
5628	povrěmenno	adv.
614	povŕh	prep.
18365	povŕhnja	f.
18366	povŕhnosť	f.
22568	povŕhny	adj.
22660	povŕnųti	v.tr. pf.
18367	povŕšina	f.
22659	povŕtati	v.tr. ipf.
22344	povsednji	adj.
11087	povstanec	m.anim.
1460	povstańje	n.
11088	povstati	v.intr. pf.
34883	povstavati	v.intr. ipf.
2000	povtarjati	v.tr. ipf.
2305	povtoriti	v.tr. pf.
3809	povtorno	adv.
36626	povtorny	adj.
3687	povysiti	v.tr. pf.
5546	povyšati	v.tr. ipf.
1299	povyše	prep.
11094	povyše	adv.
3686	povyšeńje	n.
11098	povyši	adj.
35417	poza	f.
14064	pozaďje	n.
5193	pozadu	adv.
23389	pozajęti	v.tr. pf.
35631	pozajęto slovo	m.
22391	pozajmati	v.tr. ipf.
11102	pozastaviti	v.tr. pf.
11103	pozastavjeńje	n.
35479	pozautra	adv.
3359	pozdněje	adv.
11106	pozdnějši	adj.
717	pozdno	adv.
2267	pozdny	adj.
18368	pozdråv	intj.
1226	pozdråviti	v.tr. pf.
1679	pozdravjati	v.tr. ipf.
11111	pozemny	adj.
1225	pozicija	f.
18371	pozirati (na)	v.intr. ipf.
36120	pozitivno čislo	n.
1415	pozitivny	adj.
32973	pozlaćati	v.tr. ipf.
32975	pozlåćeny	adj.
32976	pozlåta	f.
29798	pozlåtiti	v.tr. pf.
15480	poznanec	m.anim.
35066	poznańje	n.
6324	poznati	v.tr. pf.
18376	poznati	v.tr. pf.
6323	poznavati	v.tr. ipf.
18377	poznavati	v.tr. ipf.
4381	pozor	m.
11115	pozornosť	f.
29969	pozȯv	m.
34885	pozovati	v.intr. ipf.
20055	pozrěti (na)	v.intr. pf.
11121	pozvaljaje sę	phrase
11124	pozvaljati sobě	v.ipf.
3156	pozvaljati	v.tr. ipf.
18379	pozvańje	n.
36168	pozvati sę na	v.refl. pf.
6194	pozvati v sųd	v.pf.
3155	pozvati	v.tr. pf.
11117	pozvolimy	adj.
11120	pozvoliti sobě	v.pf.
2946	pozvoliti	v.tr. pf.
3823	pozvoniti	v.pf.
36167	pozyvati sę na	v.refl. ipf.
6193	pozyvati v sųd	v.tr. ipf.
20054	požaliti	v.tr. pf.
4173	požar	m.
4237	požarna služba	f.
15485	požarnik	m.anim.
11128	požarny	adj.
11129	požarogasnik	m.
2875	požędańje	n.
411	požędati	v.tr. pf.
11132	požędati	v.tr. pf.
35471	poželany	adj.
35470	poželati	v.tr. pf.
32984	požęti	v.intr. pf.
36056	požiraľnik	m.
14913	požirańje	n.
11134	požirati	v.ipf.
11135	poživjeńje	n.
18378	požrěti	v.tr. pf.
3147	požrtvovati	v.tr. pf.
35501	pra-	prefix
11137	prababica	f.
11138	praca	f.
18380	pracodavec	m.anim.
14917	pracovati	v.intr. ipf.
11141	pracovito	adv.
11142	pracovitosť	f.
11143	pracovity	adj.
11140	pracovnik	m.anim.
35152	pradavny	adj.
11145	pradědȯk	m.anim.
2073	pråg	m.
23519	Praga	f.sg.
3574	pråh	m.
35997	pråhosȯsaľnik	m.
20616	praindoevropejsky	adj.
20056	prajęzyk	m.
11147	praksa	f.
20057	praktično	adv.
35159	praktičnosť	f.
3146	praktičny	adj.
4079	praktika	f.
3957	praktikovati	v.tr. ipf.
21459	pralěs	m.
36107	pralna mašina	f.
35804	praotec	m.anim.
3158	praroditelj	m.anim.
16345	pråsę	n.
1228	pråsętko	n.
4387	praslovjansky	adj.
21027	prašćati sę	v.refl. ipf.
21026	prašćati	v.tr. ipf.
5273	pråšek	m.
14919	pråšiti	v.ipf.
11146	pråšna burja	f.
32298	prati mozg	v.tr. ipf.
32303	prati	v.tr. ipf.
33937	pråti	v.tr. ipf.
3159	pravda	f.
11154	pravdivo	adv.
11155	pravdivosť	f.
3307	pravdivy	adj.
11159	pravdopodobno	adv.
11161	pravdopodobnosť	f.
11162	pravdopodobny	adj.
18383	pravedny	adj.
1870	pravica	f.
5211	praviľno	adv.
20059	praviľnosť	f.
20060	praviľny	adj.
21031	praviľny	adj.
3087	pravilo	n.
3077	praviti	v.tr. ipf.
11167	pravnik	m.anim.
3711	pravny	adj.
1826	pravo	n.
3163	pravopis	m.
11172	pravopisańje	n.
35024	pravopisec	m.anim.
35025	pravopisny	adj.
32168	pravorųky	adj.
21034	Pravoslavje	n.sg.
3088	pravoslavny	adj.
35697	pravosť	f.
35698	pravosť	f.
11175	pravosųďje	n.
11176	pravosųdnosť	f.
21035	pravověrny	adj.
11177	pravovųgȯľnik	m.
1164	pravy	adj.
21036	pravy	adj.
22895	pravzor	m.
33552	pråzdničny	adj.
18389	pråzdnik	m.
35307	pråzdnina	f.
3248	pråzdnovati	v.tr. ipf.
5653	pråzdnověŕje	n.
5654	pråzdnověrny	adj.
16335	pråzdny	adj.
10492	pŕdak	m.
573	pŕděti	v.intr. ipf.
3160	prěadresovati	v.tr. pf.
29977	preambula	f.
20617	prěběglik	m.anim.
5397	prěbudovati	v.tr. pf.
5398	prěbudovyvati	v.tr. ipf.
18390	prěbyvańje	n.
16812	prěbyvati	v.intr. ipf.
919	precedent	m.
35883	prěcěniti	v.tr. pf.
35882	prěcěnjati	v.tr. ipf.
11185	prěčęsto	adv.
20619	prěčiti	v.tr. ipf.
20620	prěčnik	m.
14921	prěd davnym časom	adv.
11195	prěd davnym vrěmenem	adv.
4097	prěd hviljejų	adv.
11200	prěd nekoliko dnjev	adv.
4379	prěd vsem	adv.
1200	prěd	prep.
4935	prěd	prep.
11189	prěd	m.
21038	prěd	prep.
11202	prědańje	n.
1189	prědati	v.tr. pf.
3247	prědati	v.tr. pf.
35613	prědati	v.tr. pf.
36545	predator	m.anim.
1825	prědavati	v.tr. ipf.
3246	prědavati	v.tr. ipf.
35612	prědavati	v.tr. ipf.
35609	prědavnica	f.
35611	prědavničsky	adj.
35608	prědavnik	m.anim.
35610	prědavstvo	n.sg.
20621	prědběžny	adj.
11211	prědčasny	adj.
23807	prědčuťje	n.
23904	prědčuvati	v.tr. ipf.
11214	prědgråďje	n.
11216	prědgrådny	adj.
23608	prědhistoričny	adj.
1199	prědhistorija	f.
501	prědhoditi	v.tr. ipf.
35639	prědhodnik	m.anim.
14924	prědhodny	adj.
23439	prědigra	f.
36800	prědigra	f.
34891	predikat	m.
36370	predikat	m.
15491	prědimenovany	adj.
11219	prědki	m.pl.
11220	prědkladati	v.tr. ipf.
602	prědlagati	v.tr. ipf.
5955	prědlanji	adv.
1158	prědlog	m.
5122	prědložeńje	n.
35667	prědložitelj	m.anim.
1687	prědložiti	v.tr. pf.
11228	prědložlivy	adj.
17018	prědložnik	m.
3168	prědměsťje	n.
11231	prědměstny	adj.
3171	prědmet	m.
3329	prědmet	m.
11232	prědmet	m.
11235	prědmet	m.
18398	prědminųly	adj.
20061	prědnje	adv.
3639	prědnji, prědny	adj.
16836	prědnosť	f.
21041	prědnosť	f.
1578	prědȯjdti	v.tr. pf.
3129	prědȯk	m.anim.
6146	prědoplatnik	m.anim.
21043	prědpis	m.
35310	prědpisati	v.tr. pf.
35309	prědpisyvati	v.tr. ipf.
5407	prědplaćati	v.intr. ipf.
5408	prědplatiti	v.intr. pf.
11241	prědpočitańje	n.
3787	prědpočitati	v.tr. ipf.
5324	prědpoklad	m.
3130	prědpokladati	v.tr. ipf.
20062	prědpolagati	v.tr. ipf.
11247	prědpoložeńje	n.
20065	prědpoložiteljno	adv.
18400	prědpoložiti	v.tr. pf.
4305	prědposlědnji, prědposlědny	adj.
16759	prědpostavjati	v.tr. ipf.
29984	prědpotopny	adj.
14926	prědpověď	f.
11250	prědpovědati	v.tr. ipf.
14927	prědpověděti	v.tr. pf.
5164	prědprijemstvo	n.
35201	prědprijęti	v.tr. pf.
35200	prědprijmati	v.tr. ipf.
15492	prědprimetny	adj.
17020	prědråstka	f.
3131	prědsědatelj	m.anim.
6292	prědsědateljstvo	n.sg.
11254	prědsědati	v.intr. ipf.
14928	prědsědnik	m.anim.
11256	prědskazańje	n.
2897	prědskazati	v.tr. pf.
3127	prědskazyvati	v.tr. ipf.
18407	prědslovje	n.
21762	prědstati	v.intr. pf.
21769	prědstava	f.
21761	prědstavati	v.intr. ipf.
1203	prědstavitelj	m.anim.
5171	prědstaviteljstvo	n.
5406	prědstaviti sobě	v.refl. pf.
2422	prědstaviti	v.tr. pf.
5405	prědstavjati sobě	v.refl. ipf.
1524	prědstavjati	v.tr. ipf.
21766	prědstavjati	v.tr. ipf.
11264	prědstavjeńje	n.
21763	prědstojęći	adj.
4080	prědsųďje	n.
6290	prědsųdny	adj.
20066	prědsųdȯk	m.
2423	prědšedši	adj.
22079	prědteča	f.
36623	prědtym	adv.
3128	prěduprěditi	v.tr. pf.
21047	prěduprěditi	v.tr. pf.
21048	prěduprěditi	v.tr. pf.
1884	prěduprěđati	v.tr. ipf.
21045	prěduprěđati	v.tr. ipf.
21046	prěduprěđati	v.tr. ipf.
20067	prěduprěđeńje	n.
23095	prěduprěđeńje	n.
36466	prěduslovje	n.
36575	prědustavjeńje	n.
35584	prědvčera	adv.
29987	prědvečer	m.
22231	prědvěsťje	n.
5403	prědviděti	v.tr. pf.
34836	prědvidimy	adj.
34837	prědvidlivy	adj.
5404	prědvidyvati	v.tr. ipf.
3575	prědvrěmenny	adj.
23357	prědvyšati	v.tr. ipf.
22871	prědznak	m.
32106	pręđa	f.
3763	prěđe	adv.
16758	preferovati	v.tr. ipf.
805	prefiks	m.
11284	prěględ	m.
4075	prěględati	v.tr. ipf.
4076	prěględěti	v.tr. pf.
11295	prěględka	f.
18414	prěgovory	m.pl.
18415	prěgråda	f.
23726	prěhlåditi sę	v.refl. pf.
23727	prěhlađati sę	v.refl. ipf.
23725	prěhlåđeńje	n.
19506	prěhod	m.
36524	prêhoditi ulicų	phrase
2425	prěhoditi	v.intr. ipf.
11298	prěhodny	adj.
18419	prěhodny	adj.
31908	prěhytriti	v.tr. pf.
31909	prěhytrjati	v.tr. ipf.
5521	prěimenovati	v.tr. pf.
34893	prěimenovyvati	v.tr. ipf.
18420	prěinačati	v.tr. ipf.
18421	prěinačeńje	n.
18422	prěinačeny	adj.
18423	prěinačiti	v.tr. pf.
36525	prêjdti ulicų	phrase
1711	prějdti	v.intr. pf.
5004	prějęti	v.tr. pf.
5003	prějmati	v.tr. ipf.
35800	prěklad	m.
35801	prěkladatelj	m.anim.
35802	prěkladati	v.tr. ipf.
11303	prěključ	m.
11301	prěključati	v.tr. ipf.
11302	prěključiti	v.tr. pf.
21462	prěkrasny	adj.
36345	prěkryvańje	n.
36344	prěkryvati sę	v.refl. ipf.
14930	prěkydańje	n.
23908	prělěpy	adj.
23907	prělet	m.
20068	prěletny	adj.
29989	prěljubstvo	n.sg.
20625	prělom	m.
20626	prělom	m.
32190	prělom	m.
35803	prěložiti	v.tr. pf.
3263	preludija	f.
20627	prěmagati	v.tr. ipf.
32972	prěmeblovati	v.tr. ipf./pf.
2407	prěměna	f.
18429	prěměniti sę	v.refl. pf.
18428	prěměniti	v.tr. pf.
18427	prěměnjati sę	v.refl. ipf.
18426	prěměnjati	v.tr. ipf.
35526	prěměnna	f.
35525	prěměnny	adj.
6233	prěměstiti sę	v.refl. pf.
6230	prěměstiti	v.tr. pf.
6232	prěměšćati sę	v.refl. ipf.
6228	prěměšćati	v.tr. ipf.
11308	prěmešćeńje	n.
2976	premiera	f.
2846	premier-ministr	m.anim.
2845	prěmnogo	adv.
11527	prěmo	adv.
20633	prěmogti	v.tr. pf.
4413	prěmokųtnik	m.
4414	prěmokųtny	adj.
2982	prěmȯlviti	v.intr. pf.
2337	prěmȯlvjati	v.intr. ipf.
11313	prěmotańje	n.
4250	prěmotati	v.tr. pf.
5554	prěmotyvati	v.tr. ipf.
1209	prěmy	adj.
36181	prěnapęti	v.tr. pf.
36180	prěnapinati	v.tr. ipf.
15408	prěnebrěgati	v.tr. ipf.
15410	prěnebrěgti	v.tr. pf.
9633	prěnebrěžeńje	n.sg.
5394	prěnesti	v.tr. pf.
36265	prěnesti	v.tr. pf.
4195	prěnoćevati	v.intr. pf.
5393	prěnositi	v.tr. ipf.
36264	prěnositi	v.tr. ipf.
20635	prěnosny	adj.
20636	prěnosny	adj.
22704	prěobraćati	v.tr. ipf.
22706	prěobraćati	v.tr. ipf.
22702	prěobråtiti	v.tr. pf.
22707	prěobråtiti	v.tr. pf.
11320	prěobraziti	v.tr. pf.
11322	prěobražati	v.tr. ipf.
20069	prěobražeńje	n.
36601	prěocěniti	v.tr. pf.
36600	prěocěnjati	v.tr. ipf.
35288	prěoděti sę	v.refl. pf.
35287	prěoděvati sę	v.refl. ipf.
35679	preparat	m.
21049	prěpirati sę	v.refl. ipf.
11324	prěpisańje	n.
11325	prěpisany	adj.
5530	prěpisati	v.tr. pf.
21050	prěpiska	f.
5529	prěpisyvati	v.tr. ipf.
34911	prěpluti	v.tr. pf.
1850	prěplyvati	v.tr. ipf.
36728	prěplyvati	v.tr. ipf.
34325	prěplyvti	v.tr. pf.
20070	prěpȯlnjeny	adj.
11332	prěpona	f.
35213	prěporųčati	v.tr. ipf.
35214	prěporųčiti	v.tr. pf.
35215	prěporųka	f.
3529	prěprava	f.
3539	prěpraviti	v.tr. pf.
3528	prěpravjati	v.tr. ipf.
11337	prěprogramovati	v.tr. pf.
33068	prěrastati	v.tr. ipf.
11338	prěråsti	v.tr. pf.
16832	prěråzkazańje	n.
16833	prěråzkazati	v.tr. pf.
16834	prěråzkazyvati	v.tr. ipf.
21464	prěrěčeńje	n.
21465	prěrěkati sę	v.refl. ipf.
21466	prěrěkti sę	v.refl. pf.
11339	prěrězati	v.tr. pf.
23359	prěroditi sę	v.refl. pf.
23360	prěrođeńje	n.
1772	prěrvati	v.tr. pf.
21467	prěryv	m.
11340	prěryvańje	n.
1849	prěryvati	v.tr. ipf.
1726	presa	f.
2326	presa-konferencija	f.
1358	presa-reliz	m.
21469	prěsěčeńje	n.
36214	prěsědańje	n.
36215	prěsědati	v.intr. ipf.
5402	prěsěkati	v.tr. ipf.
5401	prěsěkti	v.tr. pf.
11349	prěselenec	m.anim.
11350	prěselenica	f.
32969	prěseliti sę	v.refl. pf.
11352	prěseliti	v.tr. pf.
32968	prěseljati sę	v.refl. ipf.
11353	prěseljati	v.tr. ipf.
32970	prěseljeńje	n.
36216	prěsęsti	v.intr. pf.
2244	preskva	f.
4291	prěslědovańje	n.
4290	prěslědovati	v.tr. ipf.
21470	prěslědovati	v.tr. ipf.
18431	prěslěpiti	v.tr. pf.
36360	pręslica	f.
5991	prěslušati	v.tr. pf.
14932	prěslušivańje	n.
5990	prěslušivati	v.tr. ipf.
36038	prěsměriti	v.tr. pf.
36039	prěsměrjati	v.tr. ipf.
36040	prěsměrjeńje	n.
11359	prěsměšnik	m.anim.
11361	prěspati	v.intr. pf.
29995	prěstarati sę	v.refl. pf.
18436	prěstati	v.intr. pf.
18437	prěstavati	v.intr. ipf.
21760	prěstaviti sę	v.refl. pf.
2009	prěstaviti	v.tr. pf.
21757	prěstavjati sę	v.refl. ipf.
2931	prěstavjati	v.tr. ipf.
18456	pręsti	v.intr. ipf.
18457	pręsti	v.tr. ipf.
33712	prěstigati	v.tr. ipf.
29996	prěstignųti	v.tr. pf.
20071	prestiž	m.sg.
20072	prestižny	adj.
36389	prěstol	m.
1709	prěstrašeny	adj.
293	prěstrašiti	v.tr. pf.
11371	prěstrělka	f.
18438	prěstųpańje	n.
18439	prěstųpati	v.tr. ipf.
36371	prěstųpati	v.tr. ipf.
18440	prěstųpiti	v.tr. pf.
36372	prěstųpiti	v.tr. pf.
21961	prěstųpnik	m.anim.
21962	prěstųpnik	m.anim.
32336	prěstųpnosť	f.
21052	prěstųpny god	m.
21963	prěstųpny	adj.
18441	prěstųpȯk	m.
23747	prěsunųti	v.tr. pf.
23744	prěsuvati	v.tr. ipf.
11372	prěsvęzati	v.tr. pf.
11374	prěsvęzyvati	v.tr. ipf.
14935	prěškoda	f.
16329	prětečeńje	n.
6074	prětěkati	v.intr. ipf.
6076	prětekti	v.intr. pf.
32532	pretenciozny	adj.
35966	pretendovati na	v.intr. ipf./pf.
35968	pretendovati	v.tr. ipf./pf.
35967	pretenzija	f.
21053	prěti	v.ipf.
35985	prětok rěky	m.
16878	prětȯlmačiti	v.tr. pf.
21055	prětraviti	v.tr. pf.
21056	prětravjati	v.tr. ipf.
2364	prětŕpěti	v.tr. pf.
22149	prětvarjati	v.tr. ipf.
22150	prětvoriti	v.tr. pf.
22287	prěuveličati	v.tr. ipf.
35604	prěuveličeńje	n.
22288	prěuveličiti	v.tr. pf.
22175	prěvaga	f.
21058	prěvariti	v.tr. pf.
21057	prěvarjati	v.tr. ipf.
35241	prěvažajųći	adj.
6006	prěvažati	v.intr. ipf.
6007	prěvažiti	v.intr. pf.
35242	prěvažno	adv.
35819	prevencija	f.
35820	preventivny	adj.
3872	prěvesti	v.tr. pf.
5396	prěvezti	v.tr. pf.
22499	prěvladnųti	v.pf.
22497	prěvladyvati	v.ipf.
1565	prěvlađeńje	n.
20073	prěvod	m.
22254	prěvod	m.
1571	prěvoditelj	m.anim.
3055	prěvoditi	v.tr. ipf.
11388	prěvođeńje	n.
18448	prěvoz	m.
23112	prěvoz	m.
18444	prěvȯzhoditi	v.tr. ipf.
5395	prěvoziti	v.tr. ipf.
18447	prěvȯzȯjdti	v.tr. pf.
22698	prěvråt	m.
16062	prěvråtnik	m.anim.
22700	prěvråtny	adj.
22729	prěvysiti	v.tr. pf.
22728	prěvyšati	v.tr. ipf.
2284	prěz	prep.
16063	prezentacija	f.
2329	prezident	m.anim.
31747	prezidentsky	adj.
31746	prezidium	m.
11394	prězimę	n.
30000	prězir	m.
22896	prězirati	v.tr. ipf.
1710	prězměrno	adv.
18450	prěznačati	v.tr. ipf.
11396	prěznačeńje	n.
18452	prěznačeny za	adj.
18454	prěznačiti	v.tr. pf.
3516	prězravo	adv.
3515	prězravy	adj.
20074	prězrěńje	n.
9634	prězrěti	v.tr. pf.
11400	prězvati	v.tr. pf.
11401	prězvišče	n.
16332	prězyvati	v.tr. ipf.
4179	prěžitelj	m.anim.
3604	prěžiti	v.tr. pf.
4178	prěžiti	v.tr. pf.
4331	prěžiti	v.tr. pf.
4180	prěžiťje	n.
22939	prěžitȯk	m.
11409	prěživańje	n.
4330	prěživati	v.tr. ipf.
11412	prěživati	v.tr. ipf.
11402	prěživimosť	f.
11403	prěživimy	adj.
21059	pręžka	f.
34065	prěžuvati	v.tr. pf.
621	pri	prep.
4607	pri	prep.
36138	pribiti	v.tr. pf.
36137	pribivati	v.tr. ipf.
23813	priblizno, približno	adv.
18458	približati sę	v.refl. ipf.
17011	približeny	adj.
23671	približiti sę	v.refl. pf.
18459	pribor	m.
11416	pribrěžje	n.
18462	pribyti	v.intr. pf.
18463	pribyvati	v.intr. ipf.
1467	pricěliti	v.pf.
3020	pričęsťje	n.
2412	pričina	f.
2363	pričiniti	v.pf.
1500	pričinjati	v.ipf.
36347	pričisliti k	v.tr. pf.
36346	pričisljati k	v.tr. ipf.
35781	pridati	v.tr. pf.
18465	pridatȯk	m.
35782	pridavati	v.tr. ipf.
17012	pridavnik	m.
4229	pridělańje	n.
4228	pridělati	v.tr. pf.
18467	priděliti	v.tr. pf.
18466	priděljati	v.tr. ipf.
36563	Pridněstrovje	n.sg.
36564	pridněstrovsky	adj.
6180	pridŕživati sę	v.refl. ipf.
14937	pridumati	v.tr. pf.
35145	prigađati sę	v.refl. ipf.
36598	priględati sę	v.refl. ipf.
11426	priględati	v.tr. ipf.
36599	priględěti sę	v.refl. pf.
11427	priględěti	v.tr. pf.
18469	prignųti	v.tr. pf.
3126	prigoda	f.
35144	prigoditi sę	v.refl. pf.
3050	prigodny	adj.
18471	prigodny	adj.
1140	prigotoviti	v.tr. pf.
23770	prigotovjeńje	n.
4163	prigråd	m.
35779	prigraničny	adj.
18468	prigybati	v.tr. ipf.
23750	prihod	m.
1139	prihoditi	v.intr. ipf.
11436	prijateliti sę	v.refl. ipf.
1141	prijatelj	m.anim.
4342	prijateljka	f.
14938	prijateljska igra	f.
11439	prijateljska strěľba	f.
11438	prijateljskosť	f.
4128	prijateljsky	adj.
4129	prijateljstvo	n.
5563	prijati	v.tr. ipf.
5564	prijati	v.tr. ipf.
11445	prijatlivy	adj.
18472	prijaviti sę	v.refl. pf.
18474	prijavjati sę	v.refl. ipf.
1151	prijdti	v.intr. pf.
5206	prijehati	v.intr. pf.
18476	prijem	m.
18477	prijem	m.
33015	prijemlivy	adj.
18478	prijemnik	m.
11450	prijemnosť	f.
3774	prijemny	adj.
11433	prijemny	adj.
18479	prijęti sę	v.refl. pf.
3374	prijęti	v.tr. pf.
35078	prijęťje	n.
11454	prijętno	adv.
23812	prijętnosť	f.
3314	prijętny	adj.
5208	priježđati	v.intr. ipf.
32339	prijmajųća krajina	f.
18480	prijmati sę	v.refl. ipf.
11467	prijmati	v.tr. ipf.
30223	prikaz	m.
20076	prikazati	v.tr. pf.
20078	prikazyvati	v.tr. ipf.
3595	priklad	m.
20079	prikladati	v.tr. ipf.
3650	prikop	m.
1143	prilagateljno imę	n.
20639	prilegly	adj.
32870	prilěpiti sę	v.refl. pf.
5561	prilěpiti	v.tr. pf.
21471	prilětati	v.intr. ipf.
21472	priletěti	v.intr. pf.
3769	priličny	adj.
20642	priliv	m.
20645	priloga	f.
11465	priložeńje	n.
11466	priložiti	v.tr. pf.
36903	prilųčati sę	v.refl. ipf.
36897	prilųčati	v.tr. ipf.
36900	prilųčiti sę	v.refl. pf.
36894	prilųčiti	v.tr. pf.
36835	prima	f.
33214	primamka	f.
35320	primarny	adj.
30011	primat	m.anim.
33486	priměćati	v.tr. ipf.
20650	priměniti	v.tr. pf.
20649	priměnjati	v.tr. ipf.
35515	priměnjeńje	n.
3590	priměr	m.
20651	priměrny	adj.
33487	primětiti	v.tr. pf.
34918	primětka	f.
20654	primiŕje	n.
35198	primitivny	adj.
11470	primoŕje	n.
390	prinajmenje	adv.
20656	prinaležati	v.intr. ipf.
20657	prinaležnosť	f.
16065	princ	m.anim.
2247	princesa	f.
5327	princip	m.
30012	principiaľny	adj.
3221	prinesti	v.tr. pf.
20658	prinos	m.
3220	prinositi	v.tr. ipf.
23617	printer	m.
2136	prinuditi	v.tr. pf.
1976	prinuđati	v.tr. ipf.
3631	prinuđeny	adj.
2135	prioritet	m.
21061	pripadati	v.intr. ipf.
21063	pripasti	v.intr. pf.
21065	pripęti	v.tr. pf.
21068	pripinati	v.tr. ipf.
18486	pripisati	v.tr. pf.
18487	pripisyvati	v.tr. ipf.
34912	pripluti	v.intr. pf.
34914	priplyvati	v.intr. ipf.
36733	priplyvati	v.intr. ipf.
36732	priplyvti	v.intr. pf.
5942	pripominati sobě	v.tr. ipf.
1208	pripominati	v.tr. ipf.
5943	pripomněti sobě	v.tr. pf.
2004	pripomněti	v.tr. pf.
21073	pripraviti	v.tr. pf.
21075	pripraviti	v.tr. pf.
21076	pripravjati	v.tr. ipf.
21078	pripravjati	v.tr. ipf.
21082	pripustiti	v.tr. pf.
21083	pripustiti	v.tr. pf.
21079	pripušćati	v.tr. ipf.
21080	pripušćati	v.tr. ipf.
20085	priråstka	f.
11480	priroda	f.
36522	prirodne resursy	m.pl.
11482	prirodničny	adj.
18488	prirodno	adv.
11484	prirodnosť	f.sg.
1215	prirodny	adj.
21473	prirodopis	m.sg.
22216	prirodovědstvo	n.sg.
22853	prirodoznavstvo	n.sg.
21474	prirųčnik	m.
11486	prirųčny	adj.
678	prisęga	f.
35699	prisęgati	v.tr. ipf.
35686	prisęgnųti	v.tr. pf.
15497	prisęžna	f.
1396	prisęžni	m.pl.
11490	prisęžny	m.anim.
36902	prisjediniti sę	v.refl. pf.
36896	prisjediniti	v.tr. pf.
36905	prisjedinjati sę	v.refl. ipf.
36899	prisjedinjati	v.tr. ipf.
35147	prislati	v.tr. pf.
18489	prislovica	f.
18490	prislovje	n.
17013	prislovnik	m.
1216	prislovȯk	m.
21476	prispěti	v.intr. pf.
21477	prispěvati	v.intr. ipf.
18491	prisposobiti	v.tr. pf.
18493	prisposobjati	v.tr. ipf.
35529	prisposobjeńja	n.pl.
18495	prisposobjeńje	n.
35528	prisposobjeny objekt	m.
11493	pristanišče	n.
21775	pristanj	m.
21770	pristojati	v.intr. ipf.
21772	pristojny	adj.
21896	pristrastny	adj.
34377	pristrigati	v.tr. ipf.
34378	pristrigti	v.tr. pf.
6188	pristųp	m.
21969	pristųp	m.
2059	pristųpati do	v.intr. ipf.
21964	pristųpati k	v.intr. ipf.
2391	pristųpiti do	v.intr. pf.
21967	pristųpiti k	v.intr. pf.
11494	pristųpjeńje	n.
22008	prisųditi	v.tr. pf.
22010	prisųditi	v.tr. pf.
34892	prisųdȯk	m.
22007	prisųđati	v.tr. ipf.
22009	prisųđati	v.tr. ipf.
14939	prisųtnosť	f.
14940	prisųtny	adj.
11502	prisųtstvo	n.sg.
23860	prisųtstvovati pri	v.intr. ipf.
22022	prisvajati	v.tr. ipf.
36496	prisvojeńje	n.sg.
17014	prisvojiteljny zaimennik	m.
22021	prisvojiti	v.tr. pf.
1130	prisvojny	adj.
35146	prisylati	v.tr. ipf.
23256	prišiti	v.tr. pf.
23174	pritęgańje	n.
23178	pritęgati	v.tr. ipf.
23173	pritęglivosť	f.
22046	pritęglivy	adj.
23179	pritęgnųti	v.tr. pf.
4522	pritisk krvi	m.sg.
4300	pritisk	m.sg.
18498	pritiskańje	n.
4298	pritiskati	v.tr. ipf.
4299	pritisknųti	v.tr. pf.
22080	pritok	m.
22081	pritok	m.
33496	pritomny	adj.
33497	pritomny	adj.
18499	pritvarjati sę	v.refl. ipf.
18501	pritvoriti sę	v.refl. pf.
18500	pritvorny	adj.
22151	pritvorstvo	n.sg.
5861	priučati sę	v.refl. ipf.
32979	priučati	v.tr. ipf.
5863	priučeny	adj.
5862	priučiti sę	v.refl. pf.
32980	priučiti	v.tr. pf.
23180	privabiti	v.tr. pf.
23182	privabjati	v.tr. ipf.
6294	privatnosť	f.
6293	privatny	adj.
31950	privesti	v.tr. pf.
31952	privesti	v.tr. pf.
22404	privět	m.
22405	privětlivy	adj.
22197	privęzannosť	f.
21482	privęzati	v.tr. pf.
3471	privezti	v.tr. pf.
21483	privęzyvati	v.tr. ipf.
6099	prividěńje	n.
22425	prividěńje	n.
35292	prividno	adv.
35551	prividny	adj.
21033	privilegija	f.
15502	privitańje	n.
11515	privitany	adj.
1965	privitati	v.tr. pf.
23175	privlåčivati	v.tr. ipf.
22501	privlastniti sobě	v.tr. pf.
22502	privlastnjati sobě	v.tr. ipf.
23172	privlěkateljnosť	f.
22543	privlěkateljny	adj.
23176	privlěkati	v.tr. ipf.
23177	privlěkti	v.tr. pf.
11517	privoditi	v.tr. ipf.
31946	privoditi	v.tr. ipf.
22315	privoliti	v.pf.
22314	privoljati	v.ipf.
3470	privoziti	v.tr. ipf.
22588	privŕženec	m.anim.
20086	privyčaj	m.
11519	privykati sę	v.refl. ipf.
1268	privykati	v.tr. ipf.
2392	privykly	adj.
5864	privykneny	adj.
11520	privyknųti sę	v.refl. pf.
351	privyknųti	v.tr. pf.
4564	prizemjati sę	v.refl. ipf.
22750	prizemje	n.
36734	prizemjeńje	n.
4565	prizemjiti sę	v.refl. pf.
3014	prizemny	adj.
22875	priznak	m.
11524	priznańje	n.
2287	priznati	v.tr. pf.
1214	priznavati	v.tr. ipf.
22899	prizrak	m.
22916	prizvańje	n.
22917	prizvańje	n.
20087	prizvati	v.tr. pf.
20088	prizyvati	v.tr. ipf.
22941	priživnik	m.anim.
3069	pŕnik	m.
1210	pro-	prefix
23307	proba	f.
20659	proběg	m.
17015	proběgańje	n.
36021	probijati sę	v.refl. ipf.
36017	probiti sę	v.refl. pf.
5414	probiti	v.tr. pf.
5413	probivati	v.tr. ipf.
18503	probkovańje	n.
745	problem	m.
20660	problematičny	adj.
11538	probna jezda	f.
18504	probny	adj.
18506	probȯk	m.
11542	probovati snova	v.tr. ipf.
238	probovati	v.tr. ipf.
3165	probuditi sę	v.refl. pf.
23312	probuđeny	adj.
804	procedura	f.
2406	procent	m.
6184	proces	m.
33192	procesija	f.
139	procitovati	v.tr. pf.
32803	prȯč iz drågy!	phrase
1217	prȯč	adv.
23912	pročistiti	v.tr. pf.
23911	pročišćati	v.tr. ipf.
1190	pročitati	v.tr. pf.
4263	prodati	v.tr. pf.
4262	prodavati	v.tr. ipf.
4264	prodavec	m.anim.
11549	prodavica	f.
2262	prodaž	f.
36020	prodirati sę	v.refl. ipf.
1007	prodȯlžati	v.tr. ipf.
4594	prodȯlžati	v.tr. ipf.
4384	prodȯlžeńje	n.
4385	prodȯlžeńje	n.
36294	prodȯlžeńje	n.
1872	prodȯlžiti	v.tr. pf.
4595	prodȯlžiti	v.tr. pf.
36018	prodreti sę	v.refl. pf.
35178	producent	m.anim.
20089	produkcija	f.
3078	produkovati	v.tr. ipf.
5328	produkt	m.
35174	produktivny	adj.
11558	produmati	v.tr. pf.
20090	profanacija	f.
20091	profanovati	v.tr. ipf.
4650	profesija	f.
34919	profesional	m.anim.
35325	profesionalizacija	f.
35326	profesionalizovati	v.tr. ipf./pf.
4652	profesionaľnosť	f.
4651	profesionaľny	adj.
48	profesor	m.anim.
23227	profil	m.
14943	proganjańje	n.
14944	proganjany	adj.
14942	proganjati	v.tr. ipf.
18511	proglås	m.
18514	proglåsiti	v.tr. pf.
18512	proglašati	v.tr. ipf.
18513	proglåšeńje	n.
33731	prognoza	f.
21461	progȯltati	v.tr. ipf.
18413	progȯltnųti sȯlzy	v.pf.
18412	progȯltnųti	v.tr. pf.
31	programa	f.
23618	programist	m.anim.
11564	programovati	v.tr. ipf.
6237	progres	m.
6238	progresivny	adj.
18515	prohlåda	f.
18520	prohlåditi sę	v.refl. pf.
18517	prohlåditi	v.tr. pf.
18521	prohlådnosť	f.
18522	prohlådny	adj.
15503	prohod	m.
35586	prohoditi sę	v.refl. ipf.
5480	prohoditi	v.tr. ipf.
35587	prohoďka	f.
20661	prohodny	adj.
23361	proigranec	m.anim.
5422	proigrati	v.tr. pf.
5423	proigryvati	v.tr. ipf.
11566	proizhoditi iz	v.ipf.
4843	proizhođeńje	n.
22082	proiztěkati	v.intr. ipf.
22084	proiztekti	v.intr. pf.
11568	proizvesti	v.tr. pf.
22261	proizvod	m.
35569	proizvoditelj	m.anim.
11569	proizvoditi	v.tr. ipf.
22259	proizvodstvo	n.sg.
22318	proizvoljny	adj.
19919	projav	m.
5325	projaviti	v.tr. pf.
5326	projavjati	v.tr. ipf.
35349	projavjeńje	n.
5481	projdti	v.tr. pf.
5488	projehati	v.intr. pf.
5651	projekcija	f.
430	projekt	m.
5099	projektant	m.anim.
4362	projektovańje	n.
4361	projektovati	v.tr. ipf.
18524	projęti	v.tr. pf.
5489	proježđati	v.intr. ipf.
18525	projmati	v.tr. ipf.
18526	proklęti	v.tr. pf.
18527	proklęti	v.intr. pf.
20093	proklęťje	n.
35990	proklęto	adv.
18528	proklętstvo	n.
36704	proklęty	adj.
1221	prokontrolovati	v.tr. pf.
2269	prokrijumčariti	v.tr. pf.
6295	prokuratura	f.
2943	prokuror	m.anim.
5588	prolamyvati	v.tr. ipf.
5519	proletariat	m.sg.
5520	proletaŕsky	adj.
1223	proleženina	f.
6152	proliti	v.tr. pf.
6151	prolivati	v.tr. ipf.
20662	prolom	m.
36301	prolom	m.
4614	prolomiti	v.tr. pf.
1211	promysl	m.
2315	promysľnik	m.anim.
35179	promysľny	adj.
32301	promyti mozg	v.tr. pf.
32300	promyvati mozg	v.tr. ipf.
6298	pronevěriti	v.tr. pf.
6296	pronevěrjati	v.tr. ipf.
18530	pronevěrjeńje	n.
4456	pronikańje	n.
4454	pronikati	v.intr. ipf.
35552	proniklivy	adj.
4455	proniknųti	v.intr. pf.
4310	propadati	v.intr. ipf.
21085	propadati	v.intr. ipf.
21086	propadati	v.intr. ipf.
5329	propaganda	f.
5330	propagovati	v.tr. ipf.
11592	propasť	f.
11594	propasť	f.
21088	propasť	f.
4311	propasti	v.intr. pf.
21089	propasti	v.intr. pf.
21090	propasti	v.intr. pf.
18532	propeler	m.
35765	propiti	v.tr. pf.
35764	propivati	v.tr. ipf.
4081	proponovati	v.tr. ipf.
23784	proporcija	f.
23783	proporcionaľno	adv.
23782	proporcionaľny	adj.
22233	propověď	f.
5124	propozicija	f.
21092	propust	m.
21093	propust	m.
35643	propust	m.
18534	propustiti	v.tr. pf.
18533	propušćati	v.tr. ipf.
33585	proročsky	adj.
2235	prorok	m.anim.
36300	proryv	m.
22794	prośak	m.anim.
1232	prośba	f.
3353	prosim	intj.
1853	prositi	v.tr. ipf.
36582	proslaviti sę	v.refl. pf.
1227	proslaviti	v.tr. pf.
36578	proslaviti	v.tr. pf.
36581	proslavjati sę	v.refl. ipf.
36576	proslavjati	v.tr. ipf.
36579	proslavjati	v.tr. ipf.
428	proslavjeny	adj.
3937	proso	n.
4197	prospati	v.intr. pf.
33222	prospati	v.tr. pf.
36453	prostačsky	adj.
21096	prostak	m.anim.
21098	prostak	m.anim.
21765	prostata	f.
18540	prostějši	adj.
21885	prostirati	v.tr. ipf.
21886	prostirati	v.tr. ipf.
21100	prostiti sę	v.refl. pf.
21099	prostiti	v.tr. pf.
1748	prostitutka	f.
3753	prosto	adv.
5531	prostor	m.
1437	prostosť	f.
11611	prostrånna klaviša	f.
16478	prostrånny	adj.
21889	prostrånny	adj.
21890	prostrånny	adj.
11610	prostrånstvo	n.
21887	prostrěti	v.tr. pf.
21888	prostrěti	v.tr. pf.
11613	prostrina	f.
33418	prostuditi sę	v.refl. pf.
33419	prostuđati sę	v.refl. ipf.
2334	prosty	adj.
22013	prosvěćańje	n.
22014	prosvěćańje	n.
5783	prosvěćati	v.tr. ipf.
3642	prosvět	m.
6202	prosvěta	f.
5784	prosvětiti	v.tr. pf.
30030	prošćaľny	adj.
18535	prošćańje	n.
36523	prošćati sę	v.refl. ipf.
547	prošćati	v.tr. ipf.
2288	prošedšesť	f.sg.
981	prošedši	adj.
5945	prošlogodišnji, prošlogodišny	adj.
11622	prošloročny	adj.
11623	prošlosť	f.sg.
11624	prošly	adj.
11626	prošų	intj.
34752	protagonist	m.anim.
23915	protęga	f.
23916	protęgati sę	v.refl. ipf.
23917	protęgnųti sę	v.refl. pf.
23619	protein	m.
5419	protěkati	v.intr. ipf.
5418	protekti	v.intr. pf.
36491	protektorat	m.
46	protest	m.
361	protestant	m.anim.
4609	protestant	m.anim.
33729	protestantsky	adj.
898	protestovati	v.intr. ipf.
17016	protetičny	adj.
17087	proteza	f.
22047	protęžeńje	n.
22048	protęžny	adj.
362	protiv	prep.
5479	protivdějati	v.intr. ipf.
1073	protivdějstvo	n.sg.
2331	protiviti sę	v.refl. ipf.
20666	protivlegly	adj.
2881	protivnik	m.anim.
4389	protivno	adv.
17017	protivnosť	f.
4388	protivny	adj.
20667	protivpoloženy	adj.
4206	protivpožarny	adj.
36117	protivraketna obråna	f.
21484	protivrěčiti	v.intr. ipf.
23802	protivrěčnosť	f.
23804	protivrěčny	adj.
975	protokol	m.
4657	proton	m.
34841	prototip	m.
34842	prototipičny	adj.
21485	protreti	v.tr. pf.
18545	prověriti	v.tr. pf.
18544	prověrjati	v.tr. ipf.
36697	prověrka	f.
5506	provesti	v.tr. pf.
18546	provesti	v.tr. pf.
4623	provětriti	v.tr. pf.
4624	provětrjati	v.tr. ipf.
22427	providěńje	n.
22428	Providěńje	n.
35466	provinciaľny	adj.
1733	provincija	f.
11645	provod	m.
22255	provod	m.
3279	provoditi	v.tr. ipf.
3537	provoditi	v.tr. ipf.
4230	provoditi	v.intr. ipf.
11651	provodnik želěznice	m.anim.
22256	provodnik	m.anim.
22257	provodnik	m.anim.
22258	provodnik	m.
18548	provođati	v.tr. ipf.
14950	provođeńje	n.
18549	provođeńje	n.
707	provokacija	f.
175	provokatorsky	adj.
4978	provokovati	v.tr. ipf.
23921	provŕćati	v.tr. ipf.
20094	provŕgati	v.tr. ipf.
20095	provŕgnųti	v.tr. pf.
23920	provŕtiti	v.tr. pf.
20096	proza	f.
11656	prozråčno	adv.
6214	prozråčnosť	f.
6213	prozråčny	adj.
18551	proživati	v.intr. ipf.
1450	pŕś	f.
21486	prskati	v.intr. ipf.
21686	prsknųti	v.intr. pf.
1723	pŕst	m.
30033	pŕstenj	m.
21103	prųga	f.
35634	Prusija	f.sg.
16760	prųt	m.
3833	prųžina	f.
21105	prųžiti	v.tr. ipf.
21107	prųžny	adj.
18553	pŕva světova vojna	f.
16912	pŕvak	m.anim.
16913	pŕvenstvo	n.
18554	pŕvěstȯk	m.
20097	pŕvo	adv.
21488	pŕvobraz	m.
18555	pŕvobytny	adj.
10506	pŕvonačęľno	adv.
10508	pŕvonačęľnosť	f.
10509	pŕvonačęľny	adj.
22353	pŕvorędny	adj.
21489	pŕvorodstvo	n.sg.
18559	pŕvotny	adj.
20098	pŕvovzor	m.
3621	pŕvy raz	m.
1572	pŕvy	num.ord.
18563	pryšč	m.
35977	psalm	m.
35978	psaltyŕ	m.
35406	psevdo-	prefix
35407	psevdonauka	f.
18564	psevdonim	m.
33734	psica	f.
20099	psihiatričny	adj.
20100	psihičny	adj.
16819	psiholog	m.anim.
16820	psihologičny	adj.
16818	psihologija	f.sg.
16817	psihopat	m.anim.
3264	psihopatičny	adj.
36701	psihovati	v.intr. ipf.
1224	pšenica	f.
15507	ptačę	n.
14952	ptačji	adj.
14951	ptak	m.anim.
1111	ptica	f.
4478	ptičji	adj.
15508	ptička	f.
36163	pubertet	m.
23991	publičny dom	m.
1213	publičny	adj.
18565	publika	f.
4979	publikacija	f.
1212	publikovati	v.tr. ipf.
3250	puč	m.
31813	puding	m.
21108	pųditi	v.tr. ipf.
11669	puh	m.
4773	puhnųti	v.intr. ipf.
11670	puhovy	adj.
32275	pųhyŕ	m.
30415	pųkati	v.intr. ipf.
30417	pųknųti	v.intr. pf.
36031	pulover	m.
21110	pult	m.
32475	puma	f.
2095	punkt	m.
23806	pųp	m.
18566	pųpȯk	m.
30041	purizm	m.sg.
23765	purpur	m.
30042	purpurny	adj.
32541	pustěti	v.intr. ipf.
11676	pustina	f.
18568	pustiti	v.tr. pf.
21119	pustošiti	v.tr. ipf.
1083	pusty	adj.
21121	pusty	adj.
2154	pustynja	f.
18570	pustynnik	m.anim.
18567	pušćati	v.tr. ipf.
14954	pušiti	v.tr. ipf.
16814	puška	f.
2155	pųť	m./f.
18571	pųť	m./f.
4357	pųtnik	m.anim.
11681	pųtovańje	n.
5937	pųtovatelj	m.anim.
11685	pųtovateljka	f.
2156	pųtovati	v.intr. ipf.
4356	pųtujųći	m.anim.
2246	pyl	m.
10553	pyliti	v.intr. ipf.
23362	pylȯk	m.
6090	pyšnosť	f.
6091	pyšny	adj.
32559	pytaľnik	m.
32560	pytaľny znak	m.
5768	pytańje	n.
17021	pytateljny zaimennik	m.
5938	pytati	v.tr. ipf.
10592	pytlivy	adj.
21122	pytlivy	adj.
5331	råb	m.anim.
30047	rabarbara	f.
30048	rabat	m.
11987	råbimy	adj.
30050	rabin	m.anim.
2955	råbiti	v.tr. ipf.
3701	råbota	f.
1250	råbotati	v.intr. ipf.
20101	råbotči	adj.
35374	råbotna sila	f.
30621	råbotnica	f.
19507	råbotničsky	adj.
11992	råbotničstvo	n.sg.
5332	råbotnik	m.anim.
30623	råbotny	adj.
18579	råbotodatelj	m.anim.
30051	råbsky	adj.
1080	råbstvo	n.sg.
30053	råbynja	f.
55	racionalizacija	f.
36351	racionalizovany	adj.
34862	racionalizovati	v.tr. ipf./pf.
36350	racionalizovati	v.tr. ipf./pf.
20102	racionaľno	adv.
16337	racionaľny	adj.
30056	rad	adj.
4108	rada	f.
2301	radar	m.
7209	radca	m.anim.
11697	raděje	adv.
30057	radi	prep.
887	radiacija	f.
22636	radij	m.sg.
174	radikaľny	adj.
171	radio	n.
731	radioaktivny	adj.
23288	radiolog	m.anim.
23287	radiologija	f.sg.
22015	radioskopija	f.
36221	radiotelevizijna korporacija	f.
17022	radiovy	adj.
4109	raditi	v.tr. ipf.
11702	radničstvo	n.sg.
3316	radosť	f.
11706	radostno	adv.
803	radostny	adj.
3455	radovati sę	v.refl. ipf.
30061	radovati	v.tr. ipf.
5179	rady	adj.
32347	rafinerija	f.
20103	rafinovany	adj.
35540	rahunȯk	m.
1496	raj	m.
30064	rajsky	adj.
18581	rak pustynnik	m.anim.
18580	rak	m.
30066	rak	m.anim.
30067	Rak	m.anim.
172	raketa	f.
30075	ralo	n.
5158	rama, ramka	f.
16343	ramę	n.
30077	ramenny	adj.
18582	rana	f.
14958	ranec	m.
11716	ranečnik	m.anim.
4061	raněje	adv.
11719	rang	m.
16072	rang	m.
35562	ranimosť	f.
35561	ranimy	adj.
1381	raniti	v.tr. ipf.
30079	ranji	adj.
1383	rano	adv.
4060	ranši	adj.
517	rany	adj.
902	raport	m.
11725	rasa	f.
23623	rasist	m.anim.
23624	rasističny	adj.
23622	rasizm	m.sg.
11726	rasovo stereotipovańje	n.
11727	rasovo unižeńje	n.
11729	rasovy	adj.
3684	råst	m.
21491	råst	m.
3037	råsti	v.intr. ipf.
6245	råstlina	f.
35508	råstlinovod	m.anim.
22947	råstlinožerec	m.anim.
22948	råstlinožerny	adj.
21493	råstly	adj.
23923	råstȯk	m.
1382	ratifikacija	f.
1119	ratifikovati	v.tr. ipf.
1118	ratuš	m.
1331	raund	m.
11737	råvěsničska sěť	f.
15509	råvěsničsky	adj.
30086	råvěsnik	m.anim.
12023	råvnako	adv.
21494	råvnańje	n.
2248	råvnina	f.
6059	råvniti sę	v.refl. ipf.
15511	råvniti	v.tr. ipf.
5860	råvno kako	conj.
3592	råvno	adv.
23205	råvnoběžny	adj.
18584	råvnodenstvo	n.
11740	råvnodušnosť	f.
21496	råvnodušny	adj.
18585	råvnohalo	n.
35148	råvnoliko	adv.
23780	råvnoměrno	adv.
20669	råvnoměrnosť	f.
20670	råvnoměrny	adj.
32281	råvnonogy	f.pl.
18586	råvnopravnosť	f.
18588	råvnopravny	adj.
30091	råvnosť	f.
21497	råvnovaga	f.
21499	råvnověśje	n.
12030	råvnoznačnik	m.
36134	råvnoznačny	adj.
1242	råvny	adj.
2239	råvny	adj.
3877	råvny	adj.
489	raz	m.
11745	raz	adv.
30100	råzběgati sę	v.refl. ipf.
30101	råzběgati sę	v.refl. ipf.
30103	råzběgti sę	v.refl. pf.
35356	råzběsniti	v.tr. pf.
35355	råzběsnjati	v.tr. ipf.
11748	råzbirati	v.tr. ipf.
16472	råzbirati	v.tr. ipf.
11750	råzbiti	v.tr. pf.
3473	råzbity	adj.
30104	råzbivati	v.tr. ipf.
20674	råzboj	m.
30116	råzbojnica	f.
20675	råzbojnik	m.anim.
30118	råzbojny napad	m.
34929	råzbojny	adj.
11752	råzbolěti sę	v.refl. pf.
33753	råzbolěvati sę	v.refl. ipf.
11753	råzbor	m.
11749	råzbrati	v.tr. pf.
16473	råzbrati	v.tr. pf.
3878	råzbuditi	v.tr. pf.
2295	råzcvěsti	v.intr. pf.
15372	råzcvět	m.
1103	råzcvětati	v.intr. ipf.
30131	råzčesati	v.tr. pf.
30134	råzčistiti	v.tr. pf.
33774	råzčišćati	v.tr. ipf.
30136	råzčuliti	v.tr. pf.
33777	råzčuljati	v.tr. ipf.
3675	råzdati	v.tr. pf.
3652	råzdavati	v.tr. ipf.
6053	råzděl	m.
595	råzděliti	v.tr. pf.
2249	råzděljati	v.tr. ipf.
33755	råzděti sę	v.refl. pf.
30143	råzděti	v.tr. pf.
33756	råzděvati sę	v.refl. ipf.
30145	råzděvati	v.tr. ipf.
30147	råzdirańje	n.
20104	råzdirati	v.tr. ipf.
30150	råzdniti sę	v.refl. pf.
33787	råzdȯlbati	v.tr. ipf.
30151	råzdȯlbti	v.tr. pf.
30152	råzdor	m.
23221	råzdražlivosť	f.
759	råzdražlivy	adj.
11771	råzdražniti	v.tr. pf.
11772	råzdražnjati	v.tr. ipf.
2409	råzdražnjeńje	n.
23799	råzdražnjeno	adv.
23797	råzdražnjeny	adj.
20105	råzdreti	v.tr. pf.
20106	råzdrety	adj.
30158	råzdrobiti	v.tr. pf.
30159	råzdrobjati	v.tr. ipf.
30160	råzdrobjeńje	n.
2847	råzdųti	v.tr. pf.
1558	råzdųvati	v.tr. ipf.
18592	råzdvajati	v.tr. ipf.
30165	råzdvojeńje	n.
18593	råzdvojiti	v.tr. pf.
30167	råzgadati	v.tr. pf.
33765	råzgadyvati	v.tr. ipf.
30168	råzganjati	v.tr. ipf.
30169	råzgarjati sę	v.refl. ipf.
30170	råzgladiti	v.tr. pf.
32662	råzglađati	v.tr. ipf.
18596	råzglåsiti	v.tr. pf.
18594	råzglašati	v.tr. ipf.
30174	råzględ	m.
5822	råzględati sę	v.refl. ipf.
11776	råzględati	v.tr. ipf.
5823	råzględěti sę	v.refl. pf.
11777	råzględěti	v.tr. pf.
30176	råzgnati	v.tr. pf.
23924	råzgněvany	adj.
2349	råzgněvati	v.tr. pf.
30180	råzgon	m.
30182	råzgorěti sę	v.refl. pf.
5426	råzgovarjati	v.intr. ipf.
720	råzgovor	m.
30184	råzgovoriti sę	v.refl. pf.
18598	råzgovornik	m.
32664	råzgovorny język	m.
30186	råzgovorny	adj.
30187	råzgrabiti	v.tr. pf.
30188	råzgrabiti	v.tr. pf.
30189	råzgrabjati	v.tr. ipf.
33921	råzgrabjati	v.tr. ipf.
30191	råzgråditi	v.tr. pf.
33820	råzgrađati	v.tr. pf.
33759	råzgraničati	v.tr. ipf.
30192	råzgraničiti	v.tr. pf.
30196	råzgrěti	v.tr. pf.
30197	råzgrěvańje	n.
30198	råzgrěvati	v.tr. ipf.
30200	råzgrom	m.
30201	råzgromiti	v.tr. pf.
30203	råzgryzati	v.tr. ipf.
30204	råzgryzti	v.tr. pf.
18600	råzhod	m.
5424	råzhoditi sę	v.refl. ipf.
30210	råzhodny	adj.
30214	råzigrati sę	v.refl. pf.
33792	råzigrati	v.tr. pf.
33796	råzigryvati sę	v.refl. ipf.
33794	råzigryvati	v.tr. ipf.
11787	råziskati	v.tr. pf.
18602	råziskyvańje dȯlgoživosti	n.
11788	råziskyvańje	n.
11789	råziskyvatelj	m.anim.
11790	råziskyvati	v.tr. ipf.
21503	raziteljny	adj.
21505	raziti	v.tr. ipf.
35358	råzjariti	v.tr. pf.
35357	råzjarjati	v.tr. ipf.
18605	råzjasniti	v.tr. pf.
18603	råzjasnjati	v.tr. ipf.
11791	råzjebany	adj.
4266	råzjebati	v.tr. pf.
11793	råzjebyvati	v.tr. ipf.
36908	råzjedati	v.tr. ipf.
30215	råzjediniti	v.tr. pf.
33824	råzjedinjati	v.tr. ipf.
33771	råzjehati sę	v.refl. pf.
36909	råzjesti	v.tr. pf.
30218	råzježđati sę	v.refl. ipf.
30219	råzkajańje	n.
30220	råzkajati sę	v.refl. pf.
30221	råzkalati	v.tr. ipf.
33887	råzkaz	m.
21507	råzkazati	v.tr. pf.
17023	råzkaznik	m.
36295	råzkaznik	m.anim.
20126	råzkazyvati	v.tr. ipf.
5532	råzklad	m.
5781	råzklad	m.
18607	råzkladati	v.tr. ipf.
32691	råzkladati	v.tr. ipf.
30233	råzklåti	v.tr. pf.
33828	råzklejati	v.tr. ipf.
30234	råzklejiti	v.tr. pf.
11797	råzkodovati	v.tr. ipf.
30237	råzkol	m.
30238	råzkopati	v.tr. pf.
33829	råzkopyvati	v.tr. ipf.
30239	råzkoš	f.
30240	råzkoš	f.
30242	råzkošny	adj.
30243	råzkošny	adj.
30244	råzkovati	v.tr. pf.
33868	råzkovyvati	v.tr. ipf.
33866	råzkrajati	v.tr. ipf.
30247	råzkričati sę	v.refl. pf.
30251	råzkrojiti	v.tr. pf.
30253	råzkrȯšiti	v.tr. pf.
33855	råzkrųćati sę	v.tr. ipf.
33853	råzkrųćati	v.tr. ipf.
33852	råzkrųtiti sę	v.tr. pf.
30254	råzkrųtiti	v.tr. pf.
30256	råzkryti	v.tr. pf.
30257	råzkryťje	n.
30258	råzkryvati	v.tr. ipf.
36412	råzkvartirovańje	n.sg.
36411	råzkvartirovati	v.tr. pf.
24162	råzkvartirovyvati	v.tr. ipf.
30226	råzkydati	v.tr. pf.
33826	råzkydyvati	v.tr. ipf.
30261	råzlad	m.
33836	råzladiti	v.tr. pf.
33840	råzlađati	v.tr. ipf.
30263	råzlagati	v.tr. ipf.
32692	råzlagati	v.tr. ipf.
30264	råzlajati sę	v.refl. pf.
5589	råzlamyvati	v.tr. ipf.
20677	råzlegati sę	v.refl. ipf.
20678	råzlegti sę	v.refl. pf.
30269	råzlěniti sę	v.refl. pf.
30270	råzlětati sę	v.refl. ipf.
30271	råzletěti sę	v.refl. pf.
17024	råzličajųći čislovnik	m.
4695	råzličati sę	v.refl. ipf.
11804	råzličati	v.tr. ipf.
20107	råzličeńje	n.
30276	råzličiti	v.tr. pf.
27	råzličje	n.
11802	råzličnosť	f.
2211	råzličny	adj.
14963	råzlika	f.
14964	råzlikovati sę	v.refl. ipf.
30278	råzliti	v.tr. pf.
30279	råzliťje	n.
30280	råzliv	m.
30282	råzlivati	v.tr. ipf.
14965	råzlog	m.
30286	råzlom	m.
4615	råzlomiti	v.tr. pf.
36217	råzložeńje klaviatury	n.
18608	råzložiti	v.tr. pf.
30231	råzložiti	v.tr. pf.
20108	råzlųčati	v.tr. ipf.
30290	råzlųčeńje	n.
20109	råzlųčiti	v.tr. pf.
30292	råzlųčnik	m.anim.
30293	råzlųka	f.
11807	råzmah krila	n.
20681	råzmah	m.
30298	råzmazati	v.tr. pf.
33894	råzmazyvati	v.tr. ipf.
30300	råzmękčati	v.tr. ipf.
30301	råzmękčiti	v.tr. pf.
3596	råzměna	f.
17	råzměniti	v.tr. pf.
324	råzměnjati	v.tr. ipf.
36	råzměr	m.
30308	råzměriti	v.tr. pf.
30309	råzměrjati	v.tr. ipf.
30317	råzmesti	v.tr. pf.
128	råzměstiti	v.tr. pf.
5973	råzměšany	adj.
23250	råzměšany	adj.
1041	råzměšati	v.tr. pf.
12376	råzměšati	v.tr. pf.
1262	råzměšćati	v.tr. ipf.
11817	råzměšćeńje	n.
3004	råzměšivati	v.tr. ipf.
16898	råzměšivati	v.tr. ipf.
30315	råzmětati	v.tr. ipf.
30316	råzmetati	v.tr. pf.
32245	råzmęti	v.tr. pf.
32599	råzmetyvati	v.tr. ipf.
33900	råzminovati sę	v.refl. ipf.
30318	råzminųti sę	v.refl. pf.
30320	råzmlåtiti	v.tr. pf.
30321	råzmlěti	v.tr. pf.
23626	råzmnažańje	n.
33291	råzmnažati sę	v.refl. ipf.
30322	råzmnažati	v.tr. ipf.
30323	råzmnožeńje	n.
33293	råzmnožiti sę	v.refl. pf.
30324	råzmnožiti	v.tr. pf.
30326	råzmokati	v.intr. ipf.
30327	råzmoknųti	v.intr. pf.
5633	råzmontovati	v.tr. pf.
30329	råzmotati	v.tr. pf.
23065	råzmråziti	v.tr. pf.
23066	råzmražati	v.tr. ipf.
5046	råzmysliti	v.tr. pf.
11827	råzmysljańje	n.
3348	råzmysljati	v.tr. ipf.
20112	råzmysljeńje	n.
30337	råzmyti	v.tr. pf.
30338	råzmyvati	v.tr. ipf.
20686	råznesti sę	v.refl. pf.
5501	råznesti	v.tr. pf.
11834	råznica	f.
30345	råzniti sę	v.refl. ipf.
21508	råznorodnosť	f.
21509	råznorodny	adj.
30349	råznos	m.
20687	råznositi sę	v.refl. ipf.
5499	råznositi	v.tr. ipf.
2034	råzny	adj.
41	råzočarovańje	n.
5900	råzočarovany	adj.
5898	råzočarovati	v.tr. pf.
5899	råzočarovyvati	v.tr. ipf.
35645	råzȯjdti sę	v.refl. pf.
14960	razȯm	adv.
21510	razȯm	adv.
30357	råzorati	v.tr. pf.
30359	råzoriti	v.tr. pf.
33803	råzorjati	v.tr. ipf.
30358	råzorjeńje	n.
23010	råzorųžati	v.tr. ipf.
6240	råzorųžeńje	n.
23009	råzorųžiti	v.tr. pf.
20114	råzpad	m.
2271	råzpadati sę	v.refl. ipf.
18610	råzpakovati	v.tr. pf.
18612	råzpakovyvati	v.tr. ipf.
30374	råzpaliti sę	v.refl. pf.
30370	råzpaliti	v.tr. pf.
33934	råzpaljati sę	v.refl. ipf.
33930	råzpaljati	v.tr. ipf.
30377	råzparjati	v.tr. ipf.
2050	råzpasti sę	v.refl. pf.
30379	råzpěniti	v.intr. pf.
30381	råzpęti na križ	v.tr. pf.
30380	råzpęti	v.tr. pf.
33944	råzpęti	v.tr. pf.
21124	råzpęťje	n.
21125	råzpęťje	n.
33952	råzpinati na križ	v.tr. ipf.
33947	råzpinati	v.tr. ipf.
33950	råzpinati	v.tr. ipf.
34338	råzplesti	v.tr. pf.
34334	råzpletati	v.tr. ipf.
34905	råzplyvati sę	v.refl. ipf.
34906	råzplyvti sę	v.refl. pf.
20839	råzpoložeńje	n.
30389	råzpoložeńje	n.
2914	råzpor	m.
23927	råzporęditi	v.tr. pf.
23929	råzporęđati	v.tr. ipf.
22363	råzporęđeńje	n.
22364	råzporęđeńje	n.
22883	råzpoznańje	n.
11844	råzpoznati	v.tr. pf.
22882	råzpoznati	v.tr. pf.
36455	råzpoznavajemosť	f.sg.
36454	råzpoznavajemy	v.tr. ipf.
30398	råzpoznavańje	n.
11845	råzpoznavati	v.tr. ipf.
22880	råzpoznavati	v.tr. ipf.
33955	råzprašati	v.tr. ipf.
33954	råzpråšiti	v.tr. pf.
30401	råzpråti	v.tr. pf.
21129	råzprava	f.
21130	råzprava	f.
23069	råzprava	f.
21126	råzprja	f.
32671	råzprodati	v.tr. pf.
30404	råzprodavati	v.tr. ipf.
30406	råzprostirati sę	v.refl. ipf.
21892	råzprostirati	v.tr. ipf.
33907	råzprostråniti sę	v.refl. pf.
20123	råzprostråniti	v.tr. pf.
33908	råzprostranjati sę	v.refl. ipf.
20117	råzprostranjati	v.tr. ipf.
20120	råzprostrånjeńje	n.
20122	råzprostrånjeny	adj.
21893	råzprostrěti	v.tr. pf.
30416	råzpųklina	f.
1887	råzpustiti	v.tr. pf.
21139	råzpustiti	v.tr. pf.
21141	råzpustiti	v.tr. pf.
2362	råzpušćati	v.tr. ipf.
21134	råzpušćati	v.tr. ipf.
21136	råzpušćati	v.tr. ipf.
3564	råzpušćeńje	n.
3530	råzpųťje	n.
5989	råzpytati	v.tr. pf.
11851	råzpytyvańje	n.
5988	råzpytyvati	v.tr. ipf.
5144	råzråbotati	v.tr. pf.
5543	råzråbotyvati	v.tr. ipf.
11855	råzradovati	v.tr. pf.
30426	råzrastańje	n.
30427	råzrastati sę	v.refl. ipf.
30428	råzråsti sę	v.refl. pf.
18618	råzråzniti	v.tr. pf.
18617	råzraznjati	v.tr. ipf.
22362	råzręd	m.
18619	råzrěšati	v.tr. ipf.
17025	råzrěšeńje	n.
18621	råzrěšiti	v.tr. pf.
30432	råzrěz	m.
30434	råzrězati	v.tr. pf.
18623	råzrųbati	v.tr. pf.
18625	råzrųbyvati	v.tr. ipf.
30439	råzruměniti sę	v.refl. pf.
4777	råzrušati	v.tr. ipf.
14967	råzrušeńje	n.
30441	råzrušitelj	m.
3553	råzrušiti	v.tr. pf.
14968	råzrušnosť	f.
30443	råzrvati	v.tr. pf.
30444	råzryti	v.tr. pf.
30445	råzryv	m.
30446	råzryvati	v.tr. ipf.
30447	råzryvati	v.tr. ipf.
11858	råzsada	f.
30449	råzsaditi	v.tr. pf.
30450	råzsadnik	m.
30451	råzsađati	v.tr. ipf.
30135	råzsčitati	v.tr. pf.
35903	råzsčityvati	v.tr. ipf.
30453	råzsedlati	v.tr. pf.
34000	råzsedlyvati	v.tr. ipf.
36751	råzsějany professor	m.anim.
36750	råzsějany	adj.
33244	råzsějati	v.tr. pf.
33242	råzsějivati	v.tr. ipf.
21517	råzselina	f.
30361	råzslati	v.tr. pf.
6236	råzslěditi	v.tr. pf.
6235	råzslědovańje	n.
6234	råzslědovati	v.tr. ipf.
34013	råzsmatrjati	v.tr. pf.
30462	råzsmějati sę	v.refl. pf.
4055	råzsměliti	v.tr. pf.
4059	råzsměljati	v.tr. ipf.
23930	råzsměšati	v.tr. ipf.
23931	råzsměšiti	v.tr. pf.
30464	råzsmotriti	v.tr. pf.
18627	råzsŕditi	v.tr. pf.
21780	råzstati sę	v.refl. pf.
21778	råzstavati sę	v.refl. ipf.
5632	råzstaviti	v.tr. pf.
21787	råzstaviti	v.tr. pf.
5631	råzstavjati	v.tr. ipf.
21784	råzstavjati	v.tr. ipf.
5630	råzstavjeńje	n.
33449	råzsteliti	v.tr. pf.
33452	råzstlati	v.tr. pf.
21782	råzstojańje	n.
21913	råzstrajati	v.tr. ipf.
30476	råzstrěl	m.
34016	råzstrěliti	v.tr. pf.
30477	råzstrěljati	v.tr. ipf.
30480	råzstroj	m.
21918	råzstrojiti	v.tr. pf.
36194	råzstrojstvo	n.
23933	råzsųditi	v.intr. pf.
3311	råzsųdny	adj.
3312	råzsųdȯk	m.sg.
22011	råzsųdȯk	m.sg.
34021	råzsųđati	v.intr. ipf.
11868	råzsųđeńje	n.
22016	råzsvět	m.
21687	råzsvětliti sę	v.refl. pf.
21519	råzsvětljati sę	v.refl. ipf.
30499	råzsvirěpěti	v.intr. pf.
30517	råzsylati	v.tr. ipf.
30518	råzsylka	f.
22001	råzsyp	m.
11859	råzsypany	adj.
1149	råzsypati	v.tr. pf.
1866	råzsypyvati	v.tr. ipf.
30504	råzščep	m.
30505	råzščepiti	v.tr. pf.
30506	råzščepjati	v.tr. ipf.
11871	råzšifrovati	v.tr. ipf.
11877	råzširiti sę	v.refl. pf.
1162	råzširiti	v.tr. pf.
36388	råzširjati sę	v.refl. ipf.
587	råzširjati	v.tr. ipf.
3601	råzširjeńje	n.
11873	råzširjeny	adj.
23484	råzšnurovati	v.tr. pf.
23483	råzšnurovyvati	v.tr. ipf.
30522	råztajati	v.tr. pf.
30523	råztapjati	v.tr. ipf.
3025	råztęgati sę	v.refl. ipf.
30525	råztęgati	v.tr. ipf.
1290	råztęgnųti sę	v.refl. pf.
30526	råztęgnųti	v.tr. pf.
30527	råztěkati sę	v.refl. ipf.
30528	råztekti sę	v.refl. pf.
30530	råztirati	v.tr. ipf.
33461	råztȯlkati	v.tr. ipf.
30536	råztȯlkti	v.tr. pf.
30537	råztȯlstěti	v.intr. pf.
817	råztopiti	v.tr. pf.
30539	råztȯptati	v.tr. pf.
34038	råztȯptyvati	v.tr. ipf.
16768	råztraćati	v.tr. ipf.
30541	råztrata	f.
34041	råztrata	f.
16771	råztratiti	v.tr. pf.
30546	råztrěskati	v.tr. ipf.
30547	råztrěsknųti	v.tr. pf.
30549	råztreti	v.tr. pf.
30550	råztrgati	v.tr. ipf.
30551	råztrgnųti	v.tr. pf.
17026	råztrojiti	v.tr. pf.
23426	råztrųbiti	v.tr. pf.
22153	råztvarjati	v.tr. ipf.
22155	råztvor	m.
22154	råztvoriti	v.tr. pf.
657	råzum	m.
30562	råzuměje sę	phrase
4347	råzumějemo	adv.
4348	råzumějemosť	f.
4346	råzumějemy	adj.
23071	råzuměńje	n.
2102	råzuměti	v.tr. ipf.
11894	råzumlivo	adv.
11895	råzumlivosť	f.
11896	råzumlivy	adj.
30566	råzumnica	f.
30567	råzumnik	m.anim.
3807	råzumno	adv.
11914	råzumno	adv.
4169	råzumnosť	f.
4167	råzumny	adj.
11915	råzumny	adj.
4166	råzumovati	v.intr. ipf.
30570	råzuti sę	v.refl. pf.
30571	råzuvati sę	v.refl. ipf.
22188	råzvaliny	f.pl.
30575	råzvaliti sę	v.refl. pf.
34056	råzvaliti sę	v.refl. pf.
34050	råzvaliti	v.tr. pf.
34051	råzvaliti	v.tr. pf.
34058	råzvaljati sę	v.refl. ipf.
34060	råzvaljati sę	v.refl. ipf.
34052	råzvaljati	v.tr. ipf.
34053	råzvaljati	v.tr. ipf.
35114	råzvažańje	n.
6010	råzvažati	v.tr. ipf.
6011	råzvažiti	v.tr. pf.
30576	råzvědati	v.tr. pf.
3255	råzvědka	f.
34034	råzvědyvati	v.tr. ipf.
30580	råzveseliti	v.tr. pf.
30581	råzveseljati	v.tr. ipf.
22264	råzvesti sę	v.refl. pf.
5507	råzvesti	v.tr. pf.
35506	råzvesti	v.tr. pf.
22198	råzvęzati	v.tr. pf.
30582	råzvezti	v.tr. pf.
22199	råzvęzyvati	v.tr. ipf.
23554	råzviti sę	v.refl. pf.
1282	råzviti	v.tr. pf.
30584	råzviti	v.tr. pf.
5100	råzviťje	n.
11909	råzvivajųći	adj.
2318	råzvivańje	n.
23553	råzvivati sę	v.refl. ipf.
2101	råzvivati	v.tr. ipf.
30583	råzvivati	v.tr. ipf.
22262	råzvod	m.
22263	råzvoditi sę	v.refl. ipf.
3565	råzvoditi	v.tr. ipf.
35505	råzvoditi	v.tr. ipf.
22552	råzvoďje	n.
30586	råzvodny	adj.
18631	råzvoj	m.
34062	råzvoziti	v.tr. ipf.
22703	råzvråt	m.
22708	råzvråt	m.
22713	råzvråtnica	f.
22709	råzvråtnik	m.anim.
22712	råzvråtnosť	f.
14832	råzvråtny	adj.
30590	råžen	m.
30593	råzžegti	v.tr. pf.
22966	råzžerati	v.tr. ipf.
32646	råzžigati	v.tr. ipf.
22970	råzžrěti	v.tr. pf.
30594	råzžuvati	v.tr. pf.
25365	rdest	m.
1235	rđa	f.
3828	rđavy	adj.
3803	reagovati	v.intr. ipf.
712	reakcija	f.
6093	reaktor	m.
35080	realist	m.anim.
35082	realističny	adj.
3102	realizacija	f.
35081	realizm	m.sg.
4980	realizovati	v.tr. ipf.
16077	reaľnosť	f.
2216	reaľny	adj.
1045	rebro	n.
1046	recept	m.
1999	recesija	f.
2196	rěč	f.
11984	rěč	f.
3758	rěčeńje	n.
14973	rěčnik	m.
2283	ręd	m.
3798	ręd	m.
22350	ręd	m.
36016	ręd	m.
20690	redagovati	v.tr. ipf.
4859	redakcija	f.
18633	redakcijny	adj.
4858	redaktor	m.anim.
4860	redaktovati	v.tr. ipf.
20128	rědko	adv.
23778	rědkosť	f.
23766	redkȯvka	f.
2272	rědky	adj.
11927	rędnosť	f.
17027	rędny	adj.
36143	rędȯk	m.
36025	rędovy	m.anim.
30601	redukcija	f.
5644	redukovati	v.tr. ipf.
17028	referencija	f.
2197	referendum	m.
17029	refleksivny zaimennik	m.
1243	reforma	f.
4981	reformacija	f.
4848	reformovati	v.tr. ipf.
1279	refren	m.
34875	refundacija	f.
3048	region	m.
2973	regionaľny	adj.
4982	registracija	f.
36299	registracijna tablica	f.
36298	registracijny znak	m.
2140	registrovati	v.tr. ipf.
20130	regresija	f.
17030	regularizacija	f.
23775	regularno	adv.
5672	regularnosť	f.
5671	regularny	adj.
20131	regulator ritma sŕdca	m.
20691	regulovati	v.tr. ipf.
36887	Rejn	m.sg.
2285	rěka	f.
3422	reklama	f.
30605	reklamacija	f.
11941	reklamny	adj.
11942	reklamodatelj	m.anim.
11939	reklamovańje	n.
3421	reklamovati	v.tr. ipf.
35212	rekomendacija	f.
5126	rekomendovati	v.tr. ipf./pf.
4874	rekonstrukcija	f.
2332	rekonstruovati	v.tr. ipf.
1241	rekord	m.
1550	rekreacija	f.
5014	rěkti	v.tr. ipf.
35770	rektor	m.anim.
33697	rekviem	m.
17031	relativny zaimennik	m.
1074	religija	f.
88	religiozny	adj.
30608	relikt	m.
32289	relikvija	f.
18634	remenj	m.
3233	remesľnik	m.anim.
1566	remeslo	n.
33724	remont	m.
1519	remontovati	v.tr. ipf.
36227	renegat	m.anim.
2949	renesansa	f.
23285	rentgenovy luč	m.
23286	rentgenovy snimȯk	m.
35185	reorganizacija	f.
35184	reorganizovati	v.tr. ipf./pf.
14974	rěpa	f.
36379	rěpa	f.
36078	rěpka	f.
36333	replika	f.
6300	represija	f.
19508	reprezentovati	v.tr. ipf.
20132	reprodukovati	v.tr. ipf.
2945	republika	f.
35519	republikanec	m.anim.
35520	republikansky	adj.
21522	reputacija	f.
18639	ręsa	f.
35737	respekt	m.sg.
30610	restavracija	f.
34930	restavrovati	v.tr. ipf./pf.
30611	restoran	m.
1759	resurs	m.
11952	rěšajųći	adj.
2338	rěšati	v.tr. ipf.
11954	rěšati	v.tr. ipf.
1238	rěšeńje	n.
11957	rěšeńje	n.
18635	rěšeny	adj.
23777	rěšiteljno	adv.
35522	rěšiteljnosť	f.
11955	rěšiteljny	adj.
1256	rěšiti	v.tr. pf.
11960	rěšiti	v.tr. pf.
1251	rešta	f.
20692	retoromansky	adj.
36505	rev	m.
36521	revanš	m.
30612	revenj	m.
35433	reverans	m.
4074	revidovati	v.tr. ipf.
4077	revizija	f.
23768	revmatičny	adj.
23767	revmatizm	m.sg.
1945	revnivosť	f.
1668	revnivy	adj.
2860	revolucija	f.
11966	revolucijna boŕba	f.
11967	revolucijna gvardija	f.
14975	revolucijnizm	m.sg.
11969	revolucijnosť	f.
4078	revolucijny	adj.
3266	revolucioner	m.anim.
36503	revti	v.intr. ipf.
3397	rězati	v.tr. ipf.
1244	rezerva	f.
35860	rezervacija	f.
35861	rezervat	m.
35858	rezervovati	v.tr. ipf.
18637	rezjume	n.indecl.
35521	rezolucija	f.
1259	rezultat	m.
3023	rezumovati	v.tr. ipf.
2123	režim	m.
3741	režim	m.
35752	režiser	m.anim.
23525	Rim	m.sg.
23524	Rimska imperija	f.sg.
18640	rimskokatoličsky	adj.
838	rimsky	adj.
11979	riť	f.
20133	ritm	m.
32240	ritmičny	adj.
36127	ritual	m.
36128	rituaľny	adj.
14978	rizično	adv.
1253	rizičny	adj.
1254	rizik	m.
1366	rizikovati	v.tr. ipf.
3948	robot	m.
18641	ročnica	f.
11995	ročno	adv.
11996	ročny	adj.
1246	rod	m.
3222	rod	m.
11998	rod	m.
21523	rod	m.
20134	rodimy	adj.
4690	rodina	f.
1947	roditelj	m.anim.
1946	roditeljnik, roditeljny padež	m.
36241	roditeljsky	adj.
2198	roditi sę	v.refl. ipf.
2325	roditi	v.tr. ipf.
5184	rodna nazva	f.
20693	rodny	adj.
6097	rodobijstvo	n.sg.
21142	rodopis	m.sg.
21143	rodopisec	m.anim.
21526	rodoslovje	n.
36378	rodoslovje	n.
2122	rodstveny	adj.
12010	rodstvo	n.sg.
12001	rođeńje	n.
18644	Rođeńje	n.
2207	rođeny	adj.
400	rog	m.
36806	rogaty	adj.
33966	roj	m.
34355	rojiti sę	v.refl. ipf.
12014	rok	m.
18647	rokada	f.
31863	rokenrol	m.sg.
18648	rokirovati	v.intr. ipf./pf.
23628	rok-muzika	f.
2063	rolja	f.
35283	roljeva igra	f.
23601	roman	m.
4735	romansky	adj.
1240	romanš	m.sg.
2182	romantičny	adj.
34931	Romantizm	m.sg.
36174	romb	m.
18649	roptańje	n.sg.
18651	roptati	v.intr. ipf.
36658	ropuha	f.
18653	rosa	f.
1044	Rosija	f.sg.
30630	Rosijska Federacija	f.sg.
3036	rosijsky	adj.
26	rotacija	f.
12022	rov	m.
149	roza	f.
30632	rozga	f.
5268	rozovy	adj.
12035	roževy	adj.
22633	rtųť	f.sg.
18657	rųbati	v.tr. ipf.
23467	rubin	m.
32081	rublj	m.
5845	rųčiti sę	v.refl. pf.
21528	rųčka	f.
21529	rųčka	f.
18660	rųčnik	m.
18661	rųčno	adv.
18662	rųčny	adj.
5640	ruda	f.
35209	rudimentarny	adj.
36777	rudnik	m.
32675	rudy	adj.
3186	ruh	m.
20135	ruina	f.
20136	ruinovati	v.tr. ipf.
12039	rujenj	m.sg.
34176	rųka v rųkě	adv.
2357	rųka	f.
21531	rųkav	m.
21532	rųkav	m.
18664	rųkavica	f.
21533	rųkoděľstvo	n.sg.
18667	rųkojęť	f.
16412	rųkopis	m.
18669	rųkopleskańje	n.sg.
18670	rųkopleskati	v.intr. ipf.
18672	rųkoplesknųti	v.intr. pf.
20694	rųkopoložeńje	n.
5891	rųkovati	v.tr. ipf.
3696	rųkovoditelj	m.anim.
18675	rųkovoditi	v.tr. ipf.
3697	rųkovodstvo	n.
18666	rųky do gory!	phrase
7812	rukzak	m.
33404	ruletka	f.
4646	rum	m.
23890	ruměnec	m.
33919	ruměněti	v.intr. ipf.
370	Rumunija	f.sg.
4433	rumunsky	adj.
36648	runa	f.
33397	runo	n.
1269	Rus	m.anim.
35346	rusifikacija	f.
35347	rusifikovati	v.tr. ipf./pf.
1272	rusinsky	adj.
2311	russky	adj.
32674	rusy	adj.
21536	rušiti	v.tr. ipf.
20137	rutensky	adj.
32067	rutina	f.
32069	rutinny	adj.
36531	ruž	m.
21539	rvati sę	v.refl. ipf.
21537	rvati	v.tr. ipf.
21538	rvati	v.tr. ipf.
1682	ryba	f.
2339	rybak	m.anim.
12059	rybaŕ	m.anim.
2304	rybnik	m.
27310	rybolov	m.
12058	rybolovstvo	n.sg.
30648	Ryby	f.pl.
12062	rycaŕ	m.anim.
18676	rydati	v.intr. ipf.
30650	ryđi	adj.
34356	rygati	v.intr. ipf.
34358	rygnųti	v.intr. pf.
34360	rylo	n.
32131	ryma	f.
32133	rymovati sę	v.refl. ipf.
32132	rymovati	v.tr. ipf.
1252	ryś	m.anim.
21542	rysovanka	f.
3568	rysovati	v.tr. ipf.
33969	ryti	v.intr. ipf.
3821	ryž	m.sg.
5827	s izključeńjem	prep.
4947	s obzirȯm na	prep.
1267	s pomoćjų	prep.
12070	s prijemnosťjų	intj.
1280	s, so	prep.
2061	s, so	prep.
35960	sablja	f.
35961	sabljevańje	n.sg.
2157	sad	m.
12075	saditi	v.tr. ipf.
34405	sadovnik	m.anim.
18761	sađa	f.
36540	safari	n.
21548	Sahara	f.sg.
30653	sajt	m.
36155	sako	n.
35130	sakraľny	adj.
35829	sakristija	f.
23453	saksofon	m.
35633	Saksonija	f.sg.
269	sala	f.
32183	salata	f.
20723	salo	n.
5719	salon	m.
22466	Salvador	m.sg.
22467	salvadorsky	adj.
2219	sam	pron.pers.
5253	samec	m.anim.
5222	samica	f.
169	samit	m.
20170	samo	adv.
35502	samo-	prefix
12084	samoanaliza	f.
18769	samobytny	adj.
35149	samodostatȯčnosť	f.
35150	samodostatȯčny	adj.
18771	samodŕžec	m.anim.
16490	samoglåska	f.
18772	samogon	m.sg.
33788	samohvaľstvo	n.sg.
35041	samokat	m.
35040	samokritika	f.
814	samolet	m.
23809	samoljubec	m.anim.
23808	samoljubny	adj.
12083	samoobsluga	f.
16356	samoobsluga	f.
18774	samoocěna	f.
12089	samoposmatrjańje	n.
5342	samoråzumno	adv.
5690	samoråzumny	adj.
813	samorod	m.
18775	samostojno	adv.
18776	samostojnosť	f.
18777	samostojny	adj.
21549	samosųd	m.sg.
21551	samota	f.
21553	samotnosť	f.
1362	samotny	adj.
36135	samoubijny	adj.
4154	samoubijstvo	n.
15528	samoubiti	v.intr. pf.
30657	samouk	m.anim.
16737	samovar	m.
21554	samovlada	f.
22482	samovlasťje	n.sg.
21557	samovoljny	adj.
21558	samozvanec	m.anim.
270	samy	adj.
36818	sanatorij	m.
36469	sandala	f.
36500	sanje	f.pl.
6241	sankcija	f.
36501	sańky	f.pl.
35203	sanskrit, sanskrt	m.sg.
30659	sarafan	m.
32251	Sarajevo	n.sg.
36140	saranča	f.
35855	sarkastičny	adj.
35856	sarkazm	m.sg.
35708	sarkofag	m.
16094	satelit	m.
36129	satira	f.
36130	satiričny	adj.
23629	Saturn	m.sg.
32446	Saudijec	m.anim.
5929	Saudovska Arabija	f.sg.
33521	sauna	f.
30660	saundtrek	m.
18677	sběgati sę	v.refl. ipf.
18679	sběgti sę	v.refl. pf.
2236	sbirańje	n.sg.
3788	sbirati sę	v.refl. ipf.
2918	sbirati	v.tr. ipf.
35138	sbirka	f.
20138	sbližańje	n.sg.
18681	sbližati sę	v.refl. ipf.
18682	sbližiti sę	v.refl. pf.
5229	sbogom!	intj.
3738	sbor	m.
4704	sborka	f.
18683	sbornik	m.
17034	sborny čislovnik	m.
1978	sbože	n.
5442	sbudovati	v.tr. pf.
34135	scati	v.intr. ipf.
20726	scena	f.
20727	scenarij	m.
35539	sčet	m.
35617	sčisliti	v.tr. pf.
1285	sčitati	v.tr. pf.
5619	sčityvati	v.tr. ipf.
18685	sdanlivo	adv.
18686	sdanlivy	adj.
14204	sdavati sę	v.refl. ipf.
14987	sde	adv.
2874	sdeformovati	v.tr. pf.
5441	sdělati	v.tr. pf.
35851	sdešnji, sdešny	adj.
34353	sdirati	v.tr. ipf.
17520	sdȯhnųti	v.intr. pf.
18688	sdrěmnųti	v.intr. pf.
34351	sdreti	v.tr. pf.
17522	sdyhati	v.intr. ipf.
4025	sę	pron.refl.
4812	sebe	pron.refl.
35503	sebe-	prefix
21560	seběčnjak	m.anim.
18790	seběčno	adv.
18791	seběčnosť	f.
18792	seběčny	adj.
21561	sebeljubje	n.sg.
15530	sebesmŕtiti	v.intr. ipf.
21562	sěča	f.
21563	sěča	f.
22811	sěčenj	m.sg.
4441	sědališče	n.
18793	sědati	v.intr. ipf.
12124	sěděńje	n.sg.
1286	sěděti	v.intr. ipf.
15532	sědiljnja	f.
33999	sedlati	v.tr. ipf.
16489	sedlo	n.
1287	sedm	num.card.
2052	sedmdesęt	num.card.
12116	sedmdesęty	num.ord.
34562	sedmerka	num.subst.
16434	sedmero	num.coll.
1288	sedmica	f.
18794	sedmično	adv.
18795	sedmičny	adj.
16403	sedmina	num.fract.
16461	sedmka	num.subst.
1107	sedmnadsęť	num.card.
12119	sedmnadsętina	num.fract.
12120	sedmnadsęty	num.ord.
1367	sedmsȯt, sedmsto	num.card.
50	sedmy	num.ord.
18796	sědnųti	v.intr. pf.
12818	sědy	adj.
21568	sęgati	v.intr. ipf.
19523	segda, segdy	adv.
35151	segdašnji, segdašny	adj.
35625	segment	m.
21570	sęgnųti	v.intr. pf.
166	sego dnja	adv.
1536	segodenny	adj.
35805	segregacija	f.
1347	sej	pron.dem.
5334	sějati	v.tr. ipf.
1604	sejčas	adv.
3789	sejčasno	adv.
5117	sejčasno	adv.
12135	sejčasnosť	f.
3532	sejčasny	adj.
12138	sejčasny	adj.
18798	sěkati	v.tr. ipf.
1270	sekcija	f.
18800	sěknųti	v.tr. pf.
3879	sekret	m.
6094	sekretaŕ	m.anim.
35614	sekretariat	m.
18802	sekretaŕka	f.
3880	sekretny	adj.
16355	seks	m.sg.
32853	seksi	adj.
35106	seksist	m.anim.
35105	seksizm	m.sg.
36840	seksta	f.
32852	seksuaľno privlěkateljny	adj.
35244	seksuaľnosť	f.
1784	seksuaľny	adj.
35538	sekta	f.
3398	sěkti	v.tr. ipf.
35518	sektor	m.
21567	sěkųća	f.
170	sekunda	f.
36836	sekunda	f.
35321	sekundarny	adj.
35772	sekvencija	f.
2947	sěkyra	f.
35491	selfi	m.indecl.
19581	seliko	adv.
19596	selikråt	adv.
19588	seliky	adj.
21565	seliti sę	v.refl. ipf.
3166	seljan, seljanin	m.anim.
18806	seljanka	f.
187	selo	n.
20173	seľsky	adj.
35043	semafor	m.
20174	semantičny	adj.
35935	semantika	f.
12152	sěmę	n.
34767	sěmę	n.
35892	sěmejstvo	n.
2987	sěmja	f.
5764	senat	m.
35553	senator	m.anim.
4994	sěno	n.sg.
35163	sentimentaľny	adj.
15713	senzor	m.
22826	separatist	m.anim.
3267	separatističny	adj.
22825	separatizm	m.sg.
1156	septembr	m.sg.
36841	septima	f.
22612	sěra	f.sg.
31758	serenada	f.
35286	serial	m.
5522	serija	f.
4840	seriozno	adv.
4839	seriozny	adj.
30679	serpentin	m.
35591	server	m.
1375	servis	m.
1560	sěry	adj.
36096	seržant	m.anim.
12168	sesterska ljubȯv	f.
6025	sestersky	adj.
5610	sęsti	v.intr. pf.
7401	sestra bliznečka	f.
1389	sestra	f.
4244	sestrinstvo	n.sg.
1373	sěť	f.
30682	sětevy	adj.
1311	sětka	f.
2411	sěver	m.sg.
4744	Sěverna Amerika	f.sg.
12184	Sěverna Dakota	f.sg.
12185	Sěverna Irlandija	f.sg.
12186	Sěverna Karolina	f.sg.
22771	Sěverna Koreja	f.sg.
36815	Sěverna Makedonija	f.
12187	sěverna polsfera	f.sg.
12190	Sěverne Marijanske Ostrovi	m.pl.
656	Sěverno morje	n.sg.
14998	sěverno sijańje	n.sg.
4183	sěverno	adv.
4745	sěvernoamerikansky	adj.
35135	sěvernoevropejsky	adj.
12181	sěvernoirlandsky	adj.
22773	sěvernokorejsky	adj.
15534	sěvernomorsky	adj.
618	sěvernoslovinsky	adj.
20729	sěverny jelenj	m.anim.
1938	sěverny polus	m.sg.
4182	sěverny	adj.
16467	Sěveroatlantičsky Alians	m.sg.
12200	sěveroiztočny	adj.
12201	sěveroiztok	m.sg.
12203	sěverovȯzhod	m.sg.
12205	sěverovȯzhodny	adj.
12206	sěverozapad	m.sg.
12208	sěverozapadny	adj.
1943	sezon	m.
4457	sezonny	adj.
21572	sęženj	f.
35760	sfera	f.
35761	sferičny	adj.
5591	sgnesti	v.tr. pf.
3630	sgnųti	v.tr. pf.
14231	sgodno s	prep.
5559	sgrěšiti	v.intr. pf.
3629	sgybati	v.tr. ipf.
18814	shema	f.
32282	shematičny plan	m.
18815	shematičny	adj.
31982	shizma	f.
5445	shoditi sę	v.refl. ipf.
5433	shoditi	v.intr. ipf.
18689	shodka	f.
23994	shodnosť	f.
18691	shodny	adj.
18692	shovati	v.tr. pf.
36792	shråniti sę	v.refl. pf.
18696	shråniti	v.tr. pf.
18694	shranjati	v.tr. ipf.
18695	shrånjeńje	n.sg.
36252	shudnųti	v.intr. pf.
1051	shvatiti	v.tr. pf.
4811	si	pron.refl.
19509	Siberija	f.sg.
35735	sidr	m.
18816	signal	m.
1196	signalizovati	v.tr. ipf.
12214	sikati	v.intr. ipf.
36293	sikvel	m.
12218	sila volje	f.
1309	sila	f.
30684	silaba	f.
30685	silabičny	adj.
22610	silicij	m.sg.
21573	siliti sę	v.refl. ipf.
697	siľno	adv.
1312	siľno	adv.
1310	siľny	adj.
12221	simbol	m.
3138	simboličny	adj.
35395	simbolika	f.
35394	simbolizm	m.sg.
1392	simbolizovati	v.tr. ipf.
20730	simetričnosť	f.
20731	simetričny	adj.
4783	simfonija	f.
30688	simpatičny	adj.
31760	simpatija	f.
35732	simpatizant	m.anim.
32112	simptom	m.
35362	simulacija	f.
35363	simulovati	v.tr. ipf./pf.
34740	sinhronizacija	f.
34741	sinhronizovati	v.tr. ipf./pf.
23471	sinica	f.
12226	sinji ekran smŕti	m.
511	sinji	adj.
16102	sinonim	m.
3140	sintaksa	f.
17035	sintetičny	adj.
19516	sinteza	f.
32500	sintezator	m.
30692	sinusit	m.sg.
35951	sionizm	m.sg.
34750	sirena	f.
34751	sirena	f.
32340	Sirija	f.sg.
32341	sirijsky	adj.
30693	Sirin	m.anim.
22799	sirota	f.
32542	sirotěti	v.intr. ipf.
22802	sirotišče	n.
1317	sistema	f.
1316	sistematičny	adj.
1360	situacija	f.
33375	sivěti	v.intr. ipf.
12231	sivy	adj.
36738	sjedati	v.tr. ipf.
8260	sjedeny	adj.
3705	sjediniti sę	v.refl. pf.
2085	sjediniti	v.tr. pf.
15556	sjediniti	v.tr. pf.
3704	sjedinjati sę	v.refl. ipf.
2942	sjedinjati	v.tr. ipf.
15557	sjedinjati	v.tr. ipf.
1895	Sjedinjene Štaty Ameriky	m.pl.
3513	sjedinjeńje	n.
12433	sjedinjenosť	f.
12432	sjedinjeny	adj.
18697	sjem	m.
19492	sjesti	v.tr. pf.
20139	sjęti	v.tr. pf.
1384	sjezd	m.
18701	sjezd	m.
12234	skakańje	n.sg.
12233	skakanna dȯska	f.
3707	skakati	v.intr. ipf.
729	skala	f.
35468	skamenělosť	f.
35467	skameněly	adj.
35405	skandal	m.
36468	skandaľny	adj.
22617	skandij	m.sg.
35721	Skandinavija	f.sg.
35722	skandinavsky	adj.
3882	skarb	m.
18818	skarbnica	f.
3883	skarbnik	m.anim.
12239	skaredno	adv.
4776	skaredny	adj.
15000	skarga	f.
15001	skaržiti sę	v.refl. ipf.
1318	skazati	v.tr. pf.
12242	skazka	f.
33525	skeč	m.
35092	skelet	m.
18819	skenovati	v.tr. ipf.
3080	skeptičny	adj.
30698	skica	f.
23562	skipetr	m.
20144	sklad	m.
4463	skladati sę iz	v.refl. ipf.
20695	skladati sę	v.refl. ipf.
3628	skladati	v.tr. ipf.
20145	skladišče	n.
4555	skladovati	v.tr. ipf.
18703	sklanjati sę k	v.refl. ipf.
18702	sklanjati	v.tr. ipf.
32025	sklejiti	v.tr. pf.
30700	skljanka	f.
12252	sklon	m.
20150	sklon	m.
18707	skloniti sę k	v.refl. pf.
18706	skloniti	v.tr. pf.
17038	sklonjeńje	n.
12253	sklonnosť	f.
12255	sklonny	adj.
3750	skočiti	v.intr. pf.
33272	skok	m.
34936	skȯlzavka	f.
16967	skombinovati	v.tr. pf.
1321	skompensovati	v.tr. pf.
6135	skomplikovati	v.tr. pf.
23364	skončiti sę	v.refl. pf.
12258	skončiti	v.tr. pf.
12259	skonfiskovati	v.tr. pf.
23365	skonstruovany język	m.
34588	skopiti	v.tr. ipf.
32250	Skopje	n.sg.
36782	skora pomoć	f.sg.
12261	skorěje abo/ili pozdněje	adv.
12260	skorěje	adv.
15004	skorěje	adv.
4065	skorlupa	f.
1324	skoro	adv.
3208	skoro	adv.
3747	skoro	adv.
20732	skorpion	m.anim.
30705	Skorpion	m.anim.
32342	skory	adj.
3726	skot	m.sg.
32038	skotnik	m.anim.
36314	skotobojnja	f.
20733	skovrånȯk	m.anim.
3139	skraćati	v.tr. ipf.
953	skråćeńje	n.
17039	skråćeny	adj.
647	skråtiti	v.tr. pf.
18820	skrb	f.
18821	skrběti	v.intr. ipf.
35637	skrinja s orųďjami	f.
18822	skrinja	f.
12269	skripač	m.anim.
18823	skripačka	f.
12850	skripěńje	n.sg.
18824	skripěti	v.intr. ipf.
12270	skripka	f.
18827	skripnųti	v.intr. pf.
36611	skript	m.
20157	skriviti	v.tr. pf.
23332	skrob	m.sg.
5871	skromno	adv.
5709	skromnosť	f.
5029	skromny	adj.
12275	skroz	adv.
35607	skrupulozny	adj.
18710	skryti sę	v.refl. pf.
20160	skryti	v.tr. pf.
36172	skryto	adv.
23369	skryty	adj.
36506	skryvališče	n.
18711	skryvati sę	v.refl. ipf.
20161	skryvati	v.tr. ipf.
34595	skubnųti	v.intr. pf.
29624	skubti	v.intr. ipf.
12276	skuhati	v.tr. pf.
36926	skulptor	m.anim.
1322	skulptura	f.
20734	skunks	m.anim.
32144	skųpec	m.anim.
3647	skupina	f.
36793	skųpiti sę	v.refl. ipf.
12278	skųposť	f.
12280	skųpy	adj.
36220	skųpy	adj.
35038	skuter	m.
20735	skvorec	m.anim.
36208	skvoter	m.anim.
23372	skvrčati	v.intr. ipf.
12281	slabec	m.anim.
34616	slaběti	v.intr. ipf.
12282	slabo	adv.
12283	slabosť	f.
23204	slaboumny	adj.
1341	slaby	adj.
35725	slåd	m.sg.
33279	slåditi	v.tr. ipf.
23734	slådko	adv.
12287	slådkosť	f.
447	slådky	adj.
15006	slådnica	f.
15536	slådnik	m.anim.
12286	slådoled	m.sg.
34935	slajd	m.
3886	slåma	f.
35727	slåmka	f.
33028	slåny	adj.
21575	slati	v.tr. ipf.
1339	slava	f.
21576	slava	f.
1329	slåvej	m.anim.
23979	Slavija	f.sg.
34557	slavist	m.anim.
34556	slavistika	f.
36580	slaviti sę	v.refl. ipf.
1315	slaviti	v.tr. ipf.
36583	slaviti	v.tr. ipf.
1340	slavjeńje	n.sg.
36584	slavjeńje	n.sg.
12295	slavno	adv.
1338	slavny	adj.
21577	slěd	m.
3380	slěditi	v.tr. ipf.
21579	slěditi	v.tr. ipf.
12301	slědny	adj.
35139	slědovateljno	adv.
1939	slědovati	v.tr. ipf.
866	slědstvo	n.
1378	slědujųći	adj.
1293	slegka	adv.
35904	sleng	m.
12305	slěpec	m.anim.
12306	slěpica	f.
34571	slěpnųti	v.intr. ipf.
2941	slěpy	adj.
32346	slězena	f.
35984	slězi iz mene!	intj.
4733	Slęzk	m.sg.
4734	slęzsky	adj.
18712	slgati	v.intr. pf.
18839	slimak	m.anim.
1292	slina	f.
18713	sliti sę	v.refl. pf.
36393	sliti	v.tr. pf.
36906	sliv rěky	m.
446	sliva	f.
18714	slivańje	n.
20698	slivańje	n.
18715	slivati sę	v.refl. ipf.
36394	slivati	v.tr. ipf.
30713	slivovica	f.
31883	sliź	m./f.
12246	slizgalka	f.
12249	slizgati	v.intr. ipf.
16358	slizgnųti	v.intr. pf.
12250	slizky	adj.
35986	sljuda	f.
17040	slog	m.
35950	slogan	m.
32848	sloj	m.
3460	slomiti	v.tr. pf.
3462	slomjeny	adj.
1684	slon	m.anim.
15539	Slovačka	f.
1390	slovačsky	adj.
4731	Slovak	m.anim.
1350	Slovakija	f.sg.
1349	slovenačsky	adj.
12320	Slovenec	m.anim.
3082	Slovenija	f.sg.
12319	Slovenka	f.
16228	slovensky	adj.
23118	slovesnosť	f.
18840	slovesny	adj.
1357	Slovjan, Slovjanin	m.anim.
34555	slovjanizacija	f.
10294	slovjanizovati	v.tr. ipf./pf.
12325	Slovjanka	f.
1355	slovjansky	adj.
4719	slovjanstvo	n.sg.
23980	Slovjanščina	f.sg.
15011	slovničstvo	n.
1328	slovnik	m.
32840	slovny	adj.
1361	slovo	n.
17041	slovosbor	m.
1370	složeno slovo	n.
12336	složenosť	f.
6145	složeny	adj.
20701	složiti sę	v.refl. pf.
3627	složiti	v.tr. pf.
1333	slučaj	m.
16360	slučajno	adv.
35381	slučajnosť	f.
3943	slučajny	adj.
20740	slučati sę	v.refl. ipf.
20162	slųčati	v.tr. ipf.
15013	slučiti sę	v.refl. pf.
20166	slųčiti	v.tr. pf.
12341	slučka	f.
1334	sluga	m.anim.
6042	sluh	m.
30722	slum	m.
16749	slušalky	f.pl.
12343	slušatelj	m.anim.
1247	slušati	v.tr. ipf.
1327	služba	f.
18843	služebnik	m.anim.
33532	služebno pųtovańje	n.
30724	služebny	adj.
2121	služiti	v.intr. ipf.
21580	slynųti	v.intr. ipf.
1335	slyšati	v.tr. ipf.
21581	slyti	v.intr. ipf.
20741	smalec	m.
35175	smaragd	m.
20742	smatrjati	v.intr. ipf.
34637	smažiti	v.tr. ipf.
12349	smęčkati	v.tr. pf.
425	směh	m.
2237	smějati sę	v.refl. ipf.
18720	smękčati	v.tr. ipf.
18721	smękčiti	v.tr. pf.
4058	smělosť	f.
4056	směly	adj.
20703	směna	f.
2062	smenšati	v.tr. ipf.
5634	smenšeńje	n.
1297	smenšiti	v.tr. pf.
5214	směr	m.
20704	směr	m.
20705	směrnica	f.
3740	směs	m.
5092	směsta	adv.
12372	směšany	adj.
14273	směšany	adj.
1817	směšati	v.tr. pf.
14274	směšati	v.tr. pf.
18845	směšivati	v.tr. ipf.
36508	směška	f.
15551	směšnosť	f.
5227	směšny	adj.
30730	smeť	f.
5972	smetana	f.
35450	smęteńje	n.sg.
18847	smeti	f.pl.
21582	směti	v.tr. ipf.
36736	smetjaŕ	m.anim.
36737	smetjaŕsky voz	m.
36729	smetnik	m.
32259	smlåtiti	v.tr. pf.
5620	smlěti	v.tr. pf.
30731	smogti	v.aux. pf.
30732	smokva	f.
2071	smola	f.
33283	smoliti	v.tr. ipf.
20744	smotriti	v.intr. ipf.
33175	smråd	m.
20177	smŕditi	v.intr. ipf.
26370	smrěk	m.
34763	smrf	m.anim.
33659	smrkač	m.anim.
33657	smrkati sę	v.refl. ipf.
33656	smrkati	v.intr. ipf.
32888	smrščeny	adj.
32890	smrščiti brvi	v.intr. pf.
32891	smrščiti sę	v.refl. pf.
32889	smrščiti	v.tr. pf.
2070	smŕť	f.
34939	smŕteljny	adj.
18851	smŕteľna hvoroba	f.
15552	smŕteopasny	adj.
23515	smŕtna kaznj	f.
12382	smŕtny	adj.
12384	smŕtonosny	adj.
16739	sms	m.
14067	smućati	v.tr. ipf.
20708	smųćati	v.tr. ipf.
14066	smųćeny	adj.
23832	smųćeny	adj.
20711	smųtiti	v.tr. pf.
20712	smųtiti	v.tr. pf.
23834	smųtno	adv.
617	smųtny	adj.
23833	smųtȯk	m.
36106	smyček	m.
20715	smykati	v.tr. ipf.
3324	smysl	m.
20716	smysľny	adj.
12388	smysly	m.pl.
12389	snabděti	v.tr. pf.
16357	snabděvati	v.tr. ipf.
12390	snaha	f.
18852	snědańje	n.
18853	snědati	v.intr. ipf.
2209	sněg	m.
30736	Sněgurȯčka	f.
5439	snesti	v.tr. pf.
15678	snetvarjati	v.tr. ipf.
15677	snetvoriti	v.tr. pf.
12395	sněženj	m.sg.
30737	sněžinka	f.
4160	sněžiti	v.intr. ipf.
23290	sněžnoběly	adj.
36125	sněžny člověk	m.
32473	sněžny leopard	m.anim.
18722	snimȯk	m.
5215	sniti	v.tr. ipf.
5636	sniziti	v.tr. pf.
33527	snizu	adv.
5635	snižati	v.tr. ipf.
5637	snižeńje	n.
2127	snižka	f.
5440	snositi	v.tr. ipf.
20718	snosny	adj.
15019	snova i snova	adv.
3104	snova	adv.
34003	snovati	v.tr. ipf.
18723	snuđeny	adj.
337	sobě, si	pron.refl.
30739	sȯbrańje	n.
3784	sȯbrati sę	v.refl. pf.
1494	sȯbrati	v.tr. pf.
24013	sobstvenik	m.anim.
21583	sobstvenosť	f.
21585	sobstveny	adj.
2350	sȯbyťje	n.
22822	socialist	m.anim.
2223	socialističny	adj.
22821	socializm	m.sg.
20178	sociaľny	adj.
23631	sociolog	m.anim.
23632	sociologičny	adj.
23630	sociologija	f.sg.
30740	sočevica	f.
36205	sočevica	f.
34940	sȯčuvstvovati	v.intr. ipf.
23276	soda	f.
35379	Sȯdružstvo narodov	n.sg.
35402	Sȯdružstvo Nezavisnyh Dŕžav	n.sg.
3942	sȯdŕžańje	n.
23751	sȯdŕžanosť	f.
72	sȯdŕžati	v.tr. pf.
2163	sȯdŕživati	v.tr. ipf.
12103	sȯdŕživati	v.tr. ipf.
12106	sȯdŕžnik	m.
18857	Sofija	f.sg.
35249	softver	m.sg.
4191	sȯglåsiti sę, sųglåsiti sę	v.refl. ipf.
20196	sȯglåśje, sųglåśje	n.sg.
16491	sȯglåska, sųglåska	f.
364	sȯglåsno, sųglåsno	prep.
6301	sȯglåsnosť, sųglåsnosť	f.
20198	sȯglåsny, sųglåsny	adj.
18858	sȯglašati sę, sųglašati sę	v.refl. ipf.
4193	sȯglåšeńje, sųglåšeńje	n.
34119	sȯhnųti	v.intr. ipf.
34121	sȯhnųti	v.intr. ipf.
35100	soja	f.
5446	sȯjdti sę	v.refl. pf.
5434	sȯjdti	v.intr. pf.
36535	sojka	f.
1385	sȯjųz	m.
1387	sȯjųznik	m.anim.
2075	sok	m.
35999	sokoiztiskivačka	f.
20746	sokol	m.anim.
35998	sokovnik	m.
12441	solarny	adj.
19510	solidarnosť	f.
19511	solidarny	adj.
20179	solidny	adj.
33026	soliti	v.tr. ipf.
1441	solj	f.
33030	soljeny	adj.
33031	soljnica	f.
560	sȯlnce	n.
18860	sȯlncevråt	m.
23633	sȯlnečna sistema	f.
3887	sȯlnečny	adj.
35199	solo	n.
548	sȯlza	f.
32324	sȯlzotvorny gaz	m.
20707	sȯmknųti	v.tr. pf.
2057	sȯn	m.
4784	sonata	f.
30747	sonda	f.
30748	sondovati	v.tr. ipf./pf.
36110	sonet	m.
23055	sȯobćati sę	v.refl. ipf.
21169	sȯobćati	v.tr. ipf.
21171	sȯobčeńje	n.
21172	sȯobčiti	v.tr. pf.
36052	sȯočati sę s, sųočati sę s	v.refl. ipf.
36053	sȯočiti sę s, sųočiti sę s	v.refl. ipf.
33699	sopelj	m.
33000	sopran	m.
3223	sort	m.
34894	sortovati	v.tr. ipf./pf.
4150	sȯsati	v.tr. ipf.
23591	sȯsavec	m.anim.
35995	sosiska	f.
12739	sȯska	f.
30750	sosna	f.
21794	sȯstav	m.
4202	sȯstaviti	v.tr. pf.
4201	sȯstavjati	v.tr. ipf.
18867	sȯstavjeńje	n.
35557	sȯstavna čęsť	f.
35556	sȯstavny	adj.
1874	sȯstojati sę iz	v.refl. ipf.
16405	sȯtina	num.fract.
5793	sȯtka, sȯtnja	f.
34857	sȯtkati	v.tr. pf.
2915	sȯtny	num.ord.
18868	sȯučęsťje	n.sg.
15715	sȯučęstnica	f.
12459	sȯučęstničstvo	n.sg.
4301	sȯučęstnik	m.anim.
454	sova	f.
4474	sȯvět	m.
5149	sȯvětničstvo	n.sg.
4341	sȯvětnik	m.anim.
4475	sȯvětovati	v.tr. ipf.
2080	Sovětsky Sȯjųz	m.sg.
30757	Sovětsky Svęź	m.sg.
1398	sovětsky	adj.
16729	sovka	f.
22506	sȯvladnųti	v.tr. pf.
22508	sȯvladnųti	v.tr. pf.
22505	sȯvladyvati	v.tr. ipf.
22507	sȯvladyvati	v.tr. ipf.
35382	sȯvpadeńje	n.
15026	sȯvrěmennik	m.anim.
5903	sȯvrěmennosť	f.
5902	sȯvrěmenny	adj.
22569	sȯvŕšati	v.tr. ipf.
36808	sȯvŕšati	v.intr. ipf.
12764	sȯvŕšenosť	f.
1742	sȯvŕšeny vid	m.
15052	sȯvŕšeny	adj.
22571	sȯvŕšiti	v.tr. pf.
36809	sȯvŕšiti	v.intr. pf.
20180	sȯvsěm, sȯvsim	adv.
22744	sȯzdati	v.tr. pf.
22743	sȯzdavati	v.tr. ipf.
5431	sȯzvati	v.tr. pf.
5429	sȯzyvati	v.tr. ipf.
32632	sȯžegti	v.tr. pf.
5607	sȯžrati	v.tr. pf.
21144	spad	m.
21146	spad	m.
5661	spadati	v.intr. ipf.
18724	spakovati sę	v.refl. pf.
5472	spakovati	v.tr. pf.
455	spaliti	v.tr. pf.
5197	spaljnja	f.
4194	spańje	n.sg.
21147	spasati	v.tr. ipf.
23373	spaseńje	n.
12481	spasitelj	m.anim.
5660	spasti	v.intr. pf.
21150	spasti	v.tr. pf.
2224	spati	v.intr. ipf.
5129	specialist	m.anim.
36306	specializacija	f.
564	speciaľno	adv.
31716	speciaľnosť	f.
1907	speciaľny	adj.
4404	specifičny	adj.
35668	specifika	f.
36911	spektakl	m.
35364	spektr	m.
2902	spekulacija	f.
35925	spekulativny	adj.
16361	spekulovati	v.intr. ipf.
33655	sperma	f.
33654	spermatozoid	m.
3254	spěšiti	v.intr. ipf.
12490	spěšny	adj.
30761	spěvańje	n.sg.
12491	spěvati	v.tr. pf.
21151	spirati sę	v.refl. ipf.
4541	spis	m.
5525	spisati	v.tr. pf.
2895	spisȯk	m.
5526	spisyvati	v.tr. ipf.
34330	splesti	v.tr. pf.
23026	sploditi	v.tr. pf.
30763	spod	m.
26226	spodnica	f.
36557	spodobati sę	v.refl. pf.
461	spokojno	adv.
463	spokojny	adj.
12502	spokojstvo	n.sg.
17043	spokrȯvnjeny	adj.
1479	spoľny	adj.
2254	spolȯčenstvo	n.
3509	spolȯčnosť	f.
3393	spolȯčny	adj.
18879	spolupracovati	v.intr. ipf.
18880	spoluråbotyvati	v.intr. ipf.
14157	spomaliti	v.tr. pf.
14158	spomaljati	v.tr. ipf.
10891	spomaljeńje	n.
12515	spominati	v.tr. ipf.
12514	spomněti	v.tr. pf.
21152	spona	f.
34175	sponka	f.
1477	sponsor	m.anim.
20183	spontanno	adv.
2319	spontanny	adj.
2385	spor	m.
36305	sporadično	adv.
35464	sporadičny	adj.
12520	sporåzuměvańje	n.sg.
20184	sporiti	v.intr. ipf.
12521	sporlivy	adj.
12522	sporno	adv.
2021	sporny	adj.
2022	sport	m.
18882	sportivny	adj.
2387	sportnik	m.anim.
3237	sposob	m.
422	sposobnosť	f.
2386	sposobny	adj.
34873	spotěti	v.intr. pf.
34872	spotiti sę	v.refl. pf.
22123	spotknųti sę	v.refl. pf.
35524	spotrěbitelj	m.anim.
5714	spotrěbiti	v.tr. pf.
5715	spotrěbjeńje	n.sg.
5713	spotrěbovati	v.tr. ipf.
22122	spotykati sę	v.refl. ipf.
34520	spozdniti sę	v.refl. pf.
34522	spozdnjati sę	v.refl. ipf.
34524	spozdnjeńje	n.
3443	spoznati	v.tr. pf.
3418	spoznavati	v.tr. ipf.
2072	sprašati	v.tr. ipf.
2879	spravědlivosť	f.
661	spravědlivy	adj.
30768	sprědu	adv.
18727	spręgati	v.tr. ipf.
29545	spręsti	v.tr. pf.
21154	sprěti sę	v.refl. pf.
21155	spręžeńje	n.
4132	sprijateliti sę	v.refl. pf.
2238	sprositi	v.tr. pf.
86	sprotiviti sę	v.refl. pf.
5708	sprotivjeńje	n.
5622	spuhnųti	v.intr. pf.
21160	spust	m.
21161	spust	m.
35821	spusť	f.
2692	spustiti sę	v.refl. pf.
21162	spustiti	v.tr. pf.
21165	spustiti	v.tr. pf.
1503	spušćati sę	v.refl. ipf.
21156	spušćati	v.tr. ipf.
21159	spušćati	v.tr. ipf.
12547	spųtnik	m.
8086	spytati	v.tr. pf.
23468	sråka	f.
23824	sråm	m.sg.
23825	sråmęžlivy	adj.
23816	sråmiti	v.tr. ipf.
23817	sråmiti	v.tr. ipf.
23821	sråmny	adj.
23822	sråmny	adj.
23818	sråmota	f.
23819	sråmotny	adj.
35958	sråst	m.
33075	srastańje	n.
33072	srastati sę	v.refl. ipf.
18730	sråsti sę	v.refl. pf.
479	srati	v.intr. ipf.
20168	sråvnimy	adj.
35220	sråvniteljny	adj.
1142	sråvniti	v.tr. pf.
679	sråvnjati	v.tr. ipf.
3510	sråvnjeńje	n.
26242	sråzumělosť	f.
2693	sråzuměti	v.tr. pf.
2410	Sŕb	m.anim.
2200	Sŕbija	f.sg.
20186	sŕbohrvatsky	adj.
20187	sŕbolužičan, sŕbolužičanin	m.anim.
20188	sŕbolužičsky	adj.
591	sŕbskohrvatsky	adj.
145	sŕbsky	adj.
32224	sŕdca	n.pl.
3081	sŕdce	n.
865	sŕdcevina	f.
22816	sŕdcevina	f.
36877	sŕdėčna komora	f.
12553	sŕdečno	adv.
18884	sŕdečnosȯsųdny	adj.
12554	sŕdečnosť	f.
18886	sŕdečny napad	m.
3167	sŕdečny	adj.
21586	sŕdečny	adj.
14993	sŕditi	v.tr. ipf.
23752	sŕdity	adj.
14994	sŕdnosť	f.
30771	srěbristy	adj.
3941	srěbrny	adj.
2260	srěbro	n.sg.
3117	srěd	prep.
3107	srěda	f.
2188	srědina	f.
12563	srědišče	n.
12566	srědnje	n.
1712	srědnjevěčje	n.sg.
18890	srědnjevěčny	adj.
12571	Srědnji Iztok	m.sg.
2065	srědnji rod	m.
12572	Srědnji Vȯzhod	m.sg.
1544	srědnji, srědny	adj.
5191	srědnji, srědny	adj.
21588	srědoběžny	adj.
21589	srědotěčny	adj.
2432	srědstvo	n.
21590	srědstvo	n.
2433	Srědzemno morje	n.sg.
20748	srna	f.
18643	srodnica	f.
12577	srodnik	m.anim.
15033	srodno slovo	n.
12578	srodny	adj.
21543	srodstvo	n.
1364	sŕp	m.
12165	sŕpenj	m.sg.
18891	sŕsť	f.
18731	srųbati	v.tr. pf.
18733	srųbyvati	v.tr. ipf.
14305	srųčny	adj.
20169	sruinovati	v.tr. pf.
21546	ssědati sę	v.refl. ipf.
21547	ssęsti sę	v.refl. pf.
35351	SSSR	m.sg.
30777	SŠA	m.pl.
36304	stabilizacija	f.
34701	stabilizovati	v.tr. ipf./pf.
35928	stabiľnosť	f.
577	stabiľny	adj.
7236	stačiti	v.intr. ipf.
35818	stadija	f.
21703	stado	n.
21705	staja	f.
22820	stalinizm	m.sg.
1395	stalj	f.sg.
35328	stalosť	f.
35329	stalosť	f.
18892	stalovy	adj.
20749	staly	adj.
21709	staly	adj.
1403	stancija	f.
1394	standard	m.
20752	standardizacija	f.
20753	standardizovati	v.tr. ipf.
20754	standardny	adj.
16479	stańje	n.
21700	stanȯk	m.
18893	stanovišče	n.
21696	stanoviti	v.tr. ipf.
6303	stanųti	v.intr. pf.
5617	stapjati	v.tr. ipf.
23936	staranno	adv.
730	staranny	adj.
21591	starati sę	v.refl. ipf.
15566	starci	m.pl.
15564	starec	m.anim.
3581	starějši, starši	adj.
12587	starěńje	n.sg.
12589	starěti	v.intr. ipf.
12592	starinna infrastruktura	f.
12591	starinny	adj.
17044	starocrkȯvnoslovjansky	adj.
16365	starodavny	adj.
36450	starogrėčsky	adj.
20755	starohebrejsky	adj.
23049	staromodny	adj.
17045	staroslovjansky	adj.
12595	starosť	f.
22791	start	m.
22792	startovati	v.tr. ipf./pf.
30783	Stary Svět	m.sg.
1399	stary	adj.
4563	stati sę	v.refl. pf.
2952	stati	v.aux. pf.
18896	statičny	adj.
1405	statija	f.
18897	statističny	adj.
18898	statistika	f.
12603	statnosť	f.
21698	statny	adj.
1402	statuja	f.
1023	status	m.
30787	statut	m.
1810	stavati	v.aux. ipf.
35624	staviti na něčto	v.tr. ipf.
35000	staviti pytańje	v.ipf.
21692	staviti	v.tr. ipf.
21694	stavjati	v.tr. ipf.
21710	stavka	f.
21711	stavka	f.
4710	steblo	n.
22086	stečeńje	n.
36632	stegozavr	m.
33526	steklěna čaša	f.
23719	steklěny	adj.
32349	stekľnik	m.
1408	steklo	n.
18737	stekti	v.intr. pf.
33437	steliti	v.tr. ipf.
1406	stěna	f.
18900	stěnj	m.
6304	stereotip	m.
35847	sterilizacija	f.
35846	sterilizovati	v.tr. ipf./pf.
35845	steriľny	adj.
18901	stežka	f.
21849	stigati	v.tr. ipf.
21852	stigati	v.tr. ipf.
21848	stignųti	v.tr. pf.
21850	stignųti	v.tr. pf.
18907	stih	m.
30790	stihija	f.
239	stil, stilj	m.
35418	stimul	m.
4985	stimulacija	f.
723	stimulovati	v.tr. ipf.
30791	stiskati	v.tr. ipf.
33545	stisknųti	v.tr. pf.
33440	stlati	v.tr. ipf.
2184	sto	num.card.
36058	stodola	f.
32077	stog	m.
12618	Stoj!	intj.
2083	stojati	v.intr. ipf.
21688	stojati	v.tr. ipf.
32732	stojišče	n.
32733	stojišče	n.
32734	stojišče	n.
21708	stojka na rųkah	f.
21706	stojka	f.
36401	stojka	f.
36814	Stokholm	m.
16449	stokråtno	adv.
1414	stol	m.
30795	stol	m.
1562	stolěťje	n.
30798	stolica	f.
18908	stoličny	adj.
35096	stoljaŕ	m.anim.
1663	stolka	f.
32767	stoľny tenis	m.
35627	stolova lȯžica	f.
30799	stȯlp	m.
4255	ston	m.
12626	stonańje	n.sg.
4254	stonati	v.intr. ipf.
32616	stonožka	f.
16111	stop	intj.
3996	stopa	f.
670	stopiti	v.tr. pf.
5618	stopjeńje	n.
12632	storočnik	m.anim.
16406	stotina	num.fract.
61	stoty	num.ord.
21894	stradati	v.intr. ipf.
767	strah	m.
4469	strahlivec	m.anim.
12645	strahlivo	adv.
4471	strahlivosť	f.
4470	strahlivy	adj.
1416	strahovańje	n.
1169	strahovati	v.tr. ipf.
1894	strajk	m.
24554	strajkovati	v.intr. ipf.
30804	stråna světa	f.
1412	stråna	f.
21865	stråna	f.
21866	stråna	f.
1098	strånica	f.
21871	stråniti sę od	v.refl. ipf.
6305	strånnik	m.anim.
21593	strånny	adj.
21895	strasť	f.
35454	strastny	adj.
12655	strašeny	adj.
36855	strašilo za ptice	n.
36854	strašilo	n.
1818	strašiti	v.tr. ipf.
12659	strašno	adv.
35989	strašno	adv.
250	strašny	adj.
1186	strategičny	adj.
16370	strategija	f.
20756	straus	m.anim.
18910	stråž	m.anim.
5792	straža	f.
938	strčiti	v.intr. ipf.
36398	strěćati sę	v.refl. ipf.
1954	strěćati	v.tr. ipf.
21901	strěgti sę	v.refl. ipf.
21899	strěgti	v.tr. ipf.
36013	strěha	f.
20757	strekoza	f.
1096	strěla	f.
4248	strěľba	f.
30809	Strělec	m.anim.
34942	strělec	m.anim.
18912	strělišče	n.
1442	strěliti	v.intr. ipf.
743	strěljati	v.intr. ipf.
35769	strěľka	f.
12672	strěľnik	m.anim.
34897	strělȯčnik	m.anim.
35891	stremę	n.
34961	stres	m.
13034	stręseńje mozga	n.
13056	stręseńje	n.
34962	stresovy	adj.
36399	strěsti sę	v.refl. pf.
1345	strěsti	v.tr. pf.
36014	strěšna krytina	f.
12664	strěteńje	n.
5021	strigti	v.tr. ipf.
15042	strimati	v.tr. pf.
15044	strimyvati	v.tr. ipf.
12675	strižik	m.anim.
20189	strogo	adv.
33305	strogosť	f.
12676	strogy	adj.
21910	stroj	m.
21907	strojiti	v.tr. ipf.
21909	strojiti	v.tr. ipf.
5203	strop	m.
34283	strugati	v.tr. ipf.
4989	struja	f.
16363	struktura	f.
36307	strukturny	adj.
1097	struna	f.
5680	strunny instrument	m.
5681	strunny kvartet	m.
34288	stružka	f.
1192	stryjec	m.anim.
15040	stryjenka	f.
1061	student	m.anim.
30811	studeny	adj.
4714	studija	f.
34943	studio	n.
20190	studiovati	v.tr. ipf.
33551	studiti	v.tr. ipf.
2047	studnja	f.
18916	stukati do/na/v dveri	v.ipf.
18913	stukati	v.intr. ipf.
18917	stuknųti	v.intr. pf.
3494	stul	m.
21926	stųpati	v.intr. ipf.
3890	stųpenišče	n.
3252	stųpenj	m.
21927	stųpenj	m.
21925	stųpiti	v.intr. pf.
36151	stųpnica	f.
17046	stųpnjevańje	n.sg.
12688	stvår	m.
6306	stvarjati	v.tr. ipf.
3293	stvårno	adv.
20191	stvårnosť	f.
3382	stvor	m.
6307	stvoriti	v.tr. pf.
3381	stvorjeńje	n.
18738	stvŕditi	v.tr. pf.
12612	styčenj	m.sg.
1404	styd	m.sg.
22121	styk	m.
36707	sųbesědnik	m.anim.
36617	subjekt	m.
30812	subjektivizm	m.sg.
32933	subjektivnosť	f.
32932	subjektivny	adj.
30813	sublimacija	f.
1062	sųbota	f.
5336	substancija	f.
34844	subtiľnosť	f.
34843	subtiľny	adj.
33717	subtitry	m.pl.
17048	sųći	adj.
36616	sųćnosť	f.
20192	sųćstveno	adv.
20193	sųćstveny	adj.
35116	sųčasnik	m.anim.
20758	sųčasnosť	f.
17047	sųčasny	adj.
1487	sųd	m.
3636	sųďba	f.
2097	sųditi	v.tr. ipf.
22003	sųditi	v.tr. ipf.
21595	sųďja	m.anim.
6183	sųdny denj	m.
6195	sųdny pozȯv	m.
30814	sųdny	adj.
12700	sųđeńje	n.
1475	sufiks	m.
3524	suhaŕ	m.
14307	sųharmonizovati	v.intr. pf.
3571	suhoplod	m.
1775	suhy	adj.
22324	sujevěŕje	n.
33733	suka	f.
36237	suknja	f.
35922	sultan	m.anim.
35923	sultanat	m.
1427	suma	f.
35378	sųměstimosť	f.
35377	sųměstimy	adj.
3323	sųmněńje	n.
15047	sųmněńje	n.
3322	sųmněvati sę	v.refl. ipf.
18921	sųmniteljny	adj.
12709	sųmnlivo	adv.
12710	sųmnlivy	adj.
5042	sųmråk	m.
1304	sųmŕkati sę	v.refl. ipf.
565	sųmŕknųti sę	v.refl. pf.
21174	sunųti	v.tr. pf.
20199	sųp	m.anim.
32086	supa	f.
15048	super-	prefix
35211	superdŕžava	f.
35239	superheroj	m.anim.
1445	supermarket	m.
35050	sųperničstvo	n.sg.
1431	sųpernik	m.anim.
36869	supersila	f.
35459	sųpostaviti	v.tr. pf.
35458	sųpostavjati	v.tr. ipf.
4922	sųprotiv	prep.
5134	sųprovađati	v.tr. ipf.
5135	sųprovoditi	v.tr. pf.
5136	sųprovođeńje	n.sg.
12724	sųprųg	m.anim.
12725	sųprųga	f.
21176	sųprųgi	m.pl.
18922	sųprųžstvo	n.
21167	sųpųtnik	m.anim.
35140	sųråbota	f.
5443	sųråbotati	v.intr. ipf.
5137	sųråbotničstvo	n.sg.
5335	sųråbotnik	m.anim.
20759	sųråzměrnosť	f.
20760	sųråzměrny	adj.
12727	surfist	m.anim.
12726	surfovańje	n.sg.
15050	surfovati	v.intr. ipf.
22446	Surinam	m.sg.
22447	surinamsky	adj.
16807	surovy	adj.
1446	surpriz	m.
35457	surrealizm	m.sg.
1873	sųsěd	m.anim.
12734	sųsědno do	prep.
5731	sųsědny	adj.
5732	sųsědsky	adj.
5625	sųsědstvo	n.
34944	sųsrědotočati sę	v.refl. ipf.
16774	sųsrědotočati	v.tr. ipf.
36706	sųsrědotočeny	adj.
34945	sųsrědotočiti sę	v.refl. pf.
16775	sųsrědotočiti	v.tr. pf.
21796	sųstav	m.
21898	sųstradańje	n.
5168	sųstrěća	f.
20761	sųstrěćati	v.tr. ipf.
20762	sųstrěsti	v.tr. pf.
36636	suša	f.
18925	sušiti	v.tr. ipf.
23008	sųt	v.aux. ipf.
18926	sutener	m.anim.
35497	suteren	m.
566	sųtruditi	v.intr. ipf.
4536	sųtrudničsky	adj.
12513	sųtrudničstvo	n.sg.
36822	sųtstvo	n.
36821	sųtstvovati	v.intr. ipf.
21178	suvati	v.tr. ipf.
148	suvenir	m.
5765	suverenitet	m.sg.
1433	suverenny	adj.
22432	sųvisly	adj.
4462	sųvlađeńje	n.
32991	suzafon	m.
22884	sųznačny	adj.
22942	sųzvězďje	n.
18927	sųžalosť	f.
23165	svabiti	v.tr. pf.
35954	svahili	m.indecl.
12754	svariti	v.tr. pf.
22563	svariti	v.tr. pf.
22564	svarjati	v.tr. ipf.
18928	svat	m.anim.
3734	svaťba	f.
12750	svaťbena obrųčka	f.
12752	svaťbena zabava	f.
12753	svaťbeni sųprųgi	m.pl.
12749	svaťbeny konvoj	m.
15051	svaťbeny kostjum	m.
12751	svaťbeny oděv	m.
4287	svaťbeny	adj.
15581	svaťbeny	adj.
15723	svatiti sę	v.refl. ipf.
16791	Svazilend	m.sg.
1744	svěća	f.
2089	svęćennik	m.anim.
18929	svęćeny	adj.
35579	svědčiti	v.intr. ipf.
22237	svědȯčstvo	n.
21168	svědȯk	m.anim.
12757	svědomje	n.sg.
6219	svědomo	
6217	svědomosť	f.
6218	svědomy	adj.
24005	svekr	m.anim.
24006	svekrȯv	f.
23721	svěriti sę	v.refl. pf.
23720	svěrjati sę	v.refl. ipf.
586	svěsť	f.
35606	svěstny	adj.
3137	svět	m.
15054	Svět	m.
35709	svętilišče	n.
5237	světilka	f.
4892	světiľnik	m.
1440	svętiti	v.tr. ipf.
23586	světľny god	m.
23587	světľny rok	m.
12770	světlo luny	n.sg.
12771	světlo měsęca	n.sg.
3284	světlo	n.
35044	světlofor	m.
35653	světluška	f.
30825	světly	adj.
22012	světoběžnik	m.anim.
30822	svętȯčny	adj.
20200	světoględ	m.
20201	svętogrđeńje	n.
12788	svętȯk	m.
23659	Světova trgova organizacija	f.sg.
36527	světova vojna	f.
23658	Světova zdråvstvena organizacija	f.sg.
36526	světovy	adj.
36030	svetr	m.
12772	světsky	adj.
36122	Svęty Graal	m.
3891	svęty hrånitelj	m.anim.
2090	svęty	adj.
15058	svęź	m./f.
18741	svęź	m./f.
3512	svęzany	adj.
18749	svęzati šnurom	v.tr. pf.
3538	svęzati	v.tr. pf.
36359	svęznik	m.
2320	svęzȯk	m.
18752	svęzȯk	m.
22205	svęzȯk	m.
22206	svęzȯk	m.
18758	svęzyvati šnurom	v.ipf.
3514	svęzyvati	v.tr. ipf.
5225	svěži	adj.
15056	svila	f.
22634	svinec	m.sg.
1438	svinja	f.
1439	svinovod	m.anim.
18934	svinsky	adj.
32216	svirěposť	f.
32217	svirěposť	f.
32212	svirěpy	adj.
32219	svirěpy	adj.
5689	svist	m.
5686	svistati	v.intr. ipf.
5687	svistnųti	v.intr. pf.
5688	svistȯk	m.
12787	svitańje	n.
33575	sviti	v.tr. pf.
33576	sviti	v.tr. pf.
33577	sviti	v.tr. pf.
33578	sviti	v.tr. pf.
33579	sviti	v.tr. pf.
30829	svitȯk	m.
1258	svoboda	f.
23556	svobodna volja	f.
13741	svobodno vrěmę	n.sg.
20202	svobodno	adv.
6041	svobodnomyslitelj	m.anim.
12792	svobodnomysljny	adj.
1977	svobodny	adj.
22265	svod	m.
22267	svod	m.
22268	svodnik	m.anim.
1099	svoj	pron.poss.
22017	svojak	m.anim.
22020	svojevlastny	adj.
22304	svojevoljny	adj.
34877	svojevrěmenno	adv.
18387	svojevrěmennosť	f.
34876	svojevrěmenny	adj.
15059	svojnosť	f.
18936	svojsko	adv.
18935	svojsky	adj.
18937	svojstvo	n.
22019	svojstvo	n.
22557	svorenj	m.
18759	svråtno	adv.
18760	svråtny	adj.
26271	svråtny	adj.
35023	svŕbęći	adj.
35022	svŕběti	v.tr. ipf.
35089	svŕček	m.anim.
30833	svŕdlo	n.
22590	svŕgati	v.tr. ipf.
22592	svŕgnųti	v.tr. pf.
12762	svŕh-	prefix
12763	svŕhny	adj.
30834	svŕhu	adv.
783	syn	m.anim.
21996	sypati	v.tr. ipf.
1822	syr	m.
36273	syrovatka	f.
17572	syrovina	f.
14999	syrovy	adj.
33424	sytiti	v.tr. ipf.
35605	syty	adj.
1474	šablon	m.
34385	szadu	adv.
35102	šafa	f.
33732	šafran	m.sg.
18763	šah i mat	m.
18764	šahovnica	f.
36776	šahta	f.
1054	šahy	m.pl.
23838	šal, šalik	m.
30839	šal	m.
18765	šalěti	v.intr. ipf.
22814	šalěti	v.intr. ipf.
23160	šampansko	n.
16910	šampion	m.anim.
16911	šampionat	m.
23159	šampon	m.
632	šans	m.
4354	šantaž	m.sg.
12799	šantažovati	v.tr. ipf.
1053	šapka	f.
22833	šarlatan	m.anim.
22834	šarlatanstvo	n.sg.
16843	šarm	m.sg.
30841	šator	m.
34895	ščęditi	v.tr. ipf.
18778	ščedro	adv.
18781	ščedrosť	f.
18784	ščedry	adj.
36035	ščekotati	v.tr. ipf.
32117	ščenę	n.
34186	ščeniti sę	v.refl. ipf.
1463	ščęsťje	n.
3653	ščęstlivo	adv.
1545	ščęstlivy	adj.
12812	ščęstno	adv.
12814	Ščęstnogo dnja rođeńja!	intj.
12815	Ščęstnogo Novogo Goda!	intj.
12810	Ščęstnogo Velikdnja!	intj.
15060	ščęstnosť	f.
12803	ščęstny	adj.
12811	Ščęstnyh svętkov!	intj.
30844	ščetina	f.
4780	ščetka	f.
34644	ščigȯl	m.anim.
18787	ščipati	v.tr. ipf.
18788	ščipnųti	v.tr. pf.
12816	ščit	m.
12817	ščititi	v.tr. ipf.
23661	ščitna žlěza	f.
16378	ščrba	f.
18789	ščur	m.anim.
12821	šef policije	m.anim.
1468	šef	m.anim.
33271	šepot	m.
33270	šeptati	v.tr. pf.
18807	šeršenj	m.anim.
1739	šesť	num.card.
3111	šesťdesęt	num.card.
23688	šesťdesęty	num.ord.
16456	šesteraky	num.diff.
15592	šesterčęta	n.pl.
34563	šesterka	num.subst.
16445	šesterny	num.mult.
16433	šestero	num.coll.
12832	šestikųtnik	m.
16402	šestina	num.fract.
18808	šestinožka	f.
12831	šestivųgȯľnik	m.
16460	šestka	num.subst.
1583	šestnadsęť	num.card.
23684	šestnadsęty	num.ord.
1582	šesťsȯt, šesťsto	num.card.
1581	šesty	num.ord.
23260	šev	m.
12835	šifrovańje	n.sg.
12840	šifrovany	adj.
12838	šifrovati	v.tr. ipf.
12839	šifrovati	v.tr. ipf.
12841	šija	f.
34978	šikarny	adj.
34428	šimpanz	m.anim.
30851	šina	f.
36076	šipka	f.
4280	širina	f.
35766	širiti	v.tr. ipf.
4279	široko	adv.
4281	širokosť	f.
196	široky	adj.
20175	širši	adj.
36470	šiška	f.
23254	šiti	v.tr. ipf.
6149	šizofreničny	adj.
6148	šizofrenija	f.
35101	škaf	m.
34840	škala, skala	f.
23264	škarpetka	f.
3546	škoda	f.
4472	škoditi	v.intr. ipf.
6225	škodlivy	adj.
36097	škodnik	m.anim.
1584	škola	f.
4844	školiti	v.tr. ipf.
35583	škoľna tabla	f.
15593	škoľnik	m.anim.
3884	škoľny	adj.
35055	Škot	m.anim.
35056	Škotka	f.
35053	Škotska	f.sg.
35054	škotsky	adj.
5111	šlěm	m.
3885	šlepati	v.tr. ipf.
4713	šlepnųti	v.tr. pf.
34951	šlifovati	v.tr. ipf.
18830	šljahetnosť	f.
18831	šljahetny	adj.
18833	šljahta	f.
18837	šljahtić	m.anim.
18836	šljahtička	f.
36377	šljuz	m.
4303	šlupa	f.
34786	šminka	f.
18854	šnur	m.
12859	šnurka	f.
287	šofer	m.anim.
32668	šofersko dozvoljeńje	n.
1585	šok	m.
5727	šokovany	adj.
5726	šokovati	v.tr. ipf.
5728	šokujųći	adj.
263	šolk	m.sg.
36913	šou	m.indecl.
33663	šovinist	m.anim.
33664	šovinističny	adj.
33662	šovinizm	m.sg.
35886	špala	f.
408	Španija	f.sg.
1980	špansky	adj.
34845	špinat	m.
3269	špion	m.anim.
30857	špionaž	m.sg.
32867	šruba	f.
30858	štanga	f.
1586	štat	m.
728	štopati	v.tr. ipf.
1476	štučny	adj.
18920	šuba	f.
2079	šum	m.
36820	šuměti	v.intr. ipf.
2346	šumny	adj.
3672	šunka	f.
1391	Švecija	f.sg.
1420	švedsky	adj.
2220	Švejcarija	f.sg.
32452	švejcarsky	adj.
1501	tabak	m.sg.
12884	tabela	f.
33409	tabletka	f.
13716	tablo s izslědkami	n.indecl.
36801	tablo	n.indecl.
30863	tabor	m.
20203	tabu	m.indecl.
23646	tadžičsky, tadžiksky	adj.
5996	Tadžikistan	m.sg.
34023	tajati	v.tr. ipf.
30864	tajemny	adj.
4460	tajeńje	n.sg.
23302	tajenstveny	adj.
23303	tajenstvo	n.
32345	tajfun	m.
12886	tajiti	v.tr. ipf.
22767	Tajland	m.sg.
12893	tajna služba	f.
6339	tajna vojna	f.
3892	tajna	f.
18940	tajnica	f.
12889	tajnik	m.anim.
4288	tajnišče	n.
21180	tajnopis	m.
21181	tajnopisec	m.anim.
4289	tajnosť	f.
12891	tajny batalion	m.
2957	tajny	adj.
4908	tajsky	adj.
6110	Tajvan	m.sg.
3320	tak, tako	adv.
12905	tako ... onako	conj.
12909	tako kako	conj.
18941	tako kazati	phrase
625	tako mnogo	adv.
18942	tako rěčeny	adj.
12904	tako skoro kako	conj.
12915	tako zvany	adj.
12906	tako že	conj.
6311	takovy	adj.
1716	takože	adv.
23313	taksi	m.indecl.
23314	taksometr	m.
33583	taksonomičny	adj.
33582	taksonomija	f.
20205	taktika	f.
12914	takto	adv.
3099	taky	adj.
20206	talent	m.
32160	talija	f.
4667	taliŕka	f.
20207	talisman	m.
1883	tam	adv.
32993	tamburin	m.
19560	tamo	adv.
2263	tamtoj	pron.dem.
20208	tancevati	v.intr. ipf.
36553	tancor	m.anim.
36554	tancorka	f.
23531	tanec	m.
845	tank	m.
22807	Tanzanija	f.sg.
20763	tarantula	f.
1944	taśma	f.
18956	tata	m.anim.
36568	tatarsky	adj.
36567	Tatarstan	m.sg.
35689	tatuaž	m.
35688	tatuovati	v.tr. ipf./pf.
1816	tę	pron.pers.
5702	te	pron.dem.
3123	teatr	m.
32987	teatraľny	adj.
4805	tebe	pron.pers.
6069	tečeńje	n.
12935	tečeńje	n.
12936	tečno	adv.
12937	tečnosť	f.
12938	tečny	adj.
3793	tęgati	v.tr. ipf.
22027	tęglivy	adj.
49	tęgnųti	v.tr. ipf.
3124	tehničny	adj.
16348	tehnik	m.anim.
16349	tehnika	f.
16350	tehnologičny	adj.
1204	tehnologija	f.
32503	tekila	f.
30874	Teksas	m.sg.
2963	tekst	m.
1484	tekstilj	m.
5417	tekti	v.intr. ipf.
6078	tekųći	adj.
22062	tekųći	adj.
5242	tekųtina	f.
15074	telę	n.
4640	telefon	m.
16351	telefonovati	v.intr. ipf.
5795	telegrama	f.
23637	telekomunikacija	f.
21596	teleskop	m.
5646	tělesny	adj.
3100	telętko	n.
16353	televiděńje	n.sg.
4399	televizija	f.
4400	televizijny program	m.
36770	televizijny	adj.
36571	televizor	m.
34672	teliti sę	v.refl. ipf.
36088	tělo samoleta	n.
1485	tělo	n.
459	tělohrånitelj	m.anim.
3330	tema	f.
17049	tematičny	adj.
35137	tematika	f.
34670	temněti	v.intr. ipf.
30879	temnica	f.
18958	temnolavandovy	adj.
5116	temnosť	f.
15075	temnota	f.
30880	temnota	f.
1749	temny	adj.
1486	temperatura	f.
36824	tempo	n.
16119	tendencija	f.
1483	tenis	m.sg.
2110	teniska	f.
18959	těnj	m./f.
1577	tenky	adj.
32997	tenor	m.anim.
18960	teolog	m.anim.
18961	teologija	f.sg.
16822	teoretično	adv.
16821	teoretičny	adj.
4739	teorija	f.
32350	teplica	f.
12960	teplo	n.sg.
20764	teploměr	m.
15076	teplota	f.
35034	teplovaty	adj.
344	teply	adj.
32497	terapevt	m.anim.
18962	terapija materskoj klětki	f.
4740	terapija	f.
36837	tercija	f.
35451	terier	m.anim.
16121	teritoriaľno	adv.
529	teritoriaľny	adj.
3101	teritorija	f.
36149	termin dostojenstva	m.
2091	termin	m.
36593	termin	m.
20765	termit	m.anim.
23638	termodinamika	f.
5107	teror	m.
34948	terorist	m.anim.
262	terorističny	adj.
16354	terorizm	m.sg.
36161	tesati	v.tr. ipf.
22093	těsnina	f.
3894	těsno	adv.
416	těsny	adj.
2388	test	m.
24003	tesť	m.anim.
4759	testament	m.
18963	těsto	n.
1443	testovati	v.tr. ipf.
24004	tešća	f.
23785	těšiti sę iz	v.refl. ipf.
15078	tetenka	f.
18965	tętiva	f.
2376	tetka	f.
15734	tęznitelj	m.anim.
6190	tęžba	f.
12971	tęžina	f.
20209	tęžko	adv.
22032	tęžko	adv.
22034	tęžko	adv.
22038	tęžko	adv.
18966	tęžkosť	f.
22039	tęžkosť	f.
5	tęžky	adj.
1970	tęžky	adj.
3654	tęžky	adj.
3895	tęžky	adj.
22036	tęžky	adj.
15737	tęžnica	f.
15736	tęžnik	m.anim.
21597	thoŕ	m.anim.
4809	ti	pron.pers.
1969	tigr	m.anim.
1411	tiho	adv.
23499	Tihy okean	m.sg.
1844	tihy	adj.
32992	timpany	m.pl.
18967	tinejdžer	m.anim.
30888	tinktura	f.
3224	tip	m.
12989	tipično	adv.
12990	tipičnosť	f.
12991	tipičny	adj.
12992	tipka	f.
15080	tipkati	v.tr. ipf.
18970	tipkovnica	f.
1567	tipografija	f.
35973	tipologičny	adj.
35972	tipologija	f.
4665	tir	m.
32477	tiran	m.anim.
30889	tiranija	f.
36631	tiranozavr	m.
23615	tiskaŕ	m.anim.
23614	tiskaŕstvo	n.sg.
22091	tiskati	v.tr. ipf.
22090	tisknųti	v.tr. pf.
3360	tišina	f.
1492	titan	m.sg.
35453	tjulenj	m.anim.
19008	tjuŕma	f.
30920	tjutjun	m.sg.
18971	tkanina	f.
35429	tkanj	f.
34856	tkati	v.tr. ipf.
22108	tknųti sę	v.refl. pf.
22099	tknųti	v.tr. pf.
22101	tknųti	v.tr. pf.
30892	tlěńje	n.sg.
30893	tlěti	v.intr. ipf.
16888	tlo	n.
34949	tlo	n.
1126	ťma	f.
30894	toalet	m.
34754	toaletny papir	m.sg.
1507	tobě	pron.pers.
6312	točiti sę	v.refl. ipf.
36477	točiti sę	v.refl. ipf.
22055	točiti	v.tr. ipf.
22057	točiti	v.tr. ipf.
22058	točiti	v.tr. ipf.
22059	točiti	v.tr. ipf.
23447	točka s komojų	f.
23446	točka s zapętojų	f.
20211	točka zrěńja	f.
5271	točka	f.
13009	točno	adv.
18975	točnosť	f.
3593	točny	adj.
35442	tofi	n.indecl.
2120	tȯgda, tȯgdy	adv.
2893	toj	pron.dem.
20212	tojže	pron.dem.
3533	tok	m.
22060	tok	m.
22061	tok	m.
22063	tokaŕ	m.anim.
35317	tokråtno	adv.
18977	tolerancija	f.
34952	tolerantny	adj.
12901	toliko kako	conj.
2144	toliko	adv.
15082	toliko	adv.
19597	tolikråt	adv.
19589	toliky	adj.
33459	tȯlkti	v.intr. ipf.
18979	tȯlmač	m.anim.
873	tȯlmačeńje	n.
3896	tȯlmačiti	v.tr. ipf.
22	tȯlpa	f.
32229	tȯlsto piśmo	n.
13017	tȯlstosť	f.
2313	tȯlsty	adj.
30897	tomat	m.
4036	tomu že	conj.
4031	tomu	adv.
13020	tomu	adv.
3383	ton	m.
368	tona	f.
30898	tȯnky	adj.
5337	tonųti	v.intr. ipf.
21598	tonųti	v.intr. ipf.
30899	topinambur	m.
18982	topišče	n.
1719	topiti	v.tr. ipf.
36490	topografičny	adj.
36489	topografija	f.sg.
34561	topolja	f.
36771	toponim	m.
34035	tȯptati	v.intr. ipf.
15560	torba do spańja	f.
32241	torba	f.
35480	torf	m.
35108	tornado	n.
32489	tors	m.
33720	tort	m.
36541	tost	m.
36542	toster	m.
32742	totalitarizm	m.sg.
32743	totalitarny	adj.
32744	totaľny	adj.
15594	totožny	adj.
2192	tovar	m.
4211	tovariš	m.anim.
34764	tovariška	f.
15073	tovarna	f.
13032	tȯž	adv.
2314	tradicija	f.
1458	tradicijny	adj.
16728	tradicionalist	m.anim.
2424	tragedija	f.
4401	tragičny	adj.
18984	trajati	v.intr. ipf.
32481	trajny	adj.
35712	Trakija	f.sg.
35713	trakijsky	adj.
35141	traktat	m.
35465	traktor	m.
3103	tramvaj	m.
36650	trankvilizator	m.
36329	transkribovati	v.tr. ipf./pf.
16823	transkripcija	f.
3947	transliteracija	f.
3946	transliterovati	v.tr. ipf.
6314	transparent	m.
35430	transplantacija	f.
18986	transport	m.
36408	transportovati	v.tr. ipf./pf.
36022	tranzitna viza	f.
35590	trasa	f.
3602	trata	f.
3276	tratiti	v.tr. ipf.
18987	tratiti	v.tr. ipf.
34953	tratiti	v.tr. ipf.
12	trava	f.
13039	travenj	m.sg.
21182	travimy	adj.
21183	travjeńje	n.sg.
31869	travma	f.
31870	travmatizovati	v.tr. ipf./pf.
18988	travnik	m.
18989	travojed	m.anim.
22949	travojedny	adj.
13040	tŕbuh	m.
13041	tŕbušny	adj.
13048	trěba by bylo	adv.
13049	trěba priznati	phrase
13042	trěba	adv.
18990	trěbovańje	n.
1942	trěbovati	v.aux. ipf.
32222	trefy	f.pl.
36659	trejler	m.
14736	trend	m.
13052	trener	m.anim.
3898	trening	m.
3899	treningovy	adj.
3897	trenovati	v.tr. ipf.
16909	trepetati	v.intr. ipf.
13058	tręseńje	n.
3523	trěsk	m.
13064	tręsti sę	v.refl. ipf.
3902	tręsti	v.tr. ipf.
3826	treti	v.tr. ipf.
13087	tretina	num.fract.
20213	treťje	adv.
439	treťji	num.ord.
2961	trevoga	f.
3900	trevožiti sę	v.refl. ipf.
34829	trevožiti	v.tr. ipf.
32486	trevožny	adj.
34673	trězvěti	v.intr. ipf.
18991	trězvy	adj.
2348	trg	m.
22130	trgati	v.tr. ipf.
22134	trgati	v.tr. ipf.
22136	trgnųti	v.tr. pf.
22137	trgnųti	v.tr. pf.
36875	trgova komora	f.
20216	trgovańje	n.
3326	trgovati	v.intr. ipf.
1413	trgovec	m.anim.
20221	trgovišče	n.
2300	trgovja	f.
4260	trgovy	adj.
1466	tri	num.card.
36594	tribuna	f.
36633	triceratops	m.
1774	tridesęť, tridesęti	num.card.
23686	tridesęty	num.ord.
16756	trik	m.
2014	trikråtno	adv.
4411	trikųtnik	m.
4412	trikųtny	adj.
36292	triler	m.
20222	trilětny	adj.
18992	trimati sę nečego	v.refl. ipf.
15083	trimati	v.tr. ipf.
986	trinadsęť	num.card.
23681	trinadsęty	num.ord.
274	trista, tristo	num.card.
36032	triumfaľny lųk	m.
20223	triumfaľny	adj.
35284	triviaľny	adj.
15605	trivųgȯľnik	m.
31871	trivyměrny	adj.
34643	trizųbec	m.
23724	tŕn	m.
23402	trofej	m.
33555	troha	f.
35111	trohy, trohų	adv.
34541	Troja	f.sg.
16453	trojaky	num.diff.
34542	trojansky konj	m.anim.
18994	trojce toliko	adv.
15601	trojčęta	n.pl.
16430	troje	num.coll.
16457	trojka	num.subst.
16439	trojny	num.mult.
18996	trojskok	m.
32440	trolejbus	m.
32442	trolj	m.anim.
23435	trombon	m.
988	tron	m.
974	tropičny ciklon	m.
34963	tropičny	adj.
5997	trotuar	m.
18999	tŕpělivosť	f.
23990	tŕpělivy	adj.
36708	tŕpěńje	n.sg.
742	tŕpěti	v.intr. ipf.
3448	tŕpěti	v.tr. ipf.
18997	tŕpimosť	f.
18998	tŕpimy	adj.
5269	trųba	f.
23424	trųba	f.
976	trųbiti	v.tr. ipf.
13095	trųbka poživjeńja	f.
32851	trųbkozųb	m.anim.
5270	trųboprovod	m.
215	trud	m.
1525	truditi	v.intr. ipf.
13099	trudnosť	f.
3093	trudny	adj.
19001	trudoljubivo	adv.
19002	trudoljubivosť	f.
19004	trudoljubivy	adj.
19000	trudoljubje	n.sg.
5338	trup	m.
23171	trutenj	m.anim.
30913	trvaly	adj.
35939	trvańje	n.
1055	trvati	v.intr. ipf.
33342	tu i tam	adv.
1758	tu	adv.
23436	tuba	f.
410	tuberkuloza	f.
4717	tųdy	adv.
36929	tųga	f.
22041	tųgy	adj.
20769	tuk	m.
1601	tulipan	m.
30916	tulov	m.
20770	tunec	m.anim.
34927	tunel	m.
5995	Tunizija	f.sg.
34680	tųpěti	v.intr. ipf.
4775	tųpy	adj.
3095	Turcija	f.sg.
1691	turečsky	adj.
1598	turist	m.anim.
34965	turističny	adj.
34964	turizm	m.sg.
23641	Turkmenistan	m.sg.
23642	turkmensky	adj.
30890	turkysovy	adj.
13110	turnir	m.
3694	tuš	m.
15606	tut	adv.
15607	tutčas	adv.
15609	tutčasno	adv.
15610	tutčasnosť	adv.
15611	tutčasny	adj.
15612	tutčasny	adj.
15613	tutdenj	adv.
15614	tutdenny	adj.
1534	tutoj	pron.dem.
36086	tutovo drěvo	n.
22749	tuzemec	m.anim.
22043	tųžiti sę	v.refl. ipf.
22042	tųžiti	v.intr. ipf.
36093	tvarog	m.
35976	tvid	m.
2231	tvoj	pron.poss.
20224	tvor	m.
19010	tvoŕba	f.
19011	tvorčestvo	n.sg.
1548	tvorčji	adj.
35771	tvorec	m.anim.
4841	tvoritelj	m.anim.
5976	tvoriteljnik, tvoriteljny padež	m.
3030	tvoriti	v.tr. ipf.
22144	tvorivo	n.
17051	tvorjeńje	n.sg.
34703	tvŕděti	v.intr. ipf.
6111	tvŕditi	v.tr. ipf.
13118	tvŕdnųti	v.intr. ipf.
30923	tvŕdo	adv.
19015	tvŕdoglåvy	adj.
13119	tvŕdosť	f.
1532	tvŕdy	adj.
16802	tvŕđa	f.
1087	tvŕđeńje	n.
675	ty	pron.pers.
19016	tyčkoskok	m.
13003	tydenj	m.
16128	tydnjeva gazeta	f.
12980	tydnjevo	adv.
13006	tydnjevy žurnal	m.
12981	tydnjevy	adj.
22111	tykalo	n.
22107	tykati sę	v.refl. ipf.
22098	tykati	v.tr. ipf.
22100	tykati	v.tr. ipf.
36405	tykati	v.tr. ipf.
30927	tykva	f.
19018	tyl	m.
16835	tym ne menje	adv.
31792	tymijan	m.
2389	tysęć	num.card.
4694	tysęćlěťje	n.
20226	tysęćlětny	adj.
12999	tysęćročje	n.
4395	tysęčny	num.ord.
4923	u	prep.
13142	ubědimy	adj.
36667	uběditi sę	v.refl. pf.
4450	uběditi	v.tr. pf.
13145	ubědlivy	adj.
20227	uběđajųći	adj.
36669	uběđati sę	v.refl. ipf.
4449	uběđati	v.tr. ipf.
13140	uběđeńje	n.
13141	uběđenosť	f.
23753	uběđeny	adj.
5448	uběgati	v.intr. ipf.
5449	uběgti	v.intr. pf.
23986	uběžišče	n.
277	ubijca	m.anim.
279	ubijstvo	n.
2129	ubiti	v.tr. pf.
2130	ubivati	v.tr. ipf.
13159	ubo	conj.
19019	ubogy	adj.
30934	ubrus	m.
32790	ubrus	m.
32792	ubrus	m.
16873	učarovany	adj.
16871	učarovati	v.tr. pf.
16872	učarovyvati	v.tr. ipf.
19022	učebnik	m.
13160	učebny	adj.
2128	učenica	f.
13167	učeničsky	adj.
13161	učenik	m.anim.
17057	učeńje	n.sg.
22159	učeńje	n.sg.
13168	učeny	m.anim.
3767	učęsťje	n.sg.
13171	učęstnica	f.
774	učęstničstvo	n.sg.
5609	učęstnik	m.anim.
2948	učęstvovati	v.intr. ipf.
3327	učet	m.
16377	učilišče	n.
4448	učinitelj	m.anim.
2966	učiniti	v.tr. pf.
19025	učinȯk	m.
916	učitelj	m.anim.
36678	učiteljka	f.
1531	učiti sę	v.refl. ipf.
1526	učiti	v.tr. ipf.
19026	učtivy	adj.
15097	udača	f.
15100	udačlivy	adj.
34973	udačnik	m.anim.
15099	udačno	adv.
34972	udačny	adj.
17095	udaliti	v.tr. pf.
17096	udaliti	v.tr. pf.
17052	udaljati	v.tr. ipf.
17094	udaljati	v.tr. ipf.
19028	udaljeńje	n.sg.
3394	udaljenosť	f.
3754	udar	m.
3710	udariti	v.tr. pf.
3709	udarjati	v.tr. ipf.
13955	udarjeńje	n.
34971	udati sę	v.refl. pf.
21184	udav	m.anim.
34970	udavati sę	v.refl. ipf.
31819	udaviti	v.tr. pf.
20228	uděl	m.
19031	uděliti	v.tr. pf.
19030	uděljati	v.tr. ipf.
20230	udiviteljno	adv.
35204	udiviteljny	adj.
3909	udiviti	v.tr. pf.
13199	udivjajųći	adj.
3349	udivjati sę	v.refl. ipf.
3910	udivjati	v.tr. ipf.
4219	udivjeńje	n.sg.
5966	udivjeny	adj.
15102	udobno	adv.
19034	udobnosť	f.
19035	udobny	adj.
35884	udobstvo	n.
4209	udoskonaliti	v.tr. pf.
19039	udŕžati sę od	v.refl. pf.
19037	udŕžati	v.tr. pf.
19043	udŕživati sę od	v.refl. ipf.
19041	udŕživati	v.tr. ipf.
15222	udušeny	adj.
5562	udušiti	v.tr. pf.
13203	udvojeny	adj.
13202	udvojiti	v.tr. pf.
23937	ugadati	v.tr. pf.
23939	ugadyvańje	n.sg.
23938	ugadyvati	v.tr. ipf.
2291	ugasnųti	v.intr. pf.
1542	ugašati	v.intr. ipf.
5820	uględati	v.tr. ipf.
5821	uględěti	v.tr. pf.
19045	ugodny	adj.
13210	ugovor	m.
5595	ugryzti	v.tr. pf.
33407	uhađati za	v.intr. ipf.
36054	uho, uško [@]	n.
830	uho	n.
5482	uhoditi	v.intr. ipf.
32521	uhovŕtka	f.
13898	uj, ujec	m.anim.
5483	ujdti	v.intr. pf.
13223	ujediniti	v.tr. pf.
13224	ujedinjati	v.tr. ipf.
5495	ujehati	v.intr. pf.
15166	ujenka	f.
19048	ujęti	v.tr. pf.
5496	uježđati	v.intr. ipf.
5930	Ujgur	m.anim.
5931	ujgursky	adj.
19050	ujmati	v.tr. ipf.
13227	ukaz	m.
20238	ukazańje	n.
20239	ukazatelj	m.
17053	ukazateljny zaimennik	m.
20241	ukazati	v.tr. pf.
20242	ukazyvati	v.tr. ipf.
32011	uklåti	v.tr. pf.
17054	ukončeny	adj.
19052	ukrađeńje	n.
3049	Ukrajina	f.sg.
596	Ukrajinec	m.anim.
831	ukrajinsky	adj.
23168	ukrasiti	v.tr. pf.
941	ukrasti	v.tr. pf.
23167	ukrašati	v.tr. ipf.
23169	ukrašeńje	n.
32100	ukrěpiti	v.tr. pf.
32101	ukrěpjati	v.tr. ipf.
31993	ukrotiti	v.tr. pf.
4176	ukryti	v.tr. pf.
36507	ukryťje	n.
13236	ukryty	adj.
4177	ukryvańje	n.sg.
13238	ukryvatelj	m.anim.
4175	ukryvati	v.tr. ipf.
17719	ukųsiti	v.tr. pf.
23841	ulagađati	v.tr. ipf.
23839	ulagoditi	v.tr. pf.
35072	ulegšati	v.tr. ipf.
35071	ulegšiti	v.tr. pf.
4849	ulěpšati	v.tr. ipf.
6055	ulěpšeńje	n.
4850	ulěpšiti	v.tr. pf.
5450	ulětati	v.intr. ipf.
5451	uletěti	v.intr. pf.
2098	ulica	f.
24015	ulična lampa	f.
20243	ulja	f.
5743	ulomȯk	m.
5744	ulomȯk	m.
36550	ulov	m.
23647	ultrafioletovo světlo	n.sg.
35757	ultrafioletovy	adj.
20771	ulučati	v.tr. ipf.
20772	ulučiti	v.tr. pf.
35312	ulučšati	v.tr. ipf.
35313	ulučšeńje	n.
35311	ulučšiti	v.tr. pf.
13252	um	m.
21599	umarjajųći	adj.
20774	umarjati	v.tr. ipf.
13531	uměńje	n.
4101	umenšati	v.tr. ipf.
4099	umenšiti	v.tr. pf.
23047	uměriti	v.tr. pf.
34979	uměrjati	v.tr. ipf.
20775	uměrjeny	adj.
3963	uměstiti	v.tr. pf.
30950	uměstno	adv.
32794	uměstny	adj.
3965	uměšćati	v.tr. ipf.
19055	uměšćeńje	n.
389	uměti	v.aux. ipf.
23046	umětna inteligencija	f.
19056	umětnica	f.
19057	umětničsko	adv.
13267	umětničsky	adj.
13268	umětnik	m.anim.
2290	umětnosť	f.
4842	umětny	adj.
872	umirati	v.intr. ipf.
13271	umnik	m.anim.
13272	umno	adv.
13273	umnosť	f.
13274	umny	adj.
22167	umny	adj.
22168	umny	adj.
15111	umoliti	v.tr. pf.
15112	umoljati	v.tr. ipf.
2980	umoriti sę	v.refl. pf.
20778	umoriti	v.tr. pf.
21601	umorjeńje	n.sg.
13277	umorjenosť	f.
594	umorjeny	adj.
4543	umožniti	v.tr. pf.
4542	umožnjati	v.tr. ipf.
35384	umrěly	adj.
977	umreti	v.intr. pf.
20779	umŕtviti	v.tr. pf.
20781	umŕtvjati	v.tr. ipf.
20783	umysl	m.
20245	umysľno	adv.
20246	umysľny	adj.
5290	umyti	v.tr. pf.
5285	umyvaľnik	m.
16380	umyvati	v.tr. ipf.
13286	unarodniti	v.tr. pf.
13289	unarodnjati	v.tr. ipf.
13284	unarodnjeńje	n.
13292	unemožniti	v.tr. pf.
13293	unemožnjati	v.tr. ipf.
2100	uneviniti	v.tr. pf.
1131	unevinjati	v.tr. ipf.
35913	uniforma	f.
13296	unija	f.
35322	unikaľnosť	f.
35026	unikaľny	adj.
1708	Unikod	m.sg.
33260	uniščeńje	n.
978	uniščiti	v.tr. pf.
3072	universaľny	adj.
1547	universitet	m.
4508	uniziti	v.tr. pf.
4223	unižajųći	adj.
4507	unižati	v.tr. ipf.
4509	unižeńje	n.
19059	unižnosť	f.
36186	uosobjeńje	n.
4662	upad	m.
21185	upadȯk	m.
19060	upakovati	v.tr. pf.
19061	upakovyvati	v.tr. ipf.
1060	upasti	v.intr. pf.
5537	upekti	v.tr. pf.
13312	uperiti	v.tr. pf.
5579	upiti sę	v.refl. pf.
438	upity	adj.
5578	upivati sę	v.refl. ipf.
19064	upodabnjati sę	v.refl. ipf.
19062	upodabnjati	v.tr. ipf.
19068	upodobniti sę	v.refl. pf.
19066	upodobniti	v.tr. pf.
5897	upokarnjati	v.tr. ipf.
5896	upokorniti	v.tr. pf.
3778	upȯlnomoćeny	adj.
1419	upȯlnomoćevati	v.tr. ipf.
1779	upȯlnomoćiti	v.tr. pf.
19070	uporny	adj.
35654	upotrěba	f.
4539	upotrěbimy	adj.
4374	upotrěbitelj	m.anim.
3092	upotrěbiti	v.tr. pf.
1388	upotrěbjati	v.tr. ipf.
1505	upotrěbjeńje	n.
13330	uprava	f.
5077	upravitelj	m.anim.
21194	upraviti	v.tr. pf.
13332	upravjati	v.tr. ipf.
21198	upravjati	v.tr. ipf.
20247	upravjeńje	n.
32775	upręž	f.
30955	upyŕ	m.anim.
35097	uragan	m.
35064	Ural	m.sg.
35063	uraľsky	adj.
1569	uran	m.sg.
23648	Uran	m.sg.
3749	uråvenj	m./f.
20252	uråvniti	v.tr. pf.
20248	uråvnjati	v.tr. ipf.
1028	uraza	f.
1030	uraziti	v.tr. pf.
33390	urazlivy	adj.
622	uražati	v.tr. ipf.
33392	uraženy	adj.
3762	uręd	m.
22369	uręditi	v.tr. pf.
21203	urędnik	m.anim.
22366	uręđati	v.tr. ipf.
21603	urěkati	v.tr. ipf.
21605	urěkti	v.tr. pf.
6330	urězati	v.tr. pf.
6332	urězyvati	v.tr. ipf.
32789	urna	f.
34981	urod	m.
1896	uroditi sę	v.refl. pf.
1556	uroditi	v.tr. pf.
21608	uroditi	v.tr. pf.
1660	urodlivy	adj.
21607	urođaj	m.
15116	urođeńje	n.
21609	urok	m.
22448	Urugvaj	m.sg.
22449	urugvajsky	adj.
23943	urvati	v.tr. pf.
23940	uryvati	v.tr. ipf.
19076	usęsti	v.intr. pf.
1100	usiliti	v.tr. pf.
1432	usiljati	v.tr. ipf.
1614	usiľje	n.
6317	usiljeńje	n.
4246	usilovati	v.intr. ipf.
35318	uskoriti	v.tr. pf.
35319	uskorjati	v.tr. ipf.
36313	uskorjeńje	n.
3094	uslovje	n.
1618	uslovny	adj.
15117	usložniti	v.tr. pf.
15118	usložnjati	v.tr. ipf.
5128	usluga	f.
1552	uslyšati	v.tr. pf.
1624	usměh	m.
1634	usměhati sę	v.refl. ipf.
1615	usměhnųti sę	v.refl. pf.
20789	usmŕćati	v.tr. ipf.
20790	usmŕtiti	v.tr. pf.
21615	usnųti	v.intr. pf.
5453	usȯhnųti	v.intr. pf.
1616	uspěh	m.
13362	uspěhlivy	adj.
15631	uspěšnica	f.
15632	uspěšnik	m.anim.
3912	uspěšno	adv.
3911	uspěšny	adj.
4042	uspěti	v.intr. pf.
5565	uspěvati	v.intr. ipf.
1590	uspokajati	v.tr. ipf.
5877	uspokojeńje	n.sg.
13373	uspokojeny	adj.
1589	uspokojiti	v.tr. pf.
3830	usposabjati	v.tr. ipf.
3831	usposobiti	v.tr. pf.
20256	uspravědliviti	v.tr. pf.
36409	uspravědlivjati	v.tr. ipf.
20257	uspravědlivjeńje	n.
21618	usŕdny	adj.
1530	usta	n.pl.
21808	ustaliti	v.tr. pf.
21801	ustaljati	v.tr. ipf.
23293	ustaljeny	adj.
13386	ustalosť	f.
13387	ustaly	adj.
5132	ustanavjati	v.tr. ipf.
34983	ustanovitelj	m.anim.
5133	ustanoviti	v.tr. pf.
13384	ustanovjeny	adj.
16470	ustati	v.intr. pf.
21799	ustati	v.intr. pf.
21809	ustav	m.
21810	ustav	m.
13388	ustavati	v.intr. ipf.
21798	ustavati	v.intr. ipf.
3952	ustaviti	v.tr. pf.
3951	ustavjati	v.tr. ipf.
3953	ustavjeńje	n.
35232	ustavny	adj.
33597	usťje	n.
5169	ustny	adj.
21923	ustrajati	v.tr. ipf.
31998	ustrica	f.
3913	ustroj	m.
19090	ustrojitelj	m.anim.
21924	ustrojiti	v.tr. pf.
19095	ustrojstvo	n.sg.
732	ustųpati	v.tr. ipf.
21973	ustųpati	v.intr. ipf.
1648	ustųpiti	v.tr. pf.
21977	ustųpiti	v.intr. pf.
15120	ustųpjeńje	n.
1650	ustųpka	f.
6047	ustųpny	adj.
5452	usyhati	v.intr. ipf.
4877	uši	f.pl.
5421	utěkati	v.intr. ipf.
6067	utěkati	v.intr. ipf.
5420	utekti	v.intr. pf.
6068	utekti	v.intr. pf.
19097	utekųćiniti	v.tr. pf.
19096	utekųćinjati	v.tr. ipf.
36193	utělesniti	v.tr. pf.
36192	utělesnjati	v.tr. ipf.
13409	utes	m.
23664	utěšati	v.tr. ipf.
23668	utěšeńje	n.
23665	utěšiti	v.tr. pf.
13410	utęžati	v.tr. ipf.
13411	utęžiti	v.tr. pf.
36461	utilitarny	adj.
13412	utirak	m.
13414	utirati	v.tr. ipf.
34180	utišati	v.tr. ipf.
34183	utišiti	v.tr. pf.
35669	utočniti	v.tr. pf.
35670	utočnjati	v.tr. ipf.
35671	utočnjeńje	n.
3834	utomljeny	adj.
21620	utonųti	v.intr. pf.
32389	utopičny	adj.
32388	utopija	f.
32390	utopist	m.anim.
35924	utopizm	m.sg.
12635	utraćati čas	v.ipf.
21621	utraćati sę	v.refl. ipf.
12636	utraćati udobnomožnosť	v.ipf.
12637	utraćati vrěmę	v.ipf.
12638	utraćati vse	v.ipf.
2939	utraćati	v.tr. ipf.
5068	utraćeny	adj.
3730	utrata	f.
21623	utratiti sę	v.refl. pf.
12663	utratiti	v.tr. pf.
34029	utreti	v.tr. pf.
8365	utrišnji, utrišny	adj.
392	utro	n.
23793	utrom	adv.
3818	utŕpěti	v.tr. pf.
13417	utrudniti	v.tr. pf.
13418	utrudnjati	v.tr. ipf.
1651	utvŕditi	v.tr. pf.
36404	utvŕditi	v.tr. pf.
393	utvŕđati	v.tr. ipf.
36403	utvŕđati	v.tr. ipf.
13421	utvŕđeńje	n.
13422	uvadnjati	v.tr. ipf.
5188	uvaga	f.
19100	uvaljnjati sę od	v.refl. ipf.
19099	uvaljnjati sę	v.refl. ipf.
3555	uvaljnjati	v.tr. ipf.
3562	uvaljnjati	v.tr. ipf.
13423	uvažańje	n.sg.
4483	uvažati	v.tr. ipf.
22178	uvažati	v.tr. ipf.
19102	uvažiti	v.tr. pf.
19104	uvažny	adj.
1620	uvědamjati	v.tr. ipf.
23949	uvędati	v.intr. ipf.
23951	uvędnųti	v.intr. pf.
1619	uvědomiti	v.tr. pf.
5853	uvědomjeńje	n.
1611	uvědomjeny	adj.
30958	uvěkověčiti	v.tr. pf.
22289	uveličati	v.tr. ipf.
35060	uveličeńje	n.
22290	uveličiti	v.tr. pf.
36668	uvěriti sę	v.refl. pf.
199	uvěriti	v.tr. pf.
200	uvěriti	v.tr. pf.
36670	uvěrjati sę	v.refl. ipf.
1649	uvěrjati	v.tr. ipf.
3200	uvěrjeno	adv.
13434	uvěrjenosť	f.
1599	uvěrjeny	adj.
23438	uvertura	f.
36555	uvęznųti	v.intr. pf.
5555	uviděti	v.tr. pf.
13444	uvodniti	v.tr. pf.
19108	uvoljniti sę od	v.refl. pf.
19107	uvoljniti sę	v.refl. pf.
3558	uvoljniti	v.tr. pf.
3560	uvoljniti	v.tr. pf.
30961	uvularny	adj.
23643	uzbečsky, uzbeksky	adj.
5932	Uzbek	m.anim.
5933	Uzbekistan	m.sg.
32759	uzda	f.
13455	uzdråvitelj	m.anim.
15123	uzdråviti	v.tr. pf.
15124	uzdravjati	v.tr. ipf.
35065	uznańje	n.sg.
3805	uznati	v.tr. pf.
3804	uznavati	v.tr. ipf.
4044	uzrěti	v.tr. pf.
36459	uzurpator	m.anim.
36458	uzurpovati	v.tr. ipf./pf.
16917	už ne	adv.
114	už, uže	adv.
13461	užas	m.
5105	užasati	v.tr. ipf.
5865	užasneny	adj.
20258	užasno	adv.
5106	užasnųti	v.tr. pf.
13465	užasny	adj.
22932	užiti	v.tr. pf.
30964	uživańje	n.
22931	uživati	v.tr. ipf.
1606	v času	prep.
19109	v domu	adv.
4945	v imenu	prep.
3615	v koncu	adv.
13474	v mig oka	adv.
13472	v mig	adv.
13476	v obličju prava	adv.
13478	v obličju trudnostij	adv.
19113	v odnošeńju k	prep.
13480	v odråzlikě od	prep.
35517	v porędku	adv.
5954	v prošlȯm godu	adv.
17089	v protivnosti k	prep.
5156	v ramkah	prep.
3245	v råzličji od	prep.
36234	v směru strělky časovnika	adv.
30967	v sumě	adv.
4948	v svęzi s	prep.
19117	v tečeńju	prep.
13485	v tom samom vrěmenu	adv.
5829	v vrěmenu	prep.
13486	v vśakom slučaju	adv.
15193	v zaměn za	prep.
13990	v zaměn	adv.
1607	v, vo	prep.
3982	v, vo	prep.
23166	vabik	m.
23164	vabiti	v.tr. ipf.
30970	vaflja	f.
5645	vaga	f.
22173	vaga	f.
21638	vagati sę	v.refl. ipf.
35086	vagina	f.
1608	vagon	m.
30973	vagonetka	f.
30974	Vagy	f.pl.
36927	vajatelj	m.anim.
36914	vajati	v.tr. ipf.
30978	vakacije	f.pl.
30979	vakancija	f.
30980	vakantny	adj.
30981	vakcina	f.
30983	vakuum	m.
22184	val	m.
30984	val	m.
13489	vala	f.
20283	valec	m.
30987	valenky	m.pl.
30988	valentnosť	f.
30989	valeriana	f.
30990	valerianka	f.
31853	valet	m.anim.
34976	valisty papugajek	m.anim.
3472	valiti	v.tr. ipf.
30996	valjati sę	v.refl. ipf.
22181	valjati	v.tr. ipf.
30997	valjcevati	v.intr. ipf./pf.
30998	valkirija	f.
30999	vals	m.
31000	valsovati	v.intr. ipf.
23462	valtorna	f.
31005	valtornist	m.anim.
1698	valuta	f.
1553	vam	pron.pers.
31007	vampir	m.anim.
22619	vanadij	m.sg.
31009	vandal	m.anim.
31010	vandalizm	m.sg.
31012	vanilin	m.sg.
31011	vanilja	f.
3450	vanna	f.
31014	vanta	f.
31015	vapno	n.
17058	variacija	f.
17059	variant	m.
31021	variete	n.indecl.
31022	variovati	v.intr. ipf./pf.
5210	variti	v.tr. ipf.
31024	Varjag	m.anim.
21211	varjeńje	n.sg.
21212	varlivy	adj.
23518	Varšava	f.sg.
19513	Varšavsky Dogovor	m.sg.
31025	varvar	m.anim.
31026	varvarizm	m.sg.
31027	varvarsky	adj.
2413	vas	pron.pers.
31028	vasal	m.anim.
32779	vasaľna dŕžava	f.
1631	vaš	pron.poss.
31032	vat	m.
31033	vata	f.
31035	vaterlinija	f.
31038	Vatikan	m.sg.
31039	vavilonsky	adj.
31040	vaza	f.
19160	vazektomija	f.
31041	vazelin	m.
13495	važeńje	n.
6005	važiti	v.tr. ipf.
20808	važka	f.
13502	važno	adv.
19161	važnosť	f.
1632	važny	adj.
34878	včasno	adv.
34879	včasnosť	f.
34880	včasny	adj.
1067	včera	adv.
35266	včerašnji, včerašny	adj.
19119	včleniti	v.tr. pf.
19118	včlenjati	v.tr. ipf.
13505	vdęčno	adv.
4902	vdęčnosť	f.
4900	vdęčny	adj.
31046	vděti niť v iglų	v.tr. pf.
32941	vděvati niť v iglų	v.tr. ipf.
23788	vdȯhnųti	v.tr. pf.
3075	vdol	adv.
464	vdova	f.
4284	vdovec	m.anim.
23787	vdyhati	v.tr. ipf.
3916	vebmaster	m.anim.
3074	veb-sajt, vebsajt	m.
35238	veb-strånica	f.
1635	věć	f.
34902	vęće ili menje	adv.
4546	vęće	adv.
22402	věće	n.
2264	vęćinstvo	n.
412	vęćši	adj.
1653	večer	m.
2416	večerja	f.
13519	večerjati	v.intr. ipf.
23796	večerny	adj.
1637	večerȯm	adv.
13524	věčno	adv.
15634	věčnosť	f.
1657	věčny	adj.
15126	věda	f.
15127	věděńje	n.sg.
15128	věděti	v.tr. ipf.
31102	vędly	adj.
4829	věďma	f.
13647	věďmak	m.anim.
13644	vędneńje	n.sg.
13642	vędneny	adj.
15130	vědnosť	f.
13643	vędnųti	v.intr. ipf.
36420	vědomo	adv.
22209	vědomosť	f.
20284	vědomy	adj.
1306	vědro	n.
31063	vegetacija	f.
31064	vegetarianec	m.anim.
32754	vegetarianka	f.
31065	vegetariansky	adj.
31066	vegetativny	adj.
36311	vějalo	n.
36312	vějaŕ	m.
31068	vějati	v.intr. ipf.
4110	věk	m.
4616	věk	m.
31073	věko	n.
31074	věko	n.
31075	veksel	m.
31076	vektor	m.
31092	velarny	adj.
3047	velblųd	m.anim.
19165	velebny	adj.
22283	velebny	adj.
31078	velen	m.
36868	velesila	f.
31079	velěti	v.tr. ipf.
13545	veličejši	adj.
5286	veličina	f.
31083	veličje	n.sg.
22284	veličstveny	adj.
22285	veličstvo	n.
31084	Velika Britanija	f.sg.
16374	Velika Noć	f.
13539	velikan	m.anim.
16373	Velikdenj	m.
19169	velikodušno	adv.
19170	velikodušnosť	f.
19172	velikodušny	adj.
22286	velikolěpny	adj.
35595	velikosť	f.
31091	velikosvetsky	adj.
689	veliky gråd	m.
130	veliky palec	m.
10461	Veliky Pętȯk	m.
19168	veliky šlem	m.
6	veliky	adj.
21639	velje	adv.
21641	velje	adv.
13547	veľmi rano	adv.
13549	Veľmi Važna Osoba	f.
13546	veľmi	adv.
20809	veľmoža	m.anim.
4476	velosiped	m.
31101	velosipedist	m.anim.
20811	veľryb	m.anim.
35057	Vels	m.sg.
35058	velssky	adj.
31097	velur	m.
13558	vely	adj.
4239	velžnosť	f.
4238	velžny	adj.
31103	vena	f.
31105	vendeta	f.
704	věnec	m.
19177	Venera	f.
31107	veneričny	adj.
16792	Venezuela	f.sg.
22451	venezueľsky	adj.
31116	venozny	adj.
31118	ventilacija	f.
5830	ventilator	m.
31117	ventilj	m.
31120	ventilovati	v.tr. ipf./pf.
31123	vepŕ	m.anim.
2429	věra	f.
31125	veranda	f.
31126	verbaľny	adj.
31127	verbena	f.
31128	verbovati	v.tr. ipf./pf.
31129	verdikt	m.
35333	věręći	m.anim.
1897	verf	m.
32836	verifikacija	f.
20285	verifikovajemy	adj.
20286	verifikovati	v.tr. ipf.
19179	veriga	f.
22554	verigy	f.pl.
22322	věritelj	m.anim.
3106	věriti	v.tr. ipf.
31133	vermišelj	f.
31134	vermut	m.
35334	věrnik	m.anim.
31135	vernisaž	m.
3308	věrny	adj.
3917	věrny	adj.
19181	věrodostojnosť	f.
19184	věrodostojny	adj.
19187	věrogodnosť	f.
19190	věrogodny	adj.
1102	věrojętno	adv.
13576	věrojętnosť	f.
3405	věrojętny	adj.
36225	věrolomnik	m.anim.
20812	věrolomnosť	f.
20814	věrolomny	adj.
13564	věrozakon	m.
13578	věrozakonny	adj.
959	versija, verzija	f.
31143	versta	f.
31144	verš	m.
20287	vertikaľny	adj.
1676	veś	pron.indef.
31150	veś	f.
22342	vesde	adv.
3583	veseliti sę	v.refl. ipf.
13581	veseliti	v.tr. ipf.
980	veseljańje	n.sg.
6039	veseľje	n.sg.
19196	Veselogo Rođeńja!	intj.
13588	veselosť	f.
16383	vesely	adj.
19200	Veselyh Svętkov!	intj.
4046	věsiti	v.tr. ipf.
31151	veslo	n.
328	vesna	f.
3073	věsť	f.
13592	věsti	f.pl.
13593	vesti	v.tr. ipf.
31155	vestibulj	m.
19201	věstnik	m.anim.
22211	věstnik	m.
22212	věstnik	m.anim.
19193	věšalka	f.
4045	věšati	v.tr. ipf.
3270	veteran	m.anim.
13962	veteranka	f.
31163	veterinaŕ	m.anim.
32431	veterinaŕny	adj.
31165	vethy	adj.
2153	větka	f.
1677	veto	n.
1678	větr	m.
13599	větrak	m.
33033	větrec	m.
33032	větrik	m.
19202	větrilo	n.
19203	větriti	v.tr. ipf.
15137	větrnica	f.
19205	větrno plåtno	n.
19206	větrnoplåtnica	f.
13596	větrny mlyn	m.
13595	větrny	adj.
5000	větva	f.
1681	veverica	f.
31170	vęz	m.
19210	vęzalo	n.
19215	vęzati šnurom	v.ipf.
2509	vęzati	v.tr. ipf.
1702	vęzenj	m.anim.
2161	vęzeńje	n.
31172	vezir	m.anim.
19216	vęzka	f.
22189	vęznųti	v.intr. ipf.
36270	vezti sę	v.refl. pf.
1683	vezti	v.tr. ipf.
2032	věža	f.
19208	věža	f.
34984	vględati sę	v.refl. ipf.
13607	vględěti sę	v.refl. pf.
31176	vgorų	adv.
5294	vhod	m.
65	vhoditi	v.intr. ipf.
19123	vhodna karta	f.
19120	vhođeńje	n.sg.
31177	viadukt	m.
31178	vibracija	f.
32988	vibrafon	m.
31179	vibrator	m.
31181	vibrovati	v.intr. ipf./pf.
1689	vid	m.
22419	vid	m.
23074	vid	m.
31183	vid	m.
31186	viděńje	n.
13616	viděny	adj.
2151	video	n.
36778	videokarta	f.
2185	viděti	v.tr. ipf.
20288	vidimo	adv.
19219	vidimy	adj.
22423	vidnokrųg	m.
13619	vidny	adj.
19220	Viena	f.sg.
4750	Vietnam	m.sg.
4751	vietnamsky	adj.
31190	vigvam	m.
31191	vihȯr	m.
33586	vihȯr	m.
33587	vihȯr	m.
31193	vika	f.
31194	vikarij	m.anim.
3096	vikend	m.
16139	vikendovy	adj.
35076	viki	f.indecl.
31195	viking	m.anim.
35277	Vikipedija	f.
31196	vikont	m.anim.
31197	vikontesa	f.
31189	vikunja	f.
31199	vila	f.
4666	vilica	f.
31201	vily	f.pl.
2604	vina	f.
31204	vinegret	m.
1159	viniteljnik, viniteljny padež	m.
2605	viniti za	v.tr. ipf.
31205	vinjetka	f.
36157	vinna loza	f.
15140	vinnik	m.anim.
15141	vinnosť	f.
1009	vinny	adj.
1400	vino	n.
13626	vinobrańje	n.
13627	vinogråd, vinogrådnik	m.
13628	vinogrådny	adj.
13629	vinogrådstvo	n.sg.
23733	vinovaty	adj.
721	vinovnik	m.anim.
31209	vint	m.
4148	vintovka	f.
23442	viola	f.
16140	violina	f.
16141	violinist	m.anim.
31212	violončelist	m.anim.
23440	violončelo	n.
31214	viraž	m.
31215	Virdžinija	f.sg.
31867	virolog	m.anim.
31868	virologija	f.sg.
5173	virtuaľny	adj.
31216	virtuoz	m.anim.
23654	virus	m.
32780	visęći zamȯk	m.
22431	visělica	f.
1163	visěti	v.intr. ipf.
23161	viski	m./f.
31221	viskoza	f.
23663	Visla	f.sg.
21225	visokosny god	m.
31224	vist	m.
19221	višnja	f.
31225	višnjevy	adj.
15146	Vitaj!	intj.
15147	Vitajte!	intj.
31227	vitalist	m.anim.
31228	vitalističny	adj.
31229	vitalizm	m.sg.
16303	vitamin	m.
15148	vitańje	n.
2981	vitati	v.tr. ipf.
19222	vitęź	m.anim.
695	vitęzstvo	n.
33580	viti gnězdo	phrase
5627	viti sę	v.refl. ipf.
31233	viti	v.tr. ipf.
33571	viti	v.tr. ipf.
33572	viti	v.tr. ipf.
33573	viti	v.tr. ipf.
33574	viti	v.tr. ipf.
36104	Vitlejem	m.
31234	vitraž	m.
31235	vitrina	f.
20289	vivisekcija	f.
666	viza	f.
31239	vizavi	prep.
33002	vizažist	m.anim.
33003	vizažistka	f.
23075	vizija	f.
3035	vizita	f.
31242	vizuaľny	adj.
5493	vjehati	v.intr. pf.
5492	vježđati	v.intr. ipf.
3956	vklad	m.
3954	vkladati	v.tr. ipf.
20263	vključajųći	prep.
1699	vključati	v.tr. ipf.
3923	vključati	v.tr. ipf.
20264	vključeńje	n.sg.
35221	vključiteljny	adj.
2162	vključiti	v.tr. pf.
3926	vključiti	v.tr. pf.
35330	vključno	adv.
31244	vkupě	adv.
2160	vkųs	m.
2542	vkųsiti	v.tr. pf.
31248	vkųsny	adj.
1814	vkųšati	v.tr. ipf.
22517	vlåčiti	v.tr. ipf.
22518	vlåčiti	v.tr. ipf.
2528	vlada	f.
22468	vlada	f.
13668	vladaŕ	m.anim.
13669	vladaŕka	f.
569	vladati, vlåděti	v.intr. ipf.
13670	vladati, vlåděti	v.intr. ipf.
22476	vladati, vlåděti	v.intr. ipf.
22477	vladati, vlåděti	v.intr. ipf.
22478	vladati, vlåděti	v.intr. ipf.
22479	vladati, vlåděti	v.intr. ipf.
33612	vladati, vlåděti	v.intr. ipf.
33615	vladati, vlåděti	v.intr. ipf.
22471	vladec	m.anim.
35392	vladny	adj.
22473	vladyka	m.anim.
19224	vlåga	f.
13242	vlagańje	n.
13243	vlagatelj	m.anim.
15103	vlagati	v.tr. ipf.
6196	vlåk	m.
2530	vlåkno	n.
23398	vlamyvatelj	m.anim.
5590	vlamyvati sę	v.refl. ipf.
2529	vlås	m.
19225	vlåsaty	adj.
6320	vlasť	f.
13677	vlasť	f.
15741	vlastnica	f.
22481	vlastničstvo	n.
24014	vlastničstvo	n.
3363	vlastnik	m.anim.
13678	vlastnik	m.anim.
13681	vlastniti	v.tr. ipf.
13685	vlastno imę	n.
13683	vlastnosť	f.
1913	vlastny	adj.
22480	vlastny	adj.
34713	vlåžiti	v.tr. pf.
19228	vlåžnosť	f.
19231	vlåžny	adj.
3570	vlěkti	v.tr. ipf.
5280	vlěvo	adv.
579	vlězti	v.intr. pf.
20791	vliv	m.
20792	vlivati	v.intr. ipf.
23397	vlivny	adj.
4612	vlomiti sę	v.refl. pf.
4613	vlomjeńje	n.
3955	vložiti	v.tr. pf.
35545	vměsati	v.tr. pf.
31258	vměstiti	v.tr. pf.
2531	vměsto	prep.
15151	vměstu	adv.
20270	vměšańje	n.
2532	vměšati sę	v.refl. pf.
32434	vměšćati	v.tr. ipf.
2533	vměšivati sę	v.refl. ipf.
35546	vměšivati	v.tr. ipf.
16902	vně	adv.
16904	vně	prep.
5455	vnesti	v.tr. pf.
16903	vněšnji, vněšny	adj.
35762	vnězemny	adj.
20795	vnikati	v.intr. ipf.
20798	vniknųti	v.intr. pf.
19234	vnimańje	n.sg.
36795	vnimateljny	adj.
23378	vniz	adv.
5454	vnositi	v.tr. ipf.
35619	vnučę	n.
15644	vnučka	f.
1430	vnuk	m.anim.
2540	vnųtri	prep.
21642	vnųtri	adv.
22378	vnųtrišnji, vnųtrišny	adj.
19235	vnųtrna valuta	f.
2950	vnųtrnosť	f.
22376	vnųtrnosti	f.pl.
19237	vnųtrny produkt	m.
19238	vnųtrny spor	m.
2534	vnųtrny	adj.
16484	vȯ vśakom slučaju	adv.
2537	voda	f.
31270	vodevilj	m.
22208	vodič	m.
15152	voditelj	m.anim.
13717	voditeljstvo	n.sg.
13719	voditi k	v.ipf.
2536	voditi	v.tr. ipf.
4644	vodka	f.
31273	vȯdle	prep.
2538	vodno polo	n.sg.
33823	vodny znak	m.
36769	vodny	adj.
22547	vodobojaznj	f.
31274	vododěl	m.
19240	vodojem	m.
20816	Vodolěj	m.anim.
33822	vodoodporny	adj.
4991	vodopad	m.
31278	vodopoj	m.
3425	vodoråsť	f.
22548	vodoråvny	adj.
22545	vodorod	m.sg.
36907	vodosborny basen	m.
4992	vodoskok	m.
4990	vodotok	m.
22243	vodovod	m.
22549	vodozemny	adj.
13723	vodstvo	n.sg.
2541	vođ	m.anim.
31282	vođa	f.
20290	vođeńje	n.sg.
3108	vȯjdti	v.intr. pf.
35493	vojenna aviacija	f.
13731	vojenne igry	f.pl.
5056	vojenno-moŕske sily	f.pl.
35492	vojenno-vȯzdušne sily	f.pl.
36229	vojenny stan	m.
2124	vojenny	adj.
13732	vojenny	adj.
5340	vojevati	v.intr. ipf.
15153	vojevničji	adj.
19241	vojevnik	m.anim.
22247	vojevoda	m.anim.
36775	vojevodstvo	n.
5752	vojin	m.anim.
31286	vojinsky	adj.
13727	vojna ljudij	f.
2535	vojna	f.
13734	vojsko	n.
31293	vokabula	f.
31295	vokalist	m.anim.
31296	vokaliza	f.
4790	vokaľny	adj.
17061	vokativ	m.
20271	vokrųg	adv.
2539	vol	m.anim.
31303	volan	m.
31304	volapuk	m.sg.
31306	vȯlčje lyko	n.
31307	volejbol	m.sg.
23367	volěti	v.tr. ipf.
31312	volfram	m.sg.
23655	Volga	f.sg.
31308	vȯlga	f.
19245	vȯlgkosť	f.
19242	vȯlgky	adj.
31309	vȯlgnųti	v.intr. ipf.
31311	voliera	f.
1518	volja	f.
3928	voljny čas	m.
4127	voljny	adj.
456	vȯlk	m.anim.
31322	vȯlkodav	m.anim.
415	vȯlkolak	m.anim.
2138	vȯlna	f.
4999	vȯlna	f.
34977	vȯlnisty papugajek	m.anim.
2516	volt	m.
31318	voltmetr	m.
31319	voluntarist	m.anim.
31320	voluntarizm	m.anim.
2517	von	adv.
31327	vonj	f.
33173	vonj	f.
33169	vonjati	v.intr. ipf.
33170	vonjati	v.intr. ipf.
20817	vȯobće	adv.
23983	vȯobražati sobě	v.tr. ipf.
21643	vȯobražeńje	n.
563	vȯorųženy	adj.
33024	vȯorųžiti	v.tr. pf.
32913	vȯphati	v.tr. pf.
36187	vȯplȯćati	v.tr. ipf.
36188	vȯplȯtiti	v.tr. pf.
554	vȯpros	m.
15646	vȯprosnik	m.
557	vosk	m.
1926	vȯš	f.
32609	voščiti	v.tr. ipf.
20291	vot	intj.
3929	voz	m.
19250	voz	m.
34988	vȯzbita smetana	f.
19127	vȯzbito těsto	n.sg.
20278	vȯzbogaćati	v.tr. ipf.
20279	vȯzbogatiti	v.tr. pf.
19130	vȯzbråniti	v.tr. pf.
19128	vȯzbranjati	v.tr. ipf.
19129	vȯzbrånjeny	adj.
13450	vȯzbudimy	adj.
5466	vȯzbuditi	v.tr. pf.
13765	vȯzbudlivo	adv.
5652	vȯzbudlivy	adj.
13766	vȯzbudlivy	adj.
5464	vȯzbuđati	v.tr. ipf.
13760	vȯzbuđeńje	n.sg.
13761	vȯzbuđeny	adj.
5061	vȯzdati česť	v.pf.
5062	vȯzdavati česť	v.ipf.
19132	vȯzdȯhnųti	v.intr. pf.
3321	vȯzdȯlž	prep.
556	vȯzdŕžati sę	v.refl. pf.
2891	vȯzdŕživati sę	v.refl. ipf.
1914	vȯzduh	m.
19133	vȯzduholoď	f.
13778	vȯzduhonosima bolěznj	f.
13776	vȯzduhonosima hvoroba	f.
13781	vȯzduhonosima infekcija	f.
13777	vȯzduhonosimo zabolěvańje	n.
4622	vȯzduhonosimy	adj.
19135	vȯzduhoplavstvo	n.sg.
13779	vȯzdušna divizija	f.
5753	vȯzdušny prostor	m.
4621	vȯzdušny	adj.
19136	vȯzdvigati	v.tr. ipf.
19139	vȯzdvignųti	v.tr. pf.
4256	vȯzdyh	m.
19140	vȯzdyhati	v.intr. ipf.
26176	vȯzglåvje	n.
19141	vȯzględ	m.
31463	vȯzhod sȯlnca	m.
555	vȯzhod	m.sg.
5462	vȯzhoditi	v.intr. ipf.
23537	Vȯzhodna Evropa	f.sg.
4185	vȯzhodno	adv.
35133	vȯzhodnoevropejsky	adj.
4424	vȯzhodnoslovjansky	adj.
4184	vȯzhodny	adj.
36204	vozilo na vȯzdušnoj poduškě	n.
22412	vozilo	n.
23955	vȯzimati	v.tr. ipf.
36269	voziti sę	v.refl. ipf.
516	voziti	v.tr. ipf.
23957	vȯzjęti	v.tr. pf.
32557	vȯzklicaľnik	m.
32558	vȯzklicaľny znak	m.
32583	vȯzklicaľny	adj.
32589	vȯzklicańje	n.
32584	vȯzklicati	v.tr. ipf.
32586	vȯzklik	m.
32585	vȯzkliknųti	v.tr. pf.
32435	vȯzkresati	v.intr. ipf.
32439	vȯzkresiti	v.tr. pf.
31339	vȯzkresnųti	v.intr. pf.
32438	vȯzkrešati	v.tr. ipf.
36560	vȯzkrešeńje	n.
20280	vȯzkypyvati	v.intr. ipf.
5460	vȯzlětati	v.intr. ipf.
5461	vȯzletěti	v.intr. pf.
20799	Vȯzneseńje	n.sg.
20800	vȯznesti	v.tr. pf.
15156	vȯznikati	v.intr. ipf.
20801	vȯznikati	v.intr. ipf.
33155	vȯznikneńje	n.
20803	vȯzniknųti	v.intr. pf.
20804	vȯzniknųti	v.intr. pf.
20805	vȯznositi	v.tr. ipf.
19251	vozny	adj.
5463	vȯzȯjdti	v.intr. pf.
3492	vozȯk	m.
19145	vȯzpamętati	v.tr. ipf.
19146	vȯzpitańje	n.sg.
19149	vȯzpitati	v.tr. pf.
5949	vȯzpominati	v.tr. ipf.
19153	vȯzpomněńje	n.
5950	vȯzpomněti	v.tr. pf.
16776	vȯzprijęťje	n.
802	vȯzråst	m.
21636	vȯzråst	m.
13810	vȯzrastati	v.intr. ipf.
16419	vȯzråsti	v.intr. pf.
19155	vȯzråstka	f.
23051	vȯzråstla	f.
626	vȯzråstlosť	f.
180	vȯzråstly	adj.
22991	vȯzråstly	m.anim.
19156	vȯzråstȯk	m.anim.
19158	vȯzroditi	v.tr. pf.
17065	vȯzrođeńje	n.sg.
17098	vȯzrođeńje	n.sg.
19157	vȯzrođeńje	n.sg.
34725	vȯzsiliti	v.tr. pf.
34723	vȯzsilovač	m.
34724	vȯzsilovati	v.tr. ipf.
23919	vȯzskakati	v.intr. ipf.
23918	vȯzskočiti	v.intr. pf.
21826	vȯzstańje	n.
13881	vȯzstati	v.intr. pf.
21822	vȯzstavati	v.intr. ipf.
34959	vȯztręsati	v.tr. ipf.
34960	vȯztręsti	v.tr. pf.
22294	vȯzveličati	v.tr. pf.
22293	vȯzveličivati	v.tr. ipf.
19159	vȯzvesti	v.tr. pf.
31267	vȯzvod	m.
31955	vȯzvoditi	v.tr. ipf.
22646	vȯzvraćati	v.tr. ipf.
18360	vȯzvråćeńje	n.
22647	vȯzvråtiti	v.tr. pf.
22718	vȯzvråtny	adj.
13400	vȯzvŕšati	v.tr. ipf.
13401	vȯzvŕšeńje	n.
13402	vȯzvŕšiti	v.tr. pf.
22737	vȯzvysiti	v.tr. pf.
22742	vȯzvysiti	v.tr. pf.
22736	vȯzvyšati	v.tr. ipf.
22739	vȯzvyšati	v.tr. ipf.
31342	vȯzvyšeńje	n.
20281	vȯzvyšenosť	f.
31343	vȯzvyšeny	adj.
36559	vȯzvyšeny	adj.
22925	vȯzzvańje	n.
21205	vpad	m.
21207	vpadati	v.intr. ipf.
29828	vpaly	adj.
21209	vpasti	v.intr. pf.
23845	vpečętlivy	adj.
19252	vpečętljeńje	n.
32911	vpihati	v.tr. ipf.
6201	vpis	m.
6200	vpisati	v.tr. pf.
6199	vpisyvati	v.tr. ipf.
23376	vpiti	v.tr. pf.
23377	vpivańje	n.sg.
23375	vpivati	v.tr. ipf.
20272	vplesti	v.tr. pf.
34327	vpletati	v.tr. ipf.
2871	vplyv	m.
1833	vplyvati	v.intr. ipf.
23396	vplyvny	adj.
1836	vplyvti	v.intr. pf.
4566	vpȯlně, vpȯlno	adv.
5279	vpravo	adv.
3369	vprěd	adv.
21199	vpręgati	v.tr. ipf.
21200	vpręgti	v.tr. pf.
17062	vpŕvo	adv.
1837	vråbec	m.anim.
22658	vraćati sę	v.refl. ipf.
5917	vraćati v otčinų	v.ipf.
1839	vraćati	v.tr. ipf.
13825	vråg	m.anim.
31350	vrån	m.anim.
1838	vråna	f.
1911	vråta	n.pl.
3109	vråta	n.pl.
23252	vråtaŕ	m.anim.
32443	vråtaŕ	m.anim.
31355	vråtič	m.
22654	vråtiti sę	v.refl. pf.
5918	vråtiti v otčinų	v.tr. pf.
1773	vråtiti	v.tr. pf.
13844	vråtiti	v.tr. pf.
15162	vråtnik	m.anim.
19124	vražeńje	n.
31357	vråžiti	v.intr. ipf.
19253	vråžka	f.
13565	vŕba	f.
31359	vrčati	v.intr. ipf.
36257	vrěća	f.
31360	vrěd	m.
23953	vrědny	adj.
13829	vrěmę goda	n.
13830	vrěmę roka	n.
2330	vrěmę	n.
13827	vrěmę	n.
13828	vrěmę	n.
22573	vrěmenny	adj.
31361	vrěs	m.
13832	vresenj	m.sg.
31362	vrěsk	m.
31363	vrěščati	v.intr. ipf.
22644	vrěteno	n.
22561	vrěti	v.intr. ipf.
22576	vŕgati	v.tr. ipf.
22577	vŕgnųti	v.tr. pf.
3076	vŕh	m.
13568	vŕhnik	m.anim.
13838	vŕhny načeľnik	m.anim.
13569	vŕhny voditelj	m.anim.
13570	vŕhny vođ	m.anim.
1666	vŕhny	adj.
31366	vŕhovje	n.
22565	vŕhovny	adj.
22653	vŕnųti sę	v.refl. pf.
22645	vŕnųti	v.tr. pf.
21628	vrođeny	adj.
31370	vŕša	f.
31145	vrštat	m.
22640	vŕtěti	v.tr. ipf.
22641	vŕtěti	v.tr. ipf.
22643	vŕtěti	v.intr. ipf.
19254	vŕtka	f.
6083	vŕtolet	m.
19125	vrųbati	v.tr. pf.
19126	vrųbyvati	v.tr. ipf.
21629	vrųčati	v.tr. ipf.
21631	vrųčiti	v.tr. pf.
5679	vŕvka	f.
13847	vsaditi	v.tr. pf.
13848	vsadȯk	m.
13849	vsađati	v.tr. ipf.
243	vśako	adv.
20295	vśakodenno, vśakodnevno	adv.
93	vśakodenny, vśakodnevny	adj.
13853	vśakogodišnje	adv.
13854	vśakogodišnji, vśakogodišny	adj.
13855	vśakoročno	adv.
13856	vśakoročny	adj.
4326	vśaky	adj.
13864	vśaky	adj.
19571	vśamo	adv.
32764	vse bolje	adv.
19255	vse jedno	adv.
32765	vse lěpje	adv.
19256	vse råvno	adv.
3098	vse	pron.indef.
31379	vse	adv.
1675	vsečto	pron.indef.
780	vsegda, vsegdy	adv.
23789	vsěgo	adv.
22951	vsejed	m.anim.
22950	vsejedny	adj.
35154	vsekako	adv.
35153	vsekaky	adj.
2672	vsekde	adv.
23853	vsekråtno	adv.
1823	vsekto	pron.indef.
19586	vseliko	adv.
19593	vseliky	adj.
20819	vsemir	m.
20820	vsemogųći	adj.
35620	vseprisųtny	adj.
17056	vseslovjansky	adj.
34916	vsestrånny	adj.
19257	vsesvět	m.
20294	vsesvětny	adj.
13879	Vsesvětova pavųčina [VSP]	f.
19258	vsesvětovy	adj.
36119	vsevědųći	adj.
36118	vseznajųći	adj.
22952	vsežerec	m.anim.
22347	vsežerny	adj.
23790	vsi	pron.indef.
21633	vskočiti	v.intr. pf.
1039	vslěd	prep.
13352	vslědno	adv.
13353	vslědny	adj.
20273	vsosati	v.tr. pf.
13377	vsrěd	prep.
21634	vsrěd	adv.
6322	vstati	v.intr. pf.
6321	vstavati	v.intr. ipf.
13882	vstaviti	v.tr. pf.
16385	vstavjati	v.tr. ipf.
31388	vstavka	f.
3702	vstųpati	v.intr. ipf.
3347	vstųpiti	v.intr. pf.
3587	vstųpjeńje	n.sg.
775	vśųdy	adv.
35547	vtęgati	v.tr. ipf.
35548	vtęgnųti	v.tr. pf.
36189	vtěljeńje	n.
35649	vtičnica	f.
20274	vtiskati	v.tr. ipf.
20276	vtisknųti	v.tr. pf.
13889	vtȯgda, vtȯgdy	adv.
19259	vtora světova vojna	f.
16249	vtornik	m.
17064	vtorny	adj.
20296	vtoro	adv.
1266	vtorȯk	m.
16401	vtory	num.ord.
2414	vtrgati	v.intr. ipf.
3097	vtrgnųti	v.intr. pf.
31394	vualj	f.
35701	vųglaty	adj.
1737	vųglerod	m.sg.
22546	vųglovodan	m.
13208	vųgȯl	m.
1453	vųgȯlj	m.sg.
32763	vųgȯljny	adj.
2152	vųgoŕ	m.anim.
3115	Vųgrec	m.anim.
2430	Vųgrija	f.sg.
78	vųgrsky	adj.
31395	vulgarizacija	f.
31397	vulgarizm	m.
32762	vulgarnosť	f.
31399	vulgarny	adj.
23722	vulkan	m.
23723	vulkaničny	adj.
31402	vulkanizacija	f.
31404	vulkanizovati	v.tr. ipf./pf.
3743	vųsy	m.pl.
15168	vųtråba	f.
1671	vųtråby	f.pl.
1057	vųzel	m.
22191	vųzel	m.
22193	vųzel	m.
36000	vųzkokolejka	f.
36001	vųzkokolejna dråga	f.
66	vųzky	adj.
1523	vųž	m.anim.
3685	vvedeńje	n.
3678	vvesti	v.tr. pf.
5504	vvezti	v.tr. pf.
22417	vvezti	v.tr. pf.
22271	vvod	m.
3677	vvoditi	v.tr. ipf.
22269	vvodny	adj.
22415	vvoz	m.
5505	vvoziti	v.tr. ipf.
22416	vvoziti	v.tr. ipf.
22594	vvŕgati	v.tr. ipf.
22596	vvŕgati	v.tr. ipf.
22595	vvŕgnųti	v.tr. pf.
22597	vvŕgnųti	v.tr. pf.
35439	vvŕh	adv.
1629	vy	pron.pers.
15172	vy-	prefix
31407	vyboj	m.
5011	vydra	f.
4375	vygoda	f.
15139	vygoda	f.
13925	vygodno	adv.
4376	vygodny	adj.
16541	vyjdti	v.intr. pf.
16530	vyjmati	v.tr. ipf.
36406	vykati	v.tr. ipf.
19308	vymę	n.
31426	vypad	m.
21215	vypis	m.
21649	vyrok	m.
34159	vyryti	v.tr. pf.
33658	vysmrkati sę	v.refl. pf.
22723	Vysočstvo	n.
34765	vysoko	adv.
13633	vysokogorsky	adj.
22724	vysokoparny	adj.
19333	vysokoskok	m.
409	vysoky	adj.
31439	vysota	f.
20830	vysotoměr	m.
33216	vyspati sę	v.refl. pf.
20302	vysši	adj.
2610	vyše pozdno	adv.
705	vyše veliky	adj.
2508	vyše	adv.
2680	vyše	adv.
13638	vyšina	f.
20300	vyšnosť	f.
20301	vyšny	adj.
31446	vyti	v.intr. ipf.
16716	vytŕpěti	v.tr. pf.
31448	vyvěska	f.
22885	vyznavati	v.tr. ipf.
13981	vzad	adv.
13983	vzadny sklon	m.
15655	vzadny	adj.
3459	vzadu	adv.
13986	vzajemno	adv.
23052	vzajemnosť	f.
1804	vzajemny	adj.
15656	vzajemodějańje	n.
13989	vzajemodějati	v.intr. ipf.
562	vzajemodějstvo	n.
9090	vzajemodějstvovati	v.intr. ipf.
467	vzęti	v.tr. pf.
16386	vzor	m.
15195	vzorny	adj.
34985	vžiti sę	v.refl. pf.
3673	vživati sę	v.refl. ipf.
34995	ykańje	n.sg.
14002	za drěva lěs ne viděti	phrase
19341	za vśakų cěnų	adv.
31598	za živo	adv.
33329	za živo	adv.
833	za	prep.
1033	za	prep.
1171	za	prep.
4936	za	prep.
4937	za	prep.
4938	za	prep.
34989	za	prep.
36471	zabarikadovati	v.tr. pf.
3432	zabava	f.
3768	zabava	f.
14014	zabavitelj	m.anim.
3444	zabaviti	v.tr. pf.
3414	zabavjati	v.tr. ipf.
4498	zabavjeńje	n.sg.
15199	zabavnik	m.anim.
21650	zabavny	adj.
3633	zabezpamęćati	v.tr. ipf.
3634	zabezpamętiti	v.tr. pf.
36613	zabezpečati	v.tr. ipf.
36615	zabezpečeńje	n.
36614	zabezpečiti	v.tr. pf.
31476	zabijaka	m.anim.
35980	zabiraj sę!	intj.
23959	zabirati	v.tr. ipf.
940	zablokovati	v.tr. pf.
14022	zablųda	f.
21655	zablųditi	v.intr. pf.
36657	zablųditi	v.intr. pf.
14025	zablųdny	adj.
21652	zablųđati	v.intr. ipf.
36656	zablųđati	v.intr. ipf.
19343	zabobonnosť	f.
19344	zabobonny	adj.
14027	zabolěti	v.intr. pf.
36692	zabolěti	v.intr. pf.
36695	zabolěvajemosť	f.sg.
15200	zabolěvańje	n.
36693	zabolěvati	v.intr. ipf.
14029	zabolěvši	adj.
14030	zabråna	f.
2286	zabråniti	v.tr. pf.
1834	zabranjati	v.tr. ipf.
23960	zabrati	v.tr. pf.
2170	zabyti	v.tr. pf.
2169	zabyvati	v.tr. ipf.
14037	začarovany	adj.
14038	začarovati	v.tr. pf.
14039	začasny	adj.
14040	začęti	v.tr. pf.
35843	začęťje	n.
32365	začętȯk	m.
14041	začinati	v.tr. ipf.
5724	začrveniti sę	v.refl. pf.
5725	začrvenjati sę	v.refl. ipf.
3987	začto	adv.
19619	začtokoli	adv.
15197	začto-libo	adv.
2328	začto-nebųď	adv.
36630	začuditi sę	v.refl. pf.
36635	začuditi	v.tr. pf.
15201	zad	m.
3958	zadańje	n.
25120	zadarmo	adv.
5524	zadati	v.tr. pf.
5523	zadavati	v.tr. ipf.
14052	zadnica	f.
14053	zadnik	m.anim.
15202	zadnja stråna	f.
33561	zadnjepodnebny	adj.
15203	zadnjeprohodny	adj.
2317	zadnji dvor	m.
15204	zadnji prohod	m.
5192	zadnji, zadny	adj.
36516	zadovaljati sę	v.refl. ipf.
444	zadovaljati	v.tr. ipf.
36517	zadovoliti sę	v.refl. pf.
3356	zadovoliti	v.tr. pf.
526	zadovoljeny	adj.
3318	zadovoljstvo	n.sg.
19351	zadrěmati	v.intr. pf.
16488	zadŕžati dyh	v.pf.
19352	zadŕžati sę	v.refl. pf.
297	zadŕžati	v.tr. pf.
19353	zadŕžati	v.tr. pf.
19356	zadŕžati	v.tr. pf.
34659	zadržati	v.intr. pf.
35630	zadŕžati	v.tr. pf.
36514	zadŕžati	v.tr. pf.
16487	zadŕživati dyh	v.ipf.
19355	zadŕživati sę	v.refl. ipf.
2221	zadŕživati	v.tr. ipf.
19359	zadŕživati	v.tr. ipf.
19360	zadŕživati	v.tr. ipf.
35629	zadŕživati	v.tr. ipf.
36515	zadŕživati	v.tr. ipf.
19361	zadŕžnik	m.
31855	zaduha	f.
33698	zadušna mša	f.
5969	zagadka	f.
15205	zagadka	f.
14068	zagadȯčny	adj.
33625	zagladiti	v.tr. pf.
33626	zaglađati	v.tr. ipf.
6051	zaglåvje	n.
31492	zagorěti	v.intr. pf.
35915	zagospodariti	v.tr. pf.
31493	zagovor	m.
36048	zagovornik	m.anim.
36047	zagrabnik	m.anim.
31494	zagranica	f.
14072	zagraničnik	m.anim.
14071	zagraničny	adj.
32249	Zagreb	m.sg.
33631	zagrobno žiťje	n.sg.
33630	zagrobny	adj.
2190	zagroziti	v.tr. pf.
31497	zahod sȯlnca	m.
5475	zahoditi	v.intr. ipf.
23961	zahvaćajųći	adj.
2292	zahvaćati	v.tr. ipf.
19363	zahvat	m.
34990	zahvat	m.
34991	zahvat	m.
571	zahvatiti	v.tr. pf.
6659	zahvorěly	adj.
36694	zahvorěti	v.intr. pf.
36696	zahvorěvajemosť	f.sg.
26048	zahvorěvańje	n.
14077	zahvorěvati	v.intr. ipf.
2270	zaimę, zaimennik	m.
5175	zainteresovany	adj.
16147	zainteresovati sę	v.refl. pf.
34993	zainteresovati	v.tr. pf.
3294	zaisto	adv.
35516	zajavjeńje	n.
5476	zajdti	v.intr. pf.
35509	zajebancija	f.
1803	zajęc	m.anim.
14080	zajęc	m.anim.
14081	zajęčlivo	adv.
14083	zajęčlivosť	f.
14082	zajęčlivy	adj.
914	zajedlivosť	f.
36827	zajedlivy	adj.
1741	zajedno	adv.
19366	zajem	m.
19367	zajęti sę	v.refl. pf.
5002	zajęti	v.tr. pf.
5008	zajęťje	n.
19373	zajęty	adj.
19370	zajezd	m.
31503	zajikati sę	v.refl. ipf.
19378	zajmati sę	v.refl. ipf.
5001	zajmati	v.tr. ipf.
14129	zajmlivy	adj.
23390	zajmodatelj	m.anim.
23391	zajmoprijmatelj	m.anim.
23715	zakašljati	v.intr. pf.
14088	zakaz	m.
14089	zakazati	v.tr. pf.
19379	zakaznik	m.anim.
16388	zakazyvati	v.tr. ipf.
3449	zaklad	m.
35623	zaklad	m.
939	zakladati	v.tr. ipf.
32698	zakladati	v.tr. ipf.
32007	zaklåti	v.tr. pf.
33647	zaklęti	v.tr. pf.
33653	zaklęty vråg	m.anim.
31507	zaklęty	adj.
31506	zaklinańje	n.
31508	zaklinati	v.tr. ipf.
31509	zakliniti	v.tr. pf.
33665	zaklinovati	v.tr. ipf.
5162	zaključati	v.intr. ipf.
20305	zaključati	v.tr. ipf.
34997	zaključati	v.tr. ipf.
20306	zaključeńje	n.
36497	zaključeńje	n.
19382	zaključiljnja	f.
19384	zaključiľnik	m.anim.
5163	zaključiti	v.intr. pf.
20307	zaključiti	v.tr. pf.
34998	zaključiti	v.tr. pf.
1901	zakon	m.
14095	zakončeńje	n.
2551	zakončiti	v.tr. pf.
1747	zakonny	adj.
1921	zakonodatelj	m.anim.
3717	zakonodateljny	adj.
2082	zakonodateljstvo	n.
31513	zakonoměrny	adj.
4030	zakopati	v.tr. pf.
4029	zakopyvati	v.tr. ipf.
17067	zakoreněly	adj.
35117	zakoreniti sę	v.refl. pf.
36796	zakričati	v.tr. pf.
14105	zakrvavjeny	adj.
20309	zakryti	v.tr. pf.
20310	zakryti	v.tr. pf.
20312	zakryvati	v.tr. ipf.
20313	zakryvati	v.tr. ipf.
14106	zakulisne mahinacije	f.pl.
15659	zakulisne ombany	m.pl.
14107	zakulisny	adj.
32115	zakupka	f.
31515	zakųska	f.
20314	zakųtȯk	m.
36797	zalajati	v.intr. pf.
36590	zaležno	adv.
36589	zaležnosť	f.sg.
36588	zaležny	adj.
2552	zaliv	m.
35403	zaljubiti sę	v.refl. pf.
35404	zaljubjeny	adj.
20316	zalog	m.
19391	založeńje	n.
14111	založiljnja	f.
1740	založiti	v.tr. pf.
14112	založiti	v.tr. pf.
31520	založnik	m.anim.
14113	založny	adj.
31521	zalp	m.
36510	Zambija	f.
24011	zamedliti	v.tr. pf.
24012	zamedljati	v.tr. ipf.
9026	zamedljeńje	n.
1627	zaměna	f.
36101	zaměna	f.
3811	zaměniti	v.tr. pf.
3810	zaměnjati	v.tr. ipf.
19395	zaměnlivy	adj.
22183	zaměsiti	v.tr. pf.
1808	zamesti	v.tr. pf.
14117	zaměsto	prep.
5965	zaměšańje	n.
35449	zaměšańje	n.
16900	zaměšati	v.tr. pf.
16901	zaměšivajųći	adj.
16899	zaměšivati	v.tr. ipf.
32598	zamětati	v.tr. ipf.
14120	zamglati	v.tr. pf.
33669	zamirati	v.intr. ipf.
23970	zamknųti	v.tr. pf.
31523	zamknųty	adj.
36518	zamknųty	adj.
14121	zamnogo	adv.
213	zamȯk	m.
19396	zamȯk	m.
20832	zamȯk	m.
34479	zamȯlknųti	v.intr. pf.
36785	zamȯlviti	v.tr. pf.
36786	zamȯlvjati	v.tr. ipf.
36789	zamȯlvjeńje	f.
31526	zamoŕsky	adj.
19398	zamotany	adj.
2168	zamråziti	v.tr. pf.
2342	zamražati	v.tr. ipf.
31527	zamreti	v.intr. pf.
33675	zamrzati	v.intr. ipf.
31528	zamrznųti	v.intr. pf.
31529	zamša	f.
32716	zamševy	adj.
23967	zamykati	v.tr. ipf.
14125	zamysl	m.
19400	zamysliti	v.tr. pf.
19399	zamysljati	v.tr. ipf.
14126	zamysljeny	adj.
14128	zanečišćeńje vȯzduha	n.
4297	zanečišćeńje	n.
1371	zaněčto	adv.
14754	zanedbańje	n.
14755	zanedbati sę	v.refl. pf.
16256	zanedbati	v.tr. pf.
14758	zanedbyvati sę	v.refl. ipf.
16257	zanedbyvati	v.tr. ipf.
35853	zanepokojeny	adj.
35852	zanepokojiti	v.tr. pf.
796	zaničto	adv.
16389	zanuriti	v.tr. pf.
14130	zanurjati	v.tr. ipf.
34513	zaostalosť	f.
34512	zaostaly	adj.
1776	zapad	m.sg.
23973	zapadati	v.intr. ipf.
23539	Zapadna Evropa	f.sg.
31534	zapadnik	m.anim.
4187	zapadno	adv.
35134	zapadnoevropejsky	adj.
4423	zapadnoslovjansky	adj.
842	zapadny	adj.
14136	zapah	m.
5473	zapakovati	v.tr. pf.
5474	zapakovyvati	v.tr. ipf.
23795	zapaliti	v.tr. pf.
23794	zapaljati	v.tr. ipf.
14138	zapaljeńje apendeka	n.
16476	zapaljeńje	n.
36432	zapaljeńje	n.
5254	zapalka	f.
35118	zapaľnička	f.
23054	zapaľnik	m.
17068	zapamętati	v.tr. pf.
17099	zapamętyvati	v.tr. ipf.
3817	zapas	m.
23976	zapasti	v.intr. pf.
31537	zapęsťje	n.
23429	zapęta	f.
32910	zaphati v něčto	v.tr. pf.
32909	zapihati v něčto	v.tr. ipf.
3806	zapis	m.
36116	zapis	m.
14144	zapisańje	n.
14147	zapisati sę	v.refl. pf.
5527	zapisati	v.tr. pf.
6250	zapisati	v.tr. pf.
6251	zapiska	f.
6252	zapisnik	m.
14150	zapisyvati sę	v.refl. ipf.
5528	zapisyvati	v.tr. ipf.
6249	zapisyvati	v.tr. ipf.
5477	zaplakati	v.intr. pf.
36874	zaplanovati	v.tr. pf.
31538	zaplata	f.
2983	zaplatiti	v.tr. pf.
14153	zaplěniti	v.tr. pf.
14154	zaplěnjati	v.tr. ipf.
32371	započęti	v.tr. pf.
19401	započinati	v.tr. ipf.
31539	zapoj	m.
725	zapȯlniti	v.tr. pf.
24	zapȯlnjati	v.tr. ipf.
21226	zapona	f.
21229	zaponka	f.
21230	zapor	m.
21231	zapor	m.
22241	zapověď	f.
34510	zapozdněly	adj.
21659	zapoznati	v.tr. pf.
21660	zapoznavati	v.tr. ipf.
14159	zapråšiti	v.tr. pf.
14160	zapravdų	adv.
21232	zapraviti	v.tr. pf.
21234	zapravjati	v.tr. ipf.
34888	zaprěčiti	v.tr. pf.
21236	zapręgati	v.tr. ipf.
21237	zapręgti	v.tr. pf.
20833	zaprojektovati	v.tr. pf.
21238	zapropastiti sę	v.refl. pf.
21243	zapustiti	v.tr. pf.
21239	zapušćati	v.tr. ipf.
21240	zapušćeny	adj.
4766	zapytańje	n.
3438	zapytati	v.tr. pf.
5535	zapytyvati	v.tr. ipf.
21661	zaråbotati	v.tr. pf.
21662	zaråbotyvati	v.tr. ipf.
21663	zaradi	prep.
33069	zarastati	v.intr. ipf.
14162	zaråsti	v.intr. pf.
31546	zaraza	f.
21246	zaraziti	v.tr. pf.
14163	zarazny	adj.
21244	zaražati	v.tr. ipf.
5841	zaražeńje	n.
31548	zarđavěly	adj.
25	zaregistrovati	v.tr. pf.
21665	zarěkati sę	v.refl. ipf.
21667	zarěkti sę	v.refl. pf.
36504	zarevti	v.intr. pf.
35859	zarezervovati	v.tr. pf.
14165	zaroditelj	m.anim.
14166	zaroditi sę	v.refl. pf.
21669	zarodȯk	m.
21670	zarodȯk	m.anim.
21672	zarodȯk	m.anim.
31550	zarok	m.
21674	zarųčati sę	v.refl. ipf.
21673	zarųčati	v.tr. ipf.
33332	zarųčeńje	n.
21676	zarųčiti sę	v.refl. pf.
21675	zarųčiti	v.tr. pf.
19407	zarydati	v.intr. pf.
21677	zasada	f.
36410	zasada	f.
14167	zasaditi	v.tr. pf.
16390	zasađati	v.tr. ipf.
21678	zasědańje	n.
33240	zasějati	v.tr. pf.
33686	zaslanjati	v.tr. ipf.
31554	zaslon	m.
31555	zasloniti	v.tr. pf.
31557	zasluga	f.
2903	zasluženy	adj.
20319	zaslužiti	v.tr. pf.
20320	zasluživati	v.tr. ipf.
19408	zasmějati sę	v.refl. pf.
19411	zasměška	f.
19412	zasnųti	v.intr. pf.
19413	zaspanec	m.anim.
19414	zaspanica	f.
19415	zaspany	adj.
33220	zaspati sę	v.refl. pf.
19416	zaspati	v.intr. pf.
23843	zasråmiti	v.tr. pf.
23842	zasramjati	v.tr. ipf.
23844	zasråmjeny	adj.
1932	zasrati	v.intr. pf.
5826	zastarěly	adj.
4112	zastariti	v.intr. pf.
4111	zastarjati	v.intr. ipf.
21830	zastati	v.tr. pf.
21831	zastati	v.tr. pf.
21842	zastav	m.
15210	zastava	f.
21828	zastavati	v.tr. ipf.
21829	zastavati	v.tr. ipf.
21837	zastaviti	v.tr. pf.
21841	zastaviti	v.tr. pf.
21834	zastavjati	v.tr. ipf.
21840	zastavjati	v.tr. ipf.
21832	zastoj	m.
35003	zastoj	m.
19417	zastrašańje	n.
19418	zastrašati	v.tr. ipf.
19419	zastrašiti	v.tr. pf.
3268	zastrěliti	v.tr. pf.
5113	zastrěljati	v.tr. ipf.
19420	zastųpati	v.tr. ipf.
21994	zastųpati	v.tr. ipf.
19421	zastųpiti	v.tr. pf.
21995	zastųpiti	v.tr. pf.
1807	zastųpnik	m.anim.
23716	zasuvka	f.
21680	zasvěćati	v.intr. ipf.
21682	zasvětiti	v.intr. pf.
36419	zaščićati	v.tr. ipf.
14176	zaščita	f.
14177	zaščititi	v.tr. pf.
31565	zaščitnik	m.anim.
36050	zašijka	f.
23255	zašiti	v.tr. pf.
5616	zaštopati	v.tr. pf.
1170	zatemniti	v.tr. pf.
3090	zatemnjati	v.tr. ipf.
31881	zatišje	n.
33093	zatknųti sę	v.refl. pf.
31567	zatknųti	v.tr. pf.
33692	zatměvati	v.tr. ipf.
31569	zatmiti	v.tr. pf.
31568	zatmjeńje	n.
4035	zato že, zatože	conj.
3056	zato	adv.
3832	zatom	adv.
14183	zatopiti	v.tr. pf.
15211	zatopjeńje	n.
35002	zator	m.
22128	zatraćenec	m.anim.
13062	zatręsti	v.tr. pf.
14186	zatrimati	v.tr. pf.
14185	zatrimyvati	v.tr. ipf.
31571	zatųhly	adj.
5204	zatvarjati	v.tr. ipf.
19422	zatvor	m.
22556	zatvor	m.
5205	zatvoriti	v.tr. pf.
2894	zatvorjeny	adj.
35498	zatvorka	f.
22124	zatyčka	f.
33092	zatykati sę	v.refl. ipf.
33089	zatykati	v.tr. ipf.
31573	zatylȯk	m.
35005	zaustaviti sę	v.refl. pf.
5656	zaustaviti	v.tr. pf.
5655	zaustavjati sę	v.refl. ipf.
35004	zaustavjati	v.tr. ipf.
1933	zautra	adv.
14192	zautraka	f.
14193	zautrakati	v.intr. ipf.
14195	zautrišnji, zautrišny	adj.
23977	zauvažati	v.tr. ipf.
23978	zauvažiti	v.tr. pf.
3469	zavaliti	v.tr. pf.
31576	zavčera	adv.
22408	zavěćańje	n.
31583	zavěćati	v.tr. ipf./pf.
22239	zavědyvati	v.tr. ipf.
2901	zavěsa	f.
22410	zavět	m.
19423	zavětrny	adj.
19424	zavęzati	v.tr. pf.
19426	zavęzyvati	v.tr. ipf.
36089	zaviděti	v.intr. ipf.
31587	zavidny	adj.
20321	zavisěti od	v.intr. ipf.
31589	zavisnosť	f.
36324	zavisnosť	f.
17069	zavisny	adj.
36325	zavisny	adj.
22429	zavisť	f.
22430	zavistny	adj.
31592	zavitȯk	m.
22514	zavladnųti	v.tr. pf.
22513	zavladyvati	v.tr. ipf.
4653	zavod	m.
2355	zavojevati	v.tr. pf.
2294	zavojevyvati	v.tr. ipf.
19428	zavraćati	v.intr. ipf.
19429	zavråćeńje	n.
19430	zavråtiti	v.intr. pf.
22720	zavråtny	adj.
19431	zavŕšati	v.tr. ipf.
19435	zavŕšiti	v.tr. pf.
31596	zavŕtěti	v.intr. pf.
33351	zavyti	v.intr. pf.
31597	zavzęty	adj.
22906	zazor	m.
22907	zazor	m.
19439	zažartovati	v.intr. pf.
32639	zažegti	v.tr. pf.
32642	zažegti	v.tr. pf.
32644	zažegti	v.tr. pf.
32633	zažigati	v.tr. ipf.
32636	zažigati	v.tr. ipf.
32638	zažigati	v.tr. ipf.
14201	zdar!	intj.
4881	zdråv!	intj.
34731	zdråvěti	v.intr. ipf.
32965	zdråvica	f.
576	zdråvje	n.
3024	zdråvoohrånjeńje	n.sg.
14210	zdråvotničstvo	n.sg.
2167	zdråvy	adj.
23475	zęba	f.
20834	zebra	f.
31602	zębti	v.intr. ipf.
31604	zebu	m.anim.
31605	zefir	m.
31623	zějati	v.intr. ipf.
32185	zelena salata	f.
19442	zelenina	f.
21248	zeleninaŕ	m.anim.
31606	zelenj	f.
752	zeleny	adj.
14217	zemisty	adj.
2255	zemja	f.
14218	Zemja	f.
22746	zemjak	m.anim.
31609	zemjanka	f.
14222	zemjany	adj.
4691	zemjedělec	m.anim.
19444	zemjedělišče	n.
16777	zemjeděľstvo	n.sg.
20835	zemjeměr	m.anim.
21249	zemjepis	m.
21250	zemjepisec	m.anim.
3577	zemjetręseńje	n.
31614	zemnovodny	adj.
5983	zemny orěh	m.
3765	zemny	adj.
35806	zemsky	adj.
31617	zěnica	f.
31618	zenit	m.
1925	zęť	m.anim.
23717	zěvati	v.intr. ipf.
23718	zěvnųti	v.intr. pf.
31622	zigzag	m.
1513	zima	f.
14232	zima	f.
36511	Zimbabve	n.
14234	zimnějši	adj.
14236	zimnosť	f.
4467	zimny	adj.
31625	zimorodȯk	m.anim.
19455	zimovy sȯlncevråt	m.
14238	zimovy	adj.
36150	zip u nogavic	m.
35401	zip	m.
22900	zirkati	v.intr. ipf.
22901	zirknųti	v.intr. pf.
35121	zlåta rybka	f.
31626	zlåtaŕ	m.anim.
31627	zlåtisty	adj.
32974	zlåtiti	v.tr. ipf.
3046	zlåto	n.sg.
31630	zlåtousty	adj.
877	zlåty	adj.
4557	zlo	n.
14244	zlo	adv.
14250	zloba	f.
36861	zloba	f.
36858	zlobiti sę	v.refl. ipf.
34744	zlobiti	v.tr. ipf.
14247	zlobnica	f.
14248	zlobnik	m.anim.
4285	zlobny	adj.
2226	zločin	m.
124	zločinec	m.anim.
3526	zločinnik	m.anim.
17218	zločinstvo	n.
3935	zlodějatelj	m.anim.
36860	zlonaměrnosť	f.sg.
31636	zlonaměrny	adj.
22755	zloradno	adv.
35009	zloradny	adj.
35007	zloradosť	f.
35008	zloradovati sę	v.refl. ipf.
22758	zlosť	f.
36862	zlosť	f.sg.
19462	zlostlivy	adj.
16738	zloty	m.
15673	zloumysľnosť	f.
15674	zloumysľny	adj.
1495	zloupotrěbiti	v.tr. pf.
1892	zloupotrěbjati	v.tr. ipf.
14262	zlověsť	f.
14263	zlověstno	adv.
15219	zlověstny priznak	m.
15218	zlověstny znak	m.
14264	zlověstny	adj.
31640	zlověšći	adj.
3089	zly	adj.
22751	zly	adj.
36863	zly	adj.
3045	zmija	f.
7508	zmiji	adj.
22840	značek	m.
22841	značek	m.
3736	značeńje	n.
35272	značimosť	f.
35273	značimy	adj.
1886	značiti	v.tr. ipf.
14280	značka	f.
19464	značno	adv.
4316	značnosť	f.
1520	značny	adj.
22835	znahaŕ	m.anim.
22830	znajema	f.
17070	znajemy	adj.
22829	znajemy	m.anim.
36124	znak citovańja	f.
4086	znak	m.
15220	znak	m.
22839	znak	m.
22836	znalec	m.anim.
14290	znalosť	f.
15675	znamę	n.
22844	znamę	n.
35380	znamenitosť	f.
36519	znamenitosť	f.
2125	znamenity	adj.
22845	znameńje	n.
22846	znameńje	n.
22850	znamenovati	v.tr. ipf.
22851	znamenovati	v.tr. ipf.
2126	znanec	m.anim.
3712	znańje	n.sg.
477	znany	adj.
372	znati	v.tr. ipf.
22832	znatny	adj.
31656	zodiak	m.sg.
31657	zodiakaľny	adj.
24007	zȯlva	f.
36297	zombi	m.anim.
17100	zona	f.
17071	zonaľny	adj.
31661	zoolog	m.anim.
251	zoologičny park	m.
31662	zoologičny	adj.
19467	zorja	f.
31664	zȯv	m.
31665	zrazy	m.pl.
1777	zŕcalo	n.
36912	zrělišče	n.
31667	zrělosť	f.
31668	zrěly	adj.
20328	zrěńje	n.sg.
4043	zrěti	v.intr. ipf.
19468	zrěti	v.intr. ipf.
34886	zritelj	m.anim.
36246	zŕneno-žitne kuľtury	f.pl.
1363	zŕno	n.
31673	zuav	m.anim.
1848	zųb	m.
31675	zųbec	m.
23157	zųbna pasta	f.
23156	zųbna ščetka	f.
23158	zųbny lěkaŕ	m.anim.
31676	zubr	m.anim.
36431	zubrova trava	f.
31677	zubrovka	f.
22912	zvańje	n.
16494	zvateljnik, zvateljny padež	m.
1994	zvati	v.tr. ipf.
22909	zvati	v.tr. ipf.
932	zvěŕ	m.anim.
15223	zvěŕ	m.anim.
34748	zvěrěti	v.intr. ipf.
14311	zvěŕsky	adj.
1924	zvěŕstvo	n.
1889	zvězda	f.
23006	zvězdaŕ	m.anim.
23007	zvězdaŕstvo	n.sg.
31684	zvězdny	adj.
22888	zvězdoznavec	m.anim.
22887	zvězdoznavstvo	n.sg.
3824	zvon	m.
36430	zvon	m.
31687	zvonica	f.
3822	zvoniti	v.intr. ipf.
31689	zvonȯk	m.
14320	zvony	m.pl.
1890	zvųčati	v.intr. ipf.
5851	zvųčnik	m.
5039	zvųčny	adj.
31692	zvųčny	adj.
843	zvųk	m.
36152	zvukoręd	m.
23415	zvųkozapis	m.
2626	žaba	f.
35651	žabra	f.
14327	žaden	pron.indef.
14334	žaliti sę	v.refl. ipf.
3772	žaliti	v.tr. ipf.
3931	žalj	adv.
19386	žalj	m.
19387	žaljeńje	n.
14336	žaloba	f.
3773	žalosť	f.
3389	žalostny	adj.
1923	žalovati sę	v.refl. ipf.
2562	žar	m.
17075	žargon	m.
19402	žariti	v.tr. ipf.
19403	žarky	adj.
19404	žarovka	f.
31700	Žar-ptica	f.
19405	žart	m.
19406	žartovati	v.intr. ipf.
12871	že by	conj.
4037	že	conj.
22795	žebrak	m.anim.
19448	žędajųći	adj.
665	žędati	v.tr. ipf.
4637	žędati	v.tr. ipf.
4632	žędnosť	f.
14349	žędny	adj.
34884	žędny	adj.
3930	žęđa	f.
36429	žęđa	f.
32631	žegti	v.tr. ipf.
3238	želańje	n.
1047	želati	v.tr. ipf.
23280	želatin	m.sg.
23279	žele	n.indecl.
394	želěznica	f.
14369	želězničaŕ	m.anim.
5668	želěznična stancija	f.
34898	želězničny prěvod	m.
14366	želězničny	adj.
3940	želězny	adj.
395	želězo	n.sg.
31702	želězobeton	m.sg.
702	žęlo	n.
2208	želųď	m.
16	želųdȯk	m.
2910	žena	f.
3231	žena	f.
3399	ženiti sę	v.refl. ipf.
669	žensky rod	m.
5220	žensky	adj.
1201	žerav	m.anim.
36160	žestoky	adj.
36520	žestoky	adj.
1809	žęti	v.tr. ipf.
32982	žętva	f.
23561	žezlo	n.
31486	žgaga	f.
14383	Žid	m.anim.
14384	židovsky	adj.
1997	žila	f.
35223	žilet	m.
20322	žilišče	n.
32837	žiľny	adj.
20836	žirafa	f.
15228	žitelj	m.anim.
28	žiti	v.intr. ipf.
7191	žiti	v.intr. ipf.
14387	žiťje	n.
15684	žiťjeopasny	adj.
36492	žiťjesposobnosť	f.sg.
35596	žiťjesposobny	adj.
22929	žito	n.
22930	žito	n.
22639	živo srěbro	n.sg.
14392	živo	adv.
19460	živobyťje	n.
21251	živopis	m.
21253	živopisec	m.anim.
20327	živosť	f.
1996	život	m.
1464	životina	f.
35507	životinovod	m.anim.
36766	životinsky	adj.
21254	životopis	m.
14398	živy TV-pokaz	m.
970	živy	adj.
1843	žlěb	m.
427	žlěza	f.
31713	žmuriti oči	v.tr. ipf.
31714	žmurky	f.pl.
1670	žȯlč	f.
34739	žȯltěti	v.intr. ipf.
1499	žȯlty	adj.
20837	žȯlv	f.
14403	žopa	f.
32986	žoviaľnosť	f.
32985	žoviaľny	adj.
22962	žravy	adj.
16346	žrěbę	n.
35265	žrěbec	m.anim.
1867	žrěbętko	n.
34178	žrěbiti sę	v.refl. ipf.
35703	žrec	m.anim.
15686	žrěńje	n.sg.
91	žrěti	v.tr. ipf.
35704	žrica	f.
2940	žrlo	n.
22963	žrlo	n.
5064	žrtva	f.
21255	žrtva	f.
14407	žrtvena koza	f.
14409	žrtveny byk	m.anim.
32022	žrtveny kozel	m.anim.
14408	žrtveny	adj.
1490	žrtvovati	v.tr. ipf.
15744	žučji	adj.
15743	žuk	m.anim.
32020	žuravina	f.
22433	žuri	m.indecl.
4856	žurnal	m.
1974	žurnalist	m.anim.
23581	žurnalistika	f.
34067	žuvačka	f.
34068	žuvaľna gumka	f.
2627	žuvati	v.intr. ipf.
19473	žužati	v.intr. ipf.
9475	žuželka	f.
`);

export function getCases(nth: number, outOf: number): Entry[] {
    return data.filter((_item, index) => {
        return nth === (index % outOf);
    });
}
