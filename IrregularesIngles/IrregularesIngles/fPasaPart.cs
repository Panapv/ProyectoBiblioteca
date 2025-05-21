using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace IrregularesIngles
{
    public partial class fPasaPart : Form
    {
        clsVerbo oVerbo;
        Random r = new Random();
        Button Parella00;
        Button Parella01;
        Button Parella02;
        

        int tipoPregunta = 0, nColumResposta = 0;

        public fPasaPart(clsVerbo oV)
        {
            InitializeComponent();
            this.oVerbo = oV;
        }

        private void fPasaPart_Load(object sender, EventArgs e)
        {
            // colocar labels, informativas

            // iniciar procedimientos
            tipoPregunta = r.Next(3);

            cargarPreguntas();
        }

        private void cargarPreguntas()
        {

            switch (tipoPregunta)
            {
                case 0:
                    lblEnunciado.Text = "Escribe o pasado simple e o participio correspondentes o infinitivo inglés.";
                    //nColumResposta = 6;
                    oVerbo.sortearCincoPreguntas();
                    //pnlPreguntas.Visible = true;
                    //pnlEmparella.Visible = false;
                    pnlPreguntas.Show();
                    pnlEmparella.Hide();
                    btSolucion.Visible = true;
                    lblTrad00.Text = oVerbo.aVerbos[oVerbo.aPreguntas[0], 1].ToString();
                    lblTrad01.Text = oVerbo.aVerbos[oVerbo.aPreguntas[1], 1].ToString();
                    lblTrad02.Text = oVerbo.aVerbos[oVerbo.aPreguntas[2], 1].ToString();
                    lblTrad03.Text = oVerbo.aVerbos[oVerbo.aPreguntas[3], 1].ToString();
                    lblTrad04.Text = oVerbo.aVerbos[oVerbo.aPreguntas[4], 1].ToString();
                    break;
                case 1:
                    lblEnunciado.Text = "Escribe o pasado simple e o participio correspondentes o infinitivo español.";
                    //nColumResposta = 1;
                    oVerbo.sortearCincoPreguntas();
                    //pnlPreguntas.Visible = true;
                    //pnlEmparella.Visible = false;
                    pnlPreguntas.Show();
                    pnlEmparella.Hide();
                    btSolucion.Visible = true;
                    lblTrad00.Text = oVerbo.aVerbos[oVerbo.aPreguntas[0], 6].ToString();
                    lblTrad01.Text = oVerbo.aVerbos[oVerbo.aPreguntas[1], 6].ToString();
                    lblTrad02.Text = oVerbo.aVerbos[oVerbo.aPreguntas[2], 6].ToString();
                    lblTrad03.Text = oVerbo.aVerbos[oVerbo.aPreguntas[3], 6].ToString();
                    lblTrad04.Text = oVerbo.aVerbos[oVerbo.aPreguntas[4], 6].ToString();
                    break;
                case 2:
                    lblEnunciado.Text = "Emparella o infinitivo inglés co seu pasado simple e o seu participio, escollendo un botón de cada columna.";
                    //nColumResposta = 6;
                    oVerbo.sortearCincoPreguntas();
                    pnlPreguntas.Hide();
                    pnlEmparella.Show();
                    btSolucion.Visible = false;
                    btTrad00.Text = oVerbo.aVerbos[oVerbo.aPreguntas[0], 1].ToString();
                    btTrad01.Text = oVerbo.aVerbos[oVerbo.aPreguntas[1], 1].ToString();
                    btTrad02.Text = oVerbo.aVerbos[oVerbo.aPreguntas[2], 1].ToString();
                    btTrad03.Text = oVerbo.aVerbos[oVerbo.aPreguntas[3], 1].ToString();
                    btTrad04.Text = oVerbo.aVerbos[oVerbo.aPreguntas[4], 1].ToString();

                    btTrad10.Text = oVerbo.aVerbos[oVerbo.aRespostas00[0], 2].ToString();
                    btTrad11.Text = oVerbo.aVerbos[oVerbo.aRespostas00[1], 2].ToString();
                    btTrad12.Text = oVerbo.aVerbos[oVerbo.aRespostas00[2], 2].ToString();
                    btTrad13.Text = oVerbo.aVerbos[oVerbo.aRespostas00[3], 2].ToString();
                    btTrad14.Text = oVerbo.aVerbos[oVerbo.aRespostas00[4], 2].ToString();

                    btTrad20.Text = oVerbo.aVerbos[oVerbo.aRespostas01[0], 4].ToString();
                    btTrad21.Text = oVerbo.aVerbos[oVerbo.aRespostas01[1], 4].ToString();
                    btTrad22.Text = oVerbo.aVerbos[oVerbo.aRespostas01[2], 4].ToString();
                    btTrad23.Text = oVerbo.aVerbos[oVerbo.aRespostas01[3], 4].ToString();
                    btTrad24.Text = oVerbo.aVerbos[oVerbo.aRespostas01[4], 4].ToString();
                    break;
            }
        }

        private void comprobarEmparellados(object sender, EventArgs e)
        {

            if (((Button)sender).Name.Substring(6,1)=="0")
            {         
                desactivarBotonMarcadoMismaColumna(Parella00);
                Parella00 = ((Button)sender);
                ((Button)sender).BackColor = Color.Khaki;
            }
            else if (((Button)sender).Name.Substring(6, 1) == "1")
            {
                desactivarBotonMarcadoMismaColumna(Parella01);
                Parella01 = ((Button)sender);
                ((Button)sender).BackColor = Color.Khaki;
            }
            else
            {
                desactivarBotonMarcadoMismaColumna(Parella02);
                Parella02 = ((Button)sender);
                ((Button)sender).BackColor = Color.Khaki;
            }

            if (Parella00 != null & Parella01 != null & Parella02 != null)
            {
                if (oVerbo.aPreguntas[Convert.ToInt32(Parella00.Name.Substring(7, 1))] == oVerbo.aRespostas00[Convert.ToInt32(Parella01.Name.Substring(7, 1))] &&
                     oVerbo.aPreguntas[Convert.ToInt32(Parella00.Name.Substring(7, 1))] == oVerbo.aRespostas01[Convert.ToInt32(Parella02.Name.Substring(7, 1))])
                {
                    Parella00.Visible = false;
                    Parella01.Visible = false;
                    Parella02.Visible = false;
                    Parella00 = null;
                    Parella01 = null;
                    Parella02 = null;
                }
                else
                {
                    Parella00.BackColor = Color.Transparent;
                    Parella01.BackColor = Color.Transparent;
                    Parella02.BackColor = Color.Transparent;
                    Parella00 = null;
                    Parella01 = null;
                    Parella02 = null;
                }
            }
        }

        private void desactivarBotonMarcadoMismaColumna(Button Parella)
        {
            if (Parella != null)
            {
                Parella.BackColor = Color.Transparent;
                Parella = null;
            }
        }

        private void comprobarFormasVerbais(object sender, EventArgs e)
        {
            int nLinea = Convert.ToInt32(((TextBox)sender).Name.Substring(8, 1));
            int nColum = Convert.ToInt32(((TextBox)sender).Name.Substring(7, 1));

            if (nColum == 0) nColumResposta = 2;
            else if (nColum == 1) nColumResposta = 4;

            if (oVerbo.aVerbos[oVerbo.aPreguntas[nLinea], nColumResposta] == ((TextBox)sender).Text)
            {
                colocarAciertoError(true, nLinea, nColum);
            }
            else
            {
                colocarAciertoError(false, nLinea, nColum);
            }
        }

        private void colocarAciertoError(bool acierto, int nLinea, int nColum)
        {
            foreach (Control c in pnlPreguntas.Controls)
            {
                if (c.Name == "pbxError" + nColum.ToString()+ nLinea.ToString())
                {
                    if (acierto) c.Visible = false;
                    else c.Visible = true;
                }
                if (c.Name == "pbxOk" + nColum.ToString() + nLinea.ToString())
                {
                    if (acierto) c.Visible = true;
                    else c.Visible = false;
                }
            }
        }

        private void btSolucion_Click(object sender, EventArgs e)
        {
            foreach (Control c in pnlPreguntas.Controls)
            {
                if (c.Name.StartsWith("lblSolucion"))
                {
                    if(Convert.ToInt32(c.Name.Substring(11,1))==0)
                        c.Text = oVerbo.aVerbos[oVerbo.aPreguntas[Convert.ToInt32(c.Name.Substring(12))], 2];
                    else if(Convert.ToInt32(c.Name.Substring(11, 1)) == 1)
                        c.Text = oVerbo.aVerbos[oVerbo.aPreguntas[Convert.ToInt32(c.Name.Substring(12))], 4];
                }
            }
        }

        private void btReiniciar_Click(object sender, EventArgs e)
        {
            borradoFormulario();
            cargarPreguntas();
        }

        private void btOutroReto_Click(object sender, EventArgs e)
        {
            borradoFormulario();
            tipoPregunta = r.Next(3);
            cargarPreguntas();
        }

        private void borradoFormulario()
        {
            if (tipoPregunta == 0 || tipoPregunta == 1)
            {
                foreach (Control c in pnlPreguntas.Controls)
                {
                    if (c.Name.StartsWith("lbl") || c.Name.StartsWith("txb"))
                    {
                        c.Text = "";
                    }
                    else if (c.Name.StartsWith("pbx"))
                    {
                        c.Visible = false;
                    }
                }
            }
            else
            {
                foreach (Control c in pnlEmparella.Controls)
                {
                    if (c.Name.StartsWith("bt")) c.Text = "";                    
                    c.Visible = true;
                    c.BackColor = Color.Transparent;
                }
            }
        }
        private void btSair_Click(object sender, EventArgs e)
        {
            this.Close();
        }
    }
}
