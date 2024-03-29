import connection from "../connection";

interface Paginate {
    offset: number;
    limit: number;
}
interface PokemonProps {
    id: number;
    name: string;
    image: string;
    description: Text;
    season: string;
}

class PokemonRepository {
    async getPokemons(offset: number, limit: number): Promise<PokemonProps[]| unknown>{
        try {
            const result: PokemonProps[] = await connection("pokemon_type_pivo")
                .innerJoin(
                    "pokemons",
                    "pokemons.id",
                    "=",
                    "pokemon_type_pivo.pokemon_id"
                )
                .innerJoin(
                    "pokemon_type",
                    "pokemon_type.id",
                    "=",
                    "pokemon_type_pivo.type_id"
                )
                .select("pokemons.*", "pokemon_type.type")
                .offset(offset)
                .limit(limit);

            return result;
        } catch (error) {
            return error;
        }
    };

    async getAnPokemon(name: string): Promise<PokemonProps[]| unknown> {
        try {
            const result: PokemonProps[] = await connection("pokemon_type_pivo")
                .innerJoin(
                    "pokemons",
                    "pokemons.id",
                    "=",
                    "pokemon_type_pivo.pokemon_id"
                )
                .innerJoin(
                    "pokemon_type",
                    "pokemon_type.id",
                    "=",
                    "pokemon_type_pivo.type_id"
                )
                .select("pokemons.*", "pokemon_type.type")
                .where("name", name);

            return result;
        } catch (error) {
            return error;
        }
    };
}

export default PokemonRepository;
