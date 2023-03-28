import ExportedImage from "next-image-export-optimizer";


/* eslint sort-keys: error */
export default {
  components: {
    h1: ({ children }) => (
      <h1 style={{
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        backgroundImage: 'linear-gradient(90deg,#7928CA,#FF0080)',
      }}
      >
        {children}
      </h1>
    ),
    img: ({src}) => {
      return (
        <ExportedImage
          src={`${src}`}
          alt="Static Image"
          layout="responsive"
        />
      )
    }
  },
  darkMode: true,
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      {new Date().getFullYear()} © 開豊ジャパン
      <a href="/feed.xml">RSS</a>
      <style jsx>{`
        a {
          float: right;
        }

        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  )
}