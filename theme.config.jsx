import ExportedImage from "next-image-export-optimizer";


/* eslint sort-keys: error */
export default {
  components: {
    h1: ({ children }) => (
      <h1 style={{
        // WebkitBackgroundClip: 'text',
        // WebkitTextFillColor: 'transparent',
        // backgroundClip: 'text',
        // backgroundImage: 'linear-gradient(90deg,#A34D0B,#CFC800)',
      }}
      >
        {children}
      </h1>
    ),
    img: ({src}) => {
      return (
        <ExportedImage src={`${src}`} alt="Static Image" layout="responsive" width={1920} height={1920}/>
      )
    }
  },
  darkMode: true,
  siteName: "開豊ジャパン"
}