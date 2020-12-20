import * as React from "react";

export default function CurriculumVitae() {
    return (
        <section>
          <h2 className="text-5xl text-center">Curriculum Vitae</h2>

          <iframe
            frameBorder="0"
            scrolling="no"
            src="https://onedrive.live.com/embed?cid=D5A3B6C8950A0143&resid=D5A3B6C8950A0143%219596&authkey=AMRg4MEOP4uG04M&em=2"
            title="curriculum-vitae"
            className="bg-gray-300 rounded-3xl w-full max-w-screen-md h-screen mx-auto my-8"
          />
        </section>
    );
}