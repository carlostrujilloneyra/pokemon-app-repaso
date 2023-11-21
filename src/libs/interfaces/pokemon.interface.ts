export interface APIResults {
  count: number;
  next: string;
  previous: null;
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
}

export interface SimplePokemon {
  id: string;
  name: string;
}
