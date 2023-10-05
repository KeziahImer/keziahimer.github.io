import "./Project.css"

const Project = ({ image, name, subname }) => {
    return (
        <div className="project">
            <div className="image">
                <img src={image} alt={name + " image"} />
            </div>
            <div className="description">
                <div className="name">
                    {name}
                </div>
                <div className="subname">
                    {subname}
                </div>
            </div>
        </div>
    );
}

export default Project;
