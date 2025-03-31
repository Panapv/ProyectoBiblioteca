namespace IrregularesIngles
{
    partial class fInicial
    {
        /// <summary>
        /// Variable del diseñador necesaria.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Limpiar los recursos que se estén usando.
        /// </summary>
        /// <param name="disposing">true si los recursos administrados se deben desechar; false en caso contrario.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Código generado por el Diseñador de Windows Forms

        /// <summary>
        /// Método necesario para admitir el Diseñador. No se puede modificar
        /// el contenido de este método con el editor de código.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(fInicial));
            this.pbxPortada = new System.Windows.Forms.PictureBox();
            this.btMix = new System.Windows.Forms.Button();
            this.btTraducir = new System.Windows.Forms.Button();
            this.btPasaPart = new System.Windows.Forms.Button();
            this.pnlMenu = new System.Windows.Forms.Panel();
            this.btSair = new System.Windows.Forms.Button();
            this.label1 = new System.Windows.Forms.Label();
            this.pbxAlambre = new System.Windows.Forms.PictureBox();
            this.tootiptexto = new System.Windows.Forms.ToolTip(this.components);
            ((System.ComponentModel.ISupportInitialize)(this.pbxPortada)).BeginInit();
            this.pnlMenu.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.pbxAlambre)).BeginInit();
            this.SuspendLayout();
            // 
            // pbxPortada
            // 
            this.pbxPortada.Image = ((System.Drawing.Image)(resources.GetObject("pbxPortada.Image")));
            this.pbxPortada.Location = new System.Drawing.Point(46, 1);
            this.pbxPortada.Name = "pbxPortada";
            this.pbxPortada.Size = new System.Drawing.Size(576, 756);
            this.pbxPortada.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.pbxPortada.TabIndex = 22;
            this.pbxPortada.TabStop = false;
            // 
            // btMix
            // 
            this.btMix.BackColor = System.Drawing.Color.White;
            this.btMix.FlatAppearance.BorderSize = 0;
            this.btMix.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btMix.Font = new System.Drawing.Font("Bradley Hand ITC", 12F, ((System.Drawing.FontStyle)((System.Drawing.FontStyle.Bold | System.Drawing.FontStyle.Italic))), System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btMix.ForeColor = System.Drawing.Color.Red;
            this.btMix.Location = new System.Drawing.Point(3, 96);
            this.btMix.Name = "btMix";
            this.btMix.Size = new System.Drawing.Size(295, 36);
            this.btMix.TabIndex = 16;
            this.btMix.Text = "mix";
            this.btMix.UseVisualStyleBackColor = false;
            this.btMix.Click += new System.EventHandler(this.btMix_Click);
            // 
            // btTraducir
            // 
            this.btTraducir.BackColor = System.Drawing.Color.White;
            this.btTraducir.FlatAppearance.BorderSize = 0;
            this.btTraducir.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btTraducir.Font = new System.Drawing.Font("Bradley Hand ITC", 12F, ((System.Drawing.FontStyle)((System.Drawing.FontStyle.Bold | System.Drawing.FontStyle.Italic))), System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btTraducir.ForeColor = System.Drawing.Color.Red;
            this.btTraducir.Location = new System.Drawing.Point(3, 12);
            this.btTraducir.Name = "btTraducir";
            this.btTraducir.Size = new System.Drawing.Size(295, 36);
            this.btTraducir.TabIndex = 13;
            this.btTraducir.Text = "español inglés / inglés español";
            this.tootiptexto.SetToolTip(this.btTraducir, "traducir infinitivos verbos irreguralares");
            this.btTraducir.UseVisualStyleBackColor = false;
            this.btTraducir.Click += new System.EventHandler(this.btTraducir_Click);
            // 
            // btPasaPart
            // 
            this.btPasaPart.BackColor = System.Drawing.Color.White;
            this.btPasaPart.FlatAppearance.BorderSize = 0;
            this.btPasaPart.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btPasaPart.Font = new System.Drawing.Font("Bradley Hand ITC", 12F, ((System.Drawing.FontStyle)((System.Drawing.FontStyle.Bold | System.Drawing.FontStyle.Italic))), System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btPasaPart.ForeColor = System.Drawing.Color.Red;
            this.btPasaPart.Location = new System.Drawing.Point(3, 54);
            this.btPasaPart.Name = "btPasaPart";
            this.btPasaPart.Size = new System.Drawing.Size(295, 36);
            this.btPasaPart.TabIndex = 15;
            this.btPasaPart.Text = "pasado simple / participio pasado";
            this.btPasaPart.UseVisualStyleBackColor = false;
            this.btPasaPart.Click += new System.EventHandler(this.btPasaPart_Click);
            // 
            // pnlMenu
            // 
            this.pnlMenu.BackColor = System.Drawing.Color.White;
            this.pnlMenu.Controls.Add(this.btSair);
            this.pnlMenu.Controls.Add(this.btTraducir);
            this.pnlMenu.Controls.Add(this.btPasaPart);
            this.pnlMenu.Controls.Add(this.btMix);
            this.pnlMenu.Location = new System.Drawing.Point(312, 81);
            this.pnlMenu.Name = "pnlMenu";
            this.pnlMenu.Size = new System.Drawing.Size(301, 183);
            this.pnlMenu.TabIndex = 23;
            // 
            // btSair
            // 
            this.btSair.BackColor = System.Drawing.Color.White;
            this.btSair.FlatAppearance.BorderSize = 0;
            this.btSair.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btSair.Font = new System.Drawing.Font("Bradley Hand ITC", 12F, ((System.Drawing.FontStyle)((System.Drawing.FontStyle.Bold | System.Drawing.FontStyle.Italic))), System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btSair.ForeColor = System.Drawing.Color.Red;
            this.btSair.Location = new System.Drawing.Point(16, 144);
            this.btSair.Name = "btSair";
            this.btSair.Size = new System.Drawing.Size(271, 26);
            this.btSair.TabIndex = 29;
            this.btSair.Text = "saír";
            this.btSair.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            this.tootiptexto.SetToolTip(this.btSair, "saír da aplicación");
            this.btSair.UseVisualStyleBackColor = false;
            this.btSair.Click += new System.EventHandler(this.btSair_Click);
            // 
            // label1
            // 
            this.label1.BackColor = System.Drawing.SystemColors.Control;
            this.label1.Font = new System.Drawing.Font("Bradley Hand ITC", 20.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label1.ForeColor = System.Drawing.Color.Tomato;
            this.label1.Location = new System.Drawing.Point(367, 9);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(246, 35);
            this.label1.TabIndex = 26;
            this.label1.Text = "verbos irregulares";
            this.label1.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // pbxAlambre
            // 
            this.pbxAlambre.Image = ((System.Drawing.Image)(resources.GetObject("pbxAlambre.Image")));
            this.pbxAlambre.Location = new System.Drawing.Point(0, 1);
            this.pbxAlambre.Name = "pbxAlambre";
            this.pbxAlambre.Size = new System.Drawing.Size(47, 756);
            this.pbxAlambre.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.pbxAlambre.TabIndex = 28;
            this.pbxAlambre.TabStop = false;
            this.pbxAlambre.MouseDown += new System.Windows.Forms.MouseEventHandler(this.pbxAlambre_MouseDown);
            this.pbxAlambre.MouseMove += new System.Windows.Forms.MouseEventHandler(this.pbxAlambre_MouseMove);
            this.pbxAlambre.MouseUp += new System.Windows.Forms.MouseEventHandler(this.pbxAlambre_MouseUp);
            // 
            // fInicial
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackgroundImageLayout = System.Windows.Forms.ImageLayout.None;
            this.ClientSize = new System.Drawing.Size(625, 760);
            this.Controls.Add(this.pbxAlambre);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.pnlMenu);
            this.Controls.Add(this.pbxPortada);
            this.ForeColor = System.Drawing.Color.Black;
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
            this.IsMdiContainer = true;
            this.Name = "fInicial";
            this.Load += new System.EventHandler(this.fInicial_Load);
            ((System.ComponentModel.ISupportInitialize)(this.pbxPortada)).EndInit();
            this.pnlMenu.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.pbxAlambre)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion
        private System.Windows.Forms.PictureBox pbxPortada;
        private System.Windows.Forms.Button btMix;
        private System.Windows.Forms.Button btTraducir;
        private System.Windows.Forms.Button btPasaPart;
        private System.Windows.Forms.Panel pnlMenu;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.PictureBox pbxAlambre;
        private System.Windows.Forms.Button btSair;
        private System.Windows.Forms.ToolTip tootiptexto;
    }
}

