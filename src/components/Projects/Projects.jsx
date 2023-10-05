import "./Projects.css"
import Project from "../Project/Project";

const Projects = () => {
    return (
        <>
            <div className="title">
                My Projects
            </div>
            <div className="container">
                <Project name="42sh" subname="Création d'un shell" image="https://imgs.search.brave.com/nyVfKHSAhiyOXlxRiYdPMbRsioaqWwh4zyG3N3SdNS0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bGlmZXdpcmUuY29t/L3RobWIveUlEbVEz/S1VBZ1lEMnJ1N0Va/bzRTY0lqSVFJPS8x/NTAweDAvZmlsdGVy/czpub191cHNjYWxl/KCk6bWF4X2J5dGVz/KDE1MDAwMCk6c3Ry/aXBfaWNjKCkvdGVy/bWluYWwtY29tbWFu/ZC1wcm9tcHQtd2lu/ZG93cy0xMS1mMmE1/Y2U1NWY4N2U0OWMy/ODNlOGIwYjc2YjE0/ZjdiNC5wbmc" />
                <Project name="Wolfram (Elementary Cellular Automaton)" subname="Algorithme de génération d'image (Haskell)" image="https://imgs.search.brave.com/jq3E9ikTS6msTNV5uYe-4K5drz7qa8BHt2ql7Sfbmao/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2FhL1J1bGUzMC0y/NTYtcm93cy5wbmc" />
                <Project name="Image Compressor (K-Means)" subname="Algorithme de compression d'image (Haskell)" image="https://imgs.search.brave.com/B5GDXC_r_0XsLjOGSxLf8VzMZ3MdkdkmBz-erD-FSa8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/djIvMSpxVlJBdVZX/Q0NTU29pNzEwbkJ0/U2tRLnBuZw" />
                <Project name="R-Type (Work in progress)" subname="Jeu multijoueur (C++)" image="https://imgs.search.brave.com/AZHHUQDl5FssH2GUUJkohmB8CrPDXgeNmLwEGQjbRgo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9nZWVr/YmVjb2lzLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMy8w/NC9yLXR5cGUtZmlu/YWwtMy1ldm9sdmVk/LTktc2NhbGVkLmpw/Zw" />
            </div>
        </>
    )
}

export default Projects;
