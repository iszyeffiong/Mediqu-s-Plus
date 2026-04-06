import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Facebook, Linkedin } from "lucide-react";

const team = [
  {
    name: "Dr. Uwe Isangedighi",
    role: "Medical Director",
    specialty: "Occupational Health",
    bio: "Dr. Uwe Isangedighi is an Occupational Health Specialist by training who has transitioned to Hospital Management. He has interned locally and internationally notably in The United Kingdom where he worked in Occupational Health for several providers.\n\nHe is a Certified Instructor for Basic Life Support for the American Heart Association and the Resuscitation council of Southern Africa.\n\nDr. Isangedighi is a graduate of the College of Health Sciences, University of Uyo where he earned his Bachelor of Medicine, Bachelor of Surgery, MBBS degree. He is an MSc (Occ Health) Holder from the University of Birmingham.\n\nHe is happily married with three children",
    image: "/doctors/dr-uwe-v2.png",
    fitMode: "contain",
    bgWhite: true
  },
  {
    name: "Dr. Wilson Ugege",
    role: "Obstetrician/Gynaecologist",
    specialty: "Feto-Maternal Medicine",
    bio: "Dr Wilson Ugege , Bm, Bch FWACS was born in Jos, Nigeria, and obtained his Primary Medical Degree from the University of Jos in 2001. After attaining his Medical Degree he went on to complete his specialist surgical training, passing the examinations for admission as a Fellow of the West African College of Surgeons in 2014.\n\nHe has always been passionate about Female reproductive health and he leads this Department at Mediqués Plus.\n\nA highly experienced Obstetrician & Gynaecologist, Dr Ugege has performed thousands of procedures. Over the years, he has gained vast experience in a wide range of gynaecological sub-specialities, with areas of  interest in  Feto-Maternal Medicine; including High Risk Obstetrics, Infertility and Urogynaecology.\n\n To ensure the service that he offers his patients is constantly evolving to embrace the latest technological and surgical developments, he regularly participates at many conferences and workshops. Dr Ugege has also written several papers and contributed to many specialist books and journals within the field of Obstetrics and Gynaecology. He has received several awards for his work and dedication to innovation in his field.\n\n He is greatly admired by his peers, junior colleagues and patients.",
    image: undefined,
    fitMode: "cover"
  },
  {
    name: "Dr. Charles Nga",
    role: "Dermatologist",
    specialty: "Internal Medicine",
    bio: "Dr Nga completed his undergraduate medical training at the College of Health Sciences, University of Ilorin in 2004 and was awarded the Fellowship of the West African College of Physicians in Internal Medicine (Dermatology subspecialty) in 2017. He is also an associate Fellow of the National Postgraduate Medical College of Nigeria. Since 2018, He has superintended over the Department of Internal Medicine at Mediqués Plus. He is a certified member of various national, African and international dermatology societies.",
    image: "/doctors/dr-charles-v2.png",
    fitMode: "contain",
    bgWhite: true
  },
  {
    name: "Dr. Obasi Okorie",
    role: "Paediatric Endocrinologist",
    specialty: "Paediatrics",
    bio: "Dr. Okorie is an enthusiastic, committed and adaptable medical doctor with experience in providing exceptional care to children.\n\nHe had his Post-graduate Residency Training at Department of Paediatrics, University of Uyo Teaching Hospital, and is an alumnus of the College of Medicine, University of Calabar.\n\nDr. Okorie is a Fellow of the National Post-graduate Medical College of Nigeria. He has garnered extensive work experience in numerous medical institutions in Nigeria and Saudi Arabia, prior to joining Mediques Plus.\n\nDr. Okorie is skilled in neonatal resuscitation, ability to perform exchange blood transfusions, and in the use of CPAP and Neo-puff machines, and holds certifications in neonatal resuscitation, Basic Life Support, Paediatric Advanced Cardiac Life Support, and Basic Developmental Assessment.",
    image: "/doctors/dr-obasi.png",
    fitMode: "contain",
    bgWhite: true
  },
  {
    name: "Dr. Margaret Antai",
    role: "Plastic Surgeon",
    specialty: "Plastic and Reconstructive Surgery",
    bio: "Dr Margaret Antai is a Plastic Surgeon and a graduate of the University of Calabar where she bagged the award of Bachelor of Medicine and Surgery, MB.ChB. She pursued her residency training at University of Uyo Teaching Hospital and finished with the award of fellowships in both the West African College of Surgeons (FWACS) and the National Postgraduate Medical College of Nigeria (FMCS) in Plastic and Reconstructive Surgery in 2014. She has experience and vested interest in Aesthetic (Cosmetic) Surgery. Dr Margaret is an avid researcher with various publications in indexed national and international peer-reviewed journals.",
    image: "/doctors/dr-margaret-v2.png",
    fitMode: "cover"
  },
  {
    name: "Dr. Essien Nsima",
    role: "Clinical Director",
    specialty: "General Practice",
    bio: "Dr Essien Nsima graduated from the College of Health Sciences, University of Uyo. He practiced at one of Akwa Ibom's premier healthcare providers for nine years before joining our team.\n\nAs Clinical Director, He coordinates the activities of the experienced Specialists, dynamic Resident Medical Officers, nurses and other clinical staff who work round the clock to dispense a truly outstanding care experience.",
    image: "/doctors/dr-essien-v2.png",
    fitMode: "contain",
    bgWhite: true
  },
  {
    name: "Dr. Aniekeme Umoh",
    role: "Senior Medical Officer",
    specialty: "General Practice",
    bio: "Dr. Aniekeme Umoh bagged her MB,BS degree from the College of Health Sciences, University of Uyo. She has been committed to maintaining a safe and supportive environment for all of our patients. We are so fortunate to have her on our team.",
    image: "/doctors/dr-aniekeme-v2.png",
    fitMode: "cover"
  },
  {
    name: "Dr. Theresa Nde",
    role: "Medical Officer",
    specialty: "General Practice",
    bio: "Dr Theresa Nde graduated from the University of Uyo. She is committed to maintaining the highest standard of patient care, and seeks to find the best course of treatment at all times.",
    image: "/doctors/dr-theresa-v2.png",
    fitMode: "cover"
  },
  {
    name: "Dr. Glory Edem",
    role: "Medical Officer",
    specialty: "General Practice",
    bio: "Dr Glory bagged her MD degree from Georgetown American University and has been a member of the team since November 2023.\n\nShe brings sterling medical training and apt expertise, combined with a warm demeanour and excellent bedside manner to ensure that our patients are adequately cared for.",
    image: "/doctors/dr-glory-v2.png",
    fitMode: "cover"
  },
  {
    name: "Dr. Uche Ebi",
    role: "Anaesthesiologist/Critical Care Physician",
    specialty: "Anaesthesiology",
    image: undefined,
    bio: "Dr Uche Ebi bagged hisz primary medical degree from the prestigious University of Nigeria, Enugu. Following post graduate training at University of Uyo Teaching Hospital, he became a full Fellow of the West African College of Surgeons - Anaesthesiology in 2021.\n\nDr Ebi is unrivalled when it comes to professionalism and conscientiousness. He is loved and admired by colleagues and patients alike."
  },
  {
    name: "Ms Inyang Inuaeyen",
    role: "Nursing Director",
    specialty: "Nursing",
    bio: "Inyang trained as a registered nurse at the Central School of Nursing, Ikot Ekpene. She is hardworking, dedicated, and has excellent communication and leadership skills. She brings her wealth of experience to bear as Director of Nursing.",
    image: "/doctors/ms-inyang.png",
    imageClassName: "object-cover object-[center_45%] scale-[1.6] group-hover:scale-[1.65]"
  },
  {
    name: "Ms Susan Koida",
    role: "In-Patient Care Cordinator",
    specialty: "Social Work",
    bio: "Susan trained at Babcock University where she graduated with a Bachelors degree in Social Work. She is an intelligent, diligent and hard working professional who is passionate about her job. She is goal oriented and knows how to get work done. She coordinates the patient experience at Mediqués Plus.",
    image: "/doctors/ms-susan.png",
    imageClassName: "object-cover object-[center_45%] scale-[1.6] group-hover:scale-[1.65]"
  },
  {
    name: "Abasifreke Sampson",
    role: "Patient Services Executive",
    specialty: "Administration",
    bio: "Abasifreke joined Mediqués Plus as a Receptionist. She was given administrative duties as her management, interpersonal skills and incredible ability to strive for excellence did not go unnoticed. In her current role,  she assists with the day-to-day operation of the clinic as well as both business and staff development. \"Abass\" is also responsible for ensuring that the very highest standards of patient care are maintained and our patients’ journeys are as smooth and stress-free as possible.",
    image: "/doctors/abasifreke.png",
    imageClassName: "object-cover object-[center_45%] scale-[1.6] group-hover:scale-[1.6]"
  }
];

const Doctors = () => {
  const ref = useScrollAnimation<HTMLElement>();
  const [selectedMember, setSelectedMember] = useState<typeof team[0] | null>(null);



  return (
    <section id="doctors" className="py-20 lg:py-28 bg-secondary" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="section-fade-up text-center mb-16">
          <p className="font-body text-sm font-semibold tracking-widest text-accent uppercase mb-3">Our Dedicated Team</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
            Meet Our Doctors & Staff
          </h2>
          <div className="gold-rule mx-auto mt-5" />
          <p className="font-body text-base text-muted-foreground mt-6 max-w-2xl mx-auto">
            Our specialists bring years of experience, compassion, and innovation to ensure you receive the highest standard of personalized care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {team.map((member, i) => (
            <div
              key={member.name}
              onClick={() => setSelectedMember(member)}
              className="section-fade-up card-lift bg-card rounded-2xl overflow-hidden border border-border flex flex-col group shadow-md cursor-pointer"
              style={{ transitionDelay: `${0.1 * (i % 4)}s` }}
            >
              <div className={`relative h-64 overflow-hidden flex items-center justify-center ${(member as any).bgWhite ? 'bg-white' : 'bg-primary/5'}`}>
                <div className={`absolute inset-0 transition-colors duration-500 z-10 ${(member as any).bgWhite ? '' : 'bg-primary/20 group-hover:bg-primary/0'}`} />
                <img
                  src={member.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name.replace(/^(Dr\.|Ms)\s+/, ''))}&background=1e3c2f&color=fff&size=512&font-size=0.33`}
                  alt={member.name}
                  className={`w-full h-full transition-transform duration-700 ease-in-out ${(member as any).imageClassName ? (member as any).imageClassName :
                    (member as any).fitMode === 'contain' ? 'object-contain pt-3 px-2 group-hover:scale-105' :
                      'object-cover object-[center_5%] group-hover:scale-105'
                    }`}
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="font-body text-[11px] font-semibold tracking-wider text-accent uppercase mb-2 group-hover:text-primary transition-colors">{member.specialty}</p>
                <h3 className="font-display text-xl font-semibold text-foreground mb-1 xl:whitespace-pre-wrap">{member.name}</h3>
                <p className="font-body text-sm font-medium text-foreground/70 mb-4">{member.role}</p>
                <p className="font-body text-sm leading-relaxed text-muted-foreground flex-1 mb-5 line-clamp-4">
                  {member.bio}
                </p>
                <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <a href="#" onClick={(e) => e.stopPropagation()} className="p-2 rounded-full bg-secondary text-primary hover:bg-primary hover:text-white transition-all shadow-sm hover:shadow-md">
                      <Facebook size={16} />
                    </a>
                    <a href="#" onClick={(e) => e.stopPropagation()} className="p-2 rounded-full bg-secondary text-primary hover:bg-primary hover:text-white transition-all shadow-sm hover:shadow-md">
                      <Linkedin size={16} />
                    </a>
                  </div>
                  <span className="font-body text-[10px] font-bold text-primary/50 group-hover:text-primary transition-colors tracking-tighter cursor-pointer">
                    VIEW PROFILE
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedMember} onOpenChange={(open) => !open && setSelectedMember(null)}>
        <DialogContent className="max-w-2xl w-[95vw] md:w-full max-h-[90vh] overflow-y-auto bg-card border-border gap-6 p-4 md:p-6 lg:p-10">
          {selectedMember && (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-4xl text-foreground mb-1">{selectedMember.name}</DialogTitle>
                <DialogDescription className="font-body text-lg text-foreground/70 font-medium">
                  {selectedMember.role}
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col md:flex-row gap-8 items-start mt-4">
                <div className={`w-32 md:w-56 aspect-[4/5] rounded-xl overflow-hidden shrink-0 shadow-sm flex items-center justify-center border border-border/50 mx-auto md:mx-0 ${(selectedMember as any).bgWhite ? 'bg-white' : 'bg-primary/5'}`}>
                  <img
                    src={selectedMember.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedMember.name.replace(/^(Dr\.|Ms)\s+/, ''))}&background=1e3c2f&color=fff&size=512&font-size=0.33`}
                    alt={selectedMember.name}
                    className={`w-full h-full ${(selectedMember as any).imageClassName ? (selectedMember as any).imageClassName.replace('group-hover:scale-105', '') :
                      (selectedMember as any).fitMode === 'contain' ? 'object-contain p-2' :
                        'object-cover object-[center_5%]'
                      }`}
                  />
                </div>
                <div className="flex-1 space-y-5">
                  <div>
                    <h4 className="font-body text-xs font-semibold tracking-wider text-accent uppercase mb-2">Specialty</h4>
                    <p className="font-body text-base text-foreground font-medium">{selectedMember.specialty}</p>
                  </div>
                  <div className="flex-1 flex flex-col min-h-0">
                    <h4 className="font-body text-xs font-semibold tracking-wider text-accent uppercase mb-2">About</h4>
                    <p className="font-body text-base leading-relaxed text-muted-foreground whitespace-pre-line pr-4">
                      {selectedMember.bio}
                    </p>
                  </div>

                  <div className="pt-6 mt-2 border-t border-border flex items-center gap-4">
                    <span className="font-body text-sm font-semibold text-foreground">Connect with {selectedMember.name.replace(/^(Dr\.|Ms)\s+/, '')}:</span>
                    <div className="flex items-center gap-3">
                      <a href="#" className="p-2.5 rounded-full bg-secondary text-primary hover:bg-primary hover:text-white transition-all shadow-sm hover:shadow-md">
                        <Facebook size={20} />
                      </a>
                      <a href="#" className="p-2.5 rounded-full bg-secondary text-primary hover:bg-primary hover:text-white transition-all shadow-sm hover:shadow-md">
                        <Linkedin size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Doctors;
