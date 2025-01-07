import { useState } from 'react'
import projects from '../../projects'
import ProjectCard from './ProjectCard'

const ProjectsList = () => {
    const [search, setSearch] = useState("")
    const [selectedPhase, setSelectedPhase] = useState("")

    const handleChange = e => setSearch(e.target.value)

    const renderProjectCards = () => {
        if (search || selectedPhase) {
            return projects.filter(p => {
                return p.name.toLowerCase().includes(search.toLowerCase()) && p.phase.includes(selectedPhase)
            }).map(p => <ProjectCard key={p.id} {...p} />)
        } else {
            return projects.map(p => <ProjectCard key={p.id} {...p} />)
        }   
    }

    return (
        <section>
            <h2>Projects</h2>

            <div className="filter">
                <button onClick={() => setSelectedPhase("")}>All</button>
                <button onClick={() => setSelectedPhase("5")}>Phase 5</button>
                <button onClick={() => setSelectedPhase("4")}>Phase 4</button>
                <button onClick={() => setSelectedPhase("3")}>Phase 3</button>
                <button onClick={() => setSelectedPhase("2")}>Phase 2</button>
                <button onClick={() => setSelectedPhase("1")}>Phase 1</button>
            </div>
            <input 
                onChange={handleChange}
                type="text" 
                placeholder="Search..."
            />

            <ul className="cards">{renderProjectCards()}</ul>
        </section>
    )
}

export default ProjectsList