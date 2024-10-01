export default function Header() {

    return <>
        <header>
            <h1 className="header-title">PureSip</h1>
            <div className="searchbar">
                <input type="text" name="search" placeholder="Search..." />
                <span className="searchbar-icon"><i className="fas fa-search"></i></span>
            </div>
        </header>
    </>;
}