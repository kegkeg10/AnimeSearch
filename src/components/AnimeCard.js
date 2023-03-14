import React from 'react'

function AnimeCard({anime}) {
	return (
		<article className="anime-card">
			<a 
				href={anime.url} 
				target="_blank" 
				rel="noreferrer">
				<figure>
				<img src={ anime.images.jpg.large_image_url }
					alt="Anime Img" />
				</figure>
				<h3>{ anime.title }</h3>
				<h3>Episodes:{ anime.episodes }</h3>
				<h3>Length:{ anime.duration }</h3>
			</a>
		</article>
	)
}

export default AnimeCard