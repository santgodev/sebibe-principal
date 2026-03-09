"use client";
import { useState } from "react";
import styles from "./PremiumTestimonials.module.css";
import { useLanguage } from "@/context/LanguageContext";

const testimonials = [
    {
        id: 1,
        name: "Juan Hurley Sánchez Guiza",
        age: "19 años",
        image: "/estudiantes/Juan H.png",
        testimonial: "Un joven que experimentó muchas dificultades en su juventud, problemas familiares, luchas con las adicciones y malas amistades eran su estilo de vida. Sin embargo, un día el Señor restauró su vida, su familia y en una visita de una semana al Sebibe tuvo un encuentro con el Señor, lo que lo animó a empezar a estudiar en el seminario. Actualmente, se prepara en el Sebibe con el sueño de llevar el evangelio y servir a la comunidad a través de la preparación de los alimentos, uno de los dones que el Señor le ha dado.",
    },
    {
        id: 2,
        name: "Alveiro Mejia Arango",
        age: "58 años",
        image: "/estudiantes/Alveiro M.png",
        testimonial: "Un hombre rescatado de las drogas, delincuencia y algo más… desperdició su juventud en las adicciones hasta que por malas decisiones fue encarcelado. En el año 1993 conoció al Señor Jesucristo donde experimentó un encuentro personal con el Señor, en el año 2004 llegó a la iglesia de Dios en el barrio Gaitán de Cali. Actualmente se prepara en el seminario y desea servir al Señor con todo su corazón en la obra de la iglesia de Dios, ya que reconoce de donde Jesús rescato su vida.",
    },
    {
        id: 3,
        name: "Sara Sofia Gómez Cardona",
        age: "18 años",
        image: "/estudiantes/Sara G.png",
        testimonial: "Naciendo ante todo pronóstico médico, fue consagrada por sus padres desde su nacimiento. Obedeciendo al llamado de Dios su familia se movilizó a un municipio del departamento del Quindío, para iniciar la plantación de una iglesia. Durante su adolescencia desarrolló liderazgo en su colegio y destacaba por ser una excelente alumna, aunque asistía a la iglesia fue en su último año de colegio que decidió que su liderazgo fuera para la obra del Señor. Actualmente se prepara en SEBIBE para servir a las comunidades vulnerables desarrollando el liderazgo de las mismas, ayudándoles a encontrar su identidad en Dios.",
    },
    {
        id: 4,
        name: "Brayan de Jesús Ripoll",
        age: "33 años",
        image: "/estudiantes/Brayan R.png",
        testimonial: "Abandonado por su padre a los dos años sus abuelos jugaron un rol importante en su vida, en la adolescencia cayó en el mundo de las adicciones. 14 años sumergidos en las adicciones y malas compañías causó dolor en su esposa e hijos y aunque intentó de muchas maneras salir de su adicción fue a través del rechazo de las sociedad que descubrió que Jesús le aceptaba y le estaba esperando. Jesucristo restauró su hogar, su identidad y le dió el deseo de evangelizar y servir junto a su esposa e hijos.",
    },
    {
        id: 5,
        name: "Nataly Vega Manco",
        age: "30 años",
        image: "/estudiantes/Nataly V.png",
        testimonial: "Conocedora del evangelio desde pequeña por su padre, en su adolescencia decidió alejarse del Señor, durante este periodo conoció al que es actualmente su esposo pero su relación estuvo marcada por violencia física, verbal e infidelidades. En medio de ese dolor su matrimonio fue destruido y en medio de este tiempo Nataly decidió orar por su hogar confiando en que el Señor tenía el control de su esposo. Actualmente goza de un esposo amoroso, que ama al Señor y junto con sus dos hijos sueñan compartir el evangelio y compartir su testimonio de la restauración de su hogar.",
    },
    {
        id: 6,
        name: "Kevin Daniel Sánchez Guiza",
        age: "18 años",
        image: "/estudiantes/Kevin.png",
        testimonial: "Desobediente, con problemas familiares, rencores y creyendo que su vida no tenía sentido, aceptó la invitación de su madre a la iglesia, desde ese día se interesó por el Señor y fue en un campamento que escuchó del Seminario y aceptó el llamado de Dios. Dios ha restaurado su carácter, familia y le ha dado una identidad. dejando el rencor de lado y queriendo mostrar el amor de Dios a los que le rodean.",
    },
    {
        id: 7,
        name: "Eric Josué Amortegui Montaño",
        age: "22 años",
        image: "/estudiantes/Eric J.png",
        testimonial: "Hijo de pastores creció en un hogar donde se predicaba el evangelio, sin embargo, su conducta era violenta reaccionando con golpes y palabras hirientes, debido a rencores que había cargado en su corazón. A los 12 años, entendió que el amor de Dios era una realidad en su vida, que le amaba de manera personal y directa. Desde ese momento su corazón endurecido fue transformado por la ternura y amor de Dios. Actualmente a sus 22 años no quiere guardarse lo que el Señor ha hecho por su corazón, quiere pastorear y llevar el amor de Dios a cada corazón.",
    },
    {
        id: 8,
        name: "Juan Samuel David Moreno Hernandez",
        age: "17 años",
        image: "/estudiantes/Samuel D.png",
        testimonial: "Conociendo a Cristo desde su niñez decidió experimentar cosas nuevas, las cuales le llevaron a pensar en el suicidio, ya que sentía que no era apto de estar delante del Señor. Sin embargo, Jesucristo llegó a su vida y habló a su corazón, aceptando el llamado de Dios y el perdón que él ofrece. Actualmente estudia en SEBIBE viviendo una vida en plenitud, quiere seguir sus estudios teológicos y sueña con un despertar en su generación.",
    },
    {
        id: 9,
        name: "Santiago Guevara Rizzo",
        age: "21 años",
        image: "/estudiantes/Santiago G.png",
        testimonial: "Del Caribe Colombiano, Santiago a sus 11 años vivió la separación de sus padres causando vacíos en su corazón llevándolo a independizarse de su madre a los 18 años, sufriendo a la vez una ruptura amorosa, durante este periodo experimentó depresión y ansiedad creyendo que su vida sería así. Fue cuando decidió asistir a una iglesia a la cual en su niñez había ido y fue allí donde empezó a interesarse más por el Señor, en un campamento en el SEBIBE decidió entregar en totalidad su vida, sus dones, su carrera y sus sueños. Goza actualmente de una relación amorosa con sus padres, una vida con propósito y sueña con mover el corazón de Dios.",
    },
    {
        id: 10,
        name: "Ashly Vanessa Mina Urrea",
        age: "18 años",
        image: "/estudiantes/Vanessa.png",
        testimonial: "La menor de 6 hermanos, fue influenciada desde niña por su madre al amor del Señor. Vivió la violencia de su padre hacia su madre y sus hermanos llevando a la ruptura de su hogar. En medio de su dolor por la ruptura de sus padres, su madre junto con uno de sus hermanos decidieron asistir a la iglesia, y desde los 11 años adora al Señor a través del canto. Quiere llevar el evangelio a jóvenes que carecen de amor paternal para demostrarles que como ella pasó de ser rechazada por un padre ahora es la consentida de Dios.",
    },
    {
        id: 11,
        name: "Estefany Aguilar Castillo",
        age: "20 años",
        image: "/estudiantes/Estefany.png",
        testimonial: "Era una joven que vivía en mentira y deshonra, se sentía avergonzada por su pecado. Su madre le hablaba de Dios desde muy pequeña pero el momento en que quiso escuchar fue a los 16 años. Aunque sabía que existía Dios, no lo conocía realmente. Pero en medio de su dolor, volvió a Cristo como el hijo pródigo y comenzó a cambiar su vida. Dios usó al seminario para darle una nueva oportunidad y mostrarle el amor, la gracia y esperanza. Actualmente es maestra de niños, apasionada por ese ministerio que Dios le ha dado.",
    },
    {
        id: 12,
        name: "Jaifer Alejandra Loaiza Mendoza",
        age: "18 años",
        image: "/estudiantes/Jaifer M.png",
        testimonial: "Nació en una familia ya entregada al cristianismo, la cual, por llamado de Dios, tuvo que emigrar de Venezuela a Colombia a plantar una iglesia cuando ella tenía 8 años, lo cual se hizo realidad tras un año de estadía, sirvió en el ministerio infantil a los 9 años, y siempre ha estado presente su llamado pastoral; a pesar de que siempre estuvo participe en el ministerio, su corazón no estaba allí, por causa de la monotonía, durante tres años (15 -17), asistió por compromiso, sin ninguna comunión genuina, por dudar de la presencia de Dios en su vida y su familia, a pesar de todo, su familia siempre destacó por los dones artísticos, en su caso, el baile, lo cual la hizo destacar en este tiempo; desde niña siempre ha estado su sueño de participar en el ministerio como misionera; inevitablemente sintió la falta de Dios en su corazón, lo cual la llevó a buscarlo como Él lo hizo primero por ella, hoy se encuentra formándose en el seminario SEBIBE, para cumplir con su llamado y sueños siempre de la mano de Dios.",
    },
    {
        id: 13,
        name: "Edaifer Jhohana Loaiza Mendoza",
        age: "18 años",
        image: "/estudiantes/Edaifer M.png",
        testimonial: "Desde pequeña creció en la iglesia y en el ministerio infantil, pero su encuentro personal con el Señor ocurrió después de terminar una relación sentimental. Ese momento se convirtió en un punto de transformación en su vida espiritual, donde comenzó a buscar al Señor con mayor profundidad. A partir de entonces nació en ella una pasión especial por la adoración. Descubrió el potencial y el llamado que Dios había puesto en su vida para servirle a través de la alabanza y en otros ministerios que Él quiera que sirva. Hoy, su mayor anhelo y deleite es servir al Señor con todo su corazón, viviendo para honrarle y cumplir el propósito que ha diseñado para su vida.",
    },
    {
        id: 14,
        name: "Juan José Bohorquez Villanueva",
        age: "17 años",
        image: "/estudiantes/Juan José.png",
        testimonial: "En la niñez su familia conoció al Señor, pero fue a través de una crisis económica de su familia donde él conoció la provisión y fidelidad del Señor, sin embargo, Juan por influencias de compañeros del colegio se empezó alejar de la iglesia. En el año 2025 asistió a un campamento en SEBIBE (Vive tu llamado) y desde ese momento decidió rendir su vida al servicio y expansión del reino, actualmente se prepara para impactar a los jóvenes de su comunidad.",
    },
    {
        id: 15,
        name: "Osting David Martinez Fonseca",
        age: "24 años",
        image: "/estudiantes/Osting.png",
        testimonial: "Odio, resentimiento y falta de propósito eran las palabras con las que él podía describir su vida, vivió una vida monótona sirviendo al Señor, en su colegio empezó a escuchar sobre la filosofía y las distintas corrientes ideológicas llevándolo a cuestionarse si en realidad el Señor era real. Fue hasta que una sonrisa amable de un amigo le llevó a conocer al Señor de una manera real, experimentó el amor y la paz que solo Dios puede ofrecer, actualmente se está preparando para a través de la música poder impactar a su generación demostrando que Jesús es la causa, no una casualidad.",
    },
    {
        id: 16,
        name: "Michel Herrera",
        age: "30 años",
        image: "https://api.dicebear.com/7.x/notionists/svg?seed=Michel&backgroundColor=transparent&size=200",
        testimonial: "Desde niño tuvo una vida de dificultades y rechazo lo que llevo que en su adolescencia se sumergiera en el alcohol, malas compañías y un sentimiento de falta de propósito, mientras estudiaba para auxiliar de enfermería y en uno de esos días donde quería huir de todo escucho el testimonio de una de sus profesoras quien a la vez lo invitó a una reunión juvenil, allí empezó a conocer a Dios y desde entonces es un apasionado por Él, actualmente se prepara en el SEBIBE y cada día fortalece su fe en Dios y el propósito que Él tiene para su vida.",
    },
    {
        id: 17,
        name: "Leonel Sanjuanelo",
        age: "19 años",
        image: "/estudiantes/leonel foto.png",
        testimonial: "Aunque no nació en una familia cristiana siempre estuvo interesado por conocer acerca de Dios y el cielo, en sus primeros años fue influenciado principalmente por su hermana, en la adolescencia descubrió su talento por el dibujo y gracias a una pintura que realizó a una alcaldesa recibió beca para estudiar en Santa Marta, en esa ciudad mientras viajaba en un bus escucho del mensaje del evangelio y empezó a acercarse a la Iglesia, los siguientes años fueron de luchas y preguntas, hasta que finalmente en el 2026 decidió prepararse para servirle a Dios de una manera más integral, en un ministerio que seguro será una obra de arte en las manos de Dios.",
    },
    {
        id: 18,
        name: "Jorge Olaya Melo",
        age: "20 años",
        image: "/estudiantes/Jorge O.png",
        testimonial: "Aunque nació en una familia cristiana en Guateque, Boyacá, durante muchos años su relación con la iglesia fue más por costumbre que por convicción. Desde joven sirvió tocando la batería y estuvo involucrado en el ministerio por varios años, pero al poner su mirada en las personas. Con el tiempo comenzó a vivir una vida enfocada en fiestas, comodidades y placeres, pensando que allí encontraría satisfacción, sin embargo, en medio de ese proceso siempre tuvo la certeza de que Dios lo amaba y varias veces escuchó el mismo llamado: no confiarse de su juventud para buscar a Dios después. Aunque intentaba ignorarlo, Dios siguió buscándolo. Finalmente, en el año 2026, durante el campamento Vive tu Llamado comprendió claramente el llamado de Dios para su vida. Allí decidió rendir su vida completamente al Señor y comenzar su preparación en el Seminario SEBIBE, con el deseo de servirle y dedicar su juventud a su obra.",
    },
    {
        id: 19,
        name: "Juan Esteban Villabona Garzón",
        age: "N/A",
        image: "/estudiantes/Esteban.png",
        testimonial: "Un joven hijo de pastores que, por curiosidad y malas decisiones, se apartó de Dios durante varios años. En ese tiempo se dejó llevar por las drogas, peleas y un estilo de vida que lo alejó completamente del Señor. Un día, mientras consumía, tuvo una experiencia que lo hizo reflexionar y entender que ese no era el camino para su vida. Decidió volver a Dios y buscar nuevamente su presencia. Más adelante viajó a El Salvador, donde en la iglesia que asistía su hermana tuvo un encuentro real con el Señor y entregó su vida a Cristo. Hoy testifica que Dios perdonó sus pecados, sanó su ansiedad y transformó su vida.",
    }
];

const testimonialsEnglish = [
    {
        id: 1,
        name: "Juan Hurley Sánchez Guiza",
        age: "19 years",
        image: "/estudiantes/Juan H.png",
        testimonial: "A young man who experienced many difficulties in his youth. Family problems, struggles with addictions, and bad friendships were his lifestyle. However, one day the Lord restored his life and his family, and during a one-week visit to SEBIBE he had an encounter with the Lord that encouraged him to begin studying at the seminary. Today he is preparing at SEBIBE with the dream of bringing the gospel and serving the community through the preparation of food, one of the gifts the Lord has given him.",
    },
    {
        id: 2,
        name: "Alveiro Mejia Arango",
        age: "58 years",
        image: "/estudiantes/Alveiro M.png",
        testimonial: "A man rescued from drugs, crime, and more. He wasted his youth in addictions until, because of bad decisions, he was imprisoned. In 1993 he met the Lord Jesus Christ and experienced a personal encounter with Him. In 2004 he arrived at the Church of God in the Gaitán neighborhood of Cali. Today he is preparing in the seminary and desires to serve the Lord with all his heart in the work of the Church of God, recognizing where Jesus rescued his life from.",
    },
    {
        id: 3,
        name: "Sara Sofia Gómez Cardona",
        age: "18 years",
        image: "/estudiantes/Sara G.png",
        testimonial: "Born against all medical expectations, she was dedicated to the Lord by her parents from birth. Obeying God’s calling, her family moved to a town in the department of Quindío to plant a church. During her teenage years she developed leadership in her school and stood out as an excellent student. Although she attended church, it was in her final year of school that she decided to dedicate her leadership to the work of the Lord. Today she is preparing at SEBIBE to serve vulnerable communities by developing leadership among them and helping them discover their identity in God.",
    },
    {
        id: 4,
        name: "Brayan de Jesús Ripoll",
        age: "33 years",
        image: "/estudiantes/Brayan R.png",
        testimonial: "Abandoned by his father at the age of two, his grandparents played an important role in his life. During his adolescence he fell into the world of addictions. Fourteen years immersed in addiction and bad company caused pain to his wife and children, and although he tried many ways to break free, it was through society’s rejection that he discovered that Jesus accepted him and had been waiting for him. Jesus Christ restored his home, his identity, and gave him the desire to evangelize and serve alongside his wife and children.",
    },
    {
        id: 5,
        name: "Nataly Vega Manco",
        age: "30 years",
        image: "/estudiantes/Nataly V.png",
        testimonial: "She knew the gospel from childhood through her father, but during her teenage years she chose to walk away from the Lord. During that time she met the man who is now her husband, but their relationship was marked by physical and verbal violence and infidelity. In the midst of that pain her marriage was destroyed, and during that time Nataly decided to pray for her home, trusting that the Lord had control over her husband. Today she enjoys a loving husband who loves the Lord, and together with their two children they dream of sharing the gospel and their testimony of how their home was restored.",
    },
    {
        id: 6,
        name: "Kevin Daniel Sánchez Guiza",
        age: "18 years",
        image: "/estudiantes/Kevin.png",
        testimonial: "Disobedient, with family problems, resentment, and believing that his life had no meaning, he accepted his mother’s invitation to attend church. From that day he became interested in the Lord, and it was at a camp where he heard about the seminary and accepted God’s calling. God has restored his character and his family, giving him a new identity. He has left resentment behind and now desires to show God’s love to those around him.",
    },
    {
        id: 7,
        name: "Eric Josué Amortegui Montaño",
        age: "22 years",
        image: "/estudiantes/Eric J.png",
        testimonial: "The son of pastors, he grew up in a home where the gospel was preached. However, his behavior was violent, reacting with blows and hurtful words because of resentment he carried in his heart. At the age of 12 he understood that God’s love was real in his life, that God loved him personally and directly. From that moment his hardened heart was transformed by the tenderness and love of God. Now, at 22 years old, he does not want to keep to himself what the Lord has done in his heart; he wants to pastor and bring the love of God to every heart.",
    },
    {
        id: 8,
        name: "Juan Samuel David Moreno Hernandez",
        age: "17 years",
        image: "/estudiantes/Samuel D.png",
        testimonial: "Knowing Christ since childhood, he decided to experiment with new things that eventually led him to think about suicide, because he felt unworthy to stand before the Lord. However, Jesus Christ came into his life and spoke to his heart, and he accepted God’s calling and the forgiveness that He offers. Today he studies at SEBIBE, living a life in fullness. He wants to continue his theological studies and dreams of a spiritual awakening in his generation.",
    },
    {
        id: 9,
        name: "Santiago Guevara Rizzo",
        age: "21 years",
        image: "/estudiantes/Santiago G.png",
        testimonial: "From the Colombian Caribbean, Santiago experienced the separation of his parents at the age of 11, which created deep emptiness in his heart. At 18 he became independent from his mother and at the same time went through a painful romantic breakup. During that period he experienced depression and anxiety, believing his life would always be that way. Later he decided to attend a church he had gone to as a child, and there he began to take greater interest in the Lord. At a camp at SEBIBE he decided to fully surrender his life, his gifts, his career, and his dreams. Today he enjoys a loving relationship with his parents, a life with purpose, and dreams of moving the heart of God.",
    },
    {
        id: 10,
        name: "Ashly Vanessa Mina Urrea",
        age: "18 years",
        image: "/estudiantes/Vanessa.png",
        testimonial: "The youngest of six siblings, she was influenced from childhood by her mother to love the Lord. She lived through violence from her father toward her mother and siblings, which led to the breakdown of their home. In the midst of that pain, her mother and one of her brothers began attending church, and since the age of 11 she has worshiped the Lord through singing. She desires to bring the gospel to young people who lack a father’s love, showing them that just as she went from being rejected by a father to being cherished by God.",
    },
    {
        id: 11,
        name: "Estefany Aguilar Castillo",
        age: "20 years",
        image: "/estudiantes/Estefany.png",
        testimonial: "She was a young woman living in lies and dishonor, feeling ashamed of her sin. Her mother spoke to her about God from a very young age, but it was at 16 when she finally wanted to listen. Although she knew God existed, she did not truly know Him. In the midst of her pain she returned to Christ like the prodigal son and began to change her life. God used the seminary to give her a new opportunity and show her love, grace, and hope. Today she is a children’s teacher, passionate about the ministry God has given her.",
    },
    {
        id: 12,
        name: "Jaifer Alejandra Loaiza Mendoza",
        age: "18 years",
        image: "/estudiantes/Jaifer M.png",
        testimonial: "She was born into a Christian family that, following God’s calling, emigrated from Venezuela to Colombia to plant a church when she was eight years old. After a year the church was established. At nine she began serving in the children’s ministry and always sensed a pastoral calling in her life. Even though she participated in ministry, her heart was not truly there because of routine. For three years (ages 15–17) she attended church out of commitment, without genuine communion with God, questioning His presence in her life and family. Her family always stood out for artistic gifts, and in her case it was dance. Since childhood she had dreamed of serving as a missionary. Eventually she felt the absence of God in her heart, which led her to seek Him just as He had first sought her. Today she is preparing at SEBIBE to fulfill her calling and dreams with God.",
    },
    {
        id: 13,
        name: "Edaifer Jhohana Loaiza Mendoza",
        age: "18 years",
        image: "/estudiantes/Edaifer M.png",
        testimonial: "She grew up in church and in children’s ministry, but her personal encounter with the Lord came after the end of a romantic relationship. That moment became a turning point in her spiritual life, leading her to seek the Lord more deeply. From that point forward she developed a special passion for worship. She discovered the potential and calling God had placed in her life to serve Him through praise and in whatever ministries He desires. Today her greatest desire and joy is to serve the Lord wholeheartedly, living to honor Him and fulfill the purpose He designed for her life.",
    },
    {
        id: 14,
        name: "Juan José Bohorquez Villanueva",
        age: "17 years",
        image: "/estudiantes/Juan José.png",
        testimonial: "During his childhood his family came to know the Lord, but it was through a financial crisis in his family that he experienced God’s provision and faithfulness. However, influenced by school friends, he began to drift away from church. In 2025 he attended a camp at SEBIBE called 'Live Your Calling,' and from that moment he decided to dedicate his life to serving and expanding God’s kingdom. Today he is preparing to impact the young people in his community.",
    },
    {
        id: 15,
        name: "Osting David Martinez Fonseca",
        age: "24 years",
        image: "/estudiantes/Osting.png",
        testimonial: "Hatred, resentment, and lack of purpose were the words that described his life. For years he lived a monotonous life serving the Lord. In school he began to hear about philosophy and different ideological currents, which led him to question whether God was truly real. It was through the kind smile of a friend that he came to know the Lord in a real way. He experienced the love and peace that only God can offer. Today he is preparing to impact his generation through music, demonstrating that Jesus is the cause, not a coincidence.",
    },
    {
        id: 16,
        name: "Michel Herrera",
        age: "30 years",
        image: "https://api.dicebear.com/7.x/notionists/svg?seed=Michel&backgroundColor=transparent&size=200",
        testimonial: "Since childhood he experienced rejection and hardship, which led him during adolescence into alcohol, bad company, and a deep sense of lack of purpose. While studying to become a nursing assistant, one day when he wanted to escape from everything he heard the testimony of one of his teachers, who invited him to a youth meeting. There he began to know God, and since then he has been passionate about Him. Today he is preparing at SEBIBE and strengthening his faith in God and the purpose He has for his life.",
    },
    {
        id: 17,
        name: "Leonel Sanjuanelo",
        age: "19 years",
        image: "/estudiantes/leonel foto.png",
        testimonial: "Although he was not born into a Christian family, he was always interested in learning about God and heaven. In his early years he was mainly influenced by his sister. During adolescence he discovered his talent for drawing, and thanks to a painting he made for a mayor he received a scholarship to study in Santa Marta. While there, one day on a bus he heard the message of the gospel and began to draw closer to the church. The following years were filled with struggles and questions until finally, in 2026, he decided to prepare himself to serve God in a more integral way, in a ministry that will surely become a work of art in the hands of God.",
    },
    {
        id: 18,
        name: "Jorge Olaya Melo",
        age: "20 years",
        image: "/estudiantes/Jorge O.png",
        testimonial: "Although he was born into a Christian family in Guateque, Boyacá, for many years his relationship with church was more about habit than conviction. From a young age he served by playing the drums and was involved in ministry for several years, but he placed his focus on people instead of God. Over time he began to live a life centered on parties, comforts, and pleasures, believing he would find satisfaction there. However, throughout that process he always knew God loved him and repeatedly heard the same call: not to trust in his youth to seek God later. Even when he tried to ignore it, God kept pursuing him. Finally, in 2026, during the 'Live Your Calling' camp, he clearly understood God’s call for his life. There he decided to surrender his life completely to the Lord and begin his preparation at SEBIBE.",
    },
    {
        id: 19,
        name: "Juan Esteban Villabona Garzón",
        age: "N/A",
        image: "/estudiantes/Esteban.png",
        testimonial: "A young man, the son of pastors, who out of curiosity and bad decisions drifted away from God for several years. During that time he became involved with drugs, fights, and a lifestyle that completely separated him from the Lord. One day, while using drugs, he had an experience that made him reflect and realize that was not the path for his life. He decided to return to God and seek His presence again. Later he traveled to El Salvador, where in the church his sister attended he had a real encounter with the Lord and gave his life to Christ. Today he testifies that God forgave his sins, healed his anxiety, and transformed his life.",
    }
];
export default function PremiumTestimonials() {
    const { language, t } = useLanguage();
    const [activeId, setActiveId] = useState<number | null>(null);

    const handleCardClick = (id: number) => {
        setActiveId(activeId === id ? null : id);
    };

    const currentTestimonials = language === "en" ? testimonialsEnglish : testimonials;

    return (
        <section className={styles.pageWrapper}>
            <div className={styles.ambientLight}></div>

            <div className={styles.header}>
                <h1 className={styles.title}>
                    {t("historias_transformacion").split(" ")[0]} <span className={styles.titleHighlight}>{t("historias_transformacion").split(" ").slice(1).join(" ")}</span>
                </h1>
                <p className={styles.subtitle}>
                    {t("testimonios_subtitle")}
                </p>
            </div>

            <div className={styles.gridContainer}>
                {currentTestimonials.map((item) => (
                    <div
                        key={item.id}
                        className={`${styles.card} ${activeId === item.id ? styles.active : ''}`}
                        onClick={() => handleCardClick(item.id)}
                    >
                        {/* Dynamic Background Image - full size */}
                        <div
                            className={styles.avatarBg}
                            style={{ backgroundImage: `url('${item.image}')` }}
                        />

                        {/* Always visible overlay info when not active */}
                        <div className={styles.cardHeader}>
                            <h3 className={styles.name}>{item.name}</h3>
                            {item.age !== "N/A" && <span className={styles.role}>{item.age}</span>}
                        </div>

                        {/* Hidden Content that expands securely using max-height/padding via CSS based on active class */}
                        <div className={styles.contentBox}>
                            <div className={styles.contentScroll}>
                                <p className={styles.testimonial}>"{item.testimonial}"</p>
                            </div>
                        </div>

                        {/* Visual indicator (Click to Read) */}
                        <div className={styles.indicator}>
                            <div className={styles.indicatorBg}>
                                <span>{activeId === item.id ? t("cerrar") : t("leer_historia")}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
