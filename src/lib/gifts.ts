export interface Gift {
  id: number;
  name: string;
  goal: number;
  current: number;
  description: string;
  image: string;
  imageHint?: string;
  storeUrl?: string;
  category: "casamento" | "cha";
}

export const allGifts: Gift[] = [
  {
    id: 1,
    category: "casamento",
    name: "Passeio na Lua de Mel",
    goal: 1000,
    current: 0,
    description: "Ajude-nos a ter uma lua de mel inesquecível!",
    image:
      "https://fastly.picsum.photos/id/49/1280/792.jpg?hmac=NnUJy0O9-pXHLmY2loqVs2pJmgw9xzuixgYOk4ALCXU",
    imageHint: "honeymoon travel",
  },
  {
    id: 2,
    category: "casamento",
    name: "Aluguel de carro na Lua de Mel",
    goal: 651,
    current: 0,
    description: "Pra exploramos o mundo.",
    image:
      "https://cdn0.matrimonio.com/vendor/2268/3_2/960/jpg/mzr-3687_2_282268-171283978178315.jpeg",
    imageHint: "carro",
  },
  {
    id: 3,
    category: "casamento",
    name: "Jantar Romântico na Lua de Mel",
    goal: 300,
    current: 0,
    description:
      "Um momento especial e uma experiência gastronômica para nós dois.",
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUVFRUQFRUVFRUVFRUVFRUXFhUXFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLi0BCgoKDg0OGhAQGi0dHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKIBNgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAECAwUGBwj/xAA/EAACAQIEAwYDBQYFBAMAAAABAgADEQQSITEFQVEGImFxgZETMqFCUrHB0RQjYnLh8AczU4KSFUOi0hY08f/EABgBAAMBAQAAAAAAAAAAAAAAAAABAgME/8QAIREBAQACAwEAAwEBAQAAAAAAAAECEQMSITEEE0EiUbH/2gAMAwEAAhEDEQA/APJeIcjLKJ8IscO6ZDCNoJhfjefVscgR8sciJSKiTjARxECkgY0eBkY0UaANeR2aStGqcjAhCHSKRpGSJjL+lGMUemhYhVBJOwAJJ8gN4GuxeAq01pvUQqtZPiUibWdAbXFvHr4dYLPRe3eAZuH8Ky06henhilQCmxKXWlo9h3TdTv4zzoxSykaMY5mn2W4UMXjKGGYlVq1MrFbZgoUs1r6XsplEyTGMN4zgvgYitQvf4VapRBO5COVBPmAD6wIwJBoOd4Q0H5yoVTkXkpF4EZY3OOsYbxhOKKIbxAQJBpKQbeJScrqbyyVPvAqsWWAaSsS2vopk5LxUU+vXWSaSRdIiIGS1GGxMUa0UAliBpBcEdxDK0BoGzkSv4ifR0lGB2jmQs1o4jSQgZWjgRRxECtIyRMhmgCkKu0mAekrxLZVuRvpHotrKR1lkGoNtCTGRT1D/AAeZFp1msM/xAM1hfLlGl+l7zy6dn2Ax60lqZmCgsu5A5eMw/J308acU3k9oGNvzE8W/xaRBjgVUDNSRmsLXOZhc+NrTvaOPJ+9/xb9J5z/iNVFTFBlObLTCta/dILXB6HWYfjW3L1py46jkyZ652H/w7qYetRxlSuuemc4pKtx3kKkFyejHYTyFp9DYfifcX+UfhNfyOW4a0z48O23I9r/8NHrVa2KpYlS1R3rGmyWFyb2VgT9RPJSZ9D4riXcb+VvwnzwATsL+Ur8fkue9lyYdVbShd5opw6s3y02Ppb8YP+wVA2VlKnxnVKxsLCYc1HCAqLm12NlHmeUtxfCqiUhWNvhlsl9u90AO+3KauHw1OjTFSpsTZF+8RufITJ4rj2qsNWKqLAHYeSjRREDYHDXR6jK2VSqBgBlztsGude6CbDwjbE2I8LC35TWxRWnw7CpbWrWrYpv9gFJPTKQfeYYYkeZhPT+LSSeh87GXPQXKW2NgRl63sb35QVTaFUzcEeB/v8IqJ6HkTvJCR5xhKVHeWyobwKr6Q1ksXyHUx8MtzI1jd/ISL9aT4mBImSBjXiUiBFJRQJKtM5tHE0qszcVyM1jKjgdI4eQRtAZao0kaXarauo5yIxIglSSp7SusT3ok1/CE0kuL6xuE0gxa6g2HMXtruPGdz2N4EtZcT+/F0wz1AFFQWKlfnutmW19B1kZWRUlvtcUKY6SQm3iuE/vFUEsp+ZlGW3vt6iYpXW3pDHKUXGwoLxEXQ+Gs0KeEqNsjH0MubgFd1IygX+8ZXaQtWsTA0iyZrgAHLcnnvtvym7wzg5rrVZH/AMlBUcZTsWCi2uupmv2U7MMt6ThKjOQVFtB7+U9R4f2U+HhalIfAV3cPdaQy5coBVhbXaYZ8ntkaTHybeHYnhtRQSFLWUtoDew3MVdaa1QGe2QoGGU5brbPly3O4O49Z6Rxbs29JirFTnscy6AqHW4yjbcaTkMJwWl3qtXvEsz2v3VJa9vEiGPJv6q4f8dtQqHTUeWt/wnEdqOGPUxNSqoyqSoJbQ5lUA2F9dp0uCxJKVMh72S48rjNY8tJy+Lx5ZmXYje9+vPpvMuCdd1py/wCvFvEsFQOQgd0p9lj81+8GJubi49/KaScexGmT4dgLWI6WHWc6MWbd05dMwvrYtl125hbQKrjKltO8CL2HW2uYEXv6Wjyly8/9VjJHRVO2Fa+S99DmIVbeVvXbeZdDjBzjKEA2sq236rMemTrcEFvtG3dt185FqGpKEEdPtfU2McwkG3WjitV07uh2OguNL6GZD3YkkknnfeRw+LKgjutlIVr2uDa4sTp1hqv8UG9jyuDzsfY/ST+zLH6Lx45ewemHwuIRFqAh0QJfUbbkEab3MDxnYgnWlV9GH5iZJxBpnU/qPadv2YrvUpAkWUaK1rZ7m/rbXXym2OdYZYSOJ7SUwiUVZjnpUxQZQLgZftDUb3+kwP2tdrN9BN7t/g2pYkuPlqgOOlwApH0v6ic2vSwM6MJ4xyvq8YpP4vYH84Xhq6sQFOuuhFjtMtqY6WmtguEsaTVgvdQhS2/eYE5R6D0uL7iGUhSq5Abycgu8Rpyld5aZUkZUbhjYQRawzG+95d8Sw9IDR+b6yZN7XbrTQDiOsrpSBOsXUdl5EUrDGPFqn2X1Jn4oaTeXhjHcgfWSXgKn5nPpYSu0R1rBw76CF0tpv4bglBfs38yTNKhhEX5VUegkXOL6WuF/Y6jHuox8gYdhuz+Ib7Fv5iBO5pqIRTAk3mpzijn+zvA2pVAauUqxVSBfbML6+V57jhK9OmoWmqqoFgFGUW6WE8ye2gG9xYaTSpcVbrOTnzytljo4+OWadH2p+G9FiFXNpYgC+/WcXSwKLqEA57CaWJ4ouRs7Da9r66RIVKg9QD9IuPLLXp5YyXTJx+MSkpJ1I5DeczW49WJurKo6AA29TOgx3F8CGIdgTsSqsw9xLsDTwVUXp5GtvbceYOsvddHFceOf7w2H7H8XrNiEZwLLpcCwNxY3/vnPRH4ys4fE8So0QQCqlVJVcyrcm1rg8tDMar2vS/ytfwOky5MMs7uDUzu5jp2faDi18p0tZlvyGqtf/wAZ5Xi+N4f4Spd2YEtZF7oJJNrsRffoZu43ipr4eobBUAK695i5GgKgaA9SZ5xWTKSJ1fjcU165efky475NOgwvaJKViFZ7hgUz5QvIX7pB66R63aNX+aiLedzbpcWtOcRL7m3vr7CSy8r9Z1fqx/45sufPL7XT4OvSr5suZcq5iN7KpBa3pcDXnLWwlFjda7oRYgGiOXiKh/CY/DamUEAWuLE9RcG3usLzTO4Ta8c7pbxDCqSMpXNzIXum/wBQZUuFNhdrttztvvbrJKZcjQ6yTSu1pU8FpbunrcX9td/GG0+HgjcrYkjLYaHlre+kjR1EPomwsOdvpIuMVMqLw/D6WhKBiNi/e9bHQzqcIAEuTyFyelr+gnP4ZCSonRPRuoUErpyihZacn2u4jhK9I0jmZgbo6roreZ3HlOBqYY3NgTboPDfynp2M7NUnOrAE+hksNwNqFOqtJsxqL8Oz6KC3dzE2JsASbc5eGdn1XLjxXH/O9vNuHcOas60wDcna3rcietcIwAoUUpC1lB9S2rE9SdNfADlA/j4bDWDuofLa5HfK3JAsNQusNwfEKVX/AC6it4A6+28du2U47JvXijiPB8NU1qU1udMw7rX8xvObxnYtDrRqVB4OhI99DOo4s4FMk33B3sbjUWInQ8C4TUzU2dGKB1YuWVdAQblbaiLtpPXzbyDiPZLF0dGp7qGFjbQ7XzWtttMGpSZCVcFT0IsZ792lpVS7vle12CsQCmXMSPlO2vOcv/09Khb4yI40Aug01JPjHjnsri8nrN3ZVhxvPR+I9isPU+QtTPgcy+x/Wc/iOxWIp3yFag8O63sf1lywrGLT2lHOG18K9PR0ZT/ECPrAl3jhVZFFFAOrBkg8gJICYtUw56xnxQXUtGZwNyB56QOs1KpoDmP8ALfXaGj2zcZxN3YnOQOQDWsPTnGocXrKe7UJ8D3v6w5ODKTfLb+Ygn2Gn1mhh8GqbKL9bQsjpn5E1rqL4QzE061zTqqcwI1tuNjfkTvHrYFKlQk1axLG7fDay+NtLD0lTP4yo41l2LehIkdL/GOXJN/G2eEYLMGKWsAAKlQsSR9ognfz9o2L4rT1QBiD3ScrZbeBE5ypjWP2WMqONb7hj/Vb9qZyyfwNxDBHNempZenMfrDOBYFgxqGmwI+UXIHqR+Er/wCo9QZfRxoOx/Ix3DzTa/l5WaE8Tdqq2qIARsQNR5GYJwlUGwCt4zo6OKOxbT+IZh685Vj8KzsMlQ0mNst3tSYbEioNtRsw01uRFMdeDH8jPGeM/Bcbp0KZQXZmPeKgFdNhqdRvMbi1BKl3pXvuy5bEePlD14U9YsMozoSrAZQ9xvdNz52mhwfANRJJOhGt9Y5rD2Dkzx5Z7txAXKdZNKdzedeOG0rnurdmBGfvfaFwt9hYnfSYhwQckoRa+yzecm3H+vX0kARQD7209DEKo6yyrdAOfK0GZlO6e0nbX9eVm4u+JLKVS8E+Eu6j8ZE1B4gwquPDe5bquhw7ADUw/D115G56DX8JyGHxGU3sD4MLj9Z03Z3iju+RqS25uugXzBk2Kyws9dPw8Hci3nvK+L9oxQ7oQsx21AX3/KY+I7RqLj4bW2uCL+0y8OgxTFUVxubnVfUjYxHOOy7zngDH4p6rl23PUk26WJnQ9ncdW+C93Yp8oB1IOl+8dQLHaD0+ylY7uoHjqZ1WEwdOlSKWAGWxO/eYWuTJb8vNhcdRyHFKLu7VAnzG5Gp9jBMPgKjsAqMDfcDb1npXwV+6JYigbASdFj+XlJplHCOtPD0yzPaomYtvYAk38J6VSx466dDtOExeJCMg5sbDbflJJxIjnMOffmmWH+t7dvi+IDI2otlOnpOJojfz/KSOPJBudLayWGIKgjnc+50lcG9W1HJjqmkTLGEradG2ekKigixAI6EXExcb2aw1TXJkPVDl+m30myTIEx7LTjsT2NYH93VBH8QIPuN4p1xMUrtS6uKXEZlulr+MF/Zax+asfJdP0mThsSUOntNL9vBF47NFLL9EU+H07i5Zj4maODVTfJ8oNr9T+k5+lxGzgnbUH1Frw7hmKNI5W1RjcMNdfzEVlOWOlweDapfKPlUu3go5yuu6roNTDuA8TpoTmsyMLHQMARextztczKxVEqxscy30YbEflM59WgdYZwwqrqSisAQbMAQfMGAiWU3tC+wRp8Xqq9QsFVQeSqAB5AQCpY8hIvUvI3ikOo1MOjbqJnYrhwGq+00wZGoZUtibIFpYSoijPoT9k/MBlRgT4EOLesLt+6N/vjL5kHN+C+wlX7QGO5c+H/tDaeIWxU63sAo+VQPziuxNIfDLKp2YC2YbkAnLfyG3gBLaOOpBXXFhw1iadekuYk8lr0x8384163jmpAOIYqyNYXNjbS+ttItLc9w+q5xCu9ySQbHTTMNAOkAwuCapa2g6wvh7n4gN7ka256EE6SWAwtRrEOVUbD+k1jfKaLF4YBbZtR7zNykb6zpqnCw3O0o/+Pi9y9vKNjhnJ9R4NWSr+7NO1he+6/0k8bwYk9wAespxzCmoWixG+ZuZPLXlzmK6te9yT1ub+8Spx2/6xb2D7OOT+80HgdZunBplyBco/h0Pr1nOcG4zVRgr5nU6AHVgfAnfynWZr8oVHJ2/rGbs2rG4qnyM6Dh+G+EgXNe3oILUNpBjzJ/WSm52zQyriCSQSLbWzb+kux2LFSitNKa0woF8oJLtcd4m8xqmLA/p+sofHnkrGPSNup4bVostqrtTcfbTN3xyzIbi4tuLXvHxmMQG1OpmGmpGUk89JyJx7fcP1/SMOJW3Q+/9IXHYmWm1Uqkur7lSGHmDcfhIY0LUJYfHRySSUrsVuTf5Kisba7BplpxRfEQ/DcUH2XHkbH8ZPWz4vtL9WcLwFRXzNUqEZWXK7A/OhQnQDUBiR6TpleZXDONvSIKLTNvssgNvI7jyvac+P2qkxNCrmW5b4dTUC5vYX5DzEWON/ouU/jtTUlbVJzWG7TC+XEIaTdbFkPjcaj6jxmtTxKsAyMGU7MpBB9RpHcbBuUUzyBaUl5EvES0tFBy8UYeXyStGjToYJsI1LEOmx05g6j2iBk8oMAtocQAbMQym9zkbQ+YP6zRTj7D5ag8nW31ExzRkDQiuMp9rHRJ2gPOnSfybL+MIp9oqf2sHfyxAH5Tk/gRDDyf14n3ydbV7R07d3CKvi2JzfS0CfjzHYUl9WaYS4Y9JauH62H99IdMYO1aTcWY71D/tW31MkMaTplv4sbzPGVd/rpLaddj8qn0Un67R9YNtSm7Hc+mw9oTTYL3iQAOZ0HvMr4dcDMUIG9zfbrYafWC1mZvnO20Wj26M8Uoga1B5WY/gJdQq0ahGdiEIvmChj5WJBH96Tn8Fwpqmp7qdTuf5R+c2mwwvpYi1gNrWAAt6CRZFS1RicIlNg1MhgwvmAN0BJHevbW3KWAgWsyHqoDXHTUgAiVnCnXpbTY6+fSOuEa+6gep/pGexVCpm8LR66kiwMVFLC17+cmTEGNiOHMdoEOC1L6afhOhNa3O3nptvf8D00MarW0v6EHcHof71jOZWfA/AuFWqKGYMSfL0nQF0uchuASpPiJyz4whgwOxvL6WNyd9daZ0ZeanrEVu/rosNRDMSblVGY5dTa4H5xuJYemGsDcnUgfKt9ct/tEdZXwnHhWFRTmU6Gx3U7j++kv4nSAbPT1ptqp6Hmp6GIA1pKOQhFI2B03lLCwHjG+LA1maRIB3EiDePeBIPg6bbqJHE9nKeTOjkN90jT0MvBlpqaQtv8Go57LVpHXUTRo1g4vzEKex0MsWhRSiLI3xc5JcmyhdQEy8+t4XISAzQFXuMASdr6XPS/Inr7+A3/TzTOejWAZze1Q5GZlPympoCdeZ1vtyhlJLsBtzv0A3J8pPF4ZaorBtAWDrbcMWJH/iXlRND/wDWqlNsmKoMv8SjI3nYjK3svnNnBIlf/wCvUWobX+GSEq/8G+b/AGlpg4fG4rDDJZa9H/SqLnUD+FT8h8VI9Ydg8HwvG/LVOAr3vlqHNRLeDmxGvW3hePUpbsF1kZDlZSpHJgQfYxSOJ4pxHBN8B6lDGKAGU5lrhQb21OoOh+bX0ii6n2eaxpKMZqzNHDRooAZh6o2MLakoFza0yQYXh8QNmFxFYcqRrryX3NpJQ7fKvsPzMJen3f3Src89BKxhqrfMf/In6bRbPR1wbHVmCjqxAH1IEc0aY0Ulz4d1R62H5yacPHM3+kvWgBtFs9KKdI/wr/Ktz/yMoxddVNrFj/Eb/wBIXWqW2EysYxJvvBWMx36qHFKynuO6fyOy7i3LwJHrJcMxPfAYbkAHoeUHSizGwBm1w7BKmu7dTy8ukd8XejTq4nIpY8vqZRgeJFjZj+kbGVBkOx8DtMRX5iTJGdunYsDa+8gKg5j8Zl8P44FGV9fAbnymjhHXEKzUb9zV1Nsyj71gfl8eUV8E9XFRa6n05iDmr/f9Pfz23AlYcqYsQM4uls33ToGHMeEDV4qqAM3LQm24PJlPW3oRodtAf2vprpbS+XLyH8t9uanqIhVUa1KhQ3IKZGZraG5JAWxOml9Rew3Ma602W9NmUNoVBcaCxGc2AOt/aMjNTYi+VrAXOhIF9rkaQdahU3U2/vmJGnhcvO9/WTZf75w0Np4fFhWzAmmedtUPmOU16HHWQarmB0Jp6gjxWc/Vo6X3HUfn0g1iNiR5Susqd6drQ4ph6p/zAh/i0+hhXweasrDqpvOBbEMfms38wB+sZa6j7BXxV2EXQ+7vkRgdpOquugNpwycSYbVaw/3Ay0cXqf69T/iD+cXSjvHZhT0MMwfDatU2RSbzghxqp/r1PRR+sk3HapFv2nEkdBUKj2BiuFPvHqtbgSYRfiYmoge11S4Jv5bepPpOU4hxRSdST0VRffx2J8bzlMJxk02zLTDNvmqEub9bfrJYvjuIqm7Pv90Bfwkzju/T7zToHxY/7h+Gu+Qa1H8/D2EJTE59bWHIb+55nQe042lcn8TNhOIKgtuZekytsvAsalE/5gH5zGxHFXbbQQF6hO5vHoba6cQpUtKaecUxYoaG1QkZThqnL2l0tBRGKIwBRAxo8AKwuKK+U2KNYMLic7LqFcqdJNipdOgig+GxIYS/NJWRAg7UV6S4mQaAVGw2kfiGTKyBWBB8Q1xaAlSNofVEGKysU5B3TNqNxy/v8ZdhMe6MrAlHQ5lqL3XB8WH/AOb9ZB0kb9feV9S7LB49cShLqFqi3eWypV65l/7beXdPRYmwzDUA/Q/hOUpV2Q3Bmrh+PkfMt/IzLpZ8ad9/WhiKIqCzix5NbX16iBtQKaEadRsZYe0o/wBM+4kTx9DvSNvMQ9HgZkt8uo+7/wCp5SPwAwup8xsR5iTevRc93MhPI7e4lFWhUQ5hqOcolL50N7ac/GKoqsMyjTnbl5j9IZTxYOh1B68vOKrgftIbHpyMNlpl/DB2kTRhi4VswJS2upDW09oV+zx7LTGNGN8GbP7LIPSA3MOx9WV8GOKJ6Q13HKVNUj2WlIoyYQRFo0AlmkSYoojKKKKAKKKKAZqHWEhoLLC4HOUkRGMpp4jW0uMAUeRjiAPFFFALKdQqbiamFxQbfeY8krWisOXTfiMBwuLvoYaDIXKVpEiSjGBh6ywVlhrCU1EjiaGIlTpCCJAiNOg2o8RHJ0uJcVkRQj2WlSnraTHlL0wsLpYcCGz0qwNDW7DymtmvBRLA1pNVDPhEJuVF5ai20G0HqYwCCVccTtA9tJ3A3g1XGqNtZmvVJ3MheGi2Kq4wnwg7OTIRRkcmNFFAFFFFAFFFFAFHjR4A0eNFAMupIRRS0Uocmw8oooUQ8eKKIziKKKIFFFFGElmvhToI0UnI8foiM0eKS0VtKzFFGmqHlcUUZJqJaIooguSSjxQMxguIMaKADGQMeKMjRRRQBRRRQBRRRQBRRRQBRRRQBR4ooAooooB//9k=",
    imageHint: "romantic dinner",
  },
  {
    id: 4,
    category: "casamento",
    name: "Base Báu Queen",
    goal: 969,
    current: 0,
    description: "Base para colchão queen",
    image:
      "https://cdn.iset.io/assets/73735/produtos/1056/c3a9c67f3f217351893295fa9a9560ec66c637693f121.png",
    imageHint: "Cama bau",
    storeUrl:
      "https://www.dfcolchoes.com.br/Base-Bau-Queen-Bipartida-1-Tampa-DF-Premium-Econ-36cm?sku=05422-CORINO-PRETA&gad_campaignid=19006258944&gbraid=0AAAAACtkcVDQxq1wLDYqEKSOXTW9nUH_S",
  },
  {
    id: 5,
    category: "casamento",
    name: "Colchão Queen Ortobom",
    goal: 3399,
    current: 0,
    description: "Um terço da sua vida, você passa dormindo.",
    image:
      "https://cdn.ortobom.com.br/file/41ba5b4b-8ab3-43c0-9be6-b667bef6707e/liberty_2.png",
    imageHint: "orthopedic mattress",
    storeUrl: "https://www.ortobom.com.br/p/colchao/colchao-liberty/queen158",
  },
  {
    id: 6,
    category: "casamento",
    name: "Diária noite de núpcias",
    goal: 668.76,
    current: 0,
    description: " ",
    image:
      "https://images.trvl-media.com/lodging/3000000/2060000/2050600/2050555/9fc56328.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
  },
  {
    id: 7,
    name: "Bandeja Organizadara Home Style",
    category: "cha",
    goal: 99.99,
    current: 0,
    description: "Bandeja organizadora.",
    image: "https://img.camicado.com.br/item/101029398/zoom/1.jpg",
    imageHint: "kitchen appliance",
    storeUrl:
      "https://www.camicado.com.br/p/bandeja-organizadora-home-style-mediterranie-25-cm-x-14-cm/-/A-101029380-br.lc?sku=101029398",
  },
  {
    id: 8,
    name: "Porta sabonete Líquido",
    category: "cha",
    goal: 89.99,
    current: 0,
    description: "Home Style.",
    image: "https://img.camicado.com.br/item/100828657/zoom/1.jpg",
    imageHint: "laundry room",
    storeUrl:
      "https://www.camicado.com.br/p/porta-sabonete-liquido-home-style-mediterranie/-/A-100828649-br.lc?sku=100828657",
  },
  {
    id: 9,
    name: "Porta Escova de dente",
    category: "cha",
    goal: 59.99,
    current: 0,
    description: "Home Style.",
    image: "https://img.camicado.com.br/item/100828711/zoom/1.jpg",
    imageHint: "bedroom interio",
    storeUrl:
      "https://www.camicado.com.br/p/porta-escova-home-style-mediterranie/-/A-100828702-br.lc?sku=100828711",
  },
  {
    id: 10,
    name: "Porta cotonete e algodão",
    category: "cha",
    goal: 99.99,
    current: 0,
    description: "",
    image:
      "https://img.camicado.com.br/item/000000000000042674/zoom/1.jpg?ims=fit-in/x566",
    imageHint: "porta cotonete e algodão",
    storeUrl:
      "https://www.camicado.com.br/p/porta-algodao-e-cotonete-home-style-beauty-15-cm-x-8-cm/-/A-300042674-br.lc?sku=000000000000042674",
  },
  {
    id: 11,
    category: "casamento",
    name: "Lava e seca",
    goal: 3798,
    current: 0,
    description: "Lava e Seca para facilitar o dia a dia dos noivos",
    image: "https://imgs.ponto.com.br/55048505/1g.jpg?imwidth=500",
    imageHint: "washing machine",
    storeUrl:
      "https://www.casasbahia.com.br/lava-e-seca-samsung-wd11a-3-em-1-inox-look-com-ecobubble-e-lavagem-a-seco-wd11a4453bx-11-kg/p/55048506?IdSku=55048506&idLojista=10037&tipoLojista=1P&&gad_campaignid=22444217737&gbraid=0AAAAADtAamgUU6Ya-1K2DmFN3sJhiw4mP",
  },
  {
    id: 12,
    category: "casamento",
    name: "Lava Louças Brastemp",
    goal: 2100,
    current: 2100,
    description: "Para os noivos não brigarem pela louça.",
    image:
      "https://brastemp.vtexassets.com/arquivos/ids/267500-300-300/01_Brastemp_Lava_loucas_BLF08BS_Imagem_Detalhe_BLF08BS_FRONTAL_4.jpg?v=638973414195430000",
    imageHint: "cooking lesson",
    storeUrl:
      "https://site.fastshop.com.br/lava-loucas-brastemp-cinza-metalico-com-08-servicos-e-05-programas-de-lavagem---blf08b-brblf08bsana_prd/p?idsku=2498&gad_campaignid=22746909051",
  },
  {
    id: 13,
    name: "Jogo de Pano de Prato",
    category: "cha",
    goal: 39.99,
    current: 0,
    description: "Home Style",
    image:
      "https://img.camicado.com.br/item/101270659/zoom/1.jpg?ims=fit-in/x566",
    imageHint: "Pano de Prato",
    storeUrl:
      "https://www.camicado.com.br/p/jogo-de-pano-de-prato-home-style-drai/-/A-101128388-br.lc?sku=101270659",
  },
  {
    id: 14,
    category: "casamento",
    name: "Almofadas",
    goal: 40,
    current: 0,
    description: "Mantendo a Sala sempre fofinha",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2IQOG_ov9Y8rVPPZRlPOrY1p2U04cDODGWQ&s",
    imageHint: "almofadas",
  },
  {
    id: 15,
    category: "casamento",
    name: "Jogo de Cama",
    goal: 460,
    current: 460,
    description: "",
    image:
      "https://d1l2khdhnk6ii8.cloudfront.net/Custom/Content/Products/10/03/1003540_kit-alexandre-herchcovitch-5-pecas-edredom-jogo-de-cama-casal-branco_z1_637526300710111336.webp",
    imageHint: "bed sheets",
  },
  {
    id: 16,
    category: "cha",
    name: "Assadeira",
    goal: 139.99,
    current: 0,
    description: "Para fazer uma deliciosa lasanha no Domingo.",
    image: "https://img.camicado.com.br/item/100835427/medium/1.jpg",
    imageHint: "coffee machine",
    storeUrl:
      "https://www.camicado.com.br/p/assadeira-refrataria-home-style-neutre-35-cm-x-24-cm/-/A-100835419-br.lc?sku=100835427",
  },
  {
    id: 17,
    category: "cha",
    name: "Luva Térmica",
    goal: 29.9,
    current: 0,
    description: "Para preparar bolos e sobremesas deliciosas.",
    image:
      "https://imgmarketplace.lojasrenner.com.br/20000/3830/7010705803603/7510712560529/0.jpeg?ims=fit-in/x566",
    imageHint: "luva térmica",
    storeUrl:
      "https://www.camicado.com.br/p/kit-2-luvas-termicas-pegador-em-silicone-cinza/-/A-7010705803603-br.lc?sku=7510712560529",
  },
  {
    id: 18,
    category: "cha",
    name: "Escorredor de Massa",
    goal: 57.31,
    current: 0,
    description: "",
    image:
      "https://imgmarketplace.lojasrenner.com.br/20000/5594/7010704516840/7510709302175/0.jpeg?ims=fit-in/x566",
    imageHint: "escorredor de massa",
    storeUrl:
      "https://www.camicado.com.br/p/escorredor-de-alimentos-inteligente-massa-legumes-lavador-de-arroz-2l-plastico-plasvale-branco/-/A-7010704516840-br.lc?sku=7510709302175",
  },
  {
    id: 19,
    category: "cha",
    name: "Forma de gelo",
    goal: 29.99,
    current: 0,
    description: "",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl9K5bdZmkOAViweIU2pbbcfQE0tnPgXj4_zAfCTgF6y60yA",
    imageHint: "forma de gelo",
    storeUrl:
      "https://www.camicado.com.br/p/forma-de-gelo-home-style-cocinero-15-cubos/-/A-100880578-br.lc?sku=100880586",
  },
  {
    id: 20,
    category: "cha",
    name: "Jogo de Medidores",
    goal: 25.99,
    current: 0,
    description: "",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSxTV7tcGEjO2T2BPqQXe9YF607vZsRujLja9PkzaoP3edJLQ",
    imageHint: "jogo de medidores",
    storeUrl:
      "https://www.camicado.com.br/p/jogo-de-medidores-home-style-cocinero/-/A-100463678-br.lc?sku=100463686",
  },
  {
    id: 21,
    category: "cha",
    name: "Ralador",
    goal: 59.99,
    current: 0,
    description: "",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS8qV4L93UwNdkK06ILiQ-dePsSo3q3qZCt_9Ait4TIzhcGoA",
    imageHint: "ralador",
    storeUrl:
      "https://www.camicado.com.br/p/ralador-4-faces-home-style-utile/-/A-100898241-br.lc?sku=100898250",
  },
  {
    id: 22,
    category: "cha",
    name: "Galheteiro de Azeite",
    goal: 59.99,
    current: 0,
    description: "",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQidX0TkASXkvrqgb3RK0niYQ9g7DcpccNT5nwUIfJA40jrXQ",
    imageHint: "fechadura eletronica",
    storeUrl:
      "https://www.camicado.com.br/p/galheteiro-home-style-duo/-/A-101182430-br.lc?sku=101182448",
  },
  {
    id: 23,
    category: "cha",
    name: "Escumadeira",
    goal: 29.99,
    current: 0,
    description: "",
    image:
      "https://img.camicado.com.br/item/000000000000045414/zoom/1.jpg?ims=fit-in/x566",
    imageHint: "escumadeira",
    storeUrl:
      "https://www.camicado.com.br/p/escumadeira-home-style-cocinero-pro/-/A-100715100-br.lc?sku=000000000000045414",
  },
  {
    id: 24,
    category: "cha",
    name: "Concha",
    goal: 29.99,
    current: 0,
    description: "",
    image:
      "https://img.camicado.com.br/item/000000000000045408/zoom/1.jpg?ims=fit-in/x566",
    imageHint: "concha",
    storeUrl:
      "https://www.camicado.com.br/p/concha-home-style-cocinero-31-cm/-/A-300045408-br.lc?sku=000000000000045408",
  },
  {
    id: 25,
    category: "cha",
    name: "Cortador de Pizza",
    goal: 35.36,
    current: 0,
    description: " ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrGPXknvCltSdvxEndV9GTLFeIyeoLfJfjOcHWIqlsTbZuXQ",
    imageHint: "cortador de pizzau",
    storeUrl:
      "https://www.camicado.com.br/p/cortador-para-pizza-tramontina-verano-com-lamina-de-aco-inox-e-cabo-de-polipropileno-onix-tramontina/-/A-701451937-br.lc?sku=754539558",
  },
  {
    id: 26,
    category: "cha",
    name: "Espátula de Bolo",
    goal: 26.22,
    current: 0,
    description: " ",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTrDhpz6on9nFChmWE_zWb4KpiqozFNfysmUBOiR2zJfYtIIg",
    imageHint: "espátula para bolo",
    storeUrl:
      "https://www.camicado.com.br/p/pa-para-cortar-bolo-espatula-cortador-de-fatia-pizza-inox-ta/-/A-7010704510019-br.lc?sku=7510709290439",
  },
  {
    id: 27,
    category: "cha",
    name: "Colher de Arroz",
    goal: 29.99,
    current: 0,
    description: " ",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRMikFQ08Em6VWL2jpJZrUzvlUwGT00h6bvantvONQKC-nfLw",
    imageHint: "colher de arroz",
    storeUrl:
      "https://www.camicado.com.br/p/colher-de-arroz-home-style-cocinero-34-cm/-/A-300045409-br.lc?sku=000000000000045409",
  },
  {
    id: 28,
    category: "cha",
    name: "Pilão",
    goal: 89.99,
    current: 0,
    description: " ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcjl-LeQhwUmDUgDJgscageKgeTUkmLfr5cN3cdiy_zpPPsg",
    imageHint: "record player",
    storeUrl:
      "https://www.camicado.com.br/p/pilao-home-style-petra-11cm/-/A-100226381-br.lc?sku=100226390",
  },
  {
    id: 29,
    category: "cha",
    name: "Amassador de Batata",
    goal: 68.19,
    current: 0,
    description: "Inox",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQolkzgLq8h4NK2JE0wFz7uEYVfuwkwEX55hjA6mO3xa145hg",
    imageHint: "amassador de batata",
    storeUrl:
      "https://www.camicado.com.br/p/amassador-de-batatas-tramontina-marffim-em-aco-inox-tramontina/-/A-701258496-br.lc?sku=754087817",
  },
  {
    id: 30,
    category: "cha",
    name: "Colher de silicone",
    goal: 76.9,
    current: 0,
    description: "",
    image:
      "https://imgmarketplace.lojasrenner.com.br/20000/1024/700626681/752118421/0.jpeg?ims=fit-in/300x300",
    imageHint: "colher de silicone",
    storeUrl:
      "https://imgmarketplace.lojasrenner.com.br/20000/1024/700626681/752118421/0.jpeg?ims=fit-in/300x300",
  },
  {
    id: 31,
    category: "cha",
    name: "Tesoura de Cozinha",
    goal: 59.99,
    current: 0,
    description: "",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDjYjW33li-mh7Ospf9stLuMyiefdS6HALpyW73-cO9N6M_g",
    imageHint: "tesoura de cozinha",
    storeUrl:
      "https://www.camicado.com.br/p/tesoura-home-style-cocinero-pro/-/A-100757043-br.lc?sku=100757051",
  },
  {
    id: 32,
    category: "cha",
    name: "Abridor de Latas",
    goal: 59.99,
    current: 0,
    description: " ",
    image:
      "https://img.camicado.com.br/item/100720110/zoom/1.jpg?ims=fit-in/x566",
    imageHint: "abridor de latas",
    storeUrl:
      "https://www.camicado.com.br/p/abridor-de-latas-home-style-utile/-/A-100720101-br.lc?sku=100720110",
  },
  {
    id: 33,
    category: "cha",
    name: "Espátula Pão duro",
    goal: 29.99,
    current: 0,
    description: " ",
    image:
      "https://img.camicado.com.br/item/101027077/zoom/1.jpg?ims=fit-in/x566",
    imageHint: "espátula pão duro",
    storeUrl:
      "https://www.camicado.com.br/p/espatula-pao-duro-home-style-cocinero-33-cm/-/A-101027069-br.lc?sku=101027077",
  },
  {
    id: 34,
    category: "cha",
    name: "Espátula Vazada",
    goal: 29.99,
    current: 0,
    description: " ",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRajIOJd_H_aMFjhvXrprpn2GLtVBXrVP8JjTLqY2qap46sKw",
    imageHint: "Espátula vazada",
    storeUrl:
      "https://www.camicado.com.br/p/espatula-vazada-home-style-cocinero-36-cm/-/A-300045406-br.lc?sku=000000000000045406",
  },
  {
    id: 35,
    category: "cha",
    name: "Pegador",
    goal: 35.99,
    current: 0,
    description: " ",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRnpkQXsWEdLYwrYqPUhxH2lSAuS70Au6wTjdz3Upcjc-oVGA",
    imageHint: "pegador",
    storeUrl:
      "https://www.camicado.com.br/p/pegador-home-style-cocinero-33-cm/-/A-101027106-br.lc?sku=101027114",
  },
  {
    id: 36,
    category: "cha",
    name: "Colheres de Medida",
    goal: 44.9,
    current: 0,
    description: " ",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTvQ89AUXICMaHVO5PM6Hy9Xpyt0xr26OlCPDTjgVKAF1wPvQ",
    imageHint: "colher de medida",
    storeUrl:
      "https://www.camicado.com.br/p/conjunto-de-5-colheres-medidoras-cozinha-cinza-kitchenaid/-/A-7010703994578-br.lc?sku=7510708125900",
  },
  {
    id: 37,
    category: "cha",
    name: "Secador de Salada",
    goal: 179.99,
    current: 0,
    description: " ",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRKm8-mv94HVACjAK9u06VGD_a41_ACAreHRKTNk9MCQC9zrQ",
    imageHint: "Secador de Salada",
    storeUrl:
      "https://www.camicado.com.br/p/secador-de-salada-home-style-cocinero-24cm/-/A-300044810-br.lc?sku=000000000000044810",
  },
  {
    id: 38,
    category: "cha",
    name: "Açucareiro",
    goal: 49.99,
    current: 0,
    description: " ",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSDzfTozAmVdKfMT3Bf90oD9o41vckq4L-PfMa5EmnqIe3XwA",
    imageHint: "açucareiro",
    storeUrl:
      "https://www.camicado.com.br/p/acucareiro-home-style-holy/-/A-101466539-br.lc?sku=101466547",
  },
  {
    id: 39,
    category: "cha",
    name: "Jarra para suco",
    goal: 79.99,
    current: 0,
    description: "",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRMNdyrHMn1-JnWNudKEoZotpgdhEQOj885klfFb0GLzgbjkg",
    imageHint: "jarra para suco",
    storeUrl:
      "https://www.camicado.com.br/p/jarra-home-style-new-gaelle/-/A-101307482-br.lc?sku=101307491",
  },
  {
    id: 40,
    category: "cha",
    name: "Toalha de Mesa",
    goal: 199.99,
    current: 0,
    description: " ",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5Vy9dHLUsyv3pbAYUI71i5zO9xI6lVSshnIlf18S8QF1yDg",
    imageHint: "toalha de mesa",
    storeUrl:
      "https://www.camicado.com.br/p/toalha-de-mesa-home-style-quadri/-/A-101282633-br.lc?sku=101282641",
  },
  {
    id: 41,
    category: "casamento",
    name: "Panela de Pressão",
    goal: 174,
    current: 0,
    description: " ",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT-BDMgiJLU51Zi94WdVIcAWUh4xxShS8Csh41XsGiEbGQjPA",
    imageHint: "panela de pressão",
    storeUrl:
      "https://www.amazon.com.br/Tramontina-Vancouver-Alum%C3%ADnio-Revestimento-Antiaderente/dp/B0CD4SCM33/ref=zg_bs_g_17124947011_d_sccl_3/142-9777363-4041438?psc=1",
  },
  {
    id: 42,
    category: "cha",
    name: "Jogo de taças",
    goal: 149.99,
    current: 0,
    description: " ",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSdgi2s7gjff9oP9JGbhd0jPR6ATVHOh5-xj8voVsSV5xXKug",
    imageHint: "jogas de taças",
    storeUrl:
      "https://www.camicado.com.br/p/jogo-de-taca-agua-e-vinho-bohemia-gastro/-/A-300038761-br.lc?sku=000000000000038761",
  },
  {
    id: 43,
    category: "cha",
    name: "Jogo de xícaras",
    goal: 79.0,
    current: 0,
    description: " ",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTlUTLcXWgH-329_LV9x7_cspLxjIXMyJIpcatHBR71XNIUQg",
    imageHint: "jogo de xícaras",
    storeUrl:
      "https://www.camicado.com.br/p/jogo-xicaras-de-cha-cafe-com-pires-210ml-kit-6-pecas-ceramica/-/A-7010704840109-br.lc?sku=7510710186672",
  },
  {
    id: 44,
    category: "cha",
    name: "Tábuas para Corte",
    goal: 174.99,
    current: 0,
    description: " ",
    image: "https://m.media-amazon.com/images/I/71+H93fQ-ML._AC_SL1200_.jpg",
    imageHint: "tábuas para corte",
    storeUrl:
      "https://www.amazon.com.br/T%C3%A1bua-Madeira-Invertida-Canaleta-Stolf/dp/B0821SHKZV/ref=asc_df_B0821SHKZV?tag=googleshopp00-20&hvadid=709885039594&hvpos=&hvnetw=g&hvrand=15641890093906329261&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198389&hvtargid=pla-913212534619&psc=1&language=pt_BR",
  },
  {
    id: 45,
    category: "cha",
    name: "Fuet",
    goal: 39.99,
    current: 0,
    description: " ",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT3osBWPeGkfl1oEkNOdSz0oxKzgWrZyCZgELlGPGh6NMZszQ",
    imageHint: "fuet",
    storeUrl:
      "https://www.camicado.com.br/p/batedor-multiuso-home-style-utile-28-cm/-/A-100720304-br.lc?sku=100720312",
  },
  {
    id: 46,
    category: "cha",
    name: "Jogo com 6 Cumbucas",
    goal: 107.59,
    current: 0,
    description: " ",
    image:
      "https://imgmarketplace.lojasrenner.com.br/20000/5592/7010704432078/7510709137029/0.jpeg?ims=fit-in/x566",
    imageHint: "cumbuca",
    storeUrl:
      "https://www.camicado.com.br/p/6-tigelas-680ml-cumbucas-bowls-de-ceramica-lyor-bege-cronus-sobremesa-sopa/-/A-7010704432078-br.lc?sku=7510709137029",
  },
  {
    id: 47,
    category: "casamento",
    name: "Sanduicheira",
    goal: 99.99,
    current: 0,
    description: " ",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSHzAtjT_ig6YEPtLquXXnWsz0hYSpiIFpX2xlZ5NVY4zSTKA",
    imageHint: "online learning",
    storeUrl:
      "https://www.amazon.com.br/Sanduicheira-El%C3%A9trica-Cadence-Click-220V/dp/B0CDJ5DQ7M/ref=sr_1_4?dib=eyJ2IjoiMSJ9.UzCUWFzZFZ66hdicWvWpyeJORgikoJugoTQYyIwQSGWtZBG_3eFVH1nBpvVhchBtss3IBWm7PkQ5_PwDtEcydEdRlx24k1feh86evdbKx-20WDXNVqjPTR5XwNXMQH0HrAhPYkIeZP6Xt35UTd0m4YfoPZDdtQzWEaJ2Nf9arrgr--sDJNXvWdqu7DCid2F4X8L-CAy33bZNACOsvKyUNh3ymzDl62V8cYJ7Lhwdk0DfG0DPJT5Wt6e0iYqCVbumnfRrR-rwwvw8v9UxZVHBUQ08ms2ooZl0uIVvbYBJoD-ROYHUlzqCRS8p8fqJzO2gnPbl1BVrf_MsYB7HzZXlS5aLEFPcT5EYR2yddM604m4grtNbYJ8nAck5DkU5zoa2KDD_e7fDsw1GkcUK7pfW3JqLdjRGnRbJ2q18lJ0HZwZjneP4j07aukhsuRJTtnEX.6M8F_OLQwovFJjIGMrK3PKksBeGOgubMfdi5b_FZU9E&dib_tag=se&keywords=sanduicheira&qid=1736125833&sr=8-4&ufe=app_do:amzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9&th=1",
  },
  {
    id: 48,
    category: "cha",
    name: "Jogo de Marinex de Vidro",
    goal: 129,
    current: 0,
    description: "Serve pra tudo.",
    image: "https://m.media-amazon.com/images/I/51X6C1aXaxL._AC_SL1000_.jpg",
    imageHint: "jogo de assadeira",
    storeUrl:
      "https://www.amazon.com.br/Assadeiras-Marinex-Pe%C3%A7as-Tampa-Vidro/dp/B082M6W4VX/ref=asc_df_B082M6W4VX?tag=googleshopp00-20&hvadid=709870389015&hvpos=&hvnetw=g&hvrand=15470083941174972509&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9196708&hvtargid=pla-896953145889&psc=1&language=pt_BR",
  },
  {
    id: 49,
    category: "casamento",
    name: "Robo aspirador",
    goal: 2400,
    current: 0,
    description: "O melhor amigo da faxina, o Robson.",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_973988-MLA85070062101_052025-F.webp",
    imageHint: "home garden",
    storeUrl:
      "https://www.mercadolivre.com.br/rob-aspirador-de-po-wap-robot-w4000-estaco-autolimpante-mapeamento-lds-360-passa-pano-com-mop-giratorio/p/MLB42518345?matt_word=custobeneficio&matt_tool=52948640&forceInApp=true",
  },
  {
    id: 50,
    category: "casamento",
    name: "Fogão",
    goal: 1484.1,
    current: 0,
    description: "Pro noivo fazer bastante macarrão.",
    image:
      "https://fastshopbr.vtexassets.com/arquivos/ids/3848388-1280-auto/17581241571504.webp?v=639058121310000000&quality=8",
    imageHint: "Fogão",
    storeUrl:
      "https://site.fastshop.com.br/fogao-4-bocas-electrolux-cinza-efficient-mesa-vidro-tripla-chama-e-perfectcook--fe4gg--119728/p?idsku=126977&gad_campaignid=22827161028",
  },
  {
    id: 51,
    category: "casamento",
    name: "Liquidificador",
    goal: 176.37,
    current: 0,
    description: "Suco e tal.",
    image: "https://m.media-amazon.com/images/I/51N3Xi4JJML._AC_SL1000_.jpg",
    imageHint: "window curtains",
    storeUrl:
      "https://www.amazon.com.br/Liquidificador-1400-Full-Preto-Oster/dp/B08DFJRCJB/ref=asc_df_B08DFJRCJB?tag=googleshopp00-20&hvadid=709968341272&hvpos=&hvnetw=g&hvrand=1817521089323269584&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9196708&hvtargid=pla-943565787307&language=pt_BR&th=1",
  },
  {
    id: 52,
    category: "cha",
    name: "Faqueiro Tramontina",
    goal: 174.31,
    current: 0,
    description: "Faca afiada não passa vergonha.",
    image:
      "https://assets.tramontina.com.br/upload/tramon/imagens/CUT/23699081PDM001G.jpg",
    imageHint: "jogo de faca preta",
    storeUrl:
      "https://www.tramontina.com.br/jogo-de-facas-tramontina-nygma-com-laminas-em-aco-inox-e-cabos-de-polipropileno-texturizados-preto-6-pecas/23699081.html",
  },
  {
    id: 53,
    category: "casamento",
    name: "Batedeira Kitchen aid",
    goal: 2377,
    current: 0,
    description: "Não custa sonhar.",
    image:
      "https://m.magazineluiza.com.br/a-static/420x420/batedeira-kitchenaid-artisan-empire-red-220v-kea30cvpna/fastshop2/kikea30cvpna/736bc4698c50266e7bc3b578a44af9a2.jpeg",
    imageHint: "Batedeira",
    storeUrl:
      "https://www.magazineluiza.com.br/batedeira-kitchenaid-artisan-empire-red-220v-kea30cvpna/p/fheb7jec8h/ep/bapl/?seller_id=fastshop2&region_id=123462&partner_id=83231&gad_campaignid=23346188393&gbraid=0AAAAAD4zZmTciNtHLCI6Ky_FEcvOEVJop",
  },
  {
    id: 54,
    category: "casamento",
    name: "Aspirador vertical",
    goal: 179,
    current: 0,
    description: "Nem todo pó dá pro Robson.",
    image: "https://m.media-amazon.com/images/I/61m5wUE9XzL._AC_SL1500_.jpg",
    imageHint: "aspirador vertical wap",
    storeUrl:
      "https://www.amazon.com.br/WAP-Aspirador-Vertical-Tecnologia-Cyclone/dp/B0BT27S33W/ref=asc_df_B0BT27S33W?tag=googleshopp00-20&hvadid=709968341038&hvpos=&hvnetw=g&hvrand=15133996091124374291&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9196708&hvtargid=pla-2008519025751&language=pt_BR&th=1",
  },
  {
    id: 55,
    category: "casamento",
    name: "Aparelho de Jantar",
    goal: 481,
    current: 0,
    description: "30 peças.",
    image: "https://m.media-amazon.com/images/I/51HjUseflNS._AC_SL1000_.jpg",
    imageHint: "Jogo de pratos",
    storeUrl:
      "https://www.amazon.com.br/Aparelho-Jantar-Ch%C3%A1-Oxford-Maresia/dp/B0BZ53C13F?&linkCode=sl1&tag=apromoperfe04-20&linkId=78052b8d2f5e89fec131865848b23e09&language=pt_BR&ref_=as_li_ss_tl",
  },
  {
    id: 56,
    category: "casamento",
    name: "Gaveteiro para escrivaninha",
    goal: 439.98,
    current: 0,
    description: "Pra noiva organizar seu Home office.",
    image:
      "https://product-hub-prd.madeiramadeira.com.br/564238/images/0de105e1-1d3f-446f-abb5-0c8b54691332oveis79081672267652600x600.jpg?width=700&canvas=1:1&bg-color=FFF",
    imageHint: "gaveteiro de madeira",
    storeUrl:
      "https://www.madeiramadeira.com.br/gaveteiro-volante-4-gavetas-kugv44-kuadra-espresso-moveis-564238.html",
  },
  {
    id: 57,
    category: "casamento",
    name: "Escrivaninha com gaveteiro",
    goal: 667.15,
    current: 0,
    description: "Pra montar nosso Home Studio.",
    image:
      "https://product-hub-prd.madeiramadeira.com.br/665288/images/d851b049-e741-4814-a625-4f93bc2c2850adracompace66528816600x600.jpg?width=700&canvas=1:1&bg-color=FFF",
    imageHint: "mesa e gaveteiro.",
    storeUrl:
      "https://www.madeiramadeira.com.br/kit-2-pecas-com-1-escrivaninha-e-1-gaveteiro-4-gavetas-kuadra-665288.html",
  },
  {
    id: 58,
    category: "casamento",
    name: "Jogo de panelas 10 peças",
    goal: 739.9,
    current: 0,
    description: "Pro noivo fazer o famoso carbonara.",
    image: "https://imgs.casasbahia.com.br/7327189/1xg.jpg?imwidth=500",
    imageHint: "jogo de panelas",
    storeUrl:
      "https://www.casasbahia.com.br/jogo-de-panelas-tramontina-aco-inox-allegra-10-pecas-fundo-triplo-com-pegador-de-massa/p/7327189?IdSku=7327189&idLojista=31644&tipoLojista=3P&&gad_campaignid=22846606777&gbraid=0AAAAADtAamhVTC-LEdi3gdfupvPmiL5Kk",
  },
  {
    id: 59,
    category: "casamento",
    name: "Persiana",
    goal: 270.18,
    current: 0,
    description: "Para dar mais privacidade e aconchego.",
    image:
      "https://cdn.leroymerlin.com.br/products/cortina_persiana_rolo_tela_solar_5percent_1,40_larg_x_1,30_alt_bege_1570807584_3a5d_600x600.jpg",
    imageHint: "window curtains",
    storeUrl:
      "https://www.leroymerlin.com.br/cortina-persiana-rolo-tela-solar-5percent-1,40-larg-x-1,30-alt-bege_1570807584",
  },
  {
    id: 60,
    category: "casamento",
    name: "Chaleira Elétrica",
    goal: 133.44,
    current: 0,
    description: "Para preparar um chazinho.",
    image: "https://m.media-amazon.com/images/I/5157j9NnlaL._AC_SX679_.jpg",
    imageHint: "Chaleira elétrica",
    storeUrl:
      "https://www.amazon.com.br/Chaleira-El%C3%A9trica-Electrolux-Efficient-EEK10/dp/B09CBTSBQL/ref=asc_df_B09CBTSBQL?tag=googleshopp00-20&hvadid=709886750320&hvpos=&hvnetw=g&hvrand=1237403468521124945&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9196708&hvtargid=pla-1519241764002&psc=1&language=pt_BR",
  },
  {
    id: 61,
    category: "cha",
    name: "Balança de alimentos",
    goal: 28.79,
    current: 0,
    description: "Para medir a dose de creatina.",
    image: "https://m.media-amazon.com/images/I/51UinvUFAgL._SL1200_.jpg",
    imageHint: "Balança de alimentos",
    storeUrl:
      "https://www.amazon.com.br/Balan%C3%A7a-Alimentos-Resistente-Antiderrapante-Defini%C3%A7%C3%A3o/dp/B0CX23Y6LP/ref=asc_df_B0CX23Y6LP?tag=googleshopp00-20&hvadid=709886750320&hvpos=&hvnetw=g&hvrand=4699866380119707679&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9196708&hvtargid=pla-2485896357592&psc=1&language=pt_BR",
  },
  {
    id: 62,
    category: "cha",
    name: "Tábua de queijos",
    goal: 69.99,
    current: 0,
    description: "Queijos e fanta uva.",
    image:
      "https://www.havan.com.br/media/catalog/product/cache/820af7facfa7aca6eb3c138e3457dc8d/t/a/tabua-de-queijos-bambu-havan-casa-3pecas_730625.webp",
    imageHint: "Tábua de queijos",
    storeUrl:
      "https://www.havan.com.br/tabua-de-queijos-bambu-havan-casa-3pecas-bambu/p",
  },
  {
    id: 63,
    category: "cha",
    name: "Balde de Gelo",
    goal: 199,
    current: 0,
    description: "Para dar mais privacidade e aconchego.",
    image: "https://img.camicado.com.br/item/000000000000055018/zoom/1.jpg",
    imageHint: "Balde de Gelo",
    storeUrl:
      "https://www.camicado.com.br/p/balde-de-gelo-home-style-vegas/-/A-300055018-br.lc?sku=000000000000055018",
  },
  {
    id: 64,
    category: "cha",
    name: "Faqueiro",
    goal: 281.2,
    current: 0,
    description: "Nem tudo é finger food.",
    image: "https://m.media-amazon.com/images/I/51GB1-6mYXL._AC_SL1200_.jpg",
    imageHint: "faqueiro de inox",
    storeUrl:
      "https://www.amazon.com.br/Faqueiro-Pe%C3%A7as-A%C3%A7o-Inox-Berna/dp/B076PL2ZSP/ref=asc_df_B076PL2ZSP?tag=googleshopp00-20&hvadid=709964506220&hvpos=&hvnetw=g&hvrand=15991246309113898205&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9196708&hvtargid=pla-811779203418&language=pt_BR&th=1",
  },
  {
    id: 65,
    category: "cha",
    name: "Amolador de facas",
    goal: 83.9,
    current: 0,
    description: "",
    image:
      "https://http2.mlstatic.com/D_Q_NP_661386-MLB97818556506_112025-F-aco-tungstnio-magnetico-rolamento-afiador-ajustavel.webp",
    storeUrl:
      "https://produto.mercadolivre.com.br/MLB-5934272508-aco-tungstnio-magnetico-rolamento-afiador-ajustavel-_JM?matt_tool=31493002&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22090354070&matt_ad_group_id=173090533636&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882727487&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=5679225946&matt_product_id=MLB5934272508&matt_product_partition_id=2391703468697&matt_target_id=aud-1966857867496:pla-2391703468697&cq_src=google_ads&cq_cmp=22090354070&cq_net=g&cq_plt=gp&cq_med=pla&gad_campaignid=22090354070&gbraid=0AAAAAD93qcCC_JSn3MPmyQjxI7OlYHyB9",
  },
  {
    id: 66,
    category: "cha",
    name: "Panela de Teflon",
    goal: 50,
    current: 0,
    description: "Pras omeletes nunca mais grudarem.",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_750628-MLA95682075414_102025-F.webp",
    storeUrl:
      "https://www.mercadolivre.com.br/kit-3-frigideiras-tramontina-antiaderente-com-tampa-de-vidro-cor-preto/p/MLB48599351?pdp_filters=item_id:MLB5779429248&matt_tool=52461461&matt_internal_campaign_id=353905140&matt_word=&matt_source=google&matt_campaign_id=23048606139&matt_ad_group_id=188383143778&matt_match_type=&matt_network=g&matt_device=c&matt_creative=780310479598&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=635100077&matt_product_id=MLB5779429248&matt_product_partition_id=2446956872313&matt_target_id=aud-1966858076296:pla-2446956872313&cq_src=google_ads&cq_cmp=23048606139&cq_net=g&cq_plt=gp&cq_med=pla&gad_campaignid=23048606139&gbraid=0AAAAAD93qcDlwQ2kSy7I9JbmaaQvzcGuS",
  },
  {
    id: 67,
    category: "casamento",
    name: "Micro-ondas",
    goal: 611,
    current: 0,
    description: "Esquentar aquela marmita.",
    image: "https://m.media-amazon.com/images/I/41ombLtjrUL._AC_SL1200_.jpg",

    storeUrl:
      "https://www.amazon.com.br/Micro-ondas-Philco-PMO38S-Limpa-F%C3%A1cil/dp/B0D3N79CZX/ref=asc_df_B0D3N79CZX?tag=googleshopp00-20&hvadid=709989056369&hvpos=&hvnetw=g&hvrand=13167591723790615765&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9196708&hvtargid=pla-2377832529340&psc=1&language=pt_BR",
  },
  {
    id: 68,
    category: "casamento",
    name: "Banqueta",
    goal: 1200,
    current: 0,
    description: "Bater um papo no balcão",
    image:
      "https://www.havan.com.br/media/catalog/product/cache/820af7facfa7aca6eb3c138e3457dc8d/b/a/banqueta-giratoria-turim-104-cm-havan-casa_993236.webp",

    storeUrl:
      "https://www.havan.com.br/banqueta-giratoria-turim-104-cm-havan-casa-off-white/p",
  },
  {
    id: 69,
    category: "cha",
    name: "Tapete",
    goal: 99,
    current: 0,
    description: "A criatividade pra descrição às vezes falta.",
    image: "https://m.media-amazon.com/images/I/81JkcCT1xUL._AC_SL1500_.jpg",

    storeUrl:
      "https://www.amazon.com.br/FIicy-boas-vindas-decora%C3%A7%C3%A3o-vers%C3%ADculo-aben%C3%A7oado/dp/B0DYVDKCM8",
  },
  {
    id: 70,
    category: "cha",
    name: "Ralador de queijo",
    goal: 119.99,
    current: 0,
    description: "Pra noiva não sofrer ralando o queijo do carbonara.",
    image: "https://img.camicado.com.br/item/100876202/zoom/1.jpg",

    storeUrl:
      "https://www.camicado.com.br/p/ralador-de-queijo-home-style-utile/-/A-100876190-br.lc?sku=100876202&gad_campaignid=20305907174",
  },
  {
    id: 71,
    category: "cha",
    name: "Pipoqueira elétrica",
    goal: 299.99,
    current: 0,
    description: "Melhor amiga do filminho",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_820311-MLA99954207047_112025-F.webp",
    storeUrl:
      "https://www.mercadolivre.com.br/pipoqueira-eletrica-sem-oleo-philco-1200w-ppie01a-cor-preto/p/MLB43201177#polycard_client=search-desktop&search_layout=grid&position=18&type=product&tracking_id=1d845443-746f-4646-b7ca-44bf4724f94f&wid=MLB6077376208&sid=search",
  },
  {
    id: 72,
    category: "casamento",
    name: "Espelho orgânico",
    goal: 120,
    current: 0,
    description: "Espelho orgânico para o apartamento",
    image:
      "https://casavee.cdn.magazord.com.br/img/2022/11/produto/2185/espelho-organico-2-1.jpg?ims=fit-in/1000x1000/filters:fill(white)",
    storeUrl:
      "https://www.casavee.com.br/espelho-eros-42cm-x-100cm-tauari?gad_campaignid=20131686643&gbraid=0AAAAAoR_JWWTwj3SEFP2H5EtTYOmEsS_Q",
  },
  {
    id: 73,
    category: "casamento",
    name: "Porta Chaves",
    goal: 119,
    current: 0,
    description: "Para guardar as chaves do apartamento",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_866950-MLA99937525023_112025-F.webp",
    storeUrl:
      "https://www.mercadolivre.com.br/chaveiro-pluginz-marshall-jcm-800-jack-rack-pendurar-chave/p/MLB24281558?pdp_filters=item_id:MLB3450880235&from=gshop&matt_tool=31493002&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22090354070&matt_ad_group_id=173090534076&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882727502&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735098639&matt_product_id=MLB24281558-product&matt_product_partition_id=2388010515786&matt_target_id=aud-1966857867496:pla-2388010515786&cq_src=google_ads&cq_cmp=22090354070&cq_net=g&cq_plt=gp&cq_med=pla&gad_campaignid=22090354070&gbraid=0AAAAAD93qcDnH21YKHczu6KU9dIN4hU0s",
  },
  {
    id: 74,
    category: "cha",
    name: "Cafeteira Italiana",
    goal: 79.99,
    current: 0,
    description: "QUERO CAFÉ!",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_752986-MLB99033632496_112025-F.webp",
    storeUrl:
      "https://www.mercadolivre.com.br/cafeteira-italiana-inox-luxo-9-xicaras-450ml-fogao-inducao/up/MLBU3625006021?pdp_filters=item_id:MLB5971078226&matt_tool=11873655&matt_internal_campaign_id=355098473&matt_word=&matt_source=google&matt_campaign_id=23048606145&matt_ad_group_id=196846483808&matt_match_type=&matt_network=g&matt_device=c&matt_creative=791246553735&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=5682894244&matt_product_id=MLB5971078226&matt_product_partition_id=2459361005454&matt_target_id=aud-1966858076296:pla-2459361005454&cq_src=google_ads&cq_cmp=23048606145&cq_net=g&cq_plt=gp&cq_med=pla&gad_campaignid=23048606145&gbraid=0AAAAAD93qcBUpHQWIpcklvxVOKXNh2WUJ",
  },
  {
    id: 75,
    category: "casamento",
    name: "Sofá",
    goal: 1418.53,
    current: 0,
    description: "Sofazinho pra assistir Netflix juntinhos",
    image:
      "https://cdn.leroymerlin.com.br/products/sofa_4_lugares_living_linho_bronze_viero_moveis_1572240312_a57d_600x600.jpg",
    storeUrl:
      "https://www.leroymerlin.com.br/sofa-4-lugares-living-linho-bronze-viero-moveis_1572240312?region=outros",
  },
  {
    id: 76,
    category: "cha",
    name: "Moedor de pimenta",
    goal: 29.9,
    current: 0,
    description: "Vamos evitar comida de hospital, ok?",
    image:
      "https://down-br.img.susercontent.com/file/sg-11134201-7rd5y-luyxhsb44tyeea.webp",
    storeUrl:
      "https://shopee.com.br/product/352576129/21599235506?gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkVEdTU3BlMW9zMXB6bGYrZ0J1VEdQdUsrRmY4Y2dKOWVxMlpoMktmQ1pjR3hxdGFnM2VXS0tETlpNMFY0L0k3NlFKUGl5K3RTYWZzSHB4ODNwMTZCUXhybTVkd21MQ1JGKzJnbjBtck56Y04zQVh2cm56RnNqcnJoUzFFWG84bHZ3PT0&gad_campaignid=23451162212&gbraid=0AAAAACoEtRnIfCF3OM8SHA7e6IWKy3B-k",
  },
  {
    id: 77,
    category: "casamento",
    name: "Air Fryer Oven",
    goal: 350,
    current: 0,
    description: "Top 5 invenções da humanidade.",
    image: "https://imgs.casasbahia.com.br/55065682/1g.jpg?imwidth=500",
    storeUrl:
      "https://www.casasbahia.com.br/fritadeira-eletrica-sem-oleo-air-fryer-oven-2-em-1-mondial-afon-12l-bi-12l-digital-preta-inox/p/55065682?IdSku=55065682&idLojista=10037&tipoLojista=1P&&gad_campaignid=22440145884&gbraid=0AAAAADtAamjAV4mwa3nWaaUR-lnuXsTVC",
  },
  {
    id: 78,
    category: "casamento",
    name: "Panela Elétrica",
    goal: 361.5,
    current: 0,
    description: "Quem sabe a gente não arrisca um sushi",
    image:
      "https://m.magazineluiza.com.br/a-static/420x420/panela-de-pressao-eletrica-digital-mondial-5l-900w-digital-master-cooker-pe-38/magazineluiza/236680400/7b4d7c601ba9dab8b092fc417f42153a.jpg",
    storeUrl:
      "https://www.magazineluiza.com.br/panela-de-pressao-eletrica-digital-mondial-5l-900w-digital-master-cooker-pe-38/p/236680400/ep/eppe/?&seller_id=magazineluiza&partner_id=83254&gad_campaignid=23347244387&gbraid=0AAAAAD4zZmTTaiBh_XdzmONnJdqGjaf4F",
  },
  {
    id: 79,
    category: "casamento",
    name: "Mesa de jantar",
    goal: 1899.98,
    current: 0,
    description: "Mesa de jantar para receber os amigos",
    image:
      "https://product-hub-prd.madeiramadeira.com.br/872306/images/20bbcb44-8222-4705-aa9f-7a0b8abd9515ilaMesaExtensC3ADvel1500px.jpg?width=700&canvas=1:1&bg-color=FFF",
    storeUrl:
      "https://www.madeiramadeira.com.br/mesa-extensivel-redonda-de-160cm-tarsila-cabecasa-madeiraoriginals-872306.html",
  },
  {
    id: 80,
    category: "casamento",
    name: "Cadeiras de jantar",
    goal: 2099.96,
    current: 0,
    description: "Cadeiras de jantar para os amigos não sentarem no chão",
    image:
      "https://product-hub-prd.madeiramadeira.com.br/975335/images/0ff529d1-5836-475a-ae42-45d12c975c0e83ffa58a9753351951500x1500.jpg?width=700&canvas=1:1&bg-color=FFF",
    storeUrl:
      "https://www.madeiramadeira.com.br/kit-4-cadeiras-sala-de-jantar-pequi-cabecasa-madeiraoriginals-975335.html",
  },
  {
    id: 81,
    category: "casamento",
    name: "Rack para TV",
    goal: 2099.96,
    current: 0,
    description: "Rack para TV para dar aquele toque especial na sala",
    image:
      "https://product-hub-prd.madeiramadeira.com.br/414626198/images/d8edc286-f9bb-44f5-ac58-8e9ed5225e262689tb312freijoperspectiva.jpg?width=700&canvas=1:1&bg-color=FFF",
    storeUrl:
      "https://www.madeiramadeira.com.br/rack-para-tv-ate-55-135cm-com-01-porta-de-correr-100-mdf-tb312-dalla-costa-freijo-414626198.html?index=prod-poc-madeira&seller=13320",
  },
  {
    id: 82,
    category: "casamento",
    name: "Ferro de passar roupas",
    goal: 87.9,
    current: 0,
    description:
      "Ferro de passar já que a sociedade não aceita roupas amassadas",
    image:
      "https://m.magazineluiza.com.br/a-static/420x420/ferro-de-passar-a-vapor-oster-gcstbs5002-220v-base-antiaderente-200ml-filtro-anticalcario-1400w-verde/generaleletro/102650/fb90e45d3d2e95d2e53969578cea36c3.jpeg",
    storeUrl:
      "https://www.magazineluiza.com.br/ferro-de-passar-a-vapor-oster-gcstbs5002-220v-base-antiaderente-200ml-filtro-anticalcario-1400w-verde/p/gh1jd41ckd/ep/elfv/?seller_id=generaleletro",
  },
  {
    id: 83,
    category: "casamento",
    name: "Processador de Alimentos",
    goal: 117.9,
    current: 0,
    description: "Preparar refeições mais rápidas",
    image: "https://m.media-amazon.com/images/I/51yYe4QlyQL._AC_SL1000_.jpg",
    storeUrl:
      "https://www.amazon.com.br/Mixer-Turbo-Elgin-42MIX2002000-Preto/dp/B09VQ2PQRN/ref=asc_df_B09VQ2PQRN?tag=googleshopp00-20&hvadid=709874962041&hvpos=&hvnetw=g&hvrand=11042364895265923654&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198389&hvtargid=pla-1667684182034&language=pt_BR&th=1",
  },
  {
    id: 84,
    category: "cha",
    name: "Funil",
    goal: 11,
    current: 0,
    description: "Para facilitar o processo de despejo de líquidos",
    image: "https://m.media-amazon.com/images/I/71V+vs9ytQL._SL1500_.jpg",
    storeUrl:
      "https://www.amazon.com.br/Conjunto-inoxid%C3%A1vel-aliment%C3%ADcio-recipientes-ferramentas/dp/B0FWXM8B83/ref=asc_df_B0FWXM8B83?tag=googleshopp00-20&hvadid=773381654827&hvpos=&hvnetw=g&hvrand=156957948833557635&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198389&hvtargid=pla-2451974827145&psc=1&language=pt_BR",
  },
  {
    id: 85,
    category: "casamento",
    name: "Exaustor",
    goal: 378,
    current: 0,
    description: "Exaustor para a cozinha",
    image: "https://m.media-amazon.com/images/I/41reXjYlagL._AC_SL1200_.jpg",
    storeUrl:
      "https://www.amazon.com.br/SUGGAR-DEPURADOR-SLIM-PRETO-DPS182PT/dp/B0B3SJ8YLP/ref=asc_df_B0B3SJ8YLP?mcid=136ba5f7419c37bbb89a04941fbe57c2&tag=googleshopp06-20&linkCode=df0&hvadid=721147801917&hvpos=&hvnetw=g&hvrand=10882227228122705847&hvpone=&hvptwo=&hvqmt=&hvdev=m&hvdvcmdl=&hvlocint=&hvlocphy=9197471&hvtargid=pla-2374768378214&gad_source=1&th=1",
  },
  {
    id: 86,
    category: "cha",
    name: "Jogo de Sobremesa",
    goal: 0,
    current: 0,
    description: "Para degustar docinhos fit",
    image: " ",
    storeUrl: " ",
  },
  {
    id: 87,
    category: "cha",
    name: "Boleira",
    goal: 0,
    current: 0,
    description: "Para guardar os bolos deliciosos",
    image: " ",
    storeUrl: " ",
  },
  {
    id: 88,
    category: "cha",
    name: "Porta condimentos",
    goal: 0,
    current: 0,
    description: "Tempeirinhos sempre a mão",
    image: " ",
    storeUrl: " ",
  },
  {
    id: 89,
    category: "cha",
    name: "Porta-guardanapo",
    goal: 0,
    current: 0,
    description: "Uma mesa posta nunca fez mal a ninguém",
    image: " ",
    storeUrl: " ",
  },
  {
    id: 90,
    category: "cha",
    name: "Jogo de Copos",
    goal: 0,
    current: 0,
    description: "Para brindar os bons momentos",
    image: " ",
    storeUrl: " ",
  },
  {
    id: 91,
    category: "cha",
    name: "Lixeira Grande de Inox",
    goal: 0,
    current: 0,
    description: "Para manter a cozinha limpa",
    image: " ",
    storeUrl: " ",
  },
  {
    id: 92,
    category: "cha",
    name: "Lixeira Pequena de Inox",
    goal: 0,
    current: 0,
    description: "Para manter o banheiro limpo",
    image: " ",
    storeUrl: " ",
  },
  {
    id: 93,
    category: "cha",
    name: "Porta Mantimentos",
    goal: 0,
    current: 0,
    description: "Para organizar a despensa",
    image: " ",
    storeUrl: " ",
  },
  {
    id: 94,
    category: "cha",
    name: "Manteigueira Francesa",
    goal: 0,
    current: 0,
    description: "Armazenar a manteiga com estilo",
    image: " ",
    storeUrl: " ",
  },
  {
    id: 95,
    category: "cha",
    name: "Escorredor de Louças",
    goal: 0,
    current: 0,
    description: "Deixando o ar seco de BSB secar as louças",
    image: " ",
    storeUrl: " ",
  },
  {
    id: 96,
    category: "cha",
    name: "Modelador de hambúrguer",
    goal: 29.9,
    current: 0,
    description: "O hambúrguer do noivo é especial.",
    image: "https://m.media-amazon.com/images/I/61sH6luMu3L._AC_SL1001_.jpg",
    storeUrl:
      "https://www.amazon.com.br/Forma-para-Moldar-Hamb%C3%BArguer-Recheado/dp/B0FS7RLRFS/ref=sr_1_3_sspa?crid=26NEPKSEB7OKH&dib=eyJ2IjoiMSJ9.KcEHDqevXNwfOmtcUQCFOL7EZLjm-66pPig-EGBCs_lBSdEFuKhWRUPf2gu5-i6XlczMHj2WBxrOconWqvkO-NfdlUaxqalKpwPqaBvSXN-ItRpaQKmt03fS_M26op4n4Ef1333HaWUkjgDa_boJxsjk3FTI730R5UKC0sCWQDi7NVy6JtWnmZLkS951-xkz-1e1_hly2HY9fwC3KyDEl20lf063hRHqCHkzbJrdugjlTood0XyqbYf5gHUzkXuXiaD2IpKz-Iy7DfHksUKsGyGCfGtm7vmJKzmThkAtQYg.TP35U5xaLQdtybAjbwu-281wvAUVrxpCS1gbCTsm9do&dib_tag=se&keywords=molde+de+hamburguer&qid=1770607244&sprefix=molde+de+,aps,315&sr=8-3-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
  },
  {
    id: 97,
    category: "casamento",
    name: "Geladeira",
    goal: 2903.12,
    current: 0,
    description: "",
    image: "https://imgs.casasbahia.com.br/1565163222/1xg.jpg?imwidth=500",
    storeUrl:
      "https://www.casasbahia.com.br/geladeira-duplex-evolution-smartthings-samsung-rt38-391l-bivolt-black-inox/p/1565163222?IdSku=1565163222&idLojista=228168&tipoLojista=3P&&gad_campaignid=22788743736&gbraid=0AAAAADtAamhK3k7AxzYp4Hiclm_5zOkAn",
  },
  {
    id: 98,
    category: "casamento",
    name: "Alexa",
    goal: 409,
    current: 0,
    description: "",
    image: "https://m.media-amazon.com/images/I/71xoR4A6q-L._AC_SL1000_.jpg",
    storeUrl:
      "https://www.amazon.com.br/Echo-Dot-5%C2%AA-gera%C3%A7%C3%A3o-Cor-Preta/dp/B09B8VGCR8/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dib=eyJ2IjoiMSJ9.14cZBgy_n6hLGjrn9NIG4vUhPEOu670jrELSqdecXonVOVyY_mscW4n7JkUTEU7SeGZFTdhYWhHnMuJ81gncDlybzNJ2WHiBQLcJFWFY1IqxpeEEVV4RXFg1Rw8piDXaf9A5ozCf5kUnxVFSU8snlojXar7sZ5w0ZTL1uP2cW6Aj-myr1PPx6rvx-wTLB8gnnT8BgU8LKGegP8tGtcDvdIA-_OCeb0zIkIyGguh9AKkgoz9rpQ9tqxPA0XSsGr-A1hxTXW7AuNkVTDoro1L-7qq67V3ajfFkyTAO9UBjir4.iI3phMqpl5yBkhAO8ngyDsYzbj1XS8H_Y3cj8y3aVk8&dib_tag=se&keywords=alexa&qid=1770607840&sr=8-1&ufe=app_do:amzn1.fos.e05b01e0-91a7-477e-a514-15a32325a6d6&th=1",
  },
  {
    id: 99,
    category: "casamento",
    name: "Chuveiro",
    goal: 392.64,
    current: 0,
    description: "Sábado é dia de tomar banho.",
    image:
      "https://m.magazineluiza.com.br/a-static/420x420/chuveiro-eletrico-de-parede-acqua-storm-ultra-preto-220v-lorenzetti/livencasa/158771/8b3c19c217942dbb5e393daab8675b2e.jpeg",
    storeUrl:
      "https://www.magazineluiza.com.br/chuveiro-eletrico-de-parede-acqua-storm-ultra-preto-220v-lorenzetti/p/ck3073f78d/cj/duxx/?&seller_id=livencasa&partner_id=83244&gad_campaignid=23341738725&gbraid=0AAAAAD4zZmTQ7DvMmg9IOaTY26GsGw6tG",
  },
  {
    id: 100,
    category: "cha",
    name: "Tábua de corte",
    goal: 1,
    current: 0,
    description: " ",
    image: " ",
    storeUrl: " ",
  },
  {
    id: 101,
    category: "casamento",
    name: "Mesa de cabeceira",
    goal: 396.2,
    current: 0,
    description: "Kit 2 mesas de cabeceira",
    image:
      "https://product-hub-prd.madeiramadeira.com.br/435167488/images/bca07e00-87a8-437a-829b-11d4fec822121e8fd8418b2e7e1668ebb452b6.jpg?width=700&canvas=1:1&bg-color=FFF",
    storeUrl:
      "https://www.madeiramadeira.com.br/kit-2-mesas-de-cabeceira-com-gaveta-channel-nature-com-off-white-fabrimoveis-435167488.html?origem=pla-435167488&utm_source=google&utm_medium=cpc&utm_content=mesas-de-cabeceira-5083&utm_term=&utm_id=22811606548&gad_source=1&gad_campaignid=22811606548&gbraid=0AAAAADr4g_F6-jsxhx2tjSn5cjXogU_iS&gclid=Cj0KCQiAhaHMBhD2ARIsAPAU_D4NLil0Be0z58IH5mJxiDF5Tm6Vrp5iwRgeZ0knjdLJu1tj7O8cdrMaAkqbEALw_wcB",
  },
  {
    id: 102,
    category: "casamento",
    name: "Cadeira ergonômica",
    goal: 405.55,
    current: 0,
    description: "Home office ergonômico",
    image: "https://m.media-amazon.com/images/I/61H3dhK2+BL._AC_SL1200_.jpg",
    storeUrl:
      "https://www.amazon.com.br/escrit%C3%B3rio-ergon%C3%B4mico-independente-respir%C3%A1vel-ajust%C3%A1vel%EF%BC%88Preto/dp/B0CG8J3N2H/ref=asc_df_B0CG8J3N2H?tag=googleshopp00-20&hvadid=721185796203&hvpos=&hvnetw=g&hvrand=13589312507683787360&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9196708&hvtargid=pla-2381201824264&th=1",
  },
  {
    id: 103,
    category: "casamento",
    name: "TV",
    goal: 1199,
    current: 0,
    description:
      "Pro noivo ver o jogo do Palmeiras ou pros dias de campus online.",
    image:
      "https://www.lg.com/content/dam/channel/wcms/br/images/tv/55ur8750psa_bwz_essp_br_c/gallery/DZ-3.jpg",
    imageHint: "television screen",
  },
  {
    id: 104,
    category: "casamento",
    name: "Escada",
    goal: 159,
    current: 0,
    description: "Pro noivo trocar a lâmpada.",
    image:
      "https://cdn.leroymerlin.com.br/products/escada_aluminio_5_degraus_1,53m_120kg_prata_e_vermelho_91713286_0001_600x600.jpg",
    imageHint: "television screen",
    storeUrl:
      "https://www.leroymerlin.com.br/escada-aluminio-5-degraus-1,53m-120kg-prata-e-vermelho-reisam_91713286?region=outros&region_id=31000&gad_campaignid=23148513989&gbraid=0AAAAADkzLZ4Gc75A_O_dKdHf2CJsm5hIb",
  },
  {
    id: 105,
    category: "casamento",
    name: "Filtro d'água",
    goal: 1199.9,
    current: 0,
    description: "Pra sobreviver à seca de Brasília.",
    image:
      "https://mundodosfiltros.com.br/cdn/shop/files/Star-frontal-Branco_800x.webp?v=1759934879",
    storeUrl:
      "https://mundodosfiltros.com.br/products/purificador-de-agua-everest-star?variant=41512844918843&country=BR&currency=BRL&gad_campaignid=23315168575&gbraid=0AAAAApGDSb7XNbPWeodt22-C0u9xGQYYE",
  },
  {
    id: 106,
    category: "casamento",
    name: "Playstation 5",
    goal: 3300,
    current: 0,
    description: "GTA VI tá aí.",
    image:
      "https://imgs.casasbahia.com.br/1572582933/3xg.jpg?imwidth=500",
    storeUrl:
      "https://www.casasbahia.com.br/pack-console-playstation-5-edicao-digital-825gb-astro-bot-e-gran-turismo-7/p/1572582933?IdSku=1572582933&idLojista=232923&tipoLojista=3P&&gad_campaignid=22846606777&gbraid=0AAAAADtAamiUz49yVlPZTOvB4nB0qX3ST",
  },
];
