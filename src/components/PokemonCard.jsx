function PokemonCard(props) {
    
    return (

        <figure className="card">
            {props.pokemon.imgSrc ? (<img src={props.pokemon.imgSrc} alt={props.pokemon.name} className="card-img"/>) : (<p>???</p>)
            }
            <figcaption>{props.pokemon.name}</figcaption>

        </figure>
    )
}

export default PokemonCard
