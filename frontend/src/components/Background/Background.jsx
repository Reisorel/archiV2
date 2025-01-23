import "./Background.css";
export default function Background({children}) {

  return (
    <div className="global-background">
    {/* Contenu dynamique inséré ici */}
    {children}
  </div>
  )
}
