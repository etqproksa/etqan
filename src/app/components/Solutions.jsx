import {
  DatabaseBackup,
  UserRoundCog,
  MonitorCog ,
  Drill,
  TrendingUpDown ,
  IdCard ,
  BrickWallFire ,
  BrainCircuit,
  GlobeLock,
  User
} from "lucide-react"
export default function Solutions() {
  return (
      <section className="container" style={{marginTop:"100px"}}>
        <div className="row">
          <div className="col-lg-4 text-center text-lg-start pb-3 pb-lg-0 mb-4 mb-lg-0">
            <h2 className="h1 mb-lg-4">Highly Innovative Technology &amp; Solutions</h2>
            <p className="pb-4 mb-0 mb-lg-3">We appreciate your trust greatly. Our patients choose us and our services because they know we are the best. We offer complete health care to individuals with various health concerns.</p>
            <a href="#" className="btn btn-primary shadow-primary btn-lg">All services</a>
          </div>
          <div className="col-xl-7 col-lg-8 offset-xl-1">
            <div className="row row-cols-1 row-cols-md-2">
              <div className="col">
                <div className="card card-hover bg-secondary border-0 mb-4">
                  <div className="card-body d-flex align-items-start">
                    <div className="flex-shrink-0 bg-light rounded-3 p-3">
                    <GlobeLock size={32} />
                    </div>
                    <div className="ps-4">
                      <h3 className="h5 pb-2 mb-1">Network Security</h3>
                      <p className="pb-2 mb-1">Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                      <a href="services-single-v2.html" className="btn btn-link stretched-link px-0">
                        Learn more
                        <i className="bx bx-right-arrow-alt fs-xl ms-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card card-hover bg-secondary border-0 mb-4">
                  <div className="card-body d-flex align-items-start">
                    <div className="flex-shrink-0 bg-light rounded-3 p-3">
                     <DatabaseBackup size={32} />
                    </div>
                    <div className="ps-4">
                      <h3 className="h5 pb-2 mb-1">Data Center</h3>
                      <p className="pb-2 mb-1">Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
                      <a href="services-single-v2.html" className="btn btn-link stretched-link px-0">
                        Learn more
                        <i className="bx bx-right-arrow-alt fs-xl ms-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card card-hover bg-secondary border-0 mb-4">
                  <div className="card-body d-flex align-items-start">
                    <div className="flex-shrink-0 bg-light rounded-3 p-3">
                      <BrickWallFire size={32} />
                    </div>
                    <div className="ps-4">
                      <h3 className="h5 pb-2 mb-1">Email Data Protection</h3>
                      <p className="pb-2 mb-1">Faucibus cursus maecenas lorem cursus nibh.</p>
                      <a href="services-single-v2.html" className="btn btn-link stretched-link px-0">
                        Learn more
                        <i className="bx bx-right-arrow-alt fs-xl ms-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-hover bg-secondary border-0 mb-4">
                  <div className="card-body d-flex align-items-start">
                    <div className="flex-shrink-0 bg-light rounded-3 p-3">
                    <MonitorCog size={32}/>
                    </div>
                    <div className="ps-4">
                      <h3 className="h5 pb-2 mb-1">Monitory & Optimization</h3>
                      <p className="pb-2 mb-1">Augue pulvinar justo, fermentum fames aliquam.</p>
                      <a href="services-single-v2.html" className="btn btn-link stretched-link px-0">
                        Learn more
                        <i className="bx bx-right-arrow-alt fs-xl ms-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card card-hover bg-secondary border-0 mb-4">
                  <div className="card-body d-flex align-items-start">
                    <div className="flex-shrink-0 bg-light rounded-3 p-3">
                       <UserRoundCog size={32}/>
                    </div>
                    <div className="ps-4">
                      <h3 className="h5 pb-2 mb-1">Identity & Access Management</h3>
                      <p className="pb-2 mb-1">Ullamcorper in magna varius quisque </p>
                      <a href="services-single-v2.html" className="btn btn-link stretched-link px-0">
                        Learn more
                        <i className="bx bx-right-arrow-alt fs-xl ms-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card card-hover bg-secondary border-0 mb-4">
                  <div className="card-body d-flex align-items-start">
                    <div className="flex-shrink-0 bg-light rounded-3 p-3">
                      <IdCard size={28} />
                    </div>
                    <div className="ps-4">
                      <h3 className="h5 pb-2 mb-1">Brand Identity Protection</h3>
                      <p className="pb-2 mb-1">Faucibus cursus maecenas lorem cursus nibh.</p>
                      <a href="services-single-v2.html" className="btn btn-link stretched-link px-0">
                        Learn more
                        <i className="bx bx-right-arrow-alt fs-xl ms-2"></i>
                      </a>
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
