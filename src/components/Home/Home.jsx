import style from "./Home.module.css";
import { CardPerson } from "../User/CardPerson";
import { CardContato } from "../Contato/CardContatos";
import { BsFillTrash3Fill } from "react-icons/bs";
import { IoPencil, IoSearchOutline, IoAdd } from "react-icons/io5";
export function Home() {
  return (
    <div className={style.container}>
      <CardPerson
        cover="https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        avatar="https://lh3.googleusercontent.com/a/AGNmyxbRHMbg8Luj6dbvl8PyBpsCIRZ0zVQZJF4ymqMkFh-PQF79YvINDnejPhH1A4LXptiDPRzx3IOb4cTxBIi-U2c=s288-c-no"
        name="Thalia Thaiane Goulart"
        office="Jovem Aprendiz desenvolvedora"
      />

      <div className={style.contatos}>
        <div className={style.controles}>
          <form>
            <div className={style.headerContatos}>
              <h1 className={style.title}>Lista de Contatos</h1>
              <div className={style.buttons}>
                <button className={style.buttom}>
                  {" "}
                  <IoAdd />{" "}
                </button>
                <button className={style.buttom}>
                  {" "}
                  <IoPencil />{" "}
                </button>
                <button className={style.buttom}>
                  {" "}
                  <BsFillTrash3Fill />{" "}
                </button>
              </div>
            </div>

            <div className={style.pesquisa}>
              <button className={style.buttomPesquisa}>
                {" "}
                <IoSearchOutline />{" "}
              </button>
              <input
                type="text"
                name="pesquisa"
                className={style.inputPesquisa}
              />
            </div>
          </form>
        </div>

        <div className={style.listaContatos}>
          <div className={style.listaCatalogo}>
            <h1 className={style.letraCatalogo}>C</h1>
            <div className={style.contatoCatalogo}>
              <CardContato
                avatar="https://img.freepik.com/fotos-gratis/jovem-bonito-com-um-novo-corte-de-cabelo-estiloso_176420-19637.jpg?w=740&t=st=1683751050~exp=1683751650~hmac=7692447e14fb7441088ee202f8727c71478a6dbfa426177083f77011651bc3ad"
                name="Cássio Silva"
                numero="(55) 99640-5524)"
              />
              <CardContato
                avatar="https://img.freepik.com/fotos-gratis/mulher-jovem-e-bonita-em-sueter-rosa-quente-aparencia-natural-sorridente-retrato-ligado-isolado-cabelo-comprido_285396-896.jpg?w=740&t=st=1683751007~exp=1683751607~hmac=1d5eb00b02b2b2d0d3af135fb2c1117f1e445b5264a1ca09fbdd15edb2f0f4bc"
                name="Clara Menezes"
                numero="(55) 98754-9875)"
              />
            </div>
          </div>

          <div className={style.listaCatalogo}>
            <h1 className={style.letraCatalogo}>M</h1>
            <div className={style.contatoCatalogo}>
              <CardContato
                avatar="https://img.freepik.com/fotos-gratis/close-de-uma-garota-elegante-e-atraente-com-um-hairbun-sorrindo-e-parecendo-esperancosa_176420-25550.jpg?w=740&t=st=1683751089~exp=1683751689~hmac=b549befbd39b1110d95a565a379260a458df8248789502c1e6d99e971f0b4df9"
                name="Melinda Flitz"
                numero="(55) 99784-0022"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
