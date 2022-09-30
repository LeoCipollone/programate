import Link from "../Link";

const Roadmaps = () => {
    return (
        <div className="url-container">
            <Link url="https://roadmap.sh/" title={"Roadmap General"} />
            <Link url="https://roadmap.sh/frontend" title={"Roadmap Frontend"} />
            <Link url="https://roadmap.sh/backend" title={"Roadmap Backend"} />
            <Link url="https://roadmap.sh/devops" title={"Roadmap DevOps"} />
            <Link url="https://roadmap.sh/android" title={"Roadmap Android"} />
            <Link url="https://roadmap.sh/qa" title={"Roadmap QA"} />
            <Link url="https://roadmap.sh/postgresql-dba" title={"Roadmap DB Administrator"} />
            <Link url="https://roadmap.sh/software-architect" title={"Roadmap Software Architect"} />
            <Link url="https://roadmap.sh/blockchain" title={"Roadmap Blockchain"} />
        </div>
    );
}

export default Roadmaps;