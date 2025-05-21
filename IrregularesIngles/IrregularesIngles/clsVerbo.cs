using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IrregularesIngles
{
    public class clsVerbo
    {
        private string[,] _aVerbos=new string[,] {
                                                    {"1","arise","arose","","arisen","","surgir"},
                                                    {"2","be","was","were","been","","ser"},
                                                    {"3","beat","beat","","beaten","","golpear"},
                                                    {"4","become","became","","become","","convertirse"},
                                                    {"5","begin","began","","begun","","comenzar"},
                                                    {"6","bet","bet","betted","bet","betted","apostar"},
                                                    {"7","bite","bit","","bitten","","morder"},
                                                    {"8","bleed","bled","","bled","","sangrar"},
                                                    {"9","blow","blew","","blown","","soplar"},
                                                    {"10","break","broke","","broken","","romper"},
                                                    {"11","bring","brought","","brought","","traer"},
                                                    {"12","build","built","","built","","construir"},
                                                    {"13","buy","bought","","bought","","comprar"},
                                                    {"14","catch","caught","","caught","","atrapar"},
                                                    {"15","choose","chose","","chosen","","elegir"},
                                                    {"16","come","came","","come","","venir"},
                                                    {"17","cost","cost","","cost","","costar"},
                                                    {"18","creep","crept","","crept","","arrastrarse"},
                                                    {"19","cut","cut","","cut","","cortar"},
                                                    {"20","deal","dealt","","dealt","","dar, repartir"},
                                                    {"21","do","did","","done","","hacer"},
                                                    {"22","draw","drew","","drawn","","dibujar"},
                                                    {"23","dream","dreamt","dreamed","dreamt","dreamed","soñar"},
                                                    {"24","drink","drank","","drunk","","beber"},
                                                    {"25","drive","drove","","driven","","conducir"},
                                                    {"26","eat","ate","","eaten","","comer"},
                                                    {"27","fall","fell","","fallen","","caer"},
                                                    {"28","feed","fed","","fed","","alimentar"},
                                                    {"29","feel","felt","","felt","","sentir"},
                                                    {"30","fight","fought","","fought","","pelear"},
                                                    {"31","find","found","","found","","encontrar"},
                                                    {"32","flee","fled","","fled","","huir"},
                                                    {"33","fly","flew","","flown","","volar"},
                                                    {"34","forget","forgot","","forgotten","","olvidar"},
                                                    {"35","forgive","forgave","","forgiven","","perdonar"},
                                                    {"36","forsake","forsook","","forsaken","","abandonar"},
                                                    {"37","freeze","froze","","frozen","","congelar"},
                                                    {"38","get","got","","got","","tener, obtener"},
                                                    {"39","give","gave","","given","","dar"},
                                                    {"40","go","went","","gone","","ir"},
                                                    {"41","grind","ground","","ground","","moler"},
                                                    {"42","grow","grew","","grown","","crecer"},
                                                    {"43","hang","hung","","hung","","colgar"},
                                                    {"44","have","had","","had","","tener"},
                                                    {"45","hear","heard","","heard","","oír"},
                                                    {"46","hide","hid","","hidden","","esconderse"},
                                                    {"47","hit","hit","","hit","","golpear"},
                                                    {"48","hold","held","","held","","tener, mantener"},
                                                    {"49","hurt","hurt","","hurt","","herir, doler"},
                                                    {"50","keep","kept","","kept","","guardar"},
                                                    {"51","kneel","knelt","","knelt","","arrodillarse"},
                                                    {"52","know","knew","","known","","saber"},
                                                    {"53","lead","led","","led","","encabezar"},
                                                    {"54","learn","learnt","learned","learnt","learned","aprender"},
                                                    {"55","leave","left","","left","","dejar"},
                                                    {"56","lend","lent","","lent","","prestar"},
                                                    {"57","let","let","","let","","dejar"},
                                                    {"58","lie","lay","","lain","","yacer"},
                                                    {"59","lose","lost","","lost","","perder"},
                                                    {"60","make","made","","made","","hacer"},
                                                    {"61","mean","meant","","meant","","significar"},
                                                    {"62","meet","met","","met","","conocer, encontrar"},
                                                    {"63","pay","paid","","paid","","pagar"},
                                                    {"64","put","put","","put","","poner"},
                                                    {"65","quit","quit","quitted","quit","quitted","abandonar"},
                                                    {"66","read","read","","read","","leer"},
                                                    {"67","ride","rode","","ridden","","montar, ir"},
                                                    {"68","ring","rang","","rung","","llamar por teléfono"},
                                                    {"69","rise","rose","","risen","","elevar"},
                                                    {"70","run","ran","","run","","correr"},
                                                    {"71","say","said","","said","","decir"},
                                                    {"72","see","saw","","seen","","ver"},
                                                    {"73","sell","sold","","sold","","vender"},
                                                    {"74","send","sent","","sent","","enviar"},
                                                    {"75","set","set","","set","","fijar"},
                                                    {"76","sew","sewed","","sewn","sewed","coser"},
                                                    {"77","shake","shook","","shaken","","sacudir"},
                                                    {"78","shine","shone","","shone","","brillar"},
                                                    {"79","shoot","shot","","shot","","disparar"},
                                                    {"80","show","showed","","shown","showed","mostrar"},
                                                    {"81","shrink","shrank","shrunk","shrunk","","encoger"},
                                                    {"82","shut","shut","","shut","","cerrar"},
                                                    {"83","sing","sang","","sung","","cantar"},
                                                    {"84","sink","sank","","sunk","","hundir"},
                                                    {"85","sit","sat","","sat","","sentarse"},
                                                    {"86","sleep","slept","","slept","","dormir"},
                                                    {"87","slide","slid","","slid","","deslizar"},
                                                    {"88","sow","sowed","","sown","sowed","sembrar"},
                                                    {"89","speak","spoke","","spoken","","hablar"},
                                                    {"90","spell","spelt","spelled","spelt","spelled","deletrear"},
                                                    {"91","spend","spent","","spent","","gastar"},
                                                    {"92","spill","spilt","spilled","spilt","spilled","derramar"},
                                                    {"93","split","split","","split","","partir"},
                                                    {"94","spoil","spoilt","spoiled","spoilt","spoiled","estropear"},
                                                    {"95","spread","spread","","spread","","extenderse"},
                                                    {"96","stand","stood","","stood","","estar de pie"},
                                                    {"97","steal","stole","","stolen","","robar"},
                                                    {"98","sting","stung","","stung","","picar"},
                                                    {"99","stink","stank","stunk","stunk","","apestar"},
                                                    {"100","strike","struck","","struck","","golpear"},
                                                    {"101","swear","swore","","sworn","","jurar"},
                                                    {"102","sweep","swept","","swept","","barrer"},
                                                    {"103","swim","swam","","swum","","nadar"},
                                                    {"104","take","took","","taken","","tomar"},
                                                    {"105","teach","taught","","taught","","enseñar"},
                                                    {"106","tear","tore","","torn","","romper"},
                                                    {"107","tell","told","","told","","decir"},
                                                    {"108","think","thought","","thought","","pensar"},
                                                    {"109","throw","threw","","thrown","","lanzar"},
                                                    {"110","tread","trode","","trodden","trod","pisar"},
                                                    {"111","understand","understood","","understood","","entender"},
                                                    {"112","wake","woke","","woken","","despertarse"},
                                                    {"113","wear","wore","","worn","","llevar puesto"},
                                                    {"114","weave","wove","","woven","","tejer"},
                                                    {"115","weep","wept","","wept","","llorar"},
                                                    {"116","win","won","","won","","ganar"},
                                                    {"117","wring","wrung","","wrung","","retorcer"},
                                                    {"118","write","wrote","","written","","escribir"}
                                                };

        public string[,] aVerbos
        {
            get
            {
                return _aVerbos;
            }

            set
            {
                _aVerbos = value;
            }
        }

        public int[] aPreguntas;
        public int[] aRespostas00;
        public int[] aRespostas01;
        public int[] aRespostas02;

        Random r = new Random();

        public void sortearCincoPreguntas()
        {
            aPreguntas = new int[5];
            aRespostas00 = new int[5];
            aRespostas01 = new int[5];
            aRespostas02 = new int[5];
            int nTemp = 0;
            for (int i = 0; i < aPreguntas.GetLength(0); i++)
            {
                nTemp = r.Next(aVerbos.GetLength(0));
                if (Array.IndexOf(aPreguntas, nTemp) < 0)
                    aPreguntas[i] = nTemp;
                else
                    i--;
            }

            for (int i = 0; i < aRespostas00.GetLength(0); i++)
            {
                nTemp = r.Next(5);
                if (Array.IndexOf(aRespostas00, aPreguntas[nTemp]) < 0)
                {
                    aRespostas00[i] = aPreguntas[nTemp];
                }
                else
                {
                    i--;
                }
            }


            for (int i = 0; i < aRespostas01.GetLength(0); i++)
            {
                nTemp = r.Next(5);
                if (Array.IndexOf(aRespostas01, aPreguntas[nTemp]) < 0)
                {
                    aRespostas01[i] = aPreguntas[nTemp];
                }
                else
                {
                    i--;
                }
            }

            for (int i = 0; i < aRespostas02.GetLength(0); i++)
            {
                nTemp = r.Next(5);
                if (Array.IndexOf(aRespostas02, aPreguntas[nTemp]) < 0)
                {
                    aRespostas02[i] = aPreguntas[nTemp];
                }
                else
                {
                    i--;
                }
            }
        }
    }
}
