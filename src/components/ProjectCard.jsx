import { useState } from "react"

const ProjectCard = ({name, about, phase, image, link, claps}) => {
    const [adjClaps, setAdjClaps] = useState(claps)

    const handleClick = () => setAdjClaps(pC => pC + 1)

    return (
        <li className="card">
            <figure className="image">
                <img src={image} alt={name} />
                <button onClick={handleClick} className="claps">👏{adjClaps}</button>
            </figure>

            <section className="details">
                <h4>{name}</h4>
                <p>{about}</p>
                {link ? (
                <p>
                    <a href={link}>Link</a>
                </p>
                ) : null}
            </section>

            <footer className="extra">
                <span className="badge blue">Phase {phase}</span>
            </footer>
        </li>
    )
}

export default ProjectCard