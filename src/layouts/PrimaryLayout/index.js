import React from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

const PrimaryLayout = ({
  addClass,
  children,
  columnSize = "xs-6",
  padding = null,
}) => (
  <div>
    <Header />
    <main>
      <div className="container">
        <div className={`row ${addClass}`}>
          <div className={`col-${columnSize}`}>
            {!padding ? children : <div className={padding}>{children}</div>}
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
)

export default PrimaryLayout
