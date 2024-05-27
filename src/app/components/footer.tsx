import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="Footer inline-flex h-fit w-full flex-col items-start justify-start gap-12 px-16 pb-6 pt-20">
      <div className="Content inline-flex h-60 items-start justify-start gap-32 self-stretch">
        <div className="Newsletter inline-flex w-96 flex-col items-start justify-start gap-6">
          <Link
            href="/"
            className="transition-all duration-300 hover:scale-105 hover:contrast-125"
          >
            <Image
              src="/nav-logo.png"
              alt="LifeGuide Holistic Healing Logo"
              width={190}
              height={50}
            />
          </Link>
          <div className="JoinOurNewsletterToStayUpToDateOnFeaturesAndReleases font-['Playfair Display'] self-stretch text-base font-normal leading-normal text-black">
            Join our newsletter to receive updates on our latest features and
            releases.
          </div>
          <div className="Actions flex h-24 flex-col items-start justify-start gap-4 self-stretch">
            <div className="Form inline-flex items-start justify-start gap-4 self-stretch">
              <div className="TypeDefault flex h-12 shrink grow basis-0 items-center justify-start gap-2 border border-black bg-stone-50 p-3">
                <div className="Placeholder shrink grow basis-0 font-['Roboto'] text-base font-normal leading-normal text-stone-500">
                  Your Email
                </div>
              </div>
              <div className="StyleSecondarySmallFalseDarkModeFalseIconPositionNoIcon flex h-12 items-center justify-center gap-2 bg-pink-700 px-6 py-3">
                <div className="Button font-['Roboto'] text-base font-normal leading-normal text-stone-50">
                  Subscribe
                </div>
              </div>
            </div>
            <div className="BySubscribingYouAgreeToWithOurPrivacyPolicyAndProvideConsentToReceiveUpdatesFromOurCompany self-stretch font-['Roboto'] text-xs font-normal leading-none text-black">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </div>
          </div>
        </div>
        <div className="Links flex h-56 shrink grow basis-0 items-start justify-start gap-10">
          <div className="Column inline-flex shrink grow basis-0 flex-col items-start justify-start gap-4">
            <div className="ColumnOne self-stretch font-['Roboto'] text-base font-semibold leading-normal text-black">
              About Us
            </div>
            <div className="FooterLinks flex h-48 flex-col items-start justify-start self-stretch">
              <div className="Link inline-flex items-start justify-start self-stretch py-2">
                <div className="LinkOne font-['Playfair Display'] shrink grow basis-0 text-sm font-normal leading-tight text-black">
                  Services
                </div>
              </div>
              <div className="Link inline-flex items-start justify-start self-stretch py-2">
                <div className="LinkTwo font-['Playfair Display'] shrink grow basis-0 text-sm font-normal leading-tight text-black">
                  Articles
                </div>
              </div>
              <div className="Link inline-flex items-start justify-start self-stretch py-2">
                <div className="LinkThree font-['Playfair Display'] shrink grow basis-0 text-sm font-normal leading-tight text-black">
                  Contact
                </div>
              </div>
              <div className="Link inline-flex items-start justify-start self-stretch py-2">
                <div className="LinkFour font-['Playfair Display'] w-56 text-sm font-normal leading-tight text-black">
                  FAQ
                </div>
              </div>
              <div className="Link inline-flex items-start justify-start self-stretch py-2">
                <div className="LinkFive font-['Playfair Display'] shrink grow basis-0 text-sm font-normal leading-tight text-black">
                  Testimonials
                </div>
              </div>
            </div>
          </div>
          <div className="Column inline-flex shrink grow basis-0 flex-col items-start justify-start gap-4">
            <div className="ColumnTwo self-stretch font-['Roboto'] text-base font-semibold leading-normal text-black">
              Services
            </div>
            <div className="FooterLinks flex h-28 flex-col items-start justify-start self-stretch">
              <div className="Link inline-flex items-start justify-start self-stretch py-2">
                <div className="LinkSix font-['Playfair Display'] shrink grow basis-0 text-sm font-normal leading-tight text-black">
                  Energy Medicine
                </div>
              </div>
              <div className="Link inline-flex items-start justify-start self-stretch py-2">
                <div className="LinkSeven font-['Playfair Display'] shrink grow basis-0 text-sm font-normal leading-tight text-black">
                  Life Guidance
                </div>
              </div>
              <div className="Link inline-flex items-start justify-start self-stretch py-2">
                <div className="LinkEight font-['Playfair Display'] shrink grow basis-0 text-sm font-normal leading-tight text-black">
                  Benefits
                </div>
              </div>
            </div>
          </div>
          <div className="Column inline-flex shrink grow basis-0 flex-col items-start justify-start gap-4">
            <div className="FollowUs self-stretch font-['Roboto'] text-base font-semibold leading-normal text-black">
              Follow Us
            </div>
            <div className="SocialLinks flex h-40 flex-col items-start justify-start self-stretch">
              <div className="Link inline-flex items-center justify-start gap-3 self-stretch py-2">
                <div className="IconFacebook relative h-6 w-6" />
                <div className="Facebook font-['Playfair Display'] text-sm font-normal leading-tight text-black">
                  Quote
                </div>
              </div>
              <div className="Link inline-flex items-center justify-start gap-3 self-stretch py-2">
                <div className="IconInstagram relative h-6 w-6" />
                <div className="Instagram font-['Playfair Display'] text-sm font-normal leading-tight text-black">
                  Quote
                </div>
              </div>
              <div className="Link inline-flex items-center justify-start gap-3 self-stretch py-2">
                <div className="IconX relative h-6 w-6" />
                <div className="X font-['Playfair Display'] text-sm font-normal leading-tight text-black">
                  Quote
                </div>
              </div>
              <div className="Link inline-flex items-center justify-start gap-3 self-stretch py-2">
                <div className="IconLinkedin relative h-6 w-6" />
                <div className="Linkedin font-['Playfair Display'] text-sm font-normal leading-tight text-black">
                  Quote
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Credits flex h-14 flex-col items-start justify-start gap-8 self-stretch">
        <div className="Divider h-px self-stretch border border-black bg-black" />
        <div className="Row inline-flex items-start justify-between self-stretch">
          <div className="2023RelumeAllRightsReserved font-['Playfair Display'] text-sm font-normal leading-tight text-black">
            © 2023 LifeGuide Holistic Healing. All rights reserved.
          </div>
          <div className="FooterLinks flex items-start justify-start gap-6">
            <div className="PrivacyPolicy font-['Playfair Display'] text-sm font-normal leading-tight text-black underline">
              Privacy Policy
            </div>
            <div className="TermsOfService font-['Playfair Display'] text-sm font-normal leading-tight text-black underline">
              Terms and Conditions
            </div>
            <div className="CookiesSettings font-['Playfair Display'] text-sm font-normal leading-tight text-black underline">
              Cookie Policy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
