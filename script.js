(
    function() {
        let flag = false
        const oh_nooo = '%c         ..          :                            \n       .7G?          PP!                          \n       Y##5         :G#&7%c                         \n       Y###P7?JJYYYJP##&7                         \n       .YBBBGGGGGGGGBBBBJ^                        \n      .JPPPPPPPPPPPPPPPPGP?            .!.        \n     :5GPPGGGGPPGGGBGPPPPPP~      ::   ?B?   .:   \n .~  YGPPGGJ?JPG5?775PPPPPG!     ^5P.  ~5.  .JG^  \n !GY!PPPPG!   :7.   :5PPPPG7:YJ  :5!.  ~Y   .75:  \n JGGPPPPPP~ ^!:!.^7::5PPPPP5PGP:  5:   !J    !J   \n !GGPPPPPP57JY?PJJ5?YPPPPPPPGG5.  Y~   7J    Y~   \n  ~5GPPPPPPPPP%cOH%cGPPPGPPPPPPGP5^   !Y   ??   !Y    \n   !GGPPPPG?%cNOOOOO%cPPPPPPPPGY^      ??: J? :7J.    \n    ~YGGPPPP5PPPPPPPPPPGGP7.        ^!!5J!!^      \n      ~J5PGGGPPPPPPGGGPY7:             Y!         \n        .^!?YPGGGGGJ7~:                Y~         \n        :~!?P##BB##P?7!^:.            .5^         \n    .~?5P5GGGGPPPGGBGJJY5YYJ?!!~~^^^!JYP7^        \n   !5PJ~.?GPPPPPPPPPP~  .:^!7?JYYYYYGG55P7        \n  :GG~  :PPPPPPPPPPPGJ              ^?J57         \n   ~PP7:?GPPPPPPPPPPG5                :5.         \n    :YG5%c5PPPPPPPPPPPPP.%c               :5.         \n      %c755GGPPPPPPPPPGP.%c               ^5          \n       %c~B###########&@7%c           :~~^!5~.        \n        %cB&&&&&&B&&&&&@P%c         :!!:  ~Y^7~.:7?J^ \n        %c~JBBG5J:PB5BBB!%c       .!7:    !Y  ^!~!Y!  \n         :PG?    !7YGP~    .:!!^      7J          \n         :PGJ     .~5G5~~!!~^.        7?          \n         .5GY       ~GP^              ??          \n          YG5.       JG?              J7          \n          ?GP.       :PP:             Y!          \n          !GP^        ?G7             Y~          \n          .PG~        ^P5.            Y^          \n         .^5GY.       :PG5?!^:        5^          \n   .^~!?YPGGGG~       ~5PPGGGP5J?!.  .5:          \n   ^?5PG5YY?!:         .::^!?JYY7^   .J.          \n      :^.                                         \n'
        const black = "color: #000000", red = "color: #FF0000"
        const br = [black, red]
        const theme = [ ...br, ...br, ...br, ...br, ...br, ...br, ...br, ...br ]
        console.log(oh_nooo, ...theme)
        console.log("%c OH Noooooo... ", "background-color: #FF0000; color: #FFFFFF; font-family: monospace; font-size: 30px")
        const MAX_SCALE = 220

        let intial_scale = 1
        const _ = (query) => document.querySelector(query);
        const $ = (query) => Array.from(document.querySelectorAll(query));

        const box = _(".box");
        const button = _(".auto-move") ?? _("button");
        const emoji = button.querySelector(".emoji");
        const btitle = button.querySelector(".title");
        const body = document.body, html = _("html")
        const desc = _(".description")
        const memes = [
            "./images/ross.gif",
            "./images/joey.gif"
        ]
        const emojies = [ "😁", "😂", "🤣", "😅", "🥱", "😝", "😜", "🤪" ];

        const css = [
            `* {
                padding: 0;
                margin: 0;
                box-sizing: border-box;
            }`,
            `:root {
                --scale: 1;
                --x: 50%;
                --y: 50%;
                font-size: calc(10px / var(--scale));
                height: 100vh;
                user-select: none;
            }`,
            `body {
                font-family: "Roboto", sans-serif;
                font-size: 2.5em;
                background-image: linear-gradient(242deg, transparent 0%, transparent 62%,rgba(93,93,93,0.01) 62%, rgba(93,93,93,0.01) 68%,transparent 68%, transparent 100%),linear-gradient(314deg, transparent 0%, transparent 80%,rgba(93,93,93,0.03) 80%, rgba(93,93,93,0.03) 94%,transparent 94%, transparent 100%),linear-gradient(22deg, transparent 0%, transparent 44%,rgba(93,93,93,0.03) 44%, rgba(93,93,93,0.03) 74%,transparent 74%, transparent 100%),radial-gradient(circle at 50% 43%, rgba(0,0,0,0.01) 0%, rgba(0,0,0,0.01) 2%,transparent 2%, transparent 100%),radial-gradient(circle at 53% 88%, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.02) 2%,transparent 2%, transparent 100%),radial-gradient(circle at 75% 8%, rgba(0,0,0,0.01) 0%, rgba(0,0,0,0.01) 2%,transparent 2%, transparent 100%),radial-gradient(circle at 88% 38%, rgba(0,0,0,0.01) 0%, rgba(0,0,0,0.01) 2%,transparent 2%, transparent 100%),radial-gradient(circle at 22% 47%, rgba(0,0,0,0.01) 0%, rgba(0,0,0,0.01) 8%,transparent 8%, transparent 100%),radial-gradient(circle at 25% 63%, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0.03) 8%,transparent 8%, transparent 100%),radial-gradient(circle at 11% 36%, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0.03) 8%,transparent 8%, transparent 100%),radial-gradient(circle at 24% 20%, rgba(0,0,0,0.01) 0%, rgba(0,0,0,0.01) 8%,transparent 8%, transparent 100%),radial-gradient(circle at 24% 89%, rgba(0,0,0,0.01) 0%, rgba(0,0,0,0.01) 8%,transparent 8%, transparent 100%),radial-gradient(circle at 28% 97%, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.02) 5%,transparent 5%, transparent 100%),radial-gradient(circle at 32% 4%, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.02) 5%,transparent 5%, transparent 100%),radial-gradient(circle at 62% 28%, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.02) 5%,transparent 5%, transparent 100%),radial-gradient(circle at 40% 44%, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.02) 5%,transparent 5%, transparent 100%),radial-gradient(circle at 89% 51%, rgba(0,0,0,0.01) 0%, rgba(0,0,0,0.01) 5%,transparent 5%, transparent 100%),linear-gradient(45deg, rgb(46, 228, 244),rgb(141, 8, 253));
                background-position: center center;
                background-repeat: no-repeat;
                background-size: contain;
                height: 100%;
                overflow: hidden;
            }`,
            `.not-pc, .scaled, .deleted, noscript {
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                height: 100%;
                width: 100%;
                padding: 20px;
                position:fixed;
                top:0;
                left:0;
                background-color: #81D4FA;
            }`,
            `.not-pc {
                display: none;
            }`,
            `.container {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: auto 1fr;
                height: 100%;
                width:100%;
                position: fixed;
                top: 0;
                left: 0;
            }`,
            `.container .description {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                padding: 5px 20px;
            }`,
            `.container .box {
                --margin: 10px;
                margin: var(--margin);
                border: 3px dotted #000000;
                height: calc(100% - (2 * var(--margin)));
                border-radius: 20px;
                position: relative;
            }`,
            `button, button.auto-move {
                font-size: clamp(2rem, 2.5vmin, 3rem);
                padding: 2vmin 5vmin;
                border-radius: 50px;
                position: absolute;
                top: var(--y);
                left: var(--x);
                transform: translate(-50%, -50%);
                cursor: pointer;
                border: 2px solid rgba(0,0,0,0.5);
                background-color: #2196F3;
                transition: border-color 0.3s, top 0.5s ease-out, left 0.2s ease-out;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
            }`,
            `button .emoji, button.auto-move .emoji {
                margin-left: 3px;
                font-size: 30px;
            }`,
            `button:hover, button.auto-move:hover {
                border: 2px solid rgba(0,0,0,1);
            }`,
            `@media (max-width:600px), (max-height: 400px) {
                .not-pc {
                    display: flex;
                }
                .container {
                    display: none;
                }
            }`,
            `.meme {
                width: 64vmin;
                height: 48vmin;
                background-image: url("./images/ross.gif");
                background-position: top left;
                background-repeat: no-repeat;
                background-size: contain;
                position: fixed;
            }`,
            `.preload, .preload * {
                display: none!important;
            }`,
            `body.loading .container {
                display: none;
            }`,
            `body.loading .loading-anim {
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                animation: load 2s ease-in-out infinite alternate;
            }`,
            `@keyframes load {
                0% {
                    transform: rotate(0deg) scale(1);
                }
                100% {
                    transform: rotate(360deg) scale(1.4);
                }
            }`,
            `.no-transform {
                transform: translate(0%, 0%)!important;
            }`,
            `.msg-card, button.solved .title {
                user-select: all;
            }`
        ].map(rule => rule.trim().replace(/\s+/gm, " "))

        function resetAll() {
            if(flag) {
                return
            }
            button.querySelector(".title").innerHTML = "Button"
            desc.innerHTML = "The task is simple, just double-click the button below"
            const style = document.createElement('style');
            style.type = 'text/css';
            style.rel = 'stylesheet';
            style.id = "global-css-reset"
            $("style").forEach(old_tag => {
                old_tag.parentNode.removeChild(old_tag)
            })
            document.head.appendChild(style);
            css.forEach(rule => {
                style.sheet.insertRule(rule, style.sheet.cssRules.length)
            })
        }

        resetAll()

        const deletionObserver = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                mutation
                    .removedNodes
                    .forEach(node => {
                        if(node?.classList?.contains("msg-card")) {
                            msg = document.createElement("div")
                            msg.classList.add("msg-card")
                            msg.classList.add("deleted")
                            msg.innerHTML = `💀 Don't delete it, refresh 🔃 to continue`
                            body.appendChild(msg)
                        }
                    });
            });
          });

        deletionObserver.observe(body, {
            subtree: true,
            childList: true
        })

        const cssObserver = new MutationObserver(mutations => {
            mutations.forEach(mutationRecord => {
                if(mutationRecord.target.getAttribute("style") != "") {
                    console.log("%cTrying to edit CSS🙄? not allowed", "background: #FF0; color: #000")
                    mutationRecord.target.setAttribute("style", "")
                }
            });
        });
        
        cssObserver.observe(body, {
            attributes : true,
            subtree: true,
            attributeFilter : ['style'],
        });

        function randInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function is_not_in_quardrent(q) {
            const dim = button.getBoundingClientRect();
            const x = dim.x + dim.width / 2;
            const y = dim.y + dim.height / 2;
            return !(q.x1 <= x && x <= q.x2 && q.y1 <= y && y <= q.y2);
        }

        const move = (event) => {
            const offset = 20;
            const box_dimensions = box.getBoundingClientRect();
            const button_dimensions = button.getBoundingClientRect();
            const box_w = box_dimensions.width,
                box_h = box_dimensions.height;
            const button_w = button_dimensions.width,
                button_h = button_dimensions.height;

            const max_w = box_w - button_w - offset;
            const max_h = box_h - button_h - offset;

            quardrents = [
                {
                    x1: 0,
                    y1: 0,
                    x2: max_w / 2 + offset + button_w,
                    y2: max_h / 2 + offset + button_h,
                },
                {
                    x1: max_w / 2 + offset + button_w,
                    y1: 0,
                    x2: max_w + offset + button_w,
                    y2: max_h / 2 + offset + button_h,
                },
                {
                    x1: 0,
                    y1: max_h / 2 + offset + button_h,
                    x2: max_w / 2 + offset + button_w,
                    y2: max_h + offset + button_h,
                },
                {
                    x1: max_w / 2 + offset + button_w,
                    y1: max_h / 2 + offset + button_h,
                    x2: max_w + offset + button_w,
                    y2: max_h + offset + button_h,
                },
            ];

            let Q = quardrents.filter(is_not_in_quardrent);
            Q = Q.length != 0 ? Q : quardrents[randInt(0, quardrents.length - 1)];

            const q = Q[randInt(0, Q.length - 1)];
            const x = randInt(q.x1, q.x2 - 2 * offset - button_w);
            const y = randInt(q.y1, q.y2 - 2 * offset - button_h);
            
            /* this function generates x and y */                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        button.classList.add("no-transform"); html.style.setProperty("--x", `${x}px`); html.style.setProperty("--y", `${y}px`); emoji.innerHTML = emojies[randInt(0, emojies.length - 1)];                                                                                                                                                                                                                                                                                                                          
        };

        function scaled() {
            const msg = document.createElement("div")
            msg.classList.add("msg-card")
            msg.classList.add("scaled")
            msg.innerHTML = '⚠️ Sorry, cannot change zoom, hit `CTRL + 0` and refresh 🔃'
            body.appendChild(msg)
        }

        function removeAll(cls) {
            $(cls)
                .forEach(node => {
                    node.classList.remove("msg-card")
                    node.parentNode.removeChild(node)
                })
        }

        window.onload = () => {
            body.removeChild(_(".loading-anim"))
            body.classList.remove("loading")
            intial_scale = Math.round(window.devicePixelRatio * 100)
            console.log(`intial_scale: ${intial_scale}`)
            if(intial_scale > MAX_SCALE) {
                console.log(intial_scale > MAX_SCALE)
                scaled()
            } else {
                removeAll(".scaled")
            }

        }

        window.onresize = event => {
            const scale = Math.round(window.devicePixelRatio * 100)
            console.warn(`scaled: ${scale}`)
            if(scale != intial_scale || scale > MAX_SCALE) {
                console.log(scale, intial_scale, MAX_SCALE)
                console.log(scale != intial_scale, scale > MAX_SCALE)
                scaled()
            } else {
                removeAll(".scaled")
            }
        }

        function danger(event, center=false) {
            event.preventDefault()
            const div = document.createElement("div")
            div.classList.add("meme")
            div.style.top = `${event.clientY}px`
            div.style.left = `${event.clientX}px`
            if(center) {
                div.style.transform="translate(-50%, -50%)"
            }
            div.style.backgroundImage = `url(${memes[center ? 0 : 1]})`;
            body.appendChild(div)
            setTimeout(() => {
                body.removeChild(div)
            }, 1500)
        }

        window.oncontextmenu = danger

        function centered_danger(event) {
            const dim = body.getBoundingClientRect()
            event.clientX = dim.width / 2
            event.clientY = dim.height / 2
            danger(event, true)
        }

        window.onkeydown = event => {
            const key = event.keyCode
            if(key == 123) {
                centered_danger(event)
                return
            }
            if(event.ctrlKey && event.shiftKey) {
                if([74, 73, 67].includes(key)) {
                    centered_danger(event)
                    return
                }
            }
        }






































































































































































































































































































































































































































































































































































































































































































































                                                                                                                                                                                                                                                                                                                                                        button.addEventListener("mouseenter", move);                                                                                                                                                        //
                                                                                                                                                                                                                                                                                                                                                        body.addEventListener("mousemove", resetAll);                                                                                                                                                        //
                                                                                                                                                                                                                                                                                                                                                        button.addEventListener("dblclick", (event) => {
                                                                                                                                                                                                                                                                                                                                                            flag = true
                                                                                                                                                                                                                                                                                                                                                            button.removeEventListener("mouseenter", move)
                                                                                                                                                                                                                                                                                                                                                            btitle.innerHTML = "x" + 1 + ('<Space>\n' * 10).toString().toLowerCase() + (1 / 0).toString().slice(5)
                                                                                                                                                                                                                                                                                                                                                            emoji.innerHTML = "😍"
                                                                                                                                                                                                                                                                                                                                                            button.classList.remove("no-transform")
                                                                                                                                                                                                                                                                                                                                                            button.classList.add("solved")
                                                                                                                                                                                                                                                                                                                                                            html.style.setProperty("--x", `50%`);
                                                                                                                                                                                                                                                                                                                                                            html.style.setProperty("--y", `50%`)
                                                                                                                                                                                                                                                                                                                                                        });












































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































        const script = _("script.js-src-index.js-main");
        script.parentNode.removeChild(script);

    }
)
(
    // happy hacking 🥰🫡
)

































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































