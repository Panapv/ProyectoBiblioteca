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
    public partial class fMix : Form
    {
        clsVerbo oVerbo;
        Random r = new Random();
        Button Parella00;
        Button Parella01;
        Button Parella02;
        Button Parella03;

        //int tipoPregunta = 0, nColumResposta = 0;

        public fMix(clsVerbo oV)
        {
            InitializeComponent();
            this.oVerbo = oV;
        }

        private void fMix_Load(object sender, EventArgs e)
        {
            lblEnunciado.Text = "Emparella escollendo un botón de cada columna que represente o infinitivo inglés, pasado, participio e infinitivo español do mesmo verbo";
            cargarPreguntas();
        }
        private void cargarPreguntas()
        {
            oVerbo.sortearCincoPreguntas();
            //pnlPreguntas.Visible = false;
            pnlEmparella.Visible = true;
            
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

            btTrad30.Text = oVerbo.aVerbos[oVerbo.aRespostas02[0], 6].ToString();
            btTrad31.Text = oVerbo.aVerbos[oVerbo.aRespostas02[1], 6].ToString();
            btTrad32.Text = oVerbo.aVerbos[oVerbo.aRespostas02[2], 6].ToString();
            btTrad33.Text = oVerbo.aVerbos[oVerbo.aRespostas02[3], 6].ToString();
            btTrad34.Text = oVerbo.aVerbos[oVerbo.aRespostas02[4], 6].ToString();
        }

        private void comprobarEmparellados(object sender, EventArgs e)
        {
            if (((Button)sender).Name.Substring(6, 1) == "0")
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
            else if (((Button)sender).Name.Substring(6, 1) == "2")
            {
                desactivarBotonMarcadoMismaColumna(Parella02);
                Parella02 = ((Button)sender);
                ((Button)sender).BackColor = Color.Khaki;
            }
            else
            {
                desactivarBotonMarcadoMismaColumna(Parella03);
                Parella03 = ((Button)sender);
                ((Button)sender).BackColor = Color.Khaki;
            }


            if (Parella00 != null & Parella01 != null & Parella02 != null & Parella03 != null)
            {
                if (oVerbo.aPreguntas[Convert.ToInt32(Parella00.Name.Substring(7, 1))] == oVerbo.aRespostas00[Convert.ToInt32(Parella01.Name.Substring(7, 1))] &&
                    oVerbo.aPreguntas[Convert.ToInt32(Parella00.Name.Substring(7, 1))] == oVerbo.aRespostas01[Convert.ToInt32(Parella02.Name.Substring(7, 1))] &&
                    oVerbo.aPreguntas[Convert.ToInt32(Parella00.Name.Substring(7, 1))] == oVerbo.aRespostas02[Convert.ToInt32(Parella03.Name.Substring(7, 1))])
                {
                    Parella00.Visible = false;
                    Parella01.Visible = false;
                    Parella02.Visible = false;
                    Parella03.Visible = false;
                    Parella00 = null;
                    Parella01 = null;
                    Parella02 = null;
                    Parella03 = null;
                }
                else
                {
                    Parella00.BackColor = Color.Transparent;
                    Parella01.BackColor = Color.Transparent;
                    Parella02.BackColor = Color.Transparent;
                    Parella03.BackColor = Color.Transparent;
                    Parella00 = null;
                    Parella01 = null;
                    Parella02 = null;
                    Parella03 = null;
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

        private void btReiniciar_Click(object sender, EventArgs e)
        {
            borradoFormulario();
            cargarPreguntas();
        }

        private void borradoFormulario()
        {
            foreach (Control c in pnlEmparella.Controls)
            {
                if(c.Name.StartsWith("bt")) c.Text = "";
                c.Visible = true;
                c.BackColor = Color.Transparent;
            }
        }
        private void btSair_Click(object sender, EventArgs e)
        {
            this.Close();
        }
    }
}

