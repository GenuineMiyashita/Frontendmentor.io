import "./card.styles.css";
import ArchivistModal from "../modal/archivistModal.component";
import EnchanterModal from "../modal/enchanterModal.component";
import PrayermakerModal from "../modal/prayermakerModal.component";

const Card = () => {
  return (
    <>
      <main>
        <h1
          id="pickClass"
          className="text-center mb-4 text-2xl font-Marcellus bg-slate-500/25 mx-auto rounded-lg"
        >
          Choose Your Advanced Class
        </h1>
        <div
          id="mainContainer"
          className="w-80 rounded-lg shadow-xl overflow-hidden"
        >
          <div
            id="archivistContainer"
            className="bg-archivistBackground bg-no-repeat bg-cover h-48"
          >
            <div className="text-center h-full flex flex-col justify-center bg-gray-400/20">
              <h2 className="font-Marcellus text-3xl font-bold text-black mb-4 bg-slate-400/20 shadow-sm tracking-wide">
                Archivist
              </h2>
              <ArchivistModal />
            </div>
          </div>
          <div
            id="enchanterContainer"
            className="bg-enchanterBackground bg-no-repeat bg-cover h-48"
          >
            <div className="text-center h-full flex flex-col justify-center bg-gray-400/20">
              <h2 className="font-Marcellus text-3xl font-bold text-black mb-4 bg-slate-400/20 shadow-sm tracking-wide">
                Enchanter
              </h2>
              <EnchanterModal />
            </div>
          </div>
          <div
            id="prayermakerContainer"
            className="bg-prayermakerBackground bg-no-repeat bg-cover h-48"
          >
            <div className="text-center h-full flex flex-col justify-center bg-gray-400/20">
              <h2 className="font-Marcellus text-3xl font-bold text-black mb-4 bg-slate-400/20 shadow-sm tracking-wide">
                Prayermaker
              </h2>
              <PrayermakerModal />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Card;
