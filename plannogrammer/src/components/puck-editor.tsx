import { Puck, Drawer } from "@measured/puck";
import "@measured/puck/puck.css";
import { useAppContext } from "@/context/AppContext";
import { calculateScaledDimensions } from "@/utils/dimensions";

// Create Puck component config
const config: any = {
  components: {
    ShelfOneBlock: {
      render: () => {
        return <img src="/images/1.jpg" />;
      },
    },
    ShelfFourBlock: {
      render: () => {
        return <img src="/images/4.jpg" />;
      },
    },
  },
};

// Describe the initial data
const initialData = {};

// Save the data to your database
const save = (data: any) => {
  console.log(data);
};

// Render Puck editor
export function PuckEditor() {
  const { height, width } = useAppContext();

  const { scaledWidth, scaledHeight } = calculateScaledDimensions(
    Number(width),
    Number(height)
  );

  return (
    <div className="w-full h-full flex justify-center items-center relative">
      <Puck config={config} data={initialData} onPublish={save}>
        <div className="flex flex-col justify-center items-center">
          <div
            className="border-2 border-blue-500"
            style={{
              width: `${scaledWidth}px`,
              height: `${scaledHeight}px`,
            }}
          >
            <Puck.Preview />
          </div>

          <div className="absolute bottom-0">
            <Drawer>
              <div className="flex gap-2 bg-[#3B3B3B] p-2 rounded-xl">
                <Drawer.Item name="ShelfOneBlock">
                  {() => (
                    <div className="p-2 w-[40px] h-[40px] bg-[#8b5ec3] rounded-lg flex justify-center items-center text-white cursor-pointer">
                      1
                    </div>
                  )}
                </Drawer.Item>

                <Drawer.Item name="ShelfFourBlock">
                  {() => (
                    <div className="p-2 w-[40px] h-[40px] bg-[#5e94c3] rounded-lg flex justify-center items-center text-white cursor-pointer">
                      4
                    </div>
                  )}
                </Drawer.Item>
              </div>
            </Drawer>
          </div>
        </div>
      </Puck>
    </div>
  );
}
