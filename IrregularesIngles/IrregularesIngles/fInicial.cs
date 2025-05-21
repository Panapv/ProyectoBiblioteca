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
    public partial class fInicial : Form
    {
        public fInicial()
        {
            InitializeComponent();
        }

        //objetos
        clsVerbo oVerbo = new clsVerbo();


        #region "mover formulario"
        //*****************************************************************************************//
        // mover formulario sin que tenga cabeceras
        // 2 formas con boleano, o con location cursor

        //bool vai = false;

        int m, mx, my;
        private void pbxAlambre_MouseDown(object sender, MouseEventArgs e)
        {
            //  vai = true;
            m = 1;
            mx = e.X;
            my = e.Y;
        }

        private void pbxAlambre_MouseMove(object sender, MouseEventArgs e)
        {
            //if (vai == true)
            //{
            //    this.Location = Cursor.Position;
            //}
            if (m == 1)
            {
                this.SetDesktopLocation(MousePosition.X - mx, MousePosition.Y - my);
            }
        }

        private void pbxAlambre_MouseUp(object sender, MouseEventArgs e)
        {
            //vai = false;
            m = 0;
        }
 
        #endregion


        private void fInicial_Load(object sender, EventArgs e)
        {

        }

        private void btSair_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void btPasaPart_Click(object sender, EventArgs e)
        {
            pbxPortada.Visible = false;
            pnlMenu.Visible = false;
            fPasaPart fpp = new fPasaPart(oVerbo);
            fpp.MdiParent = this;
            fpp.StartPosition = FormStartPosition.Manual;
            fpp.Left = 46;
            fpp.Top = 0;
            fpp.Show();

            fpp.FormClosed += PecharFormulario_fie;
        }

        private void btMix_Click(object sender, EventArgs e)
        {
            pbxPortada.Visible = false;
            pnlMenu.Visible = false;
            fMix fMx = new fMix(oVerbo);
            fMx.MdiParent = this;
            fMx.StartPosition = FormStartPosition.Manual;
            fMx.Left = 46;
            fMx.Top = 0;
            fMx.Show();

            fMx.FormClosed += PecharFormulario_fie;
        }

        private void btTraducir_Click(object sender, EventArgs e)
        {
            //pnlPortada.Visible = false;
            pbxPortada.Visible = false;
            pnlMenu.Visible = false;
            fInglesEspanol fie = new fInglesEspanol(oVerbo);
            fie.MdiParent = this;
            fie.StartPosition = FormStartPosition.Manual;
            fie.Left = 46;
            fie.Top = 0;
            fie.Show();

            fie.FormClosed += PecharFormulario_fie;

        }
    
        private void PecharFormulario_fie(object sender, EventArgs e)
        {
            //pnlPortada.Visible = true;
            pbxPortada.Visible = true;
            pnlMenu.Visible = true;
        }
    

    }
}
