import { KeyboardEventHandler, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsPlus } from 'react-icons/bs';
import { 
  HtmlEditor, 
  Image, 
  Inject, 
  Link, 
  QuickToolbar, 
  RichTextEditorComponent, 
  Toolbar 
} from '@syncfusion/ej2-react-richtexteditor';
import CreateableSelect from 'react-select/creatable';
import Select from 'react-select';
import { ActionMeta, OnChangeValue } from 'react-select';
import { useMutation } from '@tanstack/react-query';
import { postArticle } from '../helper';
import { useStateContext } from '../context/ContextProvider';

// createable component object
const components = {
  DropdownIndicator: null,
};

// createable multi select option interface
interface Option {
  readonly label: string;
  readonly value: string;
}

// creatable multi select
const createOption = (label: string) => ({
  label,
  value: label,
});

// Select input style
const styles = {
  control: (styles:any, state:any) => ({
    ...styles, backgroundColor:"transparent",
    height:"50px",
    width: "100%",
    borderRadius: "6px",
    paddingLeft: "16px",
    border: state.isFocused ? "1px solid #ffffff6d": "1px solid #ffffff6d",
    ':hover': {
      border: "2px solid #ffffff6d"
    },
    cursor: "pointer",
    boxShadow: state.isFocused ? "none" : "none",
  }),
  option: ( styles:any, {isSelected}:{isSelected:any} ) => ({
    ...styles,
    fontWeight: isSelected ? "bold" : "normal",
    color: isSelected ? "white" : "black",
    backgroundColor: isSelected ? "#208607" : "white",
    fontSize: "14px",
  }),
  singleValue: ( styles:any ) => ({
    ...styles,
    color: "#fff",
    '&:focused': {
      border: "0 !important",
      outline: "none !important",
    },
  }),
  input: ( styles:any ) => ({
    ...styles,
    color: "#fff",
    '&:focused': {
      border: "0 !important",
      outline: "none !important",
    },
  }),
  multiValueRemove: (styles: any) => ({
    color: "#ff0000",
    backgroundColor: "#f4a8a8",
    ':hover': {
      backgroundColor: "#fc9999",
    },
  }),
};

// Select options
const categoryOptions = [
  {value: "action", label: "Action"},
  {value: "fantasy", label: "Fantasy"},
  {value: "sci-fi", label: "Sci-fi"},
  {value: "sport", label: "Sport"},
  {value: "Adventure", label: "Adventure"},
  {value: "arcade", label: "Arcade"},
]

// createable multi select interface
interface TagsState {
  readonly inputValue: string;
  readonly value: readonly Option[];
}

const Write = () => {
  const [title, setTitle] = useState<string>("")
  const [tags, setTags] = useState<TagsState>({
    inputValue: '',
    value: [],
  });
  const [category, setCategory] = useState<any>({
    value: '',
    label: ''
  });
  const [thumbnail, setThumbnail] = useState<any>([]);
  const [publish, setPublish] = useState<boolean>(false)

  const navigate = useNavigate();
  const { token } = useStateContext();

  const mutation = useMutation<any, Error, any>(article => {
    return postArticle(article, token)
  })

  const handleChange = (
    value: OnChangeValue<Option, true>,
    actionMeta: ActionMeta<Option>
  ) => {
    // console.group('Value changesd');
    // console.log(value);
    // console.log(`action: ${actionMeta.action}`);
    // console.groupEnd();
    setTags({ ...tags ,value });
  };

  const handleInputChange = (inputValue:string) => {
    setTags({ ...tags, inputValue });
  }

  // add input option to tag once enter or tab key is pressed
  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (e) => {
    const { inputValue, value } = tags;
    if (!inputValue) return;
    switch (e.nativeEvent.keyCode) {
      case 13:
      case 9:
        // console.group('Value Added');
        // console.log(tags);
        // console.groupEnd();
        setTags({
          inputValue: '',
          value: [...value, createOption(inputValue)],
        });
        e.preventDefault();
    }
  };

  var rteObject ! : RichTextEditorComponent;
  var rteValue ! : string;
  const getFormattedContent = () => {
    rteValue = rteObject.getHtml()
    return rteValue
  }

  // input thumbnail image change
  const onImageChange = (e:any) => {
    const [file] = e.target.files;
    setThumbnail(URL.createObjectURL(file));
    console.log("image here", thumbnail)
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log("kinda worked")
    if (publish) {
      const formData = {
        title,
        thumbnail,
        content: getFormattedContent(),
        category: category.value,
        tags: tags.value.length === 0 ? [] : tags.value.map(item => item.value),
        published: publish
      }
      mutation.mutate(formData,
      {
        onSuccess: (res) => {navigate("/me")},
      })
    } else {
      const formData = {
        title,
        thumbnail,
        content: getFormattedContent(),
        category: category.value,
        tags: tags.value.length === 0 ? [] : tags.value.map(item => item.value),
      }
      mutation.mutate(formData,
      {
        onSuccess: (res) => {navigate("/me")},
      })
    }
  }
  return (
    <div>
      <form className='px-4 md:px-10' onSubmit={handleSubmit} >
        <div className='flex justify-between w-full items-center mb-6 md:mb-10' >
          <h2 className='text-xl font-semibold' >Share your thoughts</h2>
          <div className='flex gap-x-3 items-center' >
            <button
              className='px-4 py-2 bg-transparent border rounded-md hidden lg:block font-bold text-lg
              border-site-primary text-site-primary'
              type='submit'
              name="draft"
            >
              Draft
            </button>
            <button
              className='px-4 py-2 bg-site-primary rounded-md hidden lg:block font-bold text-lg'
              type='submit'
              onClick={() => setPublish(true)}
              name='publish'
            >
              Publish
            </button>
          </div>
        </div>
        <div className='lg:pr-[20%]' >
          <div className='mb-6 lg:mb-14' >
            <label htmlFor='title' className='lg:text-xl font-semibold mb-4' >Title</label>
            <input 
              name='title'
              type="text"
              className='w-full lg:w-full h-[50px] pl-4 border-neutral border bg-transparent
              focus:outline focus:outline-site-primary focus:border-site-primary text-white
              rounded'
              placeholder='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className='mb-6 lg:mb-14' >
            <label htmlFor='thumbnail' className='lg:text-xl font-semibold mb-4' >Thumbnail</label>
            <div className='relative w-full' >
              <div 
                className='w-full h-20 lg:h-28 border-dashed border-2 border-neutral flex 
                justify-center items-center' 
              >
                {
                  thumbnail?.length === 0 ? (
                    <div className='rounded-full bg-neutral py-4 px-4' >
                      <BsPlus className='font-bold text-xl lg:text-2xl text-white' />
                    </div>
                  ) : (
                    <img 
                      src={thumbnail}
                      alt="thumbnail"
                      className='h-16 w-20 lg:h-24 lg:w-28'
                    />
                  )
                }
              </div>
              <input 
                name='thumbnail'
                type='file'
                className='absolute top-0 w-full h-20 lg:h-28 opacity-0 cursor-pointer z-10'
                onChange={onImageChange}
              />
            </div>
          </div>
          <div className='mb-6 lg:mb-14'>
            <RichTextEditorComponent ref={(richtexteditor: RichTextEditorComponent) => {rteObject=richtexteditor}} >
              <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
            </RichTextEditorComponent>
          </div>
          <div className='mb-6 lg:mb-14' style={{zIndex:"1000 !important"}}>
            <label htmlFor='category' className='lg:text-xl font-semibold mb-4' >Category</label>
            <Select 
              name="category"
              defaultValue={category}
              onChange={setCategory}
              options={categoryOptions} 
              styles={styles}
              placeholder="Enter article category"
            />
          </div>
          <div className='mb-10 lg:pb-36'>
            <label htmlFor='tags' className='lg:text-xl font-semibold mb-4' >Tags</label>
            <CreateableSelect 
              name="tags"
              components={components}
              inputValue={tags.inputValue}
              isMulti
              menuIsOpen={false}
              onChange={handleChange}
              onInputChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Enter article tags"
              value={tags.value}
              styles={styles}
            />
          </div>
          <div className='pb-44 lg:hidden flex flex-col w-full gap-y-3'>
            <button
              className='w-full md:w-2/3 py-2 bg-transparent border rounded-md font-bold text-lg
              border-site-primary text-site-primary'
              type='submit'
              name='draft'
            >
              Draft
            </button>
            <button
              className='w-full md:w-2/3 py-2 bg-site-primary rounded-md font-bold text-lg'
              type='submit'
              name='publish'
              onClick={() => setPublish(true)}
            >
              Publish
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Write