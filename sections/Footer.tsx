import BrandLogo from "@/components/BrandLogo"
import Icons from "@/components/Icons"

function Footer() {
    return (
        <footer className="pb-12">
            {/* <hr className="h-px border-t-0 bg-lightPrimary-900 dark:bg-darkPrimary-900 opacity-30"/> */}
            {/* <div className="flex flex-col sm:flex-row py-14">
                <div className="flex flex-col gap-7 sm:w-9/12">
                    <BrandLogo />
                    <p className="text-sm text-[#1E2F40]">Ce portfolio est toujours en cours d’évolution. Développé avec Next.JS, React.JS, Tailwind CSS, Framer motion pour les animations. Design fait avec Figma. Le versionning est géré par GitHub et l’hébergement du site par Vercel. La police pour les titres est Gilroy, celle pour les corps de texte est Open Sans. Les icones utilisés sont celles de la collection Material Rounded provenant du site Icons8.</p>
                </div>
                <div className="flex sm:flex-col gap-10 sm:gap-5 sm:w-3/12 items-center justify-center sm:items-end mt-10 sm:m-0">
                    <a href="https://github.com/FatimaYousif" target="_blank">
                        <Icons name={"github"} size={30}/>
                    </a>
                    <a href="https://www.linkedin.com/in/fatima-yousif/" target="_blank">
                        <Icons name={"linkedin"} size={30}/>
                    </a>
                    <a href="mailto:fyousif30@gmail.com" target="_blank">
                        <Icons name={"mail"} size={25}/>
                    </a>
                </div>
            </div> */}
            {/* <div className="flex flex-col-reverse sm:flex-row text-center justify-center gap-4 sm:gap-20 text-sm opacity-85">
                <a className="hidden" href="http://">Accessibilité : partiellement conforme</a>
                <a href="mailto:fyousif30@gmail.com">fyousif30@gmail.com</a>
                <a href="https://drive.google.com/file/d/1X2iVT3xmAndXXsK57IbVSB6Yy5B09Uh9/view?usp=sharing">Check my CV</a>
            </div> */}
        </footer>
    )
}

export default Footer