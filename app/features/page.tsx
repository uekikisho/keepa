import Link from "next/link";

export default function Notification() {
  const data = [

    { title: 'Amazon.com', number: "1,290,103,101", image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAYAAAB24g05AAABzElEQVQoU12Sz0sUUQDHP29bKuoQemkhUPCfyEBaCjEKr4ELRcEQQQUhBNUhSjS6R7BKEBrioaAicOoQmCGdxEstWVIL66HENHaddefH+xFvxpnN5vLevPfm+/nw5iucywuGfx8tkze9na1OdLnQ2ubn+q9szd+ZCRvwuHyM6Q+GUlEzM5ej1KeZnM9xsdge7XmldsIBYwyu+4w4oFjqZWZex5mBhEglUlJBKzIs7RvB/N6AP5vQaIDnIc4Psry4gHAuvTfHS30x9dQozN6OGBjL8/pGkxNjB6jkFBt3ErJSCq01HR3XabXGqVSW2gGTczojByGE2sQfy+ZH5PpERja+D0FA7sIgi18/IRzHNeVyPyfvGWZv+vSP7ufNrS0O3w+oDod0XfnC5tPemGwN0ruoFwp8d58nAUeHBnjyTmH3LfmzWkOF32A1gqpCHnpASjaeF4fsuTrEC2tQq1VNoXAEKaOYkhDatP/Jdr/Z3KJnb55Hr6YRcuSayZ0+i3n5dvdN25Oeh6nX41BLTuexwfA5pmo/ECsry6a7u4dGPs/BIKmH/cepTWoEOrb0/U6EWEPKkM6HdxGrzpmsiWm70rqFVgJIHNpjI+sj/AUdjRg+yE6/CgAAAABJRU5ErkJggg==" },
    { title: 'Amazon.co.uk', number: "387,544,740", image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAYAAAB24g05AAACDklEQVQoU32RXUiTYRTH/0+2dRPSB6YVCiKDXBOWom4ZTIJqROqcROisHGoE0YqB+TKbClaOZhHTG132BWHUnI5I1sdFE9mmSRtJzV3MwEGpbUYXXujUR3xeei8ceK5+5zz/8+ec85D7vQEqL8qCZzKEX3Nr+B9cjQxTd2wszbttQLNljHEsnoDkWBqK/a8Q1ehAng/+oDoSxg6NBpHoEryTs0x4sTIXie6HjEXXjeiyBxkrjqai2PMUO7k2dL+fBtF3eGj1ORlO/hxlgpRKDax9QTRdkYM21LMaedwP410/rNI5rEVnIDYY8cIZQnOrmzcolaZhPraMC5I9yPD1Q2zqYI3MYDEG4nQxJhYLvi4AN8yjKMw/jIEBH0g4EqeS7H0gRFhfAKqt4CdwupIeKQUCoT8gDn0bLZOnQvTtOy9ajCWJV6K/k2rizIPonJjffoLlwiLWuOvLhGCwvr4qcHD6L8gJrYOWn8lh1zffVCL/AEA5jh1uq8Fm7mtsR7UtDMXxHAwPfeINGnVSXNLmYuWeGdi9F9dmj8DedVYwEI17oTrvgudNBVZ7bPgX8OOZ0oRbLU9AHo1MUYNahkSnGeMqPYY+L7ARH5gUQBV/ROoYRNXVEcbGyzKUKLMQr6+BaX8dSIt9jGYOv4T7kBp+b0TY793rWrhPl7Fc/eEtClT8125GRno2OOspWJo+YgOa38rkXZuAuAAAAABJRU5ErkJggg==" },
    { title: 'Amazon.de', number: "461,904,435", image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAYAAAB24g05AAABYUlEQVQoU41STUtCQRQ9b1EkUZt+iLaNIMLCEoOQoGgZEe36kKhNfyDoF7SVECyCjBZBSFm2KQha9xNMnzoz72tm4s3VpxKBA8O995x7z517GSudTmmoFvoPE2HEBrD/Aiu9NKP3D48j3vc94zuOE2FC8A5mlOE4ZIvFAiKB6tsnkYJIu2FHAvVG3fjNJlnGWtjMJHF5dwtrZ3lWb+/l8PXyQQKcuokWjSU4B7MbkZhd+zF+IrtAAo/z03ru4ASovBtCCwHteeYq14V2XUhG+1CMQQkBxTlG1lMolcuDAsMWh2J/BPRDZajOYXH4orGtLL2gcBrXaxtH8L5faYR2LZpXMppXiqaxgaDFSpdjMpHBzXkV1n0+rhdXcpDtCpEBJUufkoNOHPiEq4BDKR+xqVVc5Z9JIJnajbqaYq+3den3PpkM2gN51xdPsEpncd2Psm5+rIe2FDDhAswDxkfJds8v17z51coLdO4AAAAASUVORK5CYII=" },
    { title: 'Amazon.co.jp', number: "474,827,206", image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAYAAAB24g05AAABVUlEQVQoU12SQWoCQRBFfw/ZqKM3EG8huPEA3sAslGTtwpXncJ+Q6Fb0Ai7cJKcQRCMogk5kGFzojP2lu+3WmYGmiuqp11X1S5xOJyLzSSl1RNmsb2PKJvIKoQD5fF4nkA+Wceli6i57drvdA5BOJjCbgT+/YHwBq1Ww0UgBhBDYbrcGkMvlXBMaNJmAwyEYx+7gtQn59u4gCrDZbNIAXeLhAHQ6YBia5MtFW93QYABZqWiIAqzXa4goilgoFBw5ns/x0u2mknk+g0kC9vtgrWYAnoe/1QoiDEP6vm8AIETwD9lug1FkXr9XoGbqjcdIymX9r+d5WC6XBmArsErw8wP8+n7MQEGaTbDXc6qoFlaqguPxyGKx6PRWdK39aAROp6aCeh3XVkv3bdVS/mKxgAiCgKVSyc3AVaHUsAt13xG7B1YyDdjv98xul0yubguf7559C7kBliRnuKPjqCMAAAAASUVORK5CYII=" },
    { title: 'Amazon.fr', number: " 506,049,613", image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAYAAAB24g05AAAB2UlEQVQoU43S30tTYRzH8ff3WNJwcwYaOoc1hTlpNfOs+aPLyG1qIXUnBA0qY5INjS67DbW7uuuif6A/QOZFUKh110U33QTR1UZRWGc7ds55ntiOSCOInj/gxefzfD8yP/tEj5qjeI6HCOzbLtcLKU4nu/nzqXc72A8LEAyB1gSmh/nx7AVyOb+hh2IpFKoJ1GsOt5dMTLMPpZRvGAbumy3qpRkk2AlKERoPUHn5BZnLb+jB2FnQLiKGDxRNzPORVmB3C2tl3ge0R9gMUN2uIHO5dX3q5JlmgjbR1G2PxSWTdLq/FdguY927gtERBkPRORakultBZrNrOhpNYoii0cGuORSX06Qz0RbAebXJz5t5JBgGrTgeP0bl0x6Sn17X/ZERRBRaa/a+25TuTzJ5YeBv4NYMRsgHugbbqXy2kNylNd3Xm8DzHFBQqzusPphiYuo/gezFR7qnZ7ipNq9gu6z8I8FhhaGDBHO5x7r3RBxEIfjA3dI4mYnWP3Bfb2LdaZzRrxCOt1P9aCEL157qaCROI7+0Cfs1lxuL50iNte7A2ylTX85hBLuaO+hIHuXrBwspFp7r2EDCT3CwxKsLIySS3SilD4ek3pb5tZpFGmdsLDFzhG/vLX4DfLjm5WxVFyQAAAAASUVORK5CYII=" },
    { title: 'Amazon.ca', number: "240,942,438", image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAYAAAB24g05AAACEklEQVQoU1WSzUtUURiHnzufztz5qAn6YCS1jFqEtOgDoyCDVkZF/QeCSBtFEyooEBRE/CDCEANpES0iatOiTURLoRaGIhQtwsHGudfbdZp05s69556417rZuznve87vffidc16l3HlDyrKJF/a6RuLjvJ/vDNd1/dJxHPRcLjjaAJQfJ9pl8lbvtqBSJtHTHQhqpieBaCbtr65wKQ8MEk0mkbbg68NJlI1zF2VDTzfCMLAMg+zQPV8shGBjcorIlkX0ziChP1jz2nVCiTTh/H6+zUz/c+CslRCmRmp4mNriMpZbR87MIiwLt6uLiBDETp3E7LxCuCGO0tjE4pPH24BE703s70Uc0yA1OoLZNxDYdGwLp1Znq1Bg36vnGBcuEVITxJsPs/B0DkU/dlwm+wcQuo6taaQnRn3rfFrAjaqENuvUKxr1I63sGhnGON+BklKJHWxh+cUzlFLTUane7qdeLCHXVkk/msb+WcEYGiKyUvRvvhmPsntqnJCaRDt9lngmi8w38uX1S5TinrzM3L+LVVjB0UtkZmcRroBqjV/v3/mA8Jl2v9l7WK2tjVhuL+FDrcx7gM8g8+MPsAoFhLaKOjeHlBLv77f0EpFYImj2YB4grGYJN7fw4e2bbcCBkTEcq4a9rpOaGAsA3uDsDM9B+fJVZDrrbweAvyJvbNSlJarVatBnWVaQ27ZNsaPjP+hvICgB410MezgAAAAASUVORK5CYII=" },
    { title: 'Amazon.it', number: "264,459,452", image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAYAAAB24g05AAABk0lEQVQoU43Sz08TQRTA8e/bpS0xwDYNoW5riMGoJSZevCF48UYrJca/gYug8cLZhH9CTxzl6t3UePfKQUL8Qct2dg2ljTGB0p1HutYa08Y4p5n3Mp+892bk7vZjTd2Y5feqB4bw5dvh+a/N/DzMzQ1DhwsLyM2tijZnJ3B6iiNC29TR1x9HgAtjSPk+ZLPQbif5d5UKUnq+pt9zfcAmQGiOxgJdE5L2r6L5PFiLxDG1lRVk8dkjjTzBsYorDiZqjAcCQ7ro/wGs/QWUtioaTWsCOOISnQRjgfMgIFMsop6HdDpJC7VqFSltljW8EuP0Iz3LyfEBuvdlZAZDIJtFBjOora8ji5tlPZ48Q7p9xHIa1dE3n/8fuP10VT9dhMkFLzNFJzpC9/4BTHvIj0ELa1XkzouyNlI/cfuCuLTCr+ju4WgFzSaZQgG9lgMGr7D8ELm3U1Uzc4bEFhfhW6uB7uyPAN2oSXq1gOZ8iGNE4P2tB8jSqyd6mj9He5oA+60A3RjzkTqG1LYPM9dBY5iAD1P3uQSwOL94YLv3EgAAAABJRU5ErkJggg==" },
    { title: 'Amazon.es', number: "515,883,044", image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAYAAAB24g05AAABSklEQVQoU2P88OHD/48TZjGQA/gL0hgYL1269J97+UYGsSAfksx4tW4Lw9dIf4gBrPNWMkj4ezJ8v3WHKEM41VQYXmzczvA7KRxigPL/VgYOyWCGf98fEmUAE6c8w4/naxnuMlZDDJD4Ws8gKGXF8O/3B4a3r1kYnj9iZ5CU+8kgLPoHq4FMrAIM758dY3jB3QgxgO91CYOkvCnDt4/fGG5dZGL4+FeLQU6Nk0Gc5zQDJ9c3DEMYWUUYnj88zfBJtAdiwL+bcQwaOuYMH979Z3h4k5fh2ZNfDFIybAzy6p8ZeHk+YhjAzCbAcOPKSQYm9UUIA5TkhRm+/WFl+PH9H8P/n6xgTZwCfxm4WH5j9ca9h28RBpwIjGXQEhIlKgBhiq69e81gsX4xxAW7XAIYDPiESDLgwqd3DG57NkAM2GrvTZJmmGLvg1sZAKZYjW3zq1NvAAAAAElFTkSuQmCC" },
    { title: 'Amazon.in', number: "146,346,263", image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAYAAAB24g05AAAAa0lEQVQoU2P8P9P4PwMFgHEQGLC7nEIv/P+P1YCnT78wbNt2h+H/f0YGX18VBklJbqwhxfgfhwFr1txk+Pz5FwPIeH5+dobgYDXSDHj27CvD5s13GBgY/jH4+anhdkHiTF3KwkCog32IGwAA50I1lFJfIREAAAAASUVORK5CYII=" },
    { title: 'Amazon.com.mx', number: " 82,984,167", image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAYAAAB24g05AAAAq0lEQVQoU2NkAIEM9/9gGgr+T9+BzIWzzwupo4gbvb/FyDh4Dfj3/w/DzQPLGVYvWcaQ1DaJQVJEkeGSqDZxXvgzZQvD9y/PGPYvmcJw/txlBkMjXQavjDbiDfjRv4rh9p3rDMevnWd4vnMjg1FkAoOrjSfDNSlT4lzwd9oWhmev7jNcuHwOrMFA14hBRkyF4bywBnEGwKLx549PYA3s7LxgmmQD0BPD4EwHAKQAcQyYJnJzAAAAAElFTkSuQmCC" },
    { title: 'Amazon.com.br', number: " 35,654,028", image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAYAAAB24g05AAABm0lEQVQoU6WSv0ubURiFn3u/DKIxCSQSTdRaFQRFBKVLKxStDoWiuDi42hZEhwoZRBERFEEEbdKhIo79A0Q7qqV0aJvBQRAyaAZj/AGKTbRE/L57i5+00SrS4tnf5xzecwThp5p7SNwKUBKE5lVg20bPJUtAC5DqhtVfAAGmQZUrxag/Tt2RtA/WvYrhvYfEUi5wWEA2dBagDIRQ9BYm6M9PEo60sPClAvPcov3JFqHQCjPpIiK7JSgtQV6AwAZILWjISzMe3KTVd8xitIP5zy/wO03SGZPo6hHdz5YY6P/G8p6HoZ1yoqculNCXgNqcnyxXrVGQY9rU7pFOPkXL8bgVvqAT7wMv1YEYQ+1hhAMOMwZNsXrWM7nZBI/yUkwUb9Lk/8HMbCNTH5rxOE8wzxUnZy4mB9boer7I6oGbwUQF368msG2VgSEs+ooSvMnfZfptK0tfKzEckrbHcXpefuTdWYBIshhLG9d/8Kebi6qsyxbG/HFqDiVaw4ZPMbJfxkbKDYZlV/xbd+7gdXAbieZ9shTUP+3g/yf5Cw8+o/xdML+uAAAAAElFTkSuQmCC" },
    { title: 'Amazon.co.nl', number: "10,355,820", image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAFXSURBVHjaYvzPgAD/UNlYEUAAkuTgCAAIBgJggq5VoAs1qM0vdzmMz362vezjokxPGimkEQ5WoAQEKuK71zwCCKyB4c//J8+BShn+/vv/+w/D399AEox+//8FJH/9/wUU+cUoKw20ASCAWBhEDf/LyDOw84BU//kDtgGI/oARmAHRDJQSFwVqAAggxo8fP/Ly8oKc9P8/AxjiAoyMjA8ePAAIIJZ///5BVIM0MOBWDpRlZPzz5w9AALH8gyvCbz7QBrCJAAHEyKDYX15r/+j1199//v35++/Xn7+///77DST/wMl/f4Dk378K4jx7O2cABBALw7NP77/+ev3xB0gOpOHfr99AdX9/gTVASKCGP//+8XCyMjC8AwggFoZfIHWSwpwQk4CW/AYjsKlA8u+ff////v33998/YPgBnQQQQIzAaGNg+AVGf5AYf5BE/oCjGEIyAQQYAGvKZ4C6+xXRAAAAAElFTkSuQmCC" },

  ]
  return (
    <div
      id="contentAlign"
      className="mt-[160px] min-w-[650px] max-w-[850px] mr-[40px] ml-[40px] relative w-[1461px]"
    >
      <div id="bodyPanel" className="content">
        <span className="paper">
          <ul
            style={{
              listStyle: "none",
              lineHeight: "19px",
              paddingLeft: "1.8em",
              textIndent: "-1.8em",
            }}
          >
            <li>✜&emsp; Comprehensive price history graphs</li>
            <li>✜&emsp; Price Drop & Availability Alerts</li>
            <li>
              ✜&emsp; Browser extensions - once installed the Keepa price
              history graph will be displayed directly on each Amazon product
              page
            </li>
            <li>
              ✜&emsp; Amazon Locales Support [ .com | .co.uk | .de | .co.jp |
              .fr | .ca | .it | .es | .in | .com.mx | .com.br ]
            </li>
            <li>✜&emsp; Registration Optional</li>
            <li>✜&emsp; Wish List Import</li>
            <li>✜&emsp; Deals, an overview of recent price drops</li>
          </ul>
          <br></br>
          <br></br>
          Monitoring
          <span id="productCount">4,408,082,967</span> products:
          <div id="productCountEntries">
            <div
              style={{
                lineHeight: "25px",
                marginTop: "10px",
                textAlign: "center",
              }}
            >
              {
                data.map((ele, index) => {
                  return (

                    <span
                      key={index}
                      title={ele.title}
                      style={{ display: "inline-block", whiteSpace: "nowrap" }}
                    >
                      <img style={{ marginBottom: "-1px" }} src={ele.image}></img>
                      &nbsp;{ele.number}&emsp;&emsp;
                    </span>
                  )
                })
              }
              {/* <span
                title="Amazon.co.uk"
                style={{ display: "inline-block", whiteSpace: "nowrap" }}
              >
                <img style={{ marginBottom: "-1px" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAYAAAB24g05AAACDklEQVQoU32RXUiTYRTH/0+2dRPSB6YVCiKDXBOWom4ZTIJqROqcROisHGoE0YqB+TKbClaOZhHTG132BWHUnI5I1sdFE9mmSRtJzV3MwEGpbUYXXujUR3xeei8ceK5+5zz/8+ec85D7vQEqL8qCZzKEX3Nr+B9cjQxTd2wszbttQLNljHEsnoDkWBqK/a8Q1ehAng/+oDoSxg6NBpHoEryTs0x4sTIXie6HjEXXjeiyBxkrjqai2PMUO7k2dL+fBtF3eGj1ORlO/hxlgpRKDax9QTRdkYM21LMaedwP410/rNI5rEVnIDYY8cIZQnOrmzcolaZhPraMC5I9yPD1Q2zqYI3MYDEG4nQxJhYLvi4AN8yjKMw/jIEBH0g4EqeS7H0gRFhfAKqt4CdwupIeKQUCoT8gDn0bLZOnQvTtOy9ajCWJV6K/k2rizIPonJjffoLlwiLWuOvLhGCwvr4qcHD6L8gJrYOWn8lh1zffVCL/AEA5jh1uq8Fm7mtsR7UtDMXxHAwPfeINGnVSXNLmYuWeGdi9F9dmj8DedVYwEI17oTrvgudNBVZ7bPgX8OOZ0oRbLU9AHo1MUYNahkSnGeMqPYY+L7ARH5gUQBV/ROoYRNXVEcbGyzKUKLMQr6+BaX8dSIt9jGYOv4T7kBp+b0TY793rWrhPl7Fc/eEtClT8125GRno2OOspWJo+YgOa38rkXZuAuAAAAABJRU5ErkJggg=="></img>
                &nbsp; 462,719,876, &emsp; &emsp;
              </span>
              <span
                title="Amazon.de"
                style={{ display: "inline-block", whiteSpace: "nowrap" }}
              >
                <img style={{ marginBottom: "-1px" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAYAAAB24g05AAABYUlEQVQoU41STUtCQRQ9b1EkUZt+iLaNIMLCEoOQoGgZEe36kKhNfyDoF7SVECyCjBZBSFm2KQha9xNMnzoz72tm4s3VpxKBA8O995x7z517GSudTmmoFvoPE2HEBrD/Aiu9NKP3D48j3vc94zuOE2FC8A5mlOE4ZIvFAiKB6tsnkYJIu2FHAvVG3fjNJlnGWtjMJHF5dwtrZ3lWb+/l8PXyQQKcuokWjSU4B7MbkZhd+zF+IrtAAo/z03ru4ASovBtCCwHteeYq14V2XUhG+1CMQQkBxTlG1lMolcuDAsMWh2J/BPRDZajOYXH4orGtLL2gcBrXaxtH8L5faYR2LZpXMppXiqaxgaDFSpdjMpHBzXkV1n0+rhdXcpDtCpEBJUufkoNOHPiEq4BDKR+xqVVc5Z9JIJnajbqaYq+3den3PpkM2gN51xdPsEpncd2Psm5+rIe2FDDhAswDxkfJds8v17z51coLdO4AAAAASUVORK5CYII="></img>
                &nbsp; 462,719,876 ,&emsp; &emsp;
              </span>
              <span
                title="Amazon.com"
                style={{ display: "inline-block", whiteSpace: "nowrap" }}
              >
                <img style={{ marginBottom: "-1px" }} src="/flag.png"></img>
                &nbsp; 462,719,876, &emsp; &emsp;
              </span> */}
            </div>
          </div>
        </span>
      </div>
    </div>
  );
}
