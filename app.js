

const restaran = [
    {
        id: 1,
        name: "Olimp Garden",
        img: "https://d3fphkxyf5o5bm.cloudfront.net/image-resize/format=webp,w=720/Q524tReNnAnmuqp47ferJLphWDfCtQdzreu9DF17pR",
        address: {
            viloyat: "Toshkent",
            street: "Mashal yo'li 17-uy",
        },
        category: "Milliy",
        reyting: "4",
    },
    {
        id: 2,
        name: "Gavhar Restarani",
        img: "https://sun9-29.userapi.com/impg/GPVRO7EFaSZdhjJvS-tvj45TwbS91JxGoi7pYQ/6nFQiDZP5mI.jpg?size=1200x900&quality=96&sign=a946c44fd32a8f6b058d5e8a456607b4&type=album",
        address: {
            viloyat: "Xorazm  Urgench",
            street: "Shahar adliyasi yoni",
        },
        category: "Milliy",
        reyting: "5",
    },
    {
        id: 3,
        name: "Qamish Gamburg",
        img: "https://avatars.mds.yandex.net/get-altay/16134335/2a000001985c0ea852db22cfdca3903e2df3/orig",
        address: {
            viloyat: "Xorazm",
            street: "MAN servis Ro'parasi",
        },
        category: "Halol",
        reyting: "4.5",
    },
    {
        id: 4,
        name: "Jasmin Cake",
        img: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEZHC8zxpK2z_A70ndAT8dS66wsUBI0Er_ZmA-dK6ZCzRo1csVwSa5pd8dWWI1NXxNWD1FuNqPnThfDhIyW4s4IK5mkBBv-5PX4pPltbKD2-peK_Gn8bQO0Sckzz9xwRUHJwGGv=s1360-w1360-h1020-rw",
        address: {
            viloyat: "Xorazm  Urgench",
            street: "Ko'xna Urganch ko'chasi",
        },
        category: "G'arb",
        reyting: "4",
    },
];

 

// Categoriyalr uchun_____________________________________________________________________--

const cates = [
    { icon: "🏛️", name: "Milliy" },
    { icon: "🍔", name: "Fast Food" },
    { icon: "🍕", name: "G'arb" },
    { icon: "🥗", name: "Vegetarian" },
    { icon: "✅", name: "Halol" },
    { icon: "☕", name: "Kafe" },
    { icon: "🍣", name: "Sushi" },
];

const container = document.getElementById("Categories");



function filterRestaran(cates) {
    cates.forEach((f) => {
        const btn = document.createElement("button")
        btn.className =" cat-pill flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-gray-200 bg-white text-gray-700 text-sm font-semibold shadow-sm"
        
        btn.innerHTML = `${f.icon} ${f.name}`;
        container.appendChild(btn)
        btn.addEventListener("click", () => {
            const filtered = restaran.filter((k) => k.category === f.name);
             
            viewRestaran(filtered)
        })
    })
}
filterRestaran(cates)
// -----------------------------------------------------------------------------
const all = document.getElementById("all");
let count = 3;
function viewRestaran(r) {
    console.log(r);
    all.innerHTML = "";
    r.map((item) => {
        const article = document.createElement("article");
        article.innerHTML = `<article
                        class="resto-card card-1 bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
    
                        <div class="card-img-wrap relative h-48">
                            <img
                                src=${item.img}
                                alt=${item.name}
                                class="w-full h-full object-cover"
                            />
                            <div
                                class="absolute top-3 left-3 flex items-center gap-1 bg-white/95 backdrop-blur rounded-full px-2.5 py-1 shadow text-xs font-bold"
                            >
                                <svg
                                    class="w-3 h-3 text-yellow-400 fill-yellow-400"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                </svg>
                                ${item.reyting}
                                <span class="text-gray-400 font-normal"
                                    >(1304)</span
                                >
                            </div>
                            <div class="absolute top-3 right-3">
                                <span
                                    class="bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full"
                                    >$$</span
                                >
                            </div>
                        </div>
                        <div class="p-4">
                            <h3 class="font-bold text-gray-900 text-base mb-1">
                              ${item.name}
                            </h3>
                            <div
                                class="flex items-center gap-3 text-xs text-gray-400 mb-1"
                            >
                                <span class="flex items-center gap-1">
                                    <svg
                                        class="w-3 h-3"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                    ${item.address.viloyat}
                                </span>
                                <span>•</span>
                                <span class="flex items-center gap-1">
                                    <svg
                                        class="w-3 h-3"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            d="M17 20h5v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2h5"
                                        />
                                        <circle cx="12" cy="7" r="4" />
                                    </svg>
                                    ${item.category}
                                </span>
                            </div>

                            <p class="text-xs text-gray-400 mb-4 truncate">
                                ${item.address.street}
                            </p>

                            <div class="flex items-center justify-between">
                                <a
                                    href="restobest-detail.html"
                                    class="text-xs text-brand-500 font-semibold hover:underline flex items-center gap-1"
                                >
                                    Batafsil ko'rish
                                    <svg
                                        class="w-3 h-3"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2.5"
                                    >
                                        <path d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                                <button
                                    class="px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold transition-all active:scale-95 shadow-sm"
                                >
                                    Band qilish
                                </button>
                            </div>
                        </div>
                        </article>`;

        all.appendChild(article);
    });
}

viewRestaran(restaran);





document.addEventListener("DOMContentLoaded", () => {
    const citySelect = document.getElementById("qidiruv");
    const searchInput = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-btn");

    const restaurants = [
        { name: "Afsona Oshxona", city: "toshkent", food: "milliy" },
        { name: "Steam Bar", city: "samarqand", food: "g'arb" },
        { name: "Buxoro Choyxonasi", city: "buxoro", food: "sharq" },
    ];

    

    if (searchBtn) searchBtn.addEventListener("click", runSearch);
    if (searchInput) {
        searchInput.addEventListener("keydown", (event) => {
            if (event.key === "Enter") runSearch();
        });
    }

    function runSearch() {
        if (!citySelect || !searchInput) return;

        if (searchInput.value) {
            viewRestaran(restaran);
        }

        const result = restaran.filter((item) =>
            item.name.toLowerCase().includes(searchInput.value.toLowerCase()),
        );

        viewRestaran(result);
    }
});




