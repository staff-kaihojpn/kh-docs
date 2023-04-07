import ExportedImage from "next-image-export-optimizer";
import Logo from 'assets/logo.svg'

/** @type {import('@nextra-theme/clean').NextraBlogTheme} */
export default {
  siteLogo: <Logo className="dark:nx-fill-white" height={42} />,
  components: {
    img: ({src}) => {
      return (
        <ExportedImage src={`${src}`} alt="Static Image" layout="responsive" width={1920} height={1920}/>
      )
    }
  },
  darkMode: true,
  siteName: "開豊ジャパン"
}