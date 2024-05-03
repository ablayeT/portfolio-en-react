from colorama import init, Fore, Back
from rich.console import Console
from rich.style import Style


# Initialisation de colorama
init()

# Initialisation de Rich
console = Console()


class InformationPersonnelle:
    def __init__(self, nom, titre, email, telephone, adresse):
        self.nom = nom
        self.titre = titre
        self.email = email
        self.telephone = telephone
        self.adresse = adresse

        def afficher(self):
        console.print("[black on white] Informations personnelles [/]")
        console.print(f"[black on green]Nom :[/] {self.nom}")
        console.print(f"[black on green]Titre :[/] {self.titre}")
        console.print(f"[black on green]Email :[/] {self.email}")
        console.print(f"[black on green]Téléphone :[/] {self.telephone$
        console.print(f"[black on green]Adresse :[/] {self.adresse}")

# Création de l'instance d'information personnelle
info_personnelle = InformationPersonnelle("Abdoulaye Toure", "DEVELOPP$

# Affichage des informations du CV
info_personnelle.afficher()

# Affichage des langues
console.print("\n[black on white] Langues [/]")
console.print("[blue]- Anglais (courant)[/]")
console.print("[blue]- Espagnol (intermédiaire)[/]")

# Affichage des compétences
console.print("\n[black on whhite] Soft Skills [/]")
console.print("[green]Langages informatiques:[/] Python, JavaScript, H$
console.print("[green]Savoir-être:[/] Esprit d'équipe, Communication, $

# Affichage des centres d'intérêts
console.print("\n[black on white] Centres d'intérêts [/]")
console.print("[white]Taekwondo")
console.print("[white]Baseball")
console.print("[white]Course à pied")