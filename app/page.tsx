export default function Home() {
  let name :string = 'sunny'
  let link :string = 'http://google.com'
  return(
    <div>
      <h4 className="title">선영후레시</h4>
      <p className="title-sub">by dev {name}</p>
      <a  href={link}>링크</a>
    </div>
  )
}