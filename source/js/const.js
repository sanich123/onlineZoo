export const mainPage = 'index.html';
export const donatePage = 'donate.html';
export const currentLocation = window.location.href;
export const initialLocation = window.location.href[window.location.href.length - 1];
export const desktopWidth = "(min-width: 1600px)";
export const smallDesktopWidth = "(min-width: 1000px) and (max-width: 1600px)";
export const almostSmallDesktopWidth = "(max-width: 999px)";
const banana = `<svg width="33" height="37" viewBox="0 0 33 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.3979 31.6248C23.9372 29.9806 22.5636 28.0496 21.4936 25.9642C22.4107 27.7517 23.3279 29.5393 24.3979 31.6248ZM26.982 31.4368C25.4555 29.2079 24.5363 26.67 23.617 24.132C22.8548 23.3928 22.2475 23.7019 21.6402 24.0109C20.5785 24.927 19.5147 25.0927 20.7334 25.9753C22.2599 28.2042 23.3299 30.2897 24.0963 32.5297C24.3999 32.3751 25.0072 32.0661 25.3109 31.9115C25.9182 31.6025 26.069 31.15 26.982 31.4368ZM20.4236 23.8787C19.9629 22.2345 18.5893 20.3036 17.5193 18.2181C18.4364 20.0056 19.3536 21.7932 20.4236 23.8787ZM16.2964 15.8347C15.9886 14.4884 14.4621 12.2595 13.545 10.472C14.4621 12.2595 15.2264 13.7492 16.4493 16.1326C16.4493 16.1326 16.4493 16.1326 16.2964 15.8347ZM18.8805 15.6467C17.5069 13.7158 16.5877 11.1778 15.5156 8.34194C14.9062 7.90062 14.2989 8.20968 13.6916 8.51875C12.6299 9.43481 11.5661 9.60048 12.7848 10.4831C14.1585 12.4141 15.3813 14.7975 16.1477 17.0375C16.4513 16.883 17.0586 16.5739 17.3623 16.4194C17.8167 15.8124 18.1204 15.6578 18.8805 15.6467ZM12.3221 8.08857C12.0144 6.74233 10.4878 4.51346 9.5707 2.7259C10.4878 4.51346 11.2521 6.00309 12.475 8.3865L12.3221 8.08857ZM14.9062 7.90062C13.5326 5.96967 12.6134 3.43172 11.5413 0.595853C10.9319 0.154533 10.3247 0.463599 9.71736 0.772666C8.65562 1.68872 7.43896 1.55647 8.81055 2.73704C10.1842 4.66799 11.4071 7.0514 12.1734 9.29142C12.4771 9.13688 13.0844 8.82782 13.2351 8.37536C13.8424 8.06629 14.1461 7.91176 14.9062 7.90062ZM14.3217 16.4639C13.105 16.3317 12.192 16.0449 10.9754 15.9126C12.192 16.0449 12.9522 16.0338 14.3217 16.4639C12.4957 15.8904 11.1261 15.4602 9.45298 15.1845C10.8225 15.6147 12.0392 15.747 13.8652 16.3205C11.8863 15.449 10.2131 15.1734 8.69076 14.4453C10.0603 14.8755 11.4298 15.3056 13.4087 16.1771C11.7334 15.1511 9.90742 14.5775 8.08139 14.004C9.90742 14.5775 11.8863 15.449 14.3217 16.4639C14.7782 16.6073 14.7782 16.6073 14.3217 16.4639ZM13.7144 16.773C13.7144 16.773 13.4107 16.9275 13.2579 16.6296C10.9774 16.663 9.00061 16.5419 7.17665 16.7187C8.84982 16.9944 10.6738 16.8176 12.4977 16.6407C10.6738 16.8176 9.15346 16.8398 7.78601 17.16C9.30632 17.1378 11.1303 16.9609 12.9542 16.7841C11.4339 16.8064 10.0665 17.1266 8.69903 17.4468C10.523 17.27 11.8904 16.9498 13.4107 16.9275C12.3469 17.0932 11.2831 17.2589 10.2193 17.4245C11.2831 17.2589 12.3469 17.0932 13.4107 16.9275C13.7144 16.773 13.7144 16.773 13.7144 16.773ZM14.6315 18.5606C14.0242 18.8696 13.5698 19.4766 12.6588 19.9402C13.2661 19.6311 13.7206 19.0242 14.6315 18.5606C13.7206 19.0242 12.6588 19.9402 11.7479 20.4038C12.6588 19.9402 13.4169 19.1787 14.3279 18.7151C13.1133 19.3332 11.8987 19.9514 10.837 20.8674C11.595 20.1059 12.8096 19.4878 14.0242 18.8696C12.8096 19.4878 11.595 20.1059 10.3805 20.724C11.595 20.1059 12.9604 19.0353 14.4787 18.2626C14.7823 18.1081 14.9352 18.406 14.6315 18.5606ZM14.7844 18.8585C14.4807 19.013 14.4807 19.013 14.4807 19.013C13.2682 20.3815 12.3593 21.5955 11.7541 22.655C12.3593 21.5955 13.2682 20.3815 14.0263 19.62C13.4211 20.6795 12.663 21.441 12.0578 22.5004C12.663 21.441 13.5719 20.227 14.1771 19.1675C13.5719 20.227 13.2703 21.1319 12.8158 21.7389C13.2703 21.1319 13.8755 20.0725 14.4807 19.013C14.1792 19.9179 13.7247 20.5249 13.5739 20.9774C14.0284 20.3704 14.0263 19.62 14.4807 19.013L14.7844 18.8585ZM15.5425 18.097C15.8461 17.9424 15.8461 17.9424 16.1498 17.7879C16.3026 18.0858 16.3026 18.0858 16.7591 18.2292C18.2856 20.4581 19.3556 22.5436 20.122 24.7836C20.4256 24.6291 21.0329 24.32 21.3366 24.1655C21.791 23.5585 22.0947 23.4039 22.8548 23.3928C21.4812 21.4618 20.562 18.9239 19.4899 16.088C18.8805 15.6467 18.2732 15.9558 17.6659 16.2648C16.9079 17.0264 16.1477 17.0375 15.9969 17.49C15.8441 17.192 15.3875 17.0486 15.2347 16.7507C15.0818 16.4528 14.6253 16.3094 13.8631 15.5702C11.8842 14.6987 8.68869 13.6949 7.01553 13.4193C7.4741 14.313 9.90948 15.3279 11.8884 16.1994C9.91155 16.0783 7.32744 16.2663 5.8092 17.0389C7.33157 17.767 12.9563 17.5345 14.6274 17.0598C14.6274 17.0598 14.931 16.9052 15.0839 17.2032C15.5404 17.3466 15.9969 17.49 16.1498 17.7879C15.8461 17.9424 15.5425 18.097 15.086 17.9536C15.086 17.9536 14.7823 18.1081 14.175 18.4172C12.5039 18.8919 10.5312 20.2716 9.46951 21.1876C10.3825 21.4744 12.2044 20.5472 13.5698 19.4766C12.6609 20.6906 11.6012 22.357 10.996 23.4165C12.3635 23.0963 14.7865 19.6089 14.9352 18.406C15.2388 18.2515 15.2388 18.2515 15.5425 18.097Z" fill="#468E0D"/><path d="M28.1743 10.2391L28.1782 10.2251L28.178 10.2106L28.0821 4.15258L28.0819 4.14258L28.0798 4.13282C28.0313 3.91061 28.1382 3.69604 28.374 3.5221C28.61 3.34807 28.9617 3.22753 29.3541 3.20456C30.1288 3.15921 31.0324 3.49436 31.4726 4.49825C31.2842 5.37437 31.1772 6.23827 31.0707 7.09719L31.0705 7.09934C30.9625 7.97054 30.8552 8.83663 30.6646 9.71396L30.6554 9.75618L30.6798 9.79179C33.1412 13.3771 33.4114 17.285 32.1986 20.8178C30.9849 24.3533 28.2846 27.5151 24.8031 29.5944C21.3223 31.6733 17.0657 32.6672 12.7422 31.8738C8.42473 31.0815 4.03183 28.5054 0.272911 23.43C0.133783 22.8475 0.0778791 22.3617 0.107862 21.9745C0.138149 21.5834 0.255102 21.3025 0.452161 21.1196C0.648968 20.937 0.941107 20.838 1.35208 20.843C1.76321 20.848 2.28406 20.9573 2.92488 21.1815C13.4167 25.5384 25.0393 21.4704 28.1743 10.2391Z" fill="#FFEE2E" stroke="#468E0D" stroke-width="0.2"/></svg>`;

const meat = `<svg width="48" height="38" viewBox="0 0 48 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.1024 8.98763C12.007 9.07187 11.9117 9.15603 11.8185 9.24233C11.6029 9.43749 11.3909 9.63575 11.1825 9.83643C9.38673 11.5657 7.78774 13.5437 6.6388 15.7566C5.48834 17.9723 4.80473 20.4212 4.86857 22.8281C4.89742 23.9138 5.08235 25.0666 5.71905 26.0344C5.82872 26.2012 5.95174 26.3607 6.08746 26.5105L8.36463 29.0667L8.38678 29.0916C8.64858 29.3854 8.96124 29.6409 9.32367 29.8383C9.86832 30.1349 10.5143 30.2899 11.1989 30.2324C11.7923 30.1825 12.3503 29.9796 12.8455 29.7117C13.3384 29.4451 13.7667 29.1174 14.153 28.787C14.9248 28.127 15.5508 27.46 16.2157 27.028C17.4032 26.2563 18.9418 26.0344 20.4924 25.9976C22.0522 25.9606 23.7258 26.0837 25.4829 25.6704C27.621 25.1675 29.6032 23.8826 31.0106 22.1526C32.4163 20.4246 33.2195 18.3012 33.3175 16.2136C33.4205 14.02 32.7454 11.8979 31.4229 10.2758C31.347 10.1826 31.2683 10.0918 31.1881 10.0023L28.8889 7.42128C27.5758 5.94226 25.7291 4.95535 23.68 4.65156C21.419 4.31637 19.0301 4.81379 16.8853 5.80006C15.1302 6.60705 13.5391 7.72571 12.1036 8.98791L12.1024 8.98763ZM13.1015 10.039C13.2029 9.9494 13.3064 9.86201 13.4094 9.77453C14.6485 8.72736 15.9849 7.8224 17.4115 7.16641C19.3084 6.29421 21.3912 5.87562 23.2886 6.1569C25.0997 6.4254 26.7522 7.34853 27.8593 8.70642C28.9665 10.0644 29.5422 11.8732 29.4559 13.7117C29.3738 15.4604 28.6898 17.2579 27.5278 18.6862C26.3675 20.1125 24.7063 21.1847 22.9668 21.5939C21.5246 21.9331 19.9648 21.8388 18.3093 21.878C16.6447 21.9175 14.7816 22.1269 13.1489 23.1879C12.2335 23.7828 11.5602 24.5212 10.8968 25.0886C10.5655 25.3718 10.2353 25.6182 9.90217 25.7984C9.57129 25.9774 9.23105 26.092 8.92065 26.1181C8.56527 26.1479 8.18973 26.0647 7.86883 25.8899C7.54531 25.7137 7.26245 25.4412 7.04641 25.1128C6.61192 24.4524 6.44163 23.5637 6.41667 22.6231C6.36088 20.5213 6.96316 18.329 8.003 16.3263C9.04427 14.3208 10.5172 12.4884 12.203 10.8651C12.4964 10.5826 12.7958 10.3067 13.1015 10.0391L13.1015 10.039ZM14.015 11.0754C13.7303 11.3229 13.4515 11.5814 13.1765 11.8464C11.5957 13.3687 10.2429 15.0624 9.30423 16.8702C8.36992 18.6697 7.84517 20.6174 7.89322 22.4282C7.9145 23.2306 8.07096 23.8673 8.3126 24.2345C8.42989 24.4129 8.57284 24.5386 8.68817 24.6014C8.7958 24.66 8.91341 24.675 8.95477 24.6715C8.99586 24.668 9.12851 24.6375 9.30237 24.5435C9.48293 24.4458 9.71956 24.2773 9.99852 24.0387C10.5587 23.5597 11.2768 22.7532 12.4311 22.0031C14.4883 20.6662 16.6608 20.4686 18.4343 20.4266C20.181 20.3852 21.6323 20.4522 22.7742 20.1836C24.1336 19.8638 25.489 18.9942 26.4137 17.8576C27.3432 16.7149 27.9135 15.2281 27.9805 13.8025C28.0509 12.3028 27.5697 10.7926 26.6678 9.6864C25.7663 8.58064 24.3881 7.81122 22.9156 7.59289C21.3648 7.36301 19.5739 7.70641 17.9135 8.46987C16.6568 9.04773 15.447 9.86075 14.3003 10.8301C14.2046 10.9107 14.1096 10.9926 14.015 11.0754L14.015 11.0754ZM20.7828 13.0188C21.3287 12.5367 21.9803 12.2182 22.5945 12.1335C23.2086 12.0487 23.7349 12.2046 24.0576 12.5668C24.3803 12.929 24.4729 13.4679 24.3152 14.065C24.1574 14.662 23.7621 15.2683 23.2163 15.7504C22.946 15.9891 22.6469 16.1902 22.3361 16.3421C22.0252 16.494 21.7087 16.5938 21.4046 16.6358C21.1005 16.6778 20.8148 16.6611 20.5637 16.5868C20.3127 16.5124 20.1012 16.3818 19.9414 16.2025C19.7816 16.0231 19.6767 15.7985 19.6325 15.5414C19.5883 15.2843 19.6057 14.9999 19.6839 14.7042C19.762 14.4086 19.8993 14.1076 20.0878 13.8184C20.2764 13.5292 20.5126 13.2575 20.7828 13.0188Z" fill="#EE8383"/><path d="M43.0601 12.6642C40.6263 14.7945 40.3335 18.9016 40.3335 18.9016C17.3127 14.1777 12.6895 31.5069 12.6895 31.5069C12.6895 31.5069 27.8866 41.1243 41.5923 22.1096C41.5923 22.1096 44.6038 24.9315 47.8436 24.8538C47.8436 24.8538 45.0254 22.6968 43.7413 19.4246C42.4578 16.1527 43.0601 12.6642 43.0601 12.6642ZM18.4785 29.047C17.9389 29.257 17.3127 28.9455 17.0797 28.3516C16.8466 27.7578 17.095 27.1064 17.6346 26.8965C18.1742 26.6865 18.8003 26.9976 19.0334 27.5915C19.2664 28.1853 19.0182 28.8371 18.4785 29.047ZM23.6784 31.7047C23.652 31.8368 23.5659 31.9338 23.4568 31.9763C23.3868 32.0035 23.3061 32.0079 23.2249 31.9826C23.0198 31.9204 22.8891 31.6939 22.9337 31.4777C23.7378 27.5874 20.8214 25.7963 20.6976 25.7219C20.5083 25.6093 20.4297 25.3598 20.522 25.1647C20.6134 24.9695 20.8403 24.9015 21.03 25.0131C21.0659 25.0347 24.6125 27.1862 23.6784 31.7047Z" fill="#7A7871"/></svg>`;

export const pets = [
  {
    title: "Two homosexual pandas",
    srcset: "img/photos/two-pandas-small-desktop.png",
    src: "img/photos/two-pandas.png",
    alt: `Two pandas`,
    b: `Giant Pandas`,
    p: "Native to Southwest China",
    svg: banana,
  },
  {
    title: "A fucking eagle, South America",
    srcset: "img/photos/eagle-small-desktop.png",
    src: "img/photos/eagle.png",
    alt: "A flying eagle",
    b: "Eagles",
    p: "Native to South America",
    svg: meat,
  },
  {
    title: "A huge fucking gorilla, Congo",
    srcset: "img/photos/gorilla-small-desktop.png",
    src: "img/photos/gorilla.png",
    alt: "A huge gorilla",
    b: "Gorillas",
    p: "Native to Congo",
    svg: banana,
  },
  {
    title: "Fucking sloth, South America",
    srcset: "img/photos/alligator-small-desktop.png",
    src: "img/photos/sloth.png",
    alt: "A sloth on the tree",
    b: "Two-toed Sloth",
    p: "Mesoamerica, South America",
    svg: banana,
  },
  {
    title: "Chester любит читос, Africa",
    srcset: "img/photos/cheetahs-small-desktop.png",
    src: "img/photos/cheetahs.png",
    alt: "Cheetahs",
    b: "Cheetahs",
    p: "Native to Africa",
    svg: meat,
    turnOff: true,
  },
  {
    title: "Fucking penguins, Antarctica",
    srcset: "img/photos/penguins-small-desktop.png",
    src: "img/photos/penguins.png",
    alt: "A penguin in Antarctica",
    b: "Penguins",
    p: "Native to Antarctica",
    svg: meat,
    turnOff: true,
  },
];

export const reviews = [
  {
    img: "img/photos/icon-beard-man.jpg",
    alt: "Avatar of bearded man",
    b: "Oskar Samborsky",
    location: "Local Austria",
    time: "Yesterday",
    comment:
      "Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. <br>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for",
  },
  {
    img: "img/photos/icon-girl.jpg",
    alt: "Avatar of a beautiful girl",
    b: "Fredericka Michelin",
    location: "Local Austria",
    time: "Yesterday",
    comment:
      "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals. <br>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. <br>The best online zoo I’ve met. My son delighted very much ljves to",
  },
  {
    img: "img/photos/icon-another-girl.jpg",
    alt: "Avatar of another beautiful girl",
    b: "Mila Riksha",
    location: "Local Austria",
    time: "Yesterday",
    comment:
      "My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. <br>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf",
  },
  {
    img: "img/photos/icon-another-girl.jpg",
    alt: "Some man",
    b: "Michael John",
    location: "Local Austria",
    time: "Today",
    comment:
      "Some text Some textSome textSome textSome textvSome textSome textSome textSome textSome textSome textSome textvSome textSome textSome textvSome textvSome textSome textvSome textvvSome textSome textSome textSome textSome textSome textSome textSome textvSome textSome textSome textSome textSome textvSome textSome textSome textvSome textSome textSome textSome textSome textSome textSome text",
  },
  {
    img: "img/photos/icon-another-girl.jpg",
    alt: "Some man",
    b: "Joseph Biden",
    location: "Local USA",
    time: "Next day",
    comment:
      "This text is written by me. This text is written by me.This text is written by me.This text is written by me.This text is written by me.This text is written by me.This text is written by me.This text is written by me.This text is written by me.This text is written by me.This text is written by me.This text is written by me.This text is written by me.This text is written by me.This text is written by me.This text is written by me. ",
  },
  {
    img: "img/photos/icon-another-girl.jpg",
    alt: "Some man",
    b: "Boris Johnson",
    location: "Local GB",
    time: "Next Monday",
    comment:
      "I hate Putin I hate PutinvI hate PutinI hate PutinI hate PutinI hate PutinI hate PutinI hate PutinI hate PutinI hate PutinI hate PutinI hate PutinI hate PutinI hate PutinI hate PutinI hate PutinI hate PutinI hate PutinI hate PutinI hate PutinvI hate PutinI hate PutinI hate PutinI hate PutinvI hate PutinI hate PutinvI hate PutinvvI hate PutinI hate PutinI hate PutinI hate PutinI hate Putin",
  },
  {
    img: "img/photos/icon-beard-man.jpg",
    alt: "Avatar of bearded man",
    b: "Ramzan Kadyrov",
    location: "Russia",
    time: "Next Tuesday",
    comment:
      "I love Putin I love PutinI love PutinI love PutinvI love PutinvI love PutinI love PutinI love PutinI love PutinI love PutinI love PutinI love PutinI love PutinI love PutinI love PutinI love PutinI love PutinI love PutinI love PutinI love PutinI love PutinvvI love PutinI love PutinI love PutinI love PutinI love PutinvvvI love PutinI love Putinv",
  },
  {
    img: "img/photos/icon-beard-man.jpg",
    alt: "Avatar of bearded man",
    b: "Alexander Lukashenko",
    location: "Belorussia",
    time: "Next Friday",
    comment:
      "WHat a beautiful day WHat a beautiful dayWHat a beautiful dayWHat a beautiful dayWHat a beautiful dayWHat a beautiful dayWHat a beautiful dayWHat a beautiful dayWHat a beautiful dayWHat a beautiful dayvWHat a beautiful dayWHat a beautiful dayWHat a beautiful dayWHat a beautiful dayWHat a beautiful dayWHat a beautiful dayvWHat a beautiful dayWHat a beautiful dayWHat a beautiful dayWHat a beautiful day",
  },
  {
    img: "img/photos/icon-beard-man.jpg",
    alt: "Avatar of bearded man",
    b: "Elon Mask",
    location: "USA",
    time: "Next Saturday",
    comment:
      "I support Ukraine I support UkraineI support UkraineI support UkraineI support UkraineI support UkraineI support UkraineI support UkraineI support UkraineI support UkraineI support UkraineI support UkraineI support UkraineI support UkraineI support UkraineI support UkraineI support UkraineI support UkraineI support UkraineI support UkraineI support UkraineI support UkraineI support UkraineI support UkraineI support Ukrainef",
  },
  {
    img: "img/photos/icon-beard-man.jpg",
    alt: "Avatar of bearded man",
    b: "Elon Mask",
    location: "USA",
    time: "Next Thursday",
    comment:
      "I made Tesla I made Tesla I made TeslaI made TeslaI made TeslaI made TeslaI made TeslaI made TeslaI made TeslaI made TeslavI made TeslaI made TeslaI made TeslavI made TeslaI made TeslavI made TeslaI made TeslaI made TeslaI made TeslaI made TeslaI made TeslaI made TeslaI made TeslaI made TeslaI made TeslaI made TeslaI made Tesla",
  },
  {
    img: "img/photos/icon-beard-man.jpg",
    alt: "Avatar of bearded man",
    b: "Elon Mask",
    location: "USA",
    time: "Next Sunday",
    comment: "I don't want to write comments",
  },
];
