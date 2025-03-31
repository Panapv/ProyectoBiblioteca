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
    public partial class fInglesEspanol : Form
    {
        clsVerbo oVerbo;
        Random r = new Random();
        Button Parella01;
        Button Parella02;

        int tipoPregunta = 0, nColumResposta=0;

        public fInglesEspanol(clsVerbo oVerbo)
        {
            InitializeComponent();
            this.oVerbo = oVerbo;
        }

        private void fInglesEspanol_Load(object sender, EventArgs e)
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
                    lblEnunciado.Text = "Escribe o infinitivo correspondente en español.";
                    lblInfIzq.Text = "infinitivo inglés";
                    lblInfDch.Text = "infinitivo español";
                    nColumResposta = 6;
                    oVerbo.sortearCincoPreguntas();
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
                    lblEnunciado.Text = "Escribe o infinitivo correspondente en inglés.";
                    lblInfIzq.Text = "infinitivo español";
                    lblInfDch.Text = "infinitivo inglés";
                    nColumResposta = 1;
                    oVerbo.sortearCincoPreguntas();
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
                    lblEnunciado.Text = "Emparella o infinitivo inglés co infinitivo español, escollendo un botón de cada columna.";
                    label7.Text = "infinitivo inglés";
                    label8.Text = "infinitivo español";
                    nColumResposta = 6;
                    oVerbo.sortearCincoPreguntas();
                    pnlPreguntas.Hide();
                    pnlEmparella.Show();
                    btSolucion.Visible = false;
                    btTrad00.Text = oVerbo.aVerbos[oVerbo.aPreguntas[0], 1].ToString();
                    btTrad01.Text = oVerbo.aVerbos[oVerbo.aPreguntas[1], 1].ToString();
                    btTrad02.Text = oVerbo.aVerbos[oVerbo.aPreguntas[2], 1].ToString();
                    btTrad03.Text = oVerbo.aVerbos[oVerbo.aPreguntas[3], 1].ToString();
                    btTrad04.Text = oVerbo.aVerbos[oVerbo.aPreguntas[4], 1].ToString();

                    btTrad10.Text = oVerbo.aVerbos[oVerbo.aRespostas00[0], 6].ToString();
                    btTrad11.Text = oVerbo.aVerbos[oVerbo.aRespostas00[1], 6].ToString();
                    btTrad12.Text = oVerbo.aVerbos[oVerbo.aRespostas00[2], 6].ToString();
                    btTrad13.Text = oVerbo.aVerbos[oVerbo.aRespostas00[3], 6].ToString();
                    btTrad14.Text = oVerbo.aVerbos[oVerbo.aRespostas00[4], 6].ToString();
                    break;
            }
        }

        private void comprobarTraduccion(object sender, EventArgs e)
        {            
            int nLinea=Convert.ToInt32(((TextBox)sender).Name.Substring(8,1));

            if (oVerbo.aVerbos[oVerbo.aPreguntas[nLinea], nColumResposta] == ((TextBox)sender).Text)
            {
                colocarAciertoError(true, nLinea);
            }
            else
            {
                colocarAciertoError(false, nLinea);
            }    
        }

        private void comprobarEmparellados(object sender, EventArgs e)
        {

            if (Parella01 == null)
            {
                Parella01 = ((Button)sender);
                ((Button)sender).BackColor = Color.Khaki;
            }
            else
            {
                Parella02 = ((Button)sender);
                ((Button)sender).BackColor = Color.Khaki;
            }

            if (Parella01 != null & Parella02 != null)
            {
                if (oVerbo.aPreguntas[Convert.ToInt32(Parella01.Name.Substring(7, 1))] == oVerbo.aRespostas00[Convert.ToInt32(Parella02.Name.Substring(7, 1))] ||
                    oVerbo.aRespostas00[Convert.ToInt32(Parella01.Name.Substring(7, 1))] == oVerbo.aPreguntas[Convert.ToInt32(Parella02.Name.Substring(7, 1))])
                {
                    Parella01.Visible = false;
                    Parella02.Visible = false;
                    Parella01 = null;
                    Parella02 = null;
                }
                else
                {
                    Parella01.BackColor = Color.Transparent;
                    Parella02.BackColor = Color.Transparent;
                    Parella01 = null;
                    Parella02 = null;
                }
            }
        }

        private void colocarAciertoError(bool acierto, int nLinea)
        {
            foreach (Control c in pnlPreguntas.Controls)
            {
                if (c.Name == "pbxError" + nLinea.ToString())
                {
                    if (acierto) c.Visible = false;
                    else c.Visible = true;
                }
                if (c.Name == "pbxOk" + nLinea.ToString())
                {
                    if (acierto) c.Visible =true;
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
                    c.Text = oVerbo.aVerbos[oVerbo.aPreguntas[Convert.ToInt32(c.Name.Substring(11))], nColumResposta];
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
                    c.Text = "";
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
