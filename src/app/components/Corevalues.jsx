export default function Corevalues() {
  return (
    <section className="container mb-5 pb-2 pb-md-4 pb-lg-5">
      <div className="card border-0 bg-secondary p-md-5 px-sm-2 pt-4 pb-3">
        <div className="card-body mx-auto" style={{ maxWidth: "860px" }}>
          <h2 className="h1 mb-4 text-center">Our Core Values</h2>
          <p className="mb-4 pb-3 fs-lg text-center text-muted">
            We fully understand your business. If you need to update something, we are more than happy to help you with
            the services we are providing.
          </p>
          {/* Accordion: Alternative style */}
          <div className="accordion" id="accordion-services">
            {/* Item */}
            <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
              <h3 className="accordion-header" id="heading-1">
                <button
                  className="accordion-button fs-xl shadow-none rounded-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-1"
                  aria-expanded="true"
                  aria-controls="collapse-1"
                >
                Integrity
                </button>
              </h3>
              <div
                className="accordion-collapse collapse show"
                id="collapse-1"
                aria-labelledby="heading-1"
                data-bs-parent="#accordion-services"
              >
                <div className="accordion-body pt-0">
                  <div className="d-flex flex-md-row flex-column align-items-md-center">
                    <img
                      src="/assets/img/landing/digital-agency/services/01.png"
                      width="200"
                      alt="Digital Marketing"
                      className="me-md-4 mb-md-0 mb-3"
                    />
                    <div className="ps-md-3">
                      <p className="mb-0">
                        Nisi, sed accumsan tincidunt pulvinar sapien. Neque, adipiscing posuere amet eget cursus mattis
                        egestas nec quam. Tellus in lectus volutpat tellus bibendum. Etiam id phasellus in proin
                        tristique. Semper habitasse volutpat et urna dui sed in pellentesque purus. Convallis viverra
                        faucibus lacus nunc venenatis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Item */}
            <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
              <h3 className="accordion-header" id="heading-2">
                <button
                  className="accordion-button fs-xl shadow-none rounded-3 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-2"
                  aria-expanded="false"
                  aria-controls="collapse-2"
                >
                 Quality
                </button>
              </h3>
              <div
                className="accordion-collapse collapse"
                id="collapse-2"
                aria-labelledby="heading-2"
                data-bs-parent="#accordion-services"
              >
                <div className="accordion-body pt-0">
                  <div className="d-flex flex-md-row flex-column align-items-md-center">
                    <img
                      src="/assets/img/landing/digital-agency/services/02.png"
                      width="200"
                      alt="Web Development"
                      className="me-md-4 mb-md-0 mb-3"
                    />
                    <div className="ps-md-3">
                      <p className="mb-0">
                        Vitae varius euismod egestas egestas lacus. Augue vitae arcu sollicitudin metus iaculis amet, eu
                        at amet. Netus pulvinar tristique ridiculus sed. Viverra ut viverra aenean nisl. Tortor lorem
                        cum congue a. Orci mattis massa tortor magna massa nisi, aliquet risus. Ornare cras aenean
                        pellentesque quam pulvinar at. Libero mollis tortor erat sed. Adipiscing lectus nisi commodo
                        vel. Id augue vitae, hendrerit iaculis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Item */}
            <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
              <h3 className="accordion-header" id="heading-3">
                <button
                  className="accordion-button fs-xl shadow-none rounded-3 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-3"
                  aria-expanded="false"
                  aria-controls="collapse-3"
                >
                  Innovation
                </button>
              </h3>
              <div
                className="accordion-collapse collapse"
                id="collapse-3"
                aria-labelledby="heading-3"
                data-bs-parent="#accordion-services"
              >
                <div className="accordion-body pt-0">
                  <div className="d-flex flex-md-row flex-column align-items-md-center">
                    <img
                      src="/assets/img/landing/digital-agency/services/03.png"
                      width="200"
                      alt="Application Development"
                      className="me-md-4 mb-md-0 mb-3"
                    />
                    <div className="ps-md-3">
                      <p className="mb-0">
                        Morbi tristique justo, ut ac facilisi vel. Faucibus tortor libero commodo maecenas commodo sed.
                        Sapien, vitae senectus turpis enim habitasse ipsum justo. Sagittis vel tortor velit dapibus
                        dictum facilisis dictumst aliquam. Et, tempus euismod non semper vitae egestas semper eget
                        turpis. Eros, pellentesque sed ut faucibus ac egestas leo metus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Item */}
            <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
              <h3 className="accordion-header" id="heading-4">
                <button
                  className="accordion-button fs-xl shadow-none rounded-3 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-4"
                  aria-expanded="false"
                  aria-controls="collapse-4"
                >
                  Customer Focus
                </button>
              </h3>
              <div
                className="accordion-collapse collapse"
                id="collapse-4"
                aria-labelledby="heading-4"
                data-bs-parent="#accordion-services"
              >
                <div className="accordion-body pt-0">
                  <div className="d-flex flex-md-row flex-column align-items-md-center">
                    <img
                      src="/assets/img/landing/digital-agency/services/04.png"
                      width="200"
                      alt="Strategy"
                      className="me-md-4 mb-md-0 mb-3"
                    />
                    <div className="ps-md-3">
                      <p className="mb-0">
                        Non bibendum mauris velit at enim. Vel tellus nunc malesuada pellentesque feugiat nibh mauris
                        blandit. Tempus, ut vulputate feugiat quis molestie sit eu blandit rhoncus. Iaculis eget magna
                        sit eget eget massa. Diam nunc dolor tristique lectus imperdiet. Nunc, vitae etiam venenatis
                        arcu turpis sollicitudin amet sit. Ac dapibus non erat sed. Auctor eleifend mattis scelerisque
                        gravida felis nibh. Habitant nascetur turpis ullamcorper.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
          </div>
        </div>
      </div>
    </section>
  )
}
