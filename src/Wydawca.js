function Wydawca (props) {
	return <div className="wydawca">
	<h1>{ props["Pełna nazwa wydawcy"] }</h1>
	<span className="index">#{props.index}</span>
	{props["Ulica"] && <p>Adres: {props["Ulica"]} {props["Nr"]}{props["Lokal"] ? "/" + props["Lokal"] : ""}, {props["kod"]} {props["Miejscowość"]}</p>}
	{props["Tel"] && <p>Telefon: {props["Tel"]}</p>}
	{props["e-mail"] && <p>e-mail: {props["e-mail"]}</p>}
	{props["www"] && <a href={props["www"]}>{props["www"]}</a>}
	</div>;
}

export default Wydawca