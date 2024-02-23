"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
// import $ from 'jquery';

export default function Header() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [viewSubPanel, setViewSubPanel] = useState<boolean>(false);
  const [background, setBackground] = useState<string>(
    "linear-gradient(rgba(70, 118, 91, 0.8) 0px, rgba(60, 179, 113, 0.4) 100%) rgba(0, 0, 0, 0.27)"
  );
  const [tracking, setTracking] = useState<boolean>(false);
  const [addon, setAddon] = useState<boolean>(false);
  const [data, setData] = useState<boolean>(false);
  const [features, setFeatures] = useState<boolean>(false);
  useEffect(() => {
    setTracking(false);
    setAddon(false);
    setData(false);
    setFeatures(false);
    setViewSubPanel(false);
    if (
      pathname == "/tracking" ||
      pathname == "/manage" ||
      pathname == "/notification" ||
      pathname == "/import"
    ) {
      setTracking(true);
      setBackground(
        "linear-gradient(rgba(147, 84, 73, 0.8) 0px, rgba(255, 74, 74, 0.6) 100%) rgba(0, 0, 0, 0.27)"
      );
    }
    if (pathname == "/addon" || pathname == "/app" || pathname == "/api") {
      setAddon(true);
      setBackground(
        "linear-gradient(rgba(70, 118, 91, 0.8) 0px, rgba(60, 179, 113, 0.4) 100%) rgba(0, 0, 0, 0.27)"
      );
    }
    if (
      pathname == "/data" ||
      pathname == "/finder" ||
      pathname == "/viewer" ||
      pathname == "/bestseller" ||
      pathname == "/categorytree" ||
      pathname == "/topseller" ||
      pathname == "/sellerlookup" ||
      pathname == "/api"
    ) {
      setData(true);
      setBackground(
        "linear-gradient(rgba(118, 70, 106, 0.8) 0px, rgba(179, 60, 109, 0.4) 100%) rgba(0, 0, 0, 0.27)"
      );
    }
    if (
      pathname == "/features" ||
      pathname == "/faq" ||
      pathname == "/disclaimer" ||
      pathname == "/news"
    ) {
      setFeatures(true);
      setBackground(
        "linear-gradient(rgba(149, 103, 47, 0.8) 0px, rgba(255, 140, 0, 0.4) 100%) rgba(0, 0, 0, 0.27)"
      );
    }
    setViewSubPanel(
      pathname == "/deals" || pathname == "/" || pathname == "/discuss"
    );
  }, [pathname, searchParams]);

  useEffect(() => {
    const items: NodeListOf<HTMLAnchorElement> =
      document.querySelectorAll("ul li a");
    items.forEach((item: HTMLAnchorElement) => {
      item.addEventListener("mouseover", function (e) {});

      item.addEventListener("click", function (e) {});
    });
  }, []);
  return (
    <div className="flex topPanel unselectable px-[20px]" id="topPanel">
      <div id="logo" className="flex w-[200px] ">
        <Image src="/logo.svg" alt="logo" width={195} height={56} />
      </div>
      <ul id="topMenu" className="flex">
        <li>
          <Link
            href="/deals"
            className={`${pathname === "/deals" ? "active" : ""} p-[7px]`}
          >
            <i className="fa fa-shopping-bag" id="menuDeals"></i>
            <span>Deals</span>
          </Link>
        </li>
        <li>
          <Link
            href="/tracking"
            className={`${pathname === "/tracking" ? "active" : ""} p-[7px]`}
            style={
              pathname === "/tracking"
                ? { backgroundColor: "rgba(255, 99, 71, 0.4)" }
                : {}
            }
          >
            <i className="fa fa-bell-o" id="menuDeals"></i>
            <span>Track</span>
          </Link>
        </li>
        <li>
          <Link
            href="/addon"
            className={`${pathname === "/addon" ? "active" : ""} p-[7px]`}
            style={
              pathname === "/addon"
                ? { backgroundColor: "rgba(60, 179, 113, 0.4)" }
                : {}
            }
          >
            <i className="fa fa-cloud-download" id="menuDeals"></i>
            <span>Apps</span>
          </Link>
        </li>
        <li>
          <Link
            href="/data"
            className={`${pathname === "/data" ? "active" : ""} p-[7px]`}
            style={
              pathname === "/data"
                ? { backgroundColor: "rgba(197, 67, 138, 0.4)" }
                : {}
            }
          >
            <i className="fa fa-cube" id="menuDeals"></i>
            <span>Data</span>
          </Link>
        </li>
        <li>
          <Link
            href="/features"
            className={`${pathname === "/features" ? "active" : ""} p-[7px]`}
            style={
              pathname === "/features"
                ? { backgroundColor: "rgba(255, 140, 0, 0.4)" }
                : {}
            }
          >
            <i className="fa fa-info" id="menuDeals"></i>
            <span>Information</span>
          </Link>
        </li>
        <li>
          <Link
            href="/discuss"
            className={`${pathname === "/discuss" ? "active" : ""} p-[7px]`}
            style={
              pathname === "/discuss"
                ? { backgroundColor: "rgba(128, 128, 128, 0.4)" }
                : {}
            }
          >
            <i className="fa fa-comments" id="menuDeals"></i>
            <span>Comment</span>
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className={`${pathname === "/#" ? "active" : ""} p-[7px]`}
            style={
              pathname === "/#"
                ? { backgroundColor: "rgba(192, 192, 192, 0.4)" }
                : {}
            }
          >
            <i className="fa fa-search" id="menuDeals"></i>
            <span>Search</span>
          </Link>
        </li>
      </ul>
      <div className="flexClass flex"></div>
      <div id="panelLanguage" className="flex">
        <div>
          <div id="currentLanguage">
            <div className="flex justify-between">
              <span className="languageMenuText">Language</span>
              <Image
                className="languageMenuImg mt-[5px]"
                alt="lanMenuImg"
                width={30}
                height={20}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAACHElEQVRIS72UwUuTcRjHv4+jiUTsvejIUbyxJduch2HFVkw2mGKwgwoKogdh4MFLl27eOojTm53Ug2XKLGUb9EYii704KCFih8UodDSLCgfBRizT5p54/4P39x72u3wuz/f5PDzwe2h6OsMw+JYRN5gEKBpN89ycH6XSb8jyFSHewbEhcWNlBTQ1tcfRqAcWyyXs7/9EX99VXdSMMzMeYTERoV6vgyYmXvP8/D3s7BQRCtmQyXzXzQdQhcXo6cG/tTXQ2NhLnpzshs12Gen0N4TD13RRMz7EG2ExuVz4u7EBGh5OcCwWxNbWIQYHr2N396tuzs7eEhZrgVqtBopEXvDISDecTgmKUkIkIuui1uARXgmLyeFANZEADQxs8sJCGOvrnzE0dAOp1BfdjCElLpZl/FIUUDD4hPv7XfD5rNjeLmJ01K6LmnFpKSAuJkK5XAb5/cu8uHgfq6sFjI/fRDx+qJtGDgh1duKHqoJ6ex+zz+fGyckf4emf4alwhqxWHB8cgPL5PNvtdjAbvpxCcu2AFItF0IeuLna63eBKRaiB0WKSJHwqFEDvZJk9Dge4WjXaSyhHFgs+Hh2BVFVlr9fb1FXncjnQXns73+7oAE5PhSY3XNzWhvfad1Ikie9KEvj83HAvkSCZzXhbqYCSySQHAoGmrjqbzYKem80cam0FGg2RwY3XtrQgc3YG2jSZmEwmoEn/GETgiwv8B94wQe5VjuptAAAAAElFTkSuQmCC"
                rel="language"
              ></Image>
            </div>
            <div className="flex justify-between">
              <span className="languageMenuText">Amazon</span>
              <span className="languageMenuImg align-top" rel="domain">
                .com
              </span>
            </div>
          </div>
          <div
            className="keepa"
            id="languageOverlay"
            style={{ display: "none" }}
          >
            <div>Choose language: </div>
            <div id="language_language" className="flex justify-around">
              <span>
                <Image
                  id="lang_en"
                  alt="lang_en"
                  width={50}
                  height={20}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAACHElEQVRIS72UwUuTcRjHv4+jiUTsvejIUbyxJduch2HFVkw2mGKwgwoKogdh4MFLl27eOojTm53Ug2XKLGUb9EYii704KCFih8UodDSLCgfBRizT5p54/4P39x72u3wuz/f5PDzwe2h6OsMw+JYRN5gEKBpN89ycH6XSb8jyFSHewbEhcWNlBTQ1tcfRqAcWyyXs7/9EX99VXdSMMzMeYTERoV6vgyYmXvP8/D3s7BQRCtmQyXzXzQdQhcXo6cG/tTXQ2NhLnpzshs12Gen0N4TD13RRMz7EG2ExuVz4u7EBGh5OcCwWxNbWIQYHr2N396tuzs7eEhZrgVqtBopEXvDISDecTgmKUkIkIuui1uARXgmLyeFANZEADQxs8sJCGOvrnzE0dAOp1BfdjCElLpZl/FIUUDD4hPv7XfD5rNjeLmJ01K6LmnFpKSAuJkK5XAb5/cu8uHgfq6sFjI/fRDx+qJtGDgh1duKHqoJ6ex+zz+fGyckf4emf4alwhqxWHB8cgPL5PNvtdjAbvpxCcu2AFItF0IeuLna63eBKRaiB0WKSJHwqFEDvZJk9Dge4WjXaSyhHFgs+Hh2BVFVlr9fb1FXncjnQXns73+7oAE5PhSY3XNzWhvfad1Ikie9KEvj83HAvkSCZzXhbqYCSySQHAoGmrjqbzYKem80cam0FGg2RwY3XtrQgc3YG2jSZmEwmoEn/GETgiwv8B94wQe5VjuptAAAAAElFTkSuQmCC"
                  rel="language"
                  /* setting="1" */ className="active"
                />
              </span>
              <span>
                <Image
                  id="lang_de"
                  alt="lang_de"
                  width={50}
                  height={20}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAABjUlEQVRIS8XWQUuaARzH8d9ftyIaJKwMBEmY5JQexKSoYGCHOj0XPYigB+WB550EnbrslCBe3LCLXTzVISGoKJrIM3SCYw1JMBo42Bjbyl/v4t/3DXyuX7Ftm3iGxLIs2ratSheLRUg+n6dlWWi1Wip4NBpFqVSCZLNZFgoFOI6jAhuGgXK5DEmn08zlcuh0OipwOBxGpVKBJJNJZjIZdLtdFTgUCqFarUJM02QqlUKv11OBg8EgarUaZLi9zdemCd7cqMASCOBHvQ65TSTo3doC+30d2O/H3fEx5Nv6On2JBDgY6MA+HwaNBqQbj3NhbQ0cDnXg+Xl8v7iAOIbBN7EYeH+vA8/O4muzCbleXOTbSAQcjXRgjwdf2m3I+ccAlyJB8OGnDvxiBp/bPUij7GPM8IOPv3Vg9zSaTh9ytD/HlagXGP9RgeGawlXrDlJ/7+HGsgcc/1OBxTWBs08jyOHeNN/FX4H8rwPLS5xe/4Ic7E5wc3US4FgFhrhwcvkX8mHHTRE3AK0DEpCPeAIBmJeHAt4UxgAAAABJRU5ErkJggg=="
                  rel="language" /* setting="3" */
                />
              </span>
              <span>
                <Image
                  id="lang_fr"
                  alt="lang_fr"
                  width={50}
                  height={20}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+nhxg7wAAAZtJREFUSIm9lEGO1DAQRZ9jt8RiGrgGV2DHaLZzBM7ATTjPXIQNG/YI0U2cdBK7XMUiHQmG7iQNEX9l2b/q6Zctu4eHj+Z9xZKenj4segC+PL5fNlWOUFUV9/dvVjVdo7t3bxc9/afPBBFlGDLH4wkD3DOTAc7Wg/PXb+fCc5FzuPPagPD6JZYGgqrSdYm+z+u7z8j64c+9X9baD6gIIWel6zJdtxG46+fPdztIQhApNM1A26ZNwKU9zRt8hYmMdxxjR9uOI7p0z7dIl8DOYUMaE9d1v1liWwCb2QjOuRDjcOGOp+y3zaA0E/hyvRVFUxofV133DMMEnszwN0PX05XEZuOYi0DKBBEhRiVnuRlyEdy2s+cuJfB+TNw0J3Ium4DL9+M8eLfDv9qPj0vEKOWG72lOOvW50q8UNGdCjC1mfrPEltLvz+S5nCPHhiBieA+q2yQ2s+tQwDmHZCGUIngfxoJtyIsWLYVKVXHuX/6qG+UcqkplZvxP7gQOI9ix37/YpG+1v1v0qBkBjBh/LJoPh8Mq8LGuFz0G/ARPQgf/2BYuEAAAAABJRU5ErkJggg=="
                  rel="language" /* setting="4" */
                />
              </span>
              <span>
                <Image
                  id="lang_jp"
                  alt="lang_jp"
                  width={50}
                  height={20}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAB90lEQVRIS8XVPUgjQRgG4HcE/41JNibZKCFCFMGAghba2GljYWdjc8gVNjaieFhYWRwn2tlYiNjY2FnYaGfjFlE0qBFJMCTm12wS179TyBxzC1uIzk4hcepvvmfej51ZkkwmKb5hEQZ7PJ6K0qlUCgZMaWWCE0JgwLIsVzRxOp3WEzNYNPFLLImnqxj+ZvIApaiVW9DQ5UOdr1Xo8CyxAbvdbtNN9PUNd3uHeDyPfFjbGPCjZXQIpKbatFcmk9ETM9gscWprF8+ROLdpvd8Lz48xbg1LbMAul4sLP5xeIb29Z5qEFcgTo2jq7fq0lsHZbFZP7HQ6ufDt+s6nI34vsJG3TY1z4Vwup8MOh4MLRxbX8JZVhRJXuyT4l6a5cD6f12FJkrjw9dwqXtlXLLBq3A50rsxyYVVVddhms3Hhm98b0I4vBFjA0teN9oWfXLhYLOqw1WrlwsXDIGJ/NoVg369J2Ib6uXCpVNJhi8Viep2u51agnYS5eHN/AB3LM6bXSdM0kEQiIQSXn18QW96Eun/0YWNpZBC++UlU1deJwdFolNrtdqExsqJ75QzqgYLHyyhQLqMx0AFpeADNAz3CPQqFAkg4HKZmD4hwR4FC4wEJhUL//8dmT6ZAT6ES47cYDAap1+sV2vRVRfF4HERRFMpOUcnFpvsPHXUA1Vwc3ioAAAAASUVORK5CYII="
                  rel="language" /* setting="5" */
                />
              </span>
              <span>
                <Image
                  id="lang_cn"
                  alt="lang_cn"
                  width={50}
                  height={20}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAChUlEQVRIS71VTWsTURQ9982byUySSSJYq7UQFyoKLVi0ixaz6KYLQVGwFBW3IrjxN/QPuHHhD/AfuHYl7kQRXLTYalvbgmBsmnaSTGbmXZnMTBtspBMDeas3951zz/16b2h74QGTJtBrkckQRUbws/d5T1IaIwnQzuJDNis3e8LlCCNzLYDzVgIqjcd0mPbyCmj7/iJbszNQe3Uwc4dJRJEHqaDZDP93lHFo78Yk+265hPsvnCgW4K2EwncX2Jy+DlXfj7TKCv62APwjdyLHyN7x0Hov4W8OVnZRsOGtroG2bt9j88YkVGMfEEDpmYvay0yntOxGmZME5LiC2iUEe3E10lX1GCoU9r9vgLbmb7Esl6EcB6WnbZgVH613ErVXxiEpFDYmAvhbAsGvAYVzOQTVKmhzbp7luVFws4nScxf11zoKjz3UXmSAqOWgPKP4pA3njYT3VfvPXGNfWavTVtqszLEonQL0JviAIjECyFKAIGgFBX+nWywGJFGF4M5K7Elc3bijKpFpglst0MZMhcm0wK4bhxSKR6kalxXsRx6qS2Z0nWI7kqkPv5P9SXWIsWQYgO+B1qdnOeSy5x0fhCygnWZ4P+JKnOQ8xTnpOqBpoPWpaQ4cB+ghnMJP/xBdh2bboG8TU8zNBuAnFzfsx0n9iqfuWH+7eQnmr9ikBOXzoLUrk0yuCz4U7j+JfhgkJdiyQKsXr7Lw/Z497sdhWmzYY6VL0PKFS6wzg9vttNyBcOFUe0KAvoyV2TKMzgMyjEWWhYbXBn0+O862lYVqNIahC5HNYr/VBH0aPc/FXL7zVg9jiVwOe84B6OOZMS7ZhWFoHmrs1uugDyNjPNj/pv+Ywxv+B4u6+rLjbNaLAAAAAElFTkSuQmCC"
                  rel="language" /*setting="7"*/
                />
              </span>
              <span>
                <Image
                  id="lang_it"
                  alt="lang_it"
                  width={50}
                  height={20}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAACfklEQVRIS62WXUiTURyHf8dNl6VhkZplJpb6TjfExFj0wSpmRhosRCwzlcEiqYSsMCswA0tKCSlIobAsSEQkS0JiERTShbPcZOkyN3NujCYqNsxMT3nR7X/novf6ec7D74X3gxnf3OEQuJr2lgtQwMi1m0IcM7yu50b1oYDw9ujkgMwyMGu1BeQ87Z1gJT23uEGVjQHfKCmUqXMDHrgMeJ51kFxYciLcHc/BCrtreak6G9ZJBymUp+mFwu4nbSS3MnEL3J0vwPK7avhxlQ6fJ7+RwvlteULhiZandDghHq6uV2D6jqu8QLUfw1MuUriceVQoPN7cQnKh8XEY7+4By2mr5EdStRiZdpNCjeaEUHjsbjO9OC4WYz0msKzWCp6j2gXnjJcU6nYahMLOhnskt2JjDJymt2Dah2e4LlWD8dnvpNC4p0woPHqjnuQU66PheNcLtuP+Sa5NyYTbP0kK/+sFooiKxNfeD2AZjaVck5IOr3+KDLdmXRRabK+sJrmQdWvxpa8fTH27kKcr1fDNzZBC+8ErQuGhc1UkF7wmAvYBC1hSbR5PkZSYnv9BCi9zrwuFbWUVJCdfHY4hmw0svvow3yolYWbeTwomfZ1QeNBwmg6Hh8Fmt4NtuJTNN0kJ8C/8JIX3eQ1CYUuRkeRkoaEYdDrAIiv28ShpM+Z+z5OCuYB+Pv/Jn/KLyXOCFApYJlxgEWd38wgpFr8WF0jBeqxJaHG/vpBeHCzHR68HbNUpDQ+TYrCwuEgKw0UPhMLmnHx6sVyOfp8XLMSQwRXKaCzxJVJwFD8WCvcdCPD5ZEEwT/nAZCVpXBYkA+f0H9Aj3QWhsL2qhuYYA/97d/8Ay4HaIqKlU4EAAAAASUVORK5CYII="
                  rel="language" /*setting="8"*/
                />
              </span>
              <span>
                <Image
                  id="lang_es"
                  alt="lang_es"
                  width={50}
                  height={20}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAACdklEQVRIS72VT2sTQRjGn3c3+z+bpCG0YmkVqSJKUQShlnowFaEWBD+D934K8Sp61osgopeCHyAetQhFoU3Fg1ZKW0xKSLLdbXY3O6/srq3tQUpSzXOZ3dmZ9/c+M+/M0vbtOYaqYtCiGGyUbw2UG1TXcACOarW/wxkAHZNbPCbW4XGH5/3+Lo8MIwFvzZRZm56CaLUH4lrK5xCsrKZg9crkQMHh93VQ/c0kW8Z1sO8MxDFpNjpuC8TtGYZ0CmD3CJhZoONbcH6mm2OPEHTNBZF0sgTJAgsnBl9lxggIh8AZwGtE2Fk0EYoUpEgCpfsezKIMdPtnM6yERdy6zKAhALsH0ZbfBhi9oEBeF6ivmVALOdizWbD3DZtfQ1y7d5Jzn01YxK3zDMSBghQsR2i6Zfg/PmL98V7SNX7nWdIad18kbcGqAJHcp+006RTMLeyvX9gO0Kg8gF9dxPaGjqX6EKZvLmB0fAy68QReq4ThuZdQcv26zgCUB4nmGSbEzlLHYbubgGWzgujzFl4vTST98xMW8uU6Iq+MYvk5lFymb8cMAxQ1TrMkdQBOKyZ0BGrNBQwV38F/VYVTz2NzOV4R4Nyjs+jq8xguPIVi91ndlIEQOsivl1hVBMB+EjzoGnhfncJFYyMprlhxgdnqCpTZCXzZG8ONSx+gZtL971mkIQglUO1hkTNaBKkTHsRoOSVoigtd30P8HCt+j+WHFvL2Ts+8/QlCV9D1ZdCqkmVTUcGe13ewXiaSacILgxRsqRqEe/Tm6iVYL2Mly4Ib+KBPpHMha0M4g7mrJdtGc9f5A4ZIC+m/S5LQcNqgZWgs0XF/+X+bjmDGLwotAlW0wG/NAAAAAElFTkSuQmCC"
                  rel="language" /* setting="9" */
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div id="panelUser" className="flex">
        <div className="pr-[25px] mr-[25px] ml-auto">
          <div id="userMenuPanel">
            <span id="panelUserRegisterLogin">Log In / Register</span>
            <div
              id="panelUserMenu"
              className="text-center"
              style={{ display: "none" }}
            >
              <span className="mr-[4px]">
                <i className="fa fa-user"></i>
              </span>
              <span id="panelUsername">Log In / Register</span>
              <i className="fa fa-fw fa-caret-down"></i>
            </div>
          </div>
          <span id="userMenuOverlay" style={{ display: "none" }}></span>
        </div>
      </div>
      {!viewSubPanel && (
        <div
          id="subPanel"
          className="subPanel unselectable"
          style={{ marginTop: "80px", background: `${background}` }}
        >
          <span id="searchBar" style={{ display: "none", opacity: 1 }}>
            <form id="searchBarForm" method="post">
              <input
                type="text"
                rel="search"
                className="ui-autocomplete-input"
                autoComplete="off"
                maxLength={1000}
                name="search"
                id="searchInput"
                placeholder="Search for products"
              />
              <i id="submitSearch" className="fa fa-search"></i>
            </form>
          </span>
          {tracking && (
            <ul className="subMenu" rel="tracking">
              <li>
                <Link href="manage">
                  <span>Tracking Overview</span>
                </Link>
              </li>
              <li>
                <Link href="import">
                  <span>Wish Lists</span>
                </Link>
              </li>
              <li>
                <Link href="notification">
                  <span>Recent Notifications</span>
                </Link>
              </li>
            </ul>
          )}
          {addon && (
            <ul className="subMenu" rel="addon">
              <li>
                <Link href="addon">
                  <span>Browser extensions</span>
                </Link>
              </li>
              <li>
                <Link href="app">
                  <span>Mobile App</span>
                </Link>
              </li>

              <li className="menuDataAPI">
                <Link href="api">
                  <span>Keepa API</span>
                </Link>
              </li>
            </ul>
          )}
          {data && (
            <ul className="subMenu" rel="data">
              <li>
                <Link href="finder">
                  <span>Product Finder</span>
                </Link>
              </li>
              <li>
                <Link href="viewer">
                  <span>Product Viewer</span>
                </Link>
              </li>
              <li>
                <Link href="bestseller">
                  <span>Product Best Sellers</span>
                </Link>
              </li>
              <li>
                <Link href="topseller">
                  <span>Top Seller List</span>
                </Link>
              </li>
              <li>
                <Link href="sellerlookup">
                  <span>Seller Lookup</span>
                </Link>
              </li>
              <li>
                <Link href="categorytree">
                  <span>Category Tree</span>
                </Link>
              </li>
              <li className="menuDataAPI">
                <Link href="api">
                  <span>Keepa API</span>
                </Link>
              </li>
            </ul>
          )}
          {features && (
            <ul className="subMenu" rel="features">
              <li>
                <Link href="features">
                  <span>Site features</span>
                </Link>
              </li>
              <li>
                <Link href="faq">
                  <span>FAQ</span>
                </Link>
              </li>
              <li>
                <Link href="news">
                  <span>News</span>
                </Link>
              </li>
              <li>
                <Link href="disclaimer">
                  <span>Disclaimer</span>
                </Link>
              </li>
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

// export default function login(req: Request, res: Response) {
//     // YOu can handle your login action
//     res.json({
//         status: "success",
//         data: {
//             token: "blablala",
//             user: {
//                 username: "cmg00823",
//                 name: "Evan You"
//             }
//         }
//     })
// }
