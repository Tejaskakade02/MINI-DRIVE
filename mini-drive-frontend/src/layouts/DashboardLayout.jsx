import React from "react";
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import "../styles/DashboardLayout.css";
import FileList from "../components/FileList";
import { useFiles, formatBytes } from "../state/useFiles";


const DashboardLayout = () => {

  const fs = useFiles();
  <DashboardHeader query={fs.query} onQuery={fs.setQuery} />

  return (
    <div className="app-shell">
      <Sidebar />

      <main className="main-area">
        <DashboardHeader />

        <div className="grid-2">
          {/* Center column */}
          <section className="center-column">
            {/* <div className="section">
              <h3 className="section-title">Categories</h3>
              <div className="cards-4">
                <div className="cat-card cat-purple">
                  <div className="cat-icon">📷</div>
                  <div className="cat-title">
                    Pictures <span className="cat-badge">★</span>
                  </div>
                  <div className="cat-sub">480 files</div>
                </div>

                <div className="cat-card cat-teal">
                  <div className="cat-icon">📄</div>
                  <div className="cat-title">Documents</div>
                  <div className="cat-sub">190 files</div>
                </div>

                <div className="cat-card cat-pink">
                  <div className="cat-icon">🎬</div>
                  <div className="cat-title">Videos</div>
                  <div className="cat-sub">30 files</div>
                </div>

                <div className="cat-card cat-blue">
                  <div className="cat-icon">🎤</div>
                  <div className="cat-title">Audio</div>
                  <div className="cat-sub">80 files</div>
                </div>
              </div>
            </div> */}

            {/* Files buckets */}
            {/* <div className="section">
              <h3 className="section-title">Files</h3>
              <div className="cards-5">
                <div className="file-bucket">
                  <div className="bucket-icon">📁</div>
                  <div className="bucket-title">Work</div>
                  <div className="bucket-sub">820 files</div>
                </div>
                <div className="file-bucket">
                  <div className="bucket-icon">👤</div>
                  <div className="bucket-title">Personal</div>
                  <div className="bucket-sub">115 files</div>
                </div>
                <div className="file-bucket">
                  <div className="bucket-icon">🎓</div>
                  <div className="bucket-title">School</div>
                  <div className="bucket-sub">65 files</div>
                </div>
                <div className="file-bucket">
                  <div className="bucket-icon">🗃️</div>
                  <div className="bucket-title">Archive</div>
                  <div className="bucket-sub">21 files</div>
                </div>
                <button className="bucket-add">＋</button>
              </div>
            </div> */}

            {/* Recent files */}
            <div className="section">
              <h3 className="section-title">Recent files</h3>
              <ul className="recent-list">
                <li className="recent-row">
                  <div className="recent-left">
                    <span className="recent-dot purple"></span>
                    <span className="recent-name">IMG_100000</span>
                  </div>
                  <div className="recent-meta">PNG file</div>
                  <div className="recent-meta">5 MB</div>
                  <button className="recent-share" onClick={() => fs.actions.share("f1")}>🔗</button>
                  <button className="recent-more" onClick={() => fs.showDetails("f1")}>⋯</button>

                </li>

                <li className="recent-row">
                  <div className="recent-left">
                    <span className="recent-dot pink"></span>
                    <span className="recent-name">Startup pitch</span>
                  </div>
                  <div className="recent-meta">AVI file</div>
                  <div className="recent-meta">105 MB</div>
                  <button className="recent-share" onClick={() => fs.actions.share("f1")}>🔗</button>
                  <button className="recent-more" onClick={() => fs.showDetails("f1")}>⋯</button>

                </li>

                <li className="recent-row">
                  <div className="recent-left">
                    <span className="recent-dot blue"></span>
                    <span className="recent-name">Freestyle beat</span>
                  </div>
                  <div className="recent-meta">MP3 file</div>
                  <div className="recent-meta">21 MB</div>
                  <button className="recent-share" onClick={() => fs.actions.share("f1")}>🔗</button>
                  <button className="recent-more" onClick={() => fs.showDetails("f1")}>⋯</button>

                </li>

                <li className="recent-row">
                  <div className="recent-left">
                    <span className="recent-dot teal"></span>
                    <span className="recent-name">Work proposal</span>
                  </div>
                  <div className="recent-meta">DOCx file</div>
                  <div className="recent-meta">500 kb</div>
                  <button className="recent-share" onClick={() => fs.actions.share("f1")}>🔗</button>
                  <button className="recent-more" onClick={() => fs.showDetails("f1")}>⋯</button>

                </li>
              </ul>
            </div>

            {/* My files grid/cards (optional) */}
            {/* <FileList /> */}
          </section>

          {/* Right column */}
          <aside className="right-column">
            <div className="upload-tile">
              <div className="upload-icon">⤴️</div>
              <div className="upload-text">Add new files</div>
            </div>

            <div className="storage-card">
              <div className="storage-title">
                Your storage <span className="storage-left">25% left</span>
              </div>
              <div className="storage-sub">75 GB of 100 GB are used</div>
              <div className="progress-rail">
                <div className="progress-bar" style={{ width: "75%" }} />
              </div>
            </div>

            {/* <div className="shared-card">
              <div className="shared-title">Your shared folders</div>

              <div className="shared-row sky">
                <div className="shared-name">Keynote files</div>
                <div className="shared-avatars">
                  <span className="ava"></span>
                  <span className="ava"></span>
                </div>
              </div>

              <div className="shared-row lavender">
                <div className="shared-name">Vacation photos</div>
                <div className="shared-avatars">
                  <span className="ava"></span>
                </div>
              </div>

              <div className="shared-row pinky">
                <div className="shared-name">Project report</div>
                <div className="shared-avatars">
                  <span className="ava"></span>
                  <span className="ava"></span>
                </div>
              </div>

              <button className="add-more">+ Add more</button>
            </div> */}
          </aside>
        </div>
        {fs.selected && (
          <div className="details-drawer">
            {(() => {
              const f = fs.get(fs.selected);
              if (!f) return null;
              return (
                <div className="details-panel">
                  <div className="details-head">
                    <div className="details-icon">🗂️</div>
                    <div>
                      <div className="details-name">{f.name}</div>
                      <div className="details-sub">{f.kind} • {formatBytes(f.size)}</div>
                    </div>
                    <button className="details-close" onClick={fs.hideDetails}>✕</button>
                  </div>

                  <div className="details-grid">
                    <div>
                      <div className="label">Type</div>
                      <div className="value">{f.type}</div>
                    </div>
                    <div>
                      <div className="label">Path</div>
                      <div className="value">{f.path}</div>
                    </div>
                    <div>
                      <div className="label">Uploaded</div>
                      <div className="value">{f.uploaded}</div>
                    </div>
                    <div>
                      <div className="label">Status</div>
                      <div className="value">{f.status}</div>
                    </div>
                    <div>
                      <div className="label">Owners</div>
                      <div className="value">{(f.owners || []).join(", ")}</div>
                    </div>
                  </div>

                  <div className="details-actions">
                    <button onClick={() => fs.actions.download(f.id)}>Download</button>
                    <button onClick={() => fs.actions.share(f.id)}>Share</button>
                    <button className="danger" onClick={() => { fs.actions.remove(f.id); fs.hideDetails(); }}>Delete</button>
                  </div>
                </div>
              );
            })()}
          </div>
        )}
        {fs.toast && (
          <div className="toast">
            <span>{fs.toast.message}</span>
            {fs.toast.actionLabel && (
              <button onClick={() => { fs.toast.onAction?.(); fs.setToast(null); }}>
                {fs.toast.actionLabel}
              </button>
            )}
            <button className="toast-close" onClick={() => fs.setToast(null)}>✕</button>
          </div>
        )}

      </main>
    </div>
  );
};

export default DashboardLayout;
