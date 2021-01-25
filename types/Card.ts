import { Color } from '@/types/Color';
import { Set } from '@/types/Set';

enum UniqueStrategy {
	cards,
	art,
	prints,
}

enum Sort {
	name,
	set,
	released,
	rarity,
	color,
	usd,
	tix,
	eur,
	cmc,
	power,
	toughness,
	edhrec,
	artist,
}

enum SortDirection {
	auto,
	asc,
	desc,
}

export interface SearchOptions {
	unique?: keyof typeof UniqueStrategy;
	order?: keyof typeof Sort;
	dir?: keyof typeof SortDirection;
	include_extras?: boolean;
	include_multilingual?: boolean;
	include_variations?: boolean;
	/**
	 * The page to start on. Defaults to `1`, for first page. A page is 175 cards.
	 */
	page?: number;
}

enum Rarity {
	common,
	uncommon,
	rare,
	mythic,
}

enum FrameEffect {
	legendary,
	miracle,
	nyxtouched,
	draft,
	devoid,
	tombstone,
	colorshifted,
	inverted,
	sunmoondfc,
	compasslanddfc,
	originpwdfc,
	mooneldrazidfc,
	moonreversemoondfc,
	showcase,
	extendedart,
}

enum Game {
	paper,
	arena,
	mtgo,
}

enum Legality {
	legal,
	not_legal,
	restricted,
	banned,
}

enum Border {
	black,
	borderless,
	gold,
	silver,
	white,
}

enum Layout {
	normal,
	split,
	flip,
	transform,
	meld,
	leveler,
	saga,
	adventure,
	planar,
	scheme,
	vanguard,
	token,
	double_faced_token,
	emblem,
	augment,
	host,
	art_series,
	double_sided,
}

enum Format {
	standard,
	future,
	historic,
	pioneer,
	modern,
	legacy,
	pauper,
	vintage,
	penny,
	commander,
	brawl,
	duel,
	oldschool,
}

export type Legalities = {
	[key in keyof typeof Format]: keyof typeof Legality;
};

export interface ImageUris {
	small: string;
	normal: string;
	large: string;
	png: string;
	art_crop: string;
	border_crop: string;
}

export interface Prices {
	usd?: string | null;
	usd_foil?: string | null;
	eur?: string | null;
	tix?: string | null;
}

export interface PurchaseUris {
	tcgplayer?: string | null;
	cardmarket?: string | null;
	cardhoarder?: string | null;
	[key: string]: string | null | undefined;
}

export interface RelatedUris {
	gatherer?: string | null;
	tcgplayer_decks?: string | null;
	edhrec?: string | null;
	mtgtop8?: string | null;
	[key: string]: string | null | undefined;
}

enum RelatedCardComponent {
	token,
	meld_part,
	meld_result,
	combo_piece,
}

export interface RelatedCard {
	object: 'related_card';

	id: string;
	component: keyof typeof RelatedCardComponent;
	name: string;
	type_line: string;
	uri: string;
}

export interface CardFace {
	object: 'card_face';

	artist?: string | null;
	color_indicator?: Color[] | null;
	colors: Color[];
	flavor_text?: string | null;
	illustration_id?: string | null;
	image_uris?: ImageUris | null;
	loyalty?: string | null;
	mana_cost: string;
	name: string;
	oracle_text?: string | null;
	power?: string | null;
	printed_name?: string | null;
	printed_text?: string | null;
	printed_type_line?: string | null;
	toughness?: string | null;
	type_line: string;
	watermark?: string | null;
}

export interface Preview {
	previewed_at?: string | null;
	source_uri?: string | null;
	source?: string | null;
}

enum PromoType {
	tourney,
	prerelease,
	datestamped,
	planeswalkerdeck,
	buyabox,
	judgegift,
	event,
	convention,
	starterdeck,
	instore,
	setpromo,
	fnm,
	openhouse,
	league,
	draftweekend,
	gameday,
	release,
	intropack,
	giftbox,
	duels,
	wizardsplaynetwork,
	premiereshop,
	playerrewards,
	gateway,
	arenaleague,
}

export interface Card {
	object: 'card';

	// Core
	arena_id?: number | null;
	id: string;
	lang: string;
	mtgo_id?: number | null;
	mtgo_foil_id?: number | null;
	multiverse_ids?: number[] | null;
	tcgplayer_id?: number | null;
	oracle_id: string;
	prints_search_uri: string;
	rulings_uri: string;
	scryfall_uri: string;
	uri: string;

	// Gameplay
	all_parts?: RelatedCard[] | null;
	card_faces?: CardFace[] | null;
	cmc: number;
	colors?: Color[] | null;
	color_identity: Color[];
	color_indicator?: Color[] | null;
	edhrec_rank?: number | null;
	foil: boolean;
	hand_modifier?: string | null;
	layout: keyof typeof Layout;
	legalities: Legalities;
	life_modifier?: string | null;
	loyalty?: string | null;
	mana_cost?: string | null;
	name: string;
	nonfoil: boolean;
	oracle_text?: string | null;
	oversized: boolean;
	power?: string | null;
	reserved: boolean;
	toughness?: string | null;
	type_line: string;

	// Print
	artist?: string | null;
	artist_ids?: string[] | null;
	booster: boolean;
	border_color: keyof typeof Border;
	card_back_id: string;
	collector_number: string;
	digital: boolean;
	flavor_text?: string | null;
	frame_effects?: (keyof typeof FrameEffect)[] | null;
	frame: '1993' | '1997' | '2003' | '2015' | 'Future';
	full_art: boolean;
	games: (keyof typeof Game)[];
	highres_image: boolean;
	illustration_id?: string | null;
	image_uris?: ImageUris | null;
	prices: Prices;
	printed_name?: string | null;
	printed_text?: string | null;
	printed_type_line?: string | null;
	promo: boolean;
	promo_types?: (keyof typeof PromoType)[] | null;
	purchase_uris: PurchaseUris;
	rarity: keyof typeof Rarity;
	related_uris: RelatedUris;
	released_at: string;
	reprint: boolean;
	scryfall_set_uri: string;
	set_name: string;
	set_search_uri: string;
	set_type: Set['set_type'];
	set_uri: string;
	set: string;
	story_spotlight: boolean;
	textless: boolean;
	variation: boolean;
	variation_of?: string | null;
	watermark?: string | null;
	preview?: Preview | null;
}
