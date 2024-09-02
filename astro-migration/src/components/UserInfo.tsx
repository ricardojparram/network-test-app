import { useEffect, useState } from "preact/hooks";
import { type userInfo } from "../types/userInfo";

export function UserInfo() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<userInfo>({
    ip: "",
    country: "",
    flag: "",
    region: "",
    city: "",
    countryRegion: "",
    latitude: "",
    longitude: "",
    asOrganization: "",
  });

  useEffect(() => {
    const getInfo = async () => {
      const url = "https://cloudflare-ip.html.zone/geo";
      setLoading(true);
      const req = await fetch(url);
      const res: userInfo = await req.json();
      setLoading(false);
      setData(res);
    };
    getInfo();
  }, []);

  if (loading) {
    return (
      <div role="status" class="max-w-md animate-pulse">
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-56 mb-4"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-44 mx-auto mb-2.5"></div>
        <span class="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <section class="text-slate-700 dark:text-slate-200 font-extrabold text-xl text-center">
      <p>
        {!data.countryRegion && data.flag} {data.asOrganization} {data.ip}
      </p>
      {data.countryRegion && (
        <p>
          {data.flag} {data.city}, {data.countryRegion}
        </p>
      )}
    </section>
  );
}
