import { useEffect, useState } from "react"
import { HomeProps } from "./hero.props"
import { IMovie } from "src/interfaces/app.interface"
import { trace } from "console"
import { randomBytes } from "crypto"
import Image from "next/image"

const Hero = ({ trending }: HomeProps ):JSX.Element => {
  const [movie, setMovie] = useState<IMovie | null>(null)
  console.log(trending);
  
  // useEffect( () => {
  //   const randomMovie = trending[Math.floor(Math.random() * trending.length)]
  //   setMovie(randomMovie)
  //   console.log(randomMovie);

  // }, [])
  console.log(movie);
  return (
    <div>
      <div>
        {/* <Image src={movie?.backdrop_path || movie?.poster_path} alt={movie.title} width={100} height={100}/> */}
      </div>

    </div>
  )
}

export default Hero