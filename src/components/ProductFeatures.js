import React from "react"

const ProductFeatures = props => {
  return (
    <section id="features" className="product-features">
      <h1>Our Services</h1>
      <div className="core-features">
        <div className="core-feature-1">
          <div className="core-feature-1-image">
            <svg
              className="background-feature-1"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillOpacity="0.7"
                fill="#08BDBA"
                d="M55.2,-60.8C66.2,-44.2,66.2,-22.1,65.2,-1C64.2,20.2,62.3,40.3,51.3,50.8C40.3,61.3,20.2,62,-1.2,63.2C-22.5,64.4,-45.1,66,-58.1,55.5C-71.2,45.1,-74.9,22.5,-71.8,3C-68.8,-16.4,-59,-32.9,-46,-49.5C-32.9,-66.1,-16.4,-83,2.8,-85.8C22.1,-88.6,44.2,-77.5,55.2,-60.8Z"
                transform="translate(100 100)"
              />
            </svg>
            <svg
              version="1.1"
              className="icon-hearbeat"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 800 800"
            >
              <g>
                <g>
                  <g>
                    <path
                      d="M108.838,144.435H89.272c-0.877,0-1.588,0.711-1.588,1.589V153c0,0.878,0.711,1.589,1.588,1.589h11.002v55.399
                      c0,0.877,0.711,1.589,1.588,1.589h6.977c0.877,0,1.588-0.711,1.588-1.589v-63.965
                      C110.426,145.146,109.715,144.435,108.838,144.435z"
                    />
                    <path
                      d="M147.228,144.435c-8.545,0-15.563,3.095-20.295,8.949c-4.717,5.836-7.107,14.105-7.107,24.581
                      c0,10.5,2.391,18.791,7.105,24.642c4.732,5.869,11.75,8.973,20.297,8.973c8.572,0,15.609-3.103,20.355-8.97
                      c4.73-5.852,7.131-14.142,7.131-24.645c0-10.477-2.4-18.747-7.131-24.583C162.838,147.529,155.799,144.435,147.228,144.435z
                      M147.228,201.423c-11.445,0-17.248-7.894-17.248-23.459c0-15.511,5.803-23.375,17.248-23.375c11.5,0,17.332,7.865,17.332,23.375
                      C164.56,193.531,158.728,201.423,147.228,201.423z"
                    />
                    <path
                      d="M216.963,175.472c3.611-3.255,5.504-7.658,5.504-12.867c0-11.208-8.312-18.17-21.692-18.17
                      c-13.434,0-21.778,6.962-21.778,18.17c0,5.209,1.893,9.612,5.504,12.867c-5.303,3.586-8.189,9.041-8.189,15.585
                      c0,12.657,9.373,20.52,24.465,20.52c15.037,0,24.381-7.862,24.381-20.52C225.154,184.513,222.266,179.058,216.963,175.472z
                      M200.773,154.588c4.309,0,11.541,1.062,11.541,8.184c0,7.268-7.232,8.353-11.541,8.353c-4.343,0-11.625-1.085-11.625-8.353
                      C189.148,155.652,196.432,154.588,200.773,154.588z M200.773,201.423c-5.347,0-14.313-1.369-14.313-10.534
                      c0-6.108,5.186-9.611,14.229-9.611c9.094,0,14.311,3.534,14.311,9.695C215,200.065,206.086,201.423,200.773,201.423z"
                    />
                    <path
                      d="M254.15,144.435c-8.545,0-15.563,3.095-20.295,8.949c-4.718,5.836-7.107,14.105-7.107,24.581
                      c0,10.5,2.391,18.791,7.107,24.642c4.729,5.869,11.747,8.973,20.295,8.973c8.57,0,15.609-3.103,20.354-8.97
                      c4.732-5.852,7.131-14.142,7.131-24.645c0-10.477-2.396-18.747-7.131-24.583C269.76,147.529,262.721,144.435,254.15,144.435z
                      M254.15,201.423c-11.445,0-17.248-7.894-17.248-23.459c0-15.511,5.803-23.375,17.248-23.375
                      c11.502,0,17.332,7.865,17.332,23.375C271.482,193.531,265.652,201.423,254.15,201.423z"
                    />
                    <path
                      d="M350.346,92.458h-6.502l-3.1,18.445h6.504c5.256,0,10.227-4.129,11.08-9.204
                      C359.184,96.604,355.602,92.458,350.346,92.458z"
                    />
                    <path
                      d="M386.162,93.852L341.203,48.89c-4.324-4.323-11.336-4.323-15.66,0l-9.717,9.716H29.73C13.337,58.606,0,71.943,0,88.337
                      v180.69c0,16.395,13.113,29.73,29.23,29.73h108.18l-11.775,26.495c-1.811,4.07-1.438,8.779,0.99,12.517
                      c2.428,3.735,6.58,5.988,11.035,5.988h94c0.006,0,0.014-0.001,0.02,0c7.27,0,13.16-5.893,13.16-13.16
                      c0-2.168-0.524-4.214-1.453-6.018l-11.477-25.822h107.178c16.67,0,30.232-13.337,30.232-29.73V126.355l16.842-16.844
                      C390.488,105.186,390.488,98.177,386.162,93.852z M306.709,87.28c0.107-0.646,0.721-1.17,1.367-1.17h4.008
                      c0.646,0,1.082,0.524,0.973,1.17l-1.863,11.101h12.75l1.863-11.101c0.109-0.646,0.723-1.17,1.367-1.17h4.008
                      c0.646,0,1.082,0.524,0.975,1.17l-4.838,28.804c-0.107,0.646-0.723,1.17-1.367,1.17h-4.008c-0.646,0-1.082-0.524-0.975-1.17
                      l1.906-11.354h-12.748l-1.908,11.354c-0.107,0.646-0.721,1.17-1.365,1.17h-4.01c-0.646,0-1.082-0.524-0.975-1.17L306.709,87.28z
                      M157.91,317.439l8.303-18.68h36.896l8.304,18.68H157.91z M343,269.029c0,1.978-1.645,3.41-3.912,3.41H29.23
                      c-1.346,0-2.91-1.489-2.91-3.41V88.337c0-1.881,1.529-3.411,3.41-3.411h259.777l-8.926,8.926c-4.324,4.324-4.324,11.333,0,15.658
                      l44.961,44.962c2.164,2.162,4.996,3.243,7.83,3.243c2.832,0,5.666-1.081,7.83-3.243l1.797-1.796L343,269.029L343,269.029z
                      M364.676,101.701c-1.438,8.575-9.736,15.554-18.494,15.554H334.5c-0.646,0-1.08-0.524-0.973-1.17l4.838-28.804
                      c0.108-0.646,0.721-1.17,1.367-1.17h11.68C360.17,86.11,366.119,93.103,364.676,101.701z"
                    />
                  </g>
                </g>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
          </div>
          <h2>High Quality Videos</h2>
          <p>FullHD with background music or Voice over.</p>
        </div>
        <div className="core-feature-3">
          <div className="core-feature-3-image">
            {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#FA4D56"
                fillOpacity="0.8"
                d="M47.7,-57.2C59,-47.3,63.6,-29.7,68.3,-10.9C72.9,7.9,77.8,27.8,71.7,44.2C65.6,60.7,48.6,73.6,33.3,69.7C18.1,65.7,4.7,44.8,-13.2,37.7C-31.1,30.5,-53.5,37.2,-57.9,32.2C-62.3,27.2,-48.6,10.5,-44.1,-6.5C-39.6,-23.5,-44.1,-40.7,-38.3,-51.5C-32.5,-62.4,-16.2,-66.7,1,-67.9C18.2,-69,36.3,-67,47.7,-57.2Z"
                transform="translate(100 100)"
              />
            </svg> */}
            <svg viewBox="0 20 180 180" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#F1C21B"
                fillOpacity="0.7"
                d="M48.2,-46.1C57.2,-39.2,55.7,-19.6,54.6,-1.1C53.5,17.5,53,35,44,43C35,51.1,17.5,49.6,-1.9,51.5C-21.2,53.4,-42.5,58.5,-56.8,50.5C-71.1,42.5,-78.5,21.2,-71.3,7.2C-64.1,-6.8,-42.3,-13.6,-28,-20.5C-13.6,-27.3,-6.8,-34.1,6.4,-40.5C19.6,-46.9,39.2,-52.9,48.2,-46.1Z"
                transform="translate(100 100)"
              />
            </svg>
            <svg
              className="icon-paint"
              viewBox="0 0 700 700"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m293.773438 195.351562-72.097657 68.097657-34.601562-35.597657c-3.835938-3.949218-10.152344-4.039062-14.097657-.203124-3.949218 3.839843-4.039062 10.152343-.203124 14.101562l41.5 42.601562c3.855468 3.878907 10.085937 4.011719 14.101562.296876l79.300781-74.796876c1.925781-1.816406 3.050781-4.324218 3.125-6.96875.074219-2.644531-.90625-5.210937-2.726562-7.132812-3.859375-4.011719-10.222657-4.1875-14.300781-.398438zm0 0" />
              <path d="m240.273438 90.550781c-82.398438 0-149.398438 67-149.398438 149.398438 0 82.402343 67 149.402343 149.398438 149.402343 82.402343 0 149.402343-67 149.402343-149.402343 0-82.398438-67-149.398438-149.402343-149.398438zm0 278.800781c-71.398438 0-129.398438-58.101562-129.398438-129.402343s58-129.398438 129.398438-129.398438c71.46875 0 129.402343 57.933594 129.402343 129.398438 0 71.464843-57.933593 129.402343-129.402343 129.402343zm0 0" />
              <path d="m445.875 184.949219 3.300781-59.300781c.230469-3.980469-1.933593-7.71875-5.5-9.5l-52.800781-26.699219-26.699219-52.800781c-1.816406-3.535157-5.53125-5.6875-9.5-5.5l-59.402343 3.203124-49.5-32.703124c-3.335938-2.199219-7.660157-2.199219-11 0l-49.5 32.703124-59.296876-3.300781c-3.984374-.234375-7.71875 1.929688-9.5 5.5l-26.703124 52.800781-52.796876 26.699219c-3.539062 1.8125-5.6875 5.527344-5.5 9.5l3.296876 59.300781-32.699219 49.5c-2.199219 3.335938-2.199219 7.660157 0 11l32.601562 49.597657-3.300781 59.300781c-.230469 3.980469 1.929688 7.71875 5.5 9.5l52.800781 26.699219 26.699219 52.800781c1.8125 3.539062 5.527344 5.6875 9.5 5.5l59.300781-3.300781 49.5 32.699219c3.316407 2.269531 7.683594 2.269531 11 0l49.5-32.699219 59.300781 3.300781c3.980469.230469 7.714844-1.933594 9.5-5.5l26.699219-52.800781 52.800781-26.699219c3.535157-1.816406 5.6875-5.527344 5.5-9.5l-3.300781-59.300781 32.699219-49.5c2.199219-3.335938 2.199219-7.664063 0-11zm-18.601562 101.800781c-1.21875 1.789062-1.785157 3.941406-1.597657 6.101562l3.097657 56.097657-49.898438 25.199219c-1.902344.953124-3.445312 2.5-4.398438 4.402343l-25.203124 49.898438-56.097657-3.097657c-2.148437-.078124-4.269531.476563-6.101562 1.597657l-46.800781 30.902343-46.796876-30.902343c-1.625-1.097657-3.539062-1.691407-5.5-1.699219h-.5l-56.101562 3.101562-25.199219-49.902343c-.953125-1.902344-2.496093-3.445313-4.402343-4.398438l-50-25.101562 3.101562-56.097657c.078125-2.148437-.480469-4.269531-1.601562-6.101562l-30.898438-46.800781 30.898438-46.800781c1.222656-1.785157 1.789062-3.941407 1.601562-6.097657l-3.101562-56.101562 49.902343-25.199219c1.902344-.953125 3.445313-2.496094 4.398438-4.398438l25.199219-49.902343 56.101562 3.101562c2.144531.074219 4.265625-.480469 6.101562-1.601562l46.796876-30.898438 46.800781 30.898438c1.789062 1.222656 3.945312 1.789062 6.101562 1.601562l56.097657-3.101562 25.203124 49.902343c.953126 1.902344 2.496094 3.445313 4.398438 4.398438l49.898438 25.199219-3.097657 56.101562c-.078125 2.144531.480469 4.265625 1.597657 6.097657l30.902343 46.800781zm0 0" />
            </svg>
          </div>
          <h2>Quality First</h2>
          <p>Client satisfaction is our priority.</p>
        </div>
        <div className="core-feature-3">
          <div className="core-feature-3-image">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#FA4D56"
                fillOpacity="0.8"
                d="M47.7,-57.2C59,-47.3,63.6,-29.7,68.3,-10.9C72.9,7.9,77.8,27.8,71.7,44.2C65.6,60.7,48.6,73.6,33.3,69.7C18.1,65.7,4.7,44.8,-13.2,37.7C-31.1,30.5,-53.5,37.2,-57.9,32.2C-62.3,27.2,-48.6,10.5,-44.1,-6.5C-39.6,-23.5,-44.1,-40.7,-38.3,-51.5C-32.5,-62.4,-16.2,-66.7,1,-67.9C18.2,-69,36.3,-67,47.7,-57.2Z"
                transform="translate(100 100)"
              />
            </svg>
            <svg
              className="icon-wrench"
              viewBox="0 0 700 700"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 316c0 15 6 29 16 40l12 11c10 11 24 16 39 16s29-5 40-16l115-115a128 128 0 0 0 161-124c0-18-3-35-10-51l-1-1v-1l-1-2-1-1-1-1-2-1-1-1-1-1-1-1h-3l-2-1h-3l-2 1h-1l-2 1h-1l-1 1-2 1-1 1-68 68-33-34 67-68 1-1 1-1 1-2 1-1v-2l1-1v-1-2-1-2l-1-2v-1l-1-1v-2l-1-1-1-1-1-1-2-1-1-1-1-1h-1a128 128 0 0 0-175 150L16 276a56 56 0 0 0-16 40zM255 32l16 1-49 49a32 32 0 0 0 0 46l34 34a32 32 0 0 0 45 0l49-49 1 15a96 96 0 0 1-128 90 96 96 0 0 1 32-186zM39 299l106-106 1 2 6 8 3 4c6 8 13 15 21 22l4 2 9 6 1 1L84 344c-9 9-25 10-34 0l-11-11a24 24 0 0 1 0-34zm0 0" />
            </svg>
          </div>
          <h2>Customizable offers</h2>
          <p>Pay only what you need.</p>
        </div>
      </div>
    </section>
  )
}

export default ProductFeatures
