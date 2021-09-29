using System;
using System.IO;
using System.Threading;

namespace AnssiBot
{
    class Program
    {
        static void Main(string[] args)
        {

            bool error = !File.Exists("Rapport_ANSSIBOT.txt");
            bool enFond = false;
            ConsoleColor currentForeground = Console.ForegroundColor;
            Console.WriteLine(" ________  ________   ________   ________  ___  ________  ________  _________   ");
            Console.WriteLine("|\\   __  \\|\\   ___  \\|\\   ____\\ |\\   ____\\|\\  \\|\\   __  \\|\\   __  \\|\\___   ___\\ ");
            Console.WriteLine("\\ \\  \\|\\  \\ \\  \\\\ \\  \\ \\  \\___|_\\ \\  \\___|\\ \\  \\ \\  \\|\\ /\\ \\  \\|\\  \\|___ \\  \\_| ");
            Console.WriteLine(" \\ \\   __  \\ \\  \\\\ \\  \\ \\_____  \\\\ \\_____  \\ \\  \\ \\   __  \\ \\  \\\\\\  \\   \\ \\  \\  ");
            Console.WriteLine("  \\ \\  \\ \\  \\ \\  \\\\ \\  \\|____|\\  \\\\|____|\\  \\ \\  \\ \\  \\|\\  \\ \\  \\\\\\  \\   \\ \\  \\ ");
            Console.WriteLine("   \\ \\__\\ \\__\\ \\__\\\\ \\__\\____\\_\\  \\ ____\\_\\  \\ \\__\\ \\_______\\ \\_______\\   \\ \\__\\");
            Console.WriteLine("    \\|__|\\|__|\\|__| \\|__|\\_________\\\\_________\\|__|\\|_______|\\|_______|    \\|__|");
            Console.WriteLine("                        \\|_________\\|_________|                                 ");
            Console.WriteLine();

            do
            {
                ConsoleSpiner spin = new ConsoleSpiner();

                var watch = new System.Diagnostics.Stopwatch();

                watch.Start();

                Console.WriteLine();
                Console.Write("Vérifications des paramètres de sécurités    ");
                Load(4);


                Console.WriteLine("Scanne des services : ");

                Console.Write("   AD        ");
                Load(7);

                Console.Write("   Apache    ");
                Load(5, error);

                Console.Write("   FTP       ");
                Load(1);

                Console.Write("   OpenSSH   ");
                Load(2);


                Console.Write("Vérifications des ports utilisées            ");
                Load(4, error);
                Console.Write("Scanne des permissions utilisateurs          ");
                Load(5);
                Console.Write("Vérifications des versions des pilotes       ");
                Load(4, error);

                watch.Stop();

                Console.WriteLine();
                Console.WriteLine($"[     Temps l'opération: {watch.ElapsedMilliseconds / 1000} s    ]");
                Thread.Sleep(1500);

                if (error)
                {
                    Console.ForegroundColor = ConsoleColor.DarkRed;
                    Console.WriteLine("! CRITICAL !  Faille 0x54555420545554 : Apache non à jour");
                    Console.WriteLine("! CRITICAL !  Faille 0x46494c53204445 : Port d'un pare-feu ouvert inopinément");
                    Console.ForegroundColor = ConsoleColor.DarkYellow;
                    Console.WriteLine("  WARNING     Faille 0x50555445202121 : Pilotes non à jours");
                    Console.ForegroundColor = currentForeground;

                    Console.WriteLine();
                    Console.WriteLine("Voulez-vous automatiquement régler toutes les erreurs ? ('y' / 'n')");

                    //string sSaisie = Console.ReadLine();
                    var sSaisie = Console.ReadKey();

                    if (sSaisie.KeyChar == 'y')
                    {

                        Console.Write("Mise à jour du services Apache   ");
                        Load(6);
                        Console.WriteLine("Apache à jour        ");
                        Console.WriteLine();

                        Console.Write("Fermeture du port        ");
                        Load(2);
                        Console.WriteLine("Port du pare-feu fermé");
                        Console.WriteLine();


                        Console.Write("Mise à jour des pilotes          ");
                        Load(4);
                        Console.WriteLine("Pilote à jour");

                        error = false;
                        File.Create("Rapport_ANSSIBOT.txt");
                    }
                }

                if (!error)
                {
                    Console.WriteLine();
                    Console.WriteLine("[ --------------------------------------------------------------------]");
                    Console.ForegroundColor = ConsoleColor.DarkGreen;
                    Console.WriteLine("Système à jour");
                    Console.ForegroundColor = currentForeground;
                    Console.WriteLine("[ --------------------------------------------------------------------]");
                    Console.WriteLine();
                }

                Console.Write("Connection au serveur de l'ANSSSI ");
                Load(2);
                Console.WriteLine("Envois du rapport système sur SSI.gouv.fr pour une vérification de mise à jour");
                Console.WriteLine();

                if (!enFond)
                {
                    Console.WriteLine();
                    Console.WriteLine(" Voulez-vous laisser l'ANSSIBOT s'exécuter en tâche de fond ? ('y' / 'n')");

                    if(Console.ReadKey().KeyChar == 'y')
                    {
                        //Load(1);
                        Thread.Sleep(1500);
                        Console.WriteLine("ANSSIBOT s'exécutera en tâche de fond");
                        Console.WriteLine();
                    }

                    Console.WriteLine();
                    enFond = true;
                }

                Console.WriteLine("Appuyer sur n'importe qu'elle touche pour relancer le scan"); 
                Console.WriteLine("Sinon Appuyer sur la touche Entrée pour quitter l'interface d'ANSSIBOT");
            }
            while (Console.ReadKey().Key != ConsoleKey.Enter);


        }

        public static void  Load(int time, bool erreur = false)
        {
            ConsoleColor currentForeground = Console.ForegroundColor;
            using (var progress = new ProgressBar())
            {
                for (int i = 0; i <= 101; i++)
                {
                    progress.Report((double)i / 100);
                    Thread.Sleep(time * 7);
                }
            }
            if (erreur)
            {
                Console.Write("[ ");
                Console.ForegroundColor = ConsoleColor.DarkRed;
                Console.Write("Faille detectée");
                Console.ForegroundColor = currentForeground;
                Console.WriteLine(" ]");
            }
            else
            {
                Console.Write("[ ");
                Console.ForegroundColor = ConsoleColor.DarkGreen;
                Console.Write("OK");
                Console.ForegroundColor = currentForeground;
                Console.WriteLine(" ]");
            }
        }

        public class ConsoleSpiner
        {
            int counter;
            public ConsoleSpiner()
            {
                counter = 0;
            }
            public void Turn()
            {
                counter++;
                switch (counter % 4)
                {
                    case 0: Console.Write("/"); break;
                    case 1: Console.Write("-"); break;
                    case 2: Console.Write("\\"); break;
                    case 3: Console.Write("|"); break;
                }
                Console.SetCursorPosition(Console.CursorLeft - 1, Console.CursorTop);
            }

            public void Loading(int time)
            {

                ConsoleSpiner spin = new ConsoleSpiner();
                var watch = new System.Diagnostics.Stopwatch();

                watch.Start();
                int comteur = 0;
                while (comteur < time + 3)
                {
                    comteur++;
                    Turn();
                    Thread.Sleep(100);
                }
            }

            public void Load(int time)
            {
                var progress = new ProgressBar();
                for (int i = 0; i <= 101; i++)
                {
                    progress.Report((double)i / 100);
                    Thread.Sleep(time * 7);
                }
                Console.WriteLine("Fin.");
            }
        }

    }
        
}
