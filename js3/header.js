class MyHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML =`<section>
        <div class="header">
            <a href="" class="header-contact"><i class="fa-solid fa-envelope"></i>${this.getAttribute('name')}<a>
            <a href="https://www.facebook.com/videosurgalt" class="header-fc"><i class="fa-brands fa-facebook"></i> Пэйж : fb.com/videosurgalt</a>
            <a href="fb.com/groups/asuult.it" class="header-page"><i class="fa-brands fa-facebook-f"></i> Сурагчдын групп : fb.com/groups/asuult.it</a>
            <a href="" class="header-phone"><i class="fa-solid fa-phone"></i> Холбогдох утас : 9930-1979, 8950-1979</a>
        </div>
    </section>`
    }
}
customElements.define('my-header', MyHeader)
// ================================================================================================================================================================================================================================================================================

class Myfooder extends HTMLElement{
    connectedCallback(){
        this.innerHTML= `<footer>
        <div class="footer-content">
            <h3><img class="footer-image" src="../img/logo-footer.png" alt=""></h3>
            <p style="margin-bottom: 10px ;">Бүх сургалт хугацаагүй буюу насан туршийн!</p>
            <ul style="margin-bottom: 10px;" class="socials">
                <li><a href="fb.com/videosurgalt"><i class="fa-brands fa-facebook"></i> Facebook Page</a></li>
                <li><a href="fb.com/groups/asuult.it"><i class="fa-brands fa-facebook-f"></i> Facebook group</a></li>
                <li><a href="#"><i class="fa-solid fa-phone"></i> Утас: 9930-1979, 8950-1979</a></li>
                <li><a href="service.html"><i class="fa-solid fa-building-columns"></i> Үйлчилгээний нөхцөл</a></li>
                <li><a href="#"><i class="fa-solid fa-school"></i> Онлайн сургалтын онцлог</a></li>
            </ul>
        </div>
        <div class="footer-bottom">
            <p>Онлайн видео сургалтын платформ  Бүх эрх хуулиар хамгаалагдсан &copy;2022 Он, <span>Primitive Mind LLC</span></p>
        </div>
    </footer>`
    }
}
customElements.define(`my-fooder`, Myfooder)
// ================================================================================================================================================================================================================================================================================

class information extends HTMLElement{
    connectedCallback(){
        this.innerHTML=` <section>
        <div class="information">
            <div class="information-section">
              <h2>Мэдээлэл авах</h2>
              <p>Та хямдрал, шинээр нээгдсэн сургалт, хичээл энэ бүгдийн талаар цаг алдалгүй мэдээлэл авч баймаар байна уу? Тэгвэл доор like хийж бидэнтэй нэгдээрэй. Мөн бидэнд мэйл хаягаа үлдээгээрэй.</p>
            </div>
            <div class="information-content">
                <a href="https://www.facebook.com/videosurgalt"><img src="../img/мэдээлэл авах.PNG" alt=""></a>
              </div>
            <div class="information-search">
                <input class="information-input" placeholder="И-МЭЙЛ ХАЯГ" type="text">
                <p class="information-searching">Бүртгүүлье</p>
              </div>
        </div>
    </section>`
    }
}
customElements.define(`my-information`, information)
// ================================================================================================================================================================================================================================================================================

class advantage extends HTMLElement{
    connectedCallback(){
        this.innerHTML= `<section class="py-2">
        <h2 class="row">Бүх сургалт насан туршийн</h2>
        <div class="advantage">
            <div class="article-container">
                <article class="card">
                    <div>
                    <div class="icon-row"><i class="fa-solid fa-video"></i> Зөвхөн видео</div>
                    <p>Бүх сургалт нь 3-30 минутын урттай видео хэлбэрээр хүргэгдэнэ. Мянга уншсанаас нэг үзсэн нь дээр. Таны цаг завыг супер хэмнэх болно гэдгийг амлая.
                    </p>
                    </div>
                </article>
            </div>
            <div class="article-container">
                <article class="card">
                    <div>
                    <div class="icon-row"><i class="fa-solid fa-archway"></i> Практик сургалт</div>
                    <p>Бидний видео сургалтууд нь онол биш харин асуудлыг бодитоор хэрхэн шийдвэрлэж байгааг нүдэн дээр харуулж явах тул та практик дээр бодит мэргэжилтнүүдээс суралцана.
                    </p>
                    </div>
                </article>
            </div>
            <div class="article-container">
                <article class="card">
                    <div>
                    <div class="icon-row"><i class="fa-solid fa-hand-holding-dollar"></i> Хямд үнэ</div>
                    <p>Та бусад танхимын сургалтаас дунджаар 10-30 дахин бага үнээр суралцах боломжтой. Дээр нь танд унаа хоолны мөнгө шаардагдахгүй.
                    </p>
                    </div>
                </article>
            </div>
            <div class="article-container">
                <article class="card">
                    <div>
                    <div class="icon-row"><i class="fa-solid fa-clock"></i> Цагаа хэмнэнэ</div>
                    <p>Та хүссэн цагтаа суралцах боломжтой. Ажлаа тараад эсвэл цайны цагаар, чөлөөт цагаараа та мэргэжлээ дээшлүүлэх, шинэ зүйлд суралцах боломжтой боллоо.
                    </p>
                    </div>
                </article>
            </div>
            <div class="article-container">
                <article class="card">
                    <div>
                    <div class="icon-row"><i class="fa-solid fa-computer"></i> Програм бэлэн</div>
                    <p>Сургалтын явцад шаардлагатай програмуудыг танд бид бэлтгэж өгөх болно. Та татаад, суулгаад ашиглах л үлдлээ.
                    </p>
                    </div>
                </article>
            </div>
            <div class="article-container">
                <article class="card">
                    <div>
                    <div class="icon-row"><i class="fa-solid fa-book-bookmark"></i> Насан туршийн сургалт</div>
                    <p>Та худалдан авсан сургалтаа насан туршдаа хэдэн ч удаа үзэж болно. Өөрөөр хэлбэл та насан туршийн оюуны хөрөнгөтэй болох юм.
                    </p>
                    </div>
                </article>
            </div>
        </div>
    </section>`
    }
}
customElements.define(`my-advantage`, advantage)
// ================================================================================================================================================================================================================================================================================

class product extends HTMLElement{
    connectedCallback(){
        this.innerHTML=` <section class="product">
        <div class="product-category">
            <h1>Онцлох сургалтууд</h1>
            <a href="training.html"><p class="product-category-category">Бүх сургалтууд</p></a>
        </div>
        <div class="product-container">
            <button class="pre-btn">
                <img src="../img/arrow11.jpg" alt="">
            </button>
            <button class="nxt-btn">
                <img src="../img/arrow11.jpg" alt="">
            </button>
            <div class="product-card">
                <div class="product-image">
                    <img class="product-imagesss" src="../img/zurag13.png" alt="">
                    <span class="discount-tag">49,000 ₮</span>
                    <span class="actual-price">98,000 ₮</span>
                    <!-- <span class="price">49,000 ₮</span> -->
                    <button class="card-btn">Сагсанд хийх</button>
                </div>
                <div class="product-info">
                    <p class="product-brand">PHP мастер сургалт - Хувийн санхүү хөтлөх систем бүтээцгээе</p>
                    <p class="product-lesson"> <i class="fa-solid fa-video"></i> 117 видео хичээл</p> 
                    <p class="product-time"><i class="fa-solid fa-clock"></i> 19 цаг 6 мин</p>
                    <div> <p class="product-view"><i class="fa-solid fa-eye"></i> 197,234 харсан   </p> 
                        <p class="product-students"><i class="fa-solid fa-graduation-cap"></i> 247 сурагчид</p></div>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <img class="product-imagesss" src="../img/zurag14.png" alt="">
                    <span class="discount-tag">49,000 ₮</span>
                    <span class="actual-price">98,000 ₮</span>
                    <!-- <span class="price">49,000 ₮</span> -->
                    <button class="card-btn">Сагсанд хийх</button>
                </div>
                <div class="product-info">
                    <p class="product-brand">Объект хандлагат C++ болон Java программчлал (Java Spring фрэймворкийн хамт)</p>
                    <p class="product-lesson"> <i class="fa-solid fa-video"></i> 117 видео хичээл</p> 
                    <p class="product-time"><i class="fa-solid fa-clock"></i> 19 цаг 6 мин</p>
                    <div> <p class="product-view"><i class="fa-solid fa-eye"></i> 197,234 харсан   </p> 
                        <p class="product-students"><i class="fa-solid fa-graduation-cap"></i> 247 сурагчид</p></div>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <img class="product-imagesss" src="../img/zurag15.jpg" alt="">
                    <span class="discount-tag">49,000 ₮</span>
                    <span class="actual-price">98,000 ₮</span>
                    <!-- <span class="price">49,000 ₮</span> -->
                    <button class="card-btn">Сагсанд хийх</button>
                </div>
                <div class="product-info">
                    <p class="product-brand">Wordpress мастер сургалт</p>
                    <p class="product-lesson"> <i class="fa-solid fa-video"></i> 117 видео хичээл</p> 
                    <p class="product-time"><i class="fa-solid fa-clock"></i> 19 цаг 6 мин</p>
                    <div> <p class="product-view"><i class="fa-solid fa-eye"></i> 197,234 харсан   </p> 
                        <p class="product-students"><i class="fa-solid fa-graduation-cap"></i> 247 сурагчид</p></div>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <img class="product-imagesss" src="../img/zurag16.jpg" alt="">
                    <span class="discount-tag">49,000 ₮</span>
                    <span class="actual-price">98,000 ₮</span>
                    <!-- <span class="price">49,000 ₮</span> -->
                    <button class="card-btn">Сагсанд хийх</button>
                </div>
                <div class="product-info">
                    <p class="product-brand">Git, Github эхнээс нь дуустал!</p>
                    <p class="product-lesson"> <i class="fa-solid fa-video"></i> 117 видео хичээл</p> 
                    <p class="product-time"><i class="fa-solid fa-clock"></i> 19 цаг 6 мин</p>
                    <div> <p class="product-view"><i class="fa-solid fa-eye"></i> 197,234 харсан   </p> 
                        <p class="product-students"><i class="fa-solid fa-graduation-cap"></i> 247 сурагчид</p></div>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <img class="product-imagesss" src="../img/zurag17.jpg" alt="">
                    <span class="discount-tag">49,000 ₮</span>
                    <span class="actual-price">98,000 ₮</span>
                    <!-- <span class="price">49,000 ₮</span> -->
                    <button class="card-btn">Сагсанд хийх</button>
                </div>
                <div class="product-info">
                    <p class="product-brand">Next.js блог вэб сайт эхнээс нь - орчин үеийн вэб сайт хөгжүүлэлтийн шинэ давалгаа</p>
                    <p class="product-lesson"> <i class="fa-solid fa-video"></i> 117 видео хичээл</p> 
                    <p class="product-time"><i class="fa-solid fa-clock"></i> 19 цаг 6 мин</p>
                    <div> <p class="product-view"><i class="fa-solid fa-eye"></i> 197,234 харсан   </p> 
                        <p class="product-students"><i class="fa-solid fa-graduation-cap"></i> 247 сурагчид</p></div>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <img class="product-imagesss" src="../img/zurag18.jpg" alt="">
                    <span class="discount-tag">49,000 ₮</span>
                    <span class="actual-price">98,000 ₮</span>
                    <!-- <span class="price">49,000 ₮</span> -->
                    <button class="card-btn">Сагсанд хийх</button>
                </div>
                <div class="product-info">
                    <p class="product-brand">Математикийн хичээлийн ЭЕШ-ын 2018-2020 оны материалуудын бодолт</p>
                    <p class="product-lesson"> <i class="fa-solid fa-video"></i> 117 видео хичээл</p> 
                    <p class="product-time"><i class="fa-solid fa-clock"></i> 19 цаг 6 мин</p>
                    <div> <p class="product-view"><i class="fa-solid fa-eye"></i> 197,234 харсан   </p> 
                        <p class="product-students"><i class="fa-solid fa-graduation-cap"></i> 247 сурагчид</p></div>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <img class="product-imagesss" src="../img/zzurag19.jpg" alt="">
                    <span class="discount-tag">49,000 ₮</span>
                    <span class="actual-price">98,000 ₮</span>
                    <!-- <span class="price">49,000 ₮</span> -->
                    <button class="card-btn">Сагсанд хийх</button>
                </div>
                <div class="product-info">
                    <p class="product-brand"> Б.Мөнгөнтуул их мастерын шатрын сургалт</p>
                    <p class="product-lesson"> <i class="fa-solid fa-video"></i> 117 видео хичээл</p> 
                    <p class="product-time"><i class="fa-solid fa-clock"></i> 19 цаг 6 мин</p>
                    <div> <p class="product-view"><i class="fa-solid fa-eye"></i> 197,234 харсан   </p> 
                        <p class="product-students"><i class="fa-solid fa-graduation-cap"></i> 247 сурагчид</p></div>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <img class="product-imagesss" src="../img/zurag20.jpg" alt="">
                    <span class="discount-tag">49,000 ₮</span>
                    <span class="actual-price">98,000 ₮</span>
                    <!-- <span class="price">49,000 ₮</span> -->
                    <button class="card-btn">Сагсанд хийх</button>
                </div>
                <div class="product-info">
                    <p class="product-brand">Linux үйлдлийн системийг эхнээс нь (ubuntu)</p>
                    <p class="product-lesson"> <i class="fa-solid fa-video"></i> 117 видео хичээл</p> 
                    <p class="product-time"><i class="fa-solid fa-clock"></i> 19 цаг 6 мин</p>
                    <div> <p class="product-view"><i class="fa-solid fa-eye"></i> 197,234 харсан   </p> 
                        <p class="product-students"><i class="fa-solid fa-graduation-cap"></i> 247 сурагчид</p></div>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <img class="product-imagesss" src="../img/zurag21.jpg" alt="">
                    <span class="discount-tag">49,000 ₮</span>
                    <span class="actual-price">98,000 ₮</span>
                    <!-- <span class="price">49,000 ₮</span> -->
                    <button class="card-btn">Сагсанд хийх</button>
                </div>
                <div class="product-info">
                    <p class="product-brand">React Native - Ухаалаг утасны програмчлал (iOS, Android) эхнээс нь дуустал !</p>
                    <p class="product-lesson"> <i class="fa-solid fa-video"></i> 117 видео хичээл</p> 
                    <p class="product-time"><i class="fa-solid fa-clock"></i> 19 цаг 6 мин</p>
                    <div> <p class="product-view"><i class="fa-solid fa-eye"></i> 197,234 харсан   </p> 
                        <p class="product-students"><i class="fa-solid fa-graduation-cap"></i> 247 сурагчид</p></div>
                </div>
            </div>
           
        </div>
    </section>`
    }
}
customElements.define(`my-product`, product)
// ================================================================================================================================================================================================================================================================================

class productt extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`<section class="product">
        <h1 class="product-category">Шинэ хичээлүүд</h1>
        <div class="product-container">
            <button class="pre-btn">
                <img src="../img/arrow11.jpg" alt="">
            </button>
            <button class="nxt-btn">
                <img src="../img/arrow11.jpg" alt="">
            </button>
            <div class="product-card">
                <div class="product-image">
                    <img class="product-imagesss" src="../img/zurag10.png" alt="">
                    <span class="discount-tag">49,000 ₮</span>
                    <span class="actual-price">98,000 ₮</span>
                    <!-- <span class="price">49,000 ₮</span> -->
                    <button class="card-btn">Сагсанд хийх</button>
                </div>
                <div class="product-info">
                    <p class="product-brand"> Adobe Premiere Pro - Видео засварлах нууцыг эхнээс нь</p>
                    <p class="product-lesson"> <i class="fa-solid fa-video"></i> 117 видео хичээл</p> 
                    <p class="product-time"><i class="fa-solid fa-clock"></i> 19 цаг 6 мин</p>
                    <div> <p class="product-view"><i class="fa-solid fa-eye"></i> 197,234 харсан   </p> 
                        <p class="product-students"><i class="fa-solid fa-graduation-cap"></i> 247 сурагчид</p></div>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <img class="product-imagesss" src="../img/zurag11.jpg" alt="">
                    <span class="discount-tag">49,000 ₮</span>
                    <span class="actual-price">98,000 ₮</span>
                    <!-- <span class="price">49,000 ₮</span> -->
                    <button class="card-btn">Сагсанд хийх</button>
                </div>
                <div class="product-info">
                    <p class="product-brand"> Bootstrap 5 - CSS Framework эхнээс нь дуустал</p>
                    <p class="product-lesson"> <i class="fa-solid fa-video"></i> 117 видео хичээл</p> 
                    <p class="product-time"><i class="fa-solid fa-clock"></i> 19 цаг 6 мин</p>
                    <div> <p class="product-view"><i class="fa-solid fa-eye"></i> 197,234 харсан   </p> 
                        <p class="product-students"><i class="fa-solid fa-graduation-cap"></i> 247 сурагчид</p></div>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <img class="product-imagesss" src="../img/zurag12.jpg" alt="">
                    <span class="discount-tag">49,000 ₮</span>
                    <span class="actual-price">98,000 ₮</span>
                    <!-- <span class="price">49,000 ₮</span> -->
                    <button class="card-btn">Сагсанд хийх</button>
                </div>
                <div class="product-info">
                    <p class="product-brand">CSS animation супер хийж сурцгаая</p>
                    <p class="product-lesson"> <i class="fa-solid fa-video"></i> 117 видео хичээл</p> 
                    <p class="product-time"><i class="fa-solid fa-clock"></i> 19 цаг 6 мин</p>
                    <div> <p class="product-view"><i class="fa-solid fa-eye"></i> 197,234 харсан   </p> 
                        <p class="product-students"><i class="fa-solid fa-graduation-cap"></i> 247 сурагчид</p></div>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <img class="product-imagesss" src="../img/zurag4.jpg" alt="">
                    <span class="discount-tag">49,000 ₮</span>
                    <span class="actual-price">98,000 ₮</span>
                    <!-- <span class="price">49,000 ₮</span> -->
                    <button class="card-btn">Сагсанд хийх</button>
                </div>
                <div class="product-info">
                    <p class="product-brand">AutoCAD програмыг эхнээс нь дуустал!</p>
                    <p class="product-lesson"> <i class="fa-solid fa-video"></i> 117 видео хичээл</p> 
                    <p class="product-time"><i class="fa-solid fa-clock"></i> 19 цаг 6 мин</p>
                    <div> <p class="product-view"><i class="fa-solid fa-eye"></i> 197,234 харсан   </p> 
                        <p class="product-students"><i class="fa-solid fa-graduation-cap"></i> 247 сурагчид</p></div>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <img class="product-imagesss" src="../img/zurag5.png" alt="">
                    <span class="discount-tag">49,000 ₮</span>
                    <span class="actual-price">98,000 ₮</span>
                    <!-- <span class="price">49,000 ₮</span> -->
                    <button class="card-btn">Сагсанд хийх</button>
                </div>
                <div class="product-info">
                    <p class="product-brand">Компьютерийн сүлжээг эхнээс нь дуустал !</p>
                    <p class="product-lesson"> <i class="fa-solid fa-video"></i> 117 видео хичээл</p> 
                    <p class="product-time"><i class="fa-solid fa-clock"></i> 19 цаг 6 мин</p>
                    <div> <p class="product-view"><i class="fa-solid fa-eye"></i> 197,234 харсан   </p> 
                        <p class="product-students"><i class="fa-solid fa-graduation-cap"></i> 247 сурагчид</p></div>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <img class="product-imagesss" src="../img/zurag6.png" alt="">
                    <span class="discount-tag">49,000 ₮</span>
                    <span class="actual-price">98,000 ₮</span>
                    <!-- <span class="price">49,000 ₮</span> -->
                    <button class="card-btn">Сагсанд хийх</button>
                </div>
                <div class="product-info">
                    <p class="product-brand">Объект хандлагат PHP ашиглан MVC фрэймворк бүтээцгээе!</p>
                    <p class="product-lesson"> <i class="fa-solid fa-video"></i> 117 видео хичээл</p> 
                    <p class="product-time"><i class="fa-solid fa-clock"></i> 19 цаг 6 мин</p>
                    <div> <p class="product-view"><i class="fa-solid fa-eye"></i> 197,234 харсан   </p> 
                        <p class="product-students"><i class="fa-solid fa-graduation-cap"></i> 247 сурагчид</p></div>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <img class="product-imagesss" src="../img/zurag7.png" alt="">
                    <span class="discount-tag">49,000 ₮</span>
                    <span class="actual-price">98,000 ₮</span>
                    <!-- <span class="price">49,000 ₮</span> -->
                    <button class="card-btn">Сагсанд хийх</button>
                </div>
                <div class="product-info">
                    <p class="product-brand">Java, C#, PHP, MySQL ашиглан и-баримт хэвлэдэг ухаалаг утасны native POS app хөгжүүлцгээе!</p>
                    <p class="product-lesson"> <i class="fa-solid fa-video"></i> 117 видео хичээл</p> 
                    <p class="product-time"><i class="fa-solid fa-clock"></i> 19 цаг 6 мин</p>
                    <div> <p class="product-view"><i class="fa-solid fa-eye"></i> 197,234 харсан   </p> 
                        <p class="product-students"><i class="fa-solid fa-graduation-cap"></i> 247 сурагчид</p></div>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <img class="product-imagesss" src="../img/zurag8.png" alt="">
                    <span class="discount-tag">49,000 ₮</span>
                    <span class="actual-price">98,000 ₮</span>
                    <!-- <span class="price">49,000 ₮</span> -->
                    <button class="card-btn">Сагсанд хийх</button>
                </div>
                <div class="product-info">
                    <p class="product-brand">Amazon Web Service буюу AWS суурь мэдлэгийг эхнээс нь!</p>
                    <p class="product-lesson"> <i class="fa-solid fa-video"></i> 117 видео хичээл</p> 
                    <p class="product-time"><i class="fa-solid fa-clock"></i> 19 цаг 6 мин</p>
                    <div> <p class="product-view"><i class="fa-solid fa-eye"></i> 197,234 харсан   </p> 
                        <p class="product-students"><i class="fa-solid fa-graduation-cap"></i> 247 сурагчид</p></div>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <img class="product-imagesss" src="../img/zurag9.jpg" alt="">
                    <span class="discount-tag">49,000 ₮</span>
                    <span class="actual-price">98,000 ₮</span>
                    <!-- <span class="price">49,000 ₮</span> -->
                    <button class="card-btn">Сагсанд хийх</button>
                </div>
                <div class="product-info">
                    <p class="product-brand"> Хятад хэлийг эхнээс нь сурцгаая!</p>
                    <p class="product-lesson"> <i class="fa-solid fa-video"></i> 117 видео хичээл</p> 
                    <p class="product-time"><i class="fa-solid fa-clock"></i> 19 цаг 6 мин</p>
                    <div> <p class="product-view"><i class="fa-solid fa-eye"></i> 197,234 харсан   </p> 
                        <p class="product-students"><i class="fa-solid fa-graduation-cap"></i> 247 сурагчид</p></div>
                </div>
            </div>
           
        </div>
    </section>`
    }
}
customElements.define(`my-productt`, productt)
// ================================================================================================================================================================================================================================================================================

class showcase extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`<header id="showcase">
        <div class="container">
            <div class="showcase-container">
                <div class="showcase-content">

                </div>
            </div>
        </div>
    </header>`
    }
}
customElements.define(`my-showcase`, showcase)
// ================================================================================================================================================================================================================================================================================

class nav extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`<nav id="main-nav">
        <div class="container">
           <a href="index.html"><img src="../img/logo-footer.png" alt="1234" class="logo"></a>
            <ul>
                <li><a class="current" href="training.html">Бүх сургалт</a></li>
                <li><a class="current-1" href="order.html">Сагс</a></li>
                <li><a class="current-2" href="service.html">Үйлчилгээний нөхцөл</a></li>
                <li><a class="current-3" href="sign.html">Нэвтрэх | Бүртгүүлэх </a></li>
            </ul>
        </div>
    </nav>`
    }
}
customElements.define(`my-nav`,nav)
// ================================================================================================================================================================================================================================================================================

class coment extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`<section id="testimonials">
        <div class="testimonial-heading">
            <span>Хэрэглэгчийн</span>
            <h1>сэтгэгдэл</h1>
        </div>
        <div class="testimonial-box-container">
            <div class="testimonial-box">
                <div class="box-top">
                    <div class="profile">
                        <div class="profile-img">
                            <img src="../img/erdene_pro.jpg" alt="">
                        </div>
                        <div class="name-user">
                            <strong> G Erdene</strong>
                            <span>Eganbaatar8@gmail.com</span>
                        </div>
                    </div>
                    <div class="reviews">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                </div>
                <div class="client-comment">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus error ipsa totam et reprehenderit? Quaerat blanditiis nostrum reprehenderit itaque porro.</p>
                </div>
            </div>
            <div class="testimonial-box">
                <div class="box-top">
                    <div class="profile">
                        <div class="profile-img">
                            <img src="../img/modo_pro.png" alt="">
                        </div>
                        <div class="name-user">
                            <strong> T Modo </strong>
                            <span>G_Dragon168@gmail.com</span>
                        </div>
                    </div>
                    <div class="reviews">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                </div>
                <div class="client-comment">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus error ipsa totam et reprehenderit? Quaerat blanditiis nostrum reprehenderit itaque porro.</p>
                </div>
            </div>
            <div class="testimonial-box">
                <div class="box-top">
                    <div class="profile">
                        <div class="profile-img">
                            <img src="../img/G_dragon.png" alt="">
                        </div>
                        <div class="name-user">
                            <strong> Dragon G</strong>
                            <span>G_Dragon168@gmail.com</span>
                        </div>
                    </div>
                    <div class="reviews">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                </div>
                <div class="client-comment">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus error ipsa totam et reprehenderit? Quaerat blanditiis nostrum reprehenderit itaque porro.</p>
                </div>
            </div>
            <div class="testimonial-box">
                <div class="box-top">
                    <div class="profile">
                        <div class="profile-img">
                            <img src="../img/G_dragon.png" alt="">
                        </div>
                        <div class="name-user">
                            <strong> Dragon G</strong>
                            <span>G_Dragon168@gmail.com</span>
                        </div>
                    </div>
                    <div class="reviews">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                </div>
                <div class="client-comment">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus error ipsa totam et reprehenderit? Quaerat blanditiis nostrum reprehenderit itaque porro.</p>
                </div>
            </div>
        </div>
        <a class="arrow-down">
            <i class="fa-solid fa-circle-arrow-down"></i>
        </a>
    </section`
    }
}
customElements.define(`my-coment`,coment)