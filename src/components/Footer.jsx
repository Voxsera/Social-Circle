export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>
          © {new Date().getFullYear()} Social Sircle. All buzz reserved.
        </span>
        <div className="footer__links">
          <a
            href="https://www.instagram.com/socialsircleindia/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a href="mailto:hello@socialsircle.in">Email</a>
          <a href="#top">Back to top</a>
        </div>
      </div>
      <div className="container footer__credit">
        <a href="https://voxsera.com" target="_blank" rel="noreferrer">
          Built by <strong>Voxsera AI Solutions</strong>
        </a>
      </div>
    </footer>
  )
}
