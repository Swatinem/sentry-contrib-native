var searchIndex = JSON.parse('{\
"sentry_contrib_native":{"doc":"sentry-contrib-native","i":[[3,"Breadcrumb","sentry_contrib_native","A Sentry breadcrumb.",null,null],[12,"ty","","Breadcrumb type.",0,null],[12,"message","","Breadcrumb message.",0,null],[12,"map","","Breadcrumb content.",0,null],[3,"Event","","A Sentry event.",null,null],[12,"interface","","Event interface.",1,null],[12,"map","","Event content.",1,null],[3,"Uuid","","A Sentry UUID.",null,null],[12,"0","","",2,null],[3,"Options","","The Sentry client options.",null,null],[12,"raw","","Raw Sentry options.",3,null],[12,"before_send","","Storing [`Options::set_before_send`] data to properly…",3,null],[3,"Shutdown","","Automatically shuts down the Sentry client on drop.",null,null],[3,"User","","A Sentry user.",null,null],[12,"0","","",4,null],[4,"Interface","","Sentry event interface.",null,null],[13,"Event","","Plain interface.",5,null],[13,"Message","","Message interface.",5,null],[12,"level","sentry_contrib_native::Interface","Level.",6,null],[12,"logger","","Logger.",6,null],[12,"text","","Message text.",6,null],[4,"Value","sentry_contrib_native","Represents a Sentry protocol value.",null,null],[13,"Null","","Null value.",7,null],[13,"Bool","","Boolean.",7,null],[13,"Int","","Integer.",7,null],[13,"Double","","Double.",7,null],[13,"String","","String.",7,null],[13,"List","","List.",7,null],[13,"Map","","Map.",7,null],[4,"Error","","Sentry errors.",null,null],[13,"SampleRateRange","","Sample rate outside of allowed range.",8,null],[13,"Init","","Initializing Sentry failed.",8,null],[13,"ListRemove","","Failed to remove value from list by index.",8,null],[13,"MapRemove","","Failed to remove value from map.",8,null],[13,"TryConvert","","Failed to convert to type.",8,null],[13,"Fingerprints","","List of fingerprints is too long.",8,null],[4,"Level","","Sentry levels for events and breadcrumbs.",null,null],[13,"Debug","","Debug.",9,null],[13,"Info","","Info.",9,null],[13,"Warning","","Warning.",9,null],[13,"Error","","Error.",9,null],[13,"Fatal","","Fatal.",9,null],[4,"Consent","","The state of user consent.",null,null],[13,"Unknown","","Unknown.",10,null],[13,"Revoked","","Revoked.",10,null],[13,"Given","","Given.",10,null],[5,"set_hook","","Panic handler to send an event with the current stacktrace…",null,[[["option",4],["box",3]]]],[5,"shutdown","","Shuts down the Sentry client and forces transports to…",null,[[]]],[5,"clear_modulecache","","Clears the internal module cache.",null,[[]]],[5,"user_consent_give","","Gives user consent.",null,[[]]],[5,"user_consent_revoke","","Revokes user consent.",null,[[]]],[5,"user_consent_reset","","Resets the user consent (back to unknown).",null,[[]]],[5,"user_consent_get","","Checks the current state of user consent.",null,[[],["consent",4]]],[5,"remove_user","","Removes a user.",null,[[]]],[5,"set_tag","","Sets a tag.",null,[[["string",3],["into",8]]]],[5,"remove_tag","","Removes the tag with the specified `key`.",null,[[["string",3],["into",8]]]],[5,"set_extra","","Sets extra information.",null,[[["value",4],["into",8],["into",8],["string",3]]]],[5,"remove_extra","","Removes the extra with the specified `key`.",null,[[["string",3],["into",8]]]],[5,"set_context","","Sets a context object.",null,[[["value",4],["into",8],["into",8],["string",3]]]],[5,"remove_context","","Removes the context object with the specified key.",null,[[["string",3],["into",8]]]],[5,"set_fingerprint","","Sets the event fingerprint.",null,[[["intoiterator",8]],[["result",4],["error",4]]]],[5,"remove_fingerprint","","Removes the fingerprint.",null,[[]]],[5,"set_transaction","","Sets the transaction.",null,[[["string",3],["into",8]]]],[5,"remove_transaction","","Removes the transaction.",null,[[]]],[5,"set_level","","Sets the event level.",null,[[["level",4]]]],[5,"start_session","","Starts a new session.",null,[[]]],[5,"end_session","","Ends a session.",null,[[]]],[0,"object","","Sentry object implementation, represents common…",null,null],[3,"Map","sentry_contrib_native::object","A simple [`Object`] implementation for [`Value::Map`].",null,null],[12,"0","","",11,null],[8,"Object","","Private trait methods of [`Object`].",null,null],[10,"into_parts","","Destructure [`Object`] into a raw [`sys::Value`] and a…",12,[[]]],[11,"into_raw","","Takes parts from [`Object::into_parts`] and stitches them…",12,[[],["value",19]]],[11,"new","","Create a [`Value::Map`].",11,[[["value",4],["btreemap",3],["string",3]]]],[0,"breadcrumb","sentry_contrib_native","Sentry breadcrumb implementation.",null,null],[3,"Breadcrumb","sentry_contrib_native::breadcrumb","A Sentry breadcrumb.",null,null],[12,"ty","","Breadcrumb type.",0,null],[12,"message","","Breadcrumb message.",0,null],[12,"map","","Breadcrumb content.",0,null],[11,"new","sentry_contrib_native","Creates a new Sentry breadcrumb.",0,[[["option",4],["string",3]]]],[11,"add","","Adds the [`Breadcrumb`] to be sent in case of an…",0,[[]]],[0,"event","","Sentry event implementation.",null,null],[3,"Event","sentry_contrib_native::event","A Sentry event.",null,null],[12,"interface","","Event interface.",1,null],[12,"map","","Event content.",1,null],[3,"Uuid","","A Sentry UUID.",null,null],[12,"0","","",2,null],[4,"Interface","","Sentry event interface.",null,null],[13,"Event","","Plain interface.",5,null],[13,"Message","","Message interface.",5,null],[12,"level","sentry_contrib_native::event::Interface","Level.",6,null],[12,"logger","","Logger.",6,null],[12,"text","","Message text.",6,null],[11,"new","sentry_contrib_native","Creates a new Sentry event.",1,[[]]],[11,"new_message","","Creates a new Sentry message event.",1,[[["level",4],["into",8],["option",4],["string",3]]]],[11,"stacktrace","","Generate stacktrace.",1,[[],[["string",3],["value",4],["btreemap",3]]]],[11,"add_stacktrace","","Adds a stacktrace to the [`Event`].",1,[[]]],[11,"add_exception","","Adds an exception to the [`Event`] along with a…",1,[[["value",4],["btreemap",3],["string",3]]]],[11,"capture","","Sends the [`Event`].",1,[[],["uuid",3]]],[11,"new","","Creates a new empty Sentry UUID.",2,[[]]],[11,"from_bytes","","Creates a new empty UUID with the given `bytes`.",2,[[]]],[11,"as_bytes","","Returns the bytes of the [`Uuid`].",2,[[]]],[0,"ffi","","FFI helper types to communicate with `sentry-native`.",null,null],[6,"COsString","sentry_contrib_native::ffi","Cross-platform return type for [`CPath::into_os_vec`].",null,null],[8,"CPath","","Trait for converting [`PathBuf`] to `Vec<COsString>`.",null,null],[10,"into_os_vec","","Re-encodes `self` into an OS compatible `Vec<COsString>`.",13,[[],[["vec",3],["c_char",6]]]],[8,"CToR","","Trait for converting `*const c_char` to [`str`].",null,null],[10,"as_str","","Converts the given value to a [`str`].",14,[[],["option",4]]],[8,"RToC","","Trait for converting [`str`] to [`CString`].",null,null],[10,"into_cstring","","Re-encodes `self` into a [`CString`].",15,[[],["cstring",3]]],[0,"options","sentry_contrib_native","Sentry options implementation.",null,null],[3,"Options","sentry_contrib_native::options","The Sentry client options.",null,null],[12,"raw","","Raw Sentry options.",3,null],[12,"before_send","","Storing [`Options::set_before_send`] data to properly…",3,null],[3,"Shutdown","","Automatically shuts down the Sentry client on drop.",null,null],[4,"Message","","Message received for custom logger.",null,null],[13,"Utf8","","Message could be parsed into a valid UTF-8 [`String`].",16,null],[13,"Raw","","Message could not be parsed into a valid UTF-8 [`String`]…",16,null],[5,"global_read","","Convenience function to get a read lock on `GLOBAL_LOCK`.",null,[[],["rwlockreadguard",3]]],[5,"global_write","","Convenience function to get a write lock on `GLOBAL_LOCK`.",null,[[],["rwlockwriteguard",3]]],[5,"ffi_before_send","","Function to give [`Options::set_before_send`] which in…",null,[[["value",19]],["value",19]]],[5,"ffi_logger","","Function to give [`Options::set_logger`] which in turn…",null,[[]]],[6,"Logger","","Closure type for [`Options::set_logger`].",null,null],[7,"GLOBAL_LOCK","","Global lock for the following purposes: - Prevent…",null,null],[7,"BEFORE_SEND","","Store [`Options::set_before_send`] data to properly…",null,null],[7,"LOGGER","","Globally stored closure for [`Options::set_logger`].",null,null],[8,"BeforeSend","","Trait to help pass data to [`Options::set_before_send`].",null,null],[10,"before_send","","Before send callback.",17,[[["value",4]],["value",4]]],[11,"new","sentry_contrib_native","Crates new Sentry client options.",3,[[]]],[11,"as_ref","","Yields a pointer to [`sys::Options`], ownership is retained.",3,[[]]],[11,"as_mut","","Yields a mutable pointer to [`sys::Options`], ownership is…",3,[[]]],[11,"set_before_send","","Sets the before send callback.",3,[[["box",3],["beforesend",8],["into",8]]]],[11,"set_dsn","","Sets the DSN.",3,[[["string",3],["into",8]]]],[11,"dsn","","Gets the DSN.",3,[[],["option",4]]],[11,"set_sample_rate","","Sets the sample rate, which should be a double between…",3,[[],[["result",4],["error",4]]]],[11,"sample_rate","","Gets the sample rate.",3,[[]]],[11,"set_release","","Sets the release.",3,[[["string",3],["into",8]]]],[11,"release","","Gets the release.",3,[[],["option",4]]],[11,"set_environment","","Sets the environment.",3,[[["string",3],["into",8]]]],[11,"environment","","Gets the environment.",3,[[],["option",4]]],[11,"set_distribution","","Sets the distribution.",3,[[["string",3],["into",8]]]],[11,"distribution","","Gets the distribution.",3,[[],["option",4]]],[11,"set_http_proxy","","Configures the http proxy.",3,[[["string",3],["into",8]]]],[11,"http_proxy","","Returns the configured http proxy.",3,[[],["option",4]]],[11,"set_ca_certs","","Configures the path to a file containing ssl certificates…",3,[[["string",3],["into",8]]]],[11,"ca_certs","","Returns the configured path for ca certificates.",3,[[],["option",4]]],[11,"set_debug","","Enables or disables debug printing mode.",3,[[]]],[11,"debug","","Returns the current value of the debug flag.",3,[[]]],[11,"set_logger","","Sets the Sentry logger function. Used for logging debug…",3,[[["into",8],["box",3]]]],[11,"set_require_user_consent","","Enables or disabled user consent requirements for uploads.",3,[[]]],[11,"require_user_consent","","Returns `true` if user consent is required.",3,[[]]],[11,"set_symbolize_stacktraces","","Enables or disables on-device symbolication of stack traces.",3,[[]]],[11,"symbolize_stacktraces","","Returns `true` if on-device symbolication of stack traces…",3,[[]]],[11,"add_attachment","","Adds a new attachment to be sent along.",3,[[["into",8],["into",8],["pathbuf",3],["string",3]]]],[11,"set_handler_path","","Sets the path to the crashpad handler if the crashpad…",3,[[["into",8],["pathbuf",3]]]],[11,"set_database_path","","Sets the path to the Sentry database directory.",3,[[["into",8],["pathbuf",3]]]],[11,"set_system_crash_reporter","","Enables forwarding to the system crash reporter. Disabled…",3,[[]]],[11,"init","","Initializes the Sentry SDK with the specified options.…",3,[[],[["error",4],["result",4],["shutdown",3]]]],[11,"forget","","Disable automatic shutdown. Call `shutdown` manually to…",18,[[]]],[11,"shutdown","","Manually shutdown.",18,[[]]],[0,"panic","","Sentry supported panic handler.",null,null],[5,"set_hook","sentry_contrib_native::panic","Panic handler to send an event with the current stacktrace…",null,[[["option",4],["box",3]]]],[0,"user","sentry_contrib_native","Sentry user implementation.",null,null],[3,"User","sentry_contrib_native::user","A Sentry user.",null,null],[12,"0","","",4,null],[11,"new","sentry_contrib_native","Creates a new user.",4,[[]]],[11,"set","","Sets the specified user.",4,[[]]],[0,"value","","Sentry value implementation.",null,null],[4,"Value","sentry_contrib_native::value","Represents a Sentry protocol value.",null,null],[13,"Null","","Null value.",7,null],[13,"Bool","","Boolean.",7,null],[13,"Int","","Integer.",7,null],[13,"Double","","Double.",7,null],[13,"String","","String.",7,null],[13,"List","","List.",7,null],[13,"Map","","Map.",7,null],[8,"MP","","Convenience trait to convert [`rmpv::Value`] to [`Value`].",null,null],[10,"into_value","","Convert [`rmpv::Value`] to [`Value`].",19,[[],["value",4]]],[11,"new","sentry_contrib_native","Creates a new Sentry value.",7,[[["into",8]]]],[11,"from_raw","","Creates a [`Value`] from [`sys::Value`]. This will…",7,[[["value",19]]]],[11,"into_raw","","Yields [`sys::Value`], [`Value`] is consumed and caller is…",7,[[],["value",19]]],[11,"is_null","","Returns `true` if `self` is [`Value::Null`].",7,[[]]],[11,"as_null","","Returns [`Some`] if `self` is [`Value::Null`].",7,[[],["option",4]]],[11,"into_null","","Returns [`Ok`] if `self` is [`Value::Null`].",7,[[],[["result",4],["error",4]]]],[11,"is_bool","","Returns `true` if `self` is [`Value::Bool`].",7,[[]]],[11,"as_bool","","Returns [`Some`] with the inner value if `self` is…",7,[[],["option",4]]],[11,"into_bool","","Returns [`Ok`] with the inner value if `self` is…",7,[[],[["result",4],["error",4]]]],[11,"is_int","","Returns `true` if `self` is [`Value::Int`].",7,[[]]],[11,"as_int","","Returns [`Some`] with the inner value if `self` is…",7,[[],["option",4]]],[11,"into_int","","Returns [`Ok`] with the inner value if `self` is…",7,[[],[["result",4],["error",4]]]],[11,"is_double","","Returns `true` if `self` is [`Value::Double`].",7,[[]]],[11,"as_double","","Returns [`Some`] with the inner value if `self` is…",7,[[],["option",4]]],[11,"into_double","","Returns [`Ok`] with the inner value if `self` is…",7,[[],[["error",4],["result",4]]]],[11,"is_string","","Returns `true` if `self` is [`Value::String`].",7,[[]]],[11,"as_str","","Returns [`Some`] with the inner value if `self` is…",7,[[],["option",4]]],[11,"into_string","","Returns [`Ok`] with the inner value if `self` is…",7,[[],[["error",4],["result",4],["string",3]]]],[11,"is_list","","Returns `true` if `self` is [`Value::List`].",7,[[]]],[11,"as_list","","Returns [`Some`] with the inner value if `self` is…",7,[[],[["vec",3],["option",4]]]],[11,"into_list","","Returns [`Ok`] with the inner value if `self` is…",7,[[],[["error",4],["vec",3],["result",4]]]],[11,"is_map","","Returns `true` if `self` is [`Value::Map`].",7,[[]]],[11,"as_map","","Returns [`Some`] with the inner value if `self` is…",7,[[],[["option",4],["btreemap",3]]]],[11,"into_map","","Returns [`Ok`] with the inner value if `self` is…",7,[[],[["error",4],["btreemap",3],["result",4]]]],[8,"BeforeSend","","Trait to help pass data to [`Options::set_before_send`].",null,null],[10,"before_send","","Before send callback.",17,[[["value",4]],["value",4]]],[11,"into_raw","","Convert [`Level`] to [`i32`].",9,[[]]],[11,"from_raw","","Convert [`i32`] to [`Level`].",9,[[]]],[11,"from_raw","","Convert [`sys::UserConsent`] to [`Consent`].",10,[[["userconsent",4]]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"to_string","","",2,[[],["string",3]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","","",18,[[]]],[11,"into","","",18,[[]]],[11,"try_from","","",18,[[],["result",4]]],[11,"try_into","","",18,[[],["result",4]]],[11,"borrow","","",18,[[]]],[11,"borrow_mut","","",18,[[]]],[11,"type_id","","",18,[[],["typeid",3]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_owned","","",4,[[]]],[11,"clone_into","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"to_owned","","",5,[[]]],[11,"clone_into","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"to_owned","","",7,[[]]],[11,"clone_into","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"to_string","","",8,[[],["string",3]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"from","","",9,[[]]],[11,"into","","",9,[[]]],[11,"to_owned","","",9,[[]]],[11,"clone_into","","",9,[[]]],[11,"to_string","","",9,[[],["string",3]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"from","","",10,[[]]],[11,"into","","",10,[[]]],[11,"to_owned","","",10,[[]]],[11,"clone_into","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"from","sentry_contrib_native::object","",11,[[]]],[11,"into","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"try_into","","",11,[[],["result",4]]],[11,"borrow","","",11,[[]]],[11,"borrow_mut","","",11,[[]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"from","sentry_contrib_native::options","",16,[[]]],[11,"into","","",16,[[]]],[11,"to_owned","","",16,[[]]],[11,"clone_into","","",16,[[]]],[11,"to_string","","",16,[[],["string",3]]],[11,"try_from","","",16,[[],["result",4]]],[11,"try_into","","",16,[[],["result",4]]],[11,"borrow","","",16,[[]]],[11,"borrow_mut","","",16,[[]]],[11,"type_id","","",16,[[],["typeid",3]]],[11,"into_parts","sentry_contrib_native::object","",11,[[]]],[11,"into_parts","sentry_contrib_native","",0,[[]]],[11,"into_parts","","",1,[[]]],[11,"into_parts","","",4,[[]]],[11,"drop","","",3,[[]]],[11,"drop","","",18,[[]]],[11,"from","","",2,[[]]],[11,"from","","",7,[[]]],[11,"from","","",7,[[]]],[11,"from","","",7,[[]]],[11,"from","","",7,[[]]],[11,"from","","",7,[[["string",3]]]],[11,"from","","",7,[[]]],[11,"from","","",7,[[["vec",3]]]],[11,"from","","",7,[[["vec",3]]]],[11,"from","","",7,[[["btreemap",3],["string",3]]]],[11,"from","","",7,[[]]],[11,"from","","",8,[[["infallible",4]]]],[11,"clone","","",0,[[],["breadcrumb",3]]],[11,"clone","","",1,[[],["event",3]]],[11,"clone","","",5,[[],["interface",4]]],[11,"clone","","",2,[[],["uuid",3]]],[11,"clone","sentry_contrib_native::options","",16,[[],["message",4]]],[11,"clone","sentry_contrib_native","",4,[[],["user",3]]],[11,"clone","","",7,[[],["value",4]]],[11,"clone","","",9,[[],["level",4]]],[11,"clone","","",10,[[],["consent",4]]],[11,"default","","",0,[[]]],[11,"default","","",1,[[]]],[11,"default","","",2,[[]]],[11,"default","","",3,[[]]],[11,"default","","",4,[[]]],[11,"default","","",7,[[]]],[11,"cmp","","",2,[[],["ordering",4]]],[11,"cmp","","",18,[[["shutdown",3]],["ordering",4]]],[11,"cmp","sentry_contrib_native::options","",16,[[["message",4]],["ordering",4]]],[11,"cmp","sentry_contrib_native","",9,[[["level",4]],["ordering",4]]],[11,"cmp","","",10,[[["consent",4]],["ordering",4]]],[11,"eq","","",0,[[["breadcrumb",3]]]],[11,"ne","","",0,[[["breadcrumb",3]]]],[11,"eq","","",1,[[["event",3]]]],[11,"ne","","",1,[[["event",3]]]],[11,"eq","","",5,[[["interface",4]]]],[11,"ne","","",5,[[["interface",4]]]],[11,"eq","","",2,[[]]],[11,"eq","","",3,[[]]],[11,"eq","","",18,[[["shutdown",3]]]],[11,"eq","sentry_contrib_native::options","",16,[[["message",4]]]],[11,"ne","","",16,[[["message",4]]]],[11,"eq","sentry_contrib_native","",4,[[["user",3]]]],[11,"ne","","",4,[[["user",3]]]],[11,"eq","","",7,[[["value",4]]]],[11,"ne","","",7,[[["value",4]]]],[11,"eq","","",8,[[["error",4]]]],[11,"ne","","",8,[[["error",4]]]],[11,"eq","","",9,[[["level",4]]]],[11,"eq","","",10,[[["consent",4]]]],[11,"partial_cmp","","",0,[[["breadcrumb",3]],[["option",4],["ordering",4]]]],[11,"lt","","",0,[[["breadcrumb",3]]]],[11,"le","","",0,[[["breadcrumb",3]]]],[11,"gt","","",0,[[["breadcrumb",3]]]],[11,"ge","","",0,[[["breadcrumb",3]]]],[11,"partial_cmp","","",1,[[["event",3]],[["option",4],["ordering",4]]]],[11,"lt","","",1,[[["event",3]]]],[11,"le","","",1,[[["event",3]]]],[11,"gt","","",1,[[["event",3]]]],[11,"ge","","",1,[[["event",3]]]],[11,"partial_cmp","","",5,[[["interface",4]],[["option",4],["ordering",4]]]],[11,"lt","","",5,[[["interface",4]]]],[11,"le","","",5,[[["interface",4]]]],[11,"gt","","",5,[[["interface",4]]]],[11,"ge","","",5,[[["interface",4]]]],[11,"partial_cmp","","",2,[[],[["option",4],["ordering",4]]]],[11,"partial_cmp","","",18,[[["shutdown",3]],[["option",4],["ordering",4]]]],[11,"partial_cmp","sentry_contrib_native::options","",16,[[["message",4]],[["option",4],["ordering",4]]]],[11,"lt","","",16,[[["message",4]]]],[11,"le","","",16,[[["message",4]]]],[11,"gt","","",16,[[["message",4]]]],[11,"ge","","",16,[[["message",4]]]],[11,"partial_cmp","sentry_contrib_native","",4,[[["user",3]],[["option",4],["ordering",4]]]],[11,"lt","","",4,[[["user",3]]]],[11,"le","","",4,[[["user",3]]]],[11,"gt","","",4,[[["user",3]]]],[11,"ge","","",4,[[["user",3]]]],[11,"partial_cmp","","",7,[[["value",4]],[["option",4],["ordering",4]]]],[11,"lt","","",7,[[["value",4]]]],[11,"le","","",7,[[["value",4]]]],[11,"gt","","",7,[[["value",4]]]],[11,"ge","","",7,[[["value",4]]]],[11,"partial_cmp","","",9,[[["level",4]],[["option",4],["ordering",4]]]],[11,"partial_cmp","","",10,[[["consent",4]],[["option",4],["ordering",4]]]],[11,"deref","","",0,[[]]],[11,"deref","","",1,[[]]],[11,"deref","","",4,[[]]],[11,"deref_mut","","",0,[[]]],[11,"deref_mut","","",1,[[]]],[11,"deref_mut","","",4,[[]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["fmtresult",6]]],[11,"fmt","","",18,[[["formatter",3]],["result",6]]],[11,"fmt","sentry_contrib_native::options","",16,[[["formatter",3]],["result",6]]],[11,"fmt","sentry_contrib_native","",4,[[["formatter",3]],["result",6]]],[11,"fmt","","",7,[[["formatter",3]],["result",6]]],[11,"fmt","","",8,[[["formatter",3]],["result",6]]],[11,"fmt","","",9,[[["formatter",3]],["result",6]]],[11,"fmt","","",10,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","sentry_contrib_native::options","",16,[[["formatter",3]],["fmtresult",6]]],[11,"fmt","sentry_contrib_native","",8,[[["formatter",3]],["result",6]]],[11,"fmt","","",9,[[["formatter",3]],["fmtresult",6]]],[11,"hash","","",2,[[]]],[11,"hash","","",18,[[]]],[11,"hash","sentry_contrib_native::options","",16,[[]]],[11,"hash","sentry_contrib_native","",9,[[]]],[11,"hash","","",10,[[]]]],"p":[[3,"Breadcrumb"],[3,"Event"],[3,"Uuid"],[3,"Options"],[3,"User"],[4,"Interface"],[13,"Message"],[4,"Value"],[4,"Error"],[4,"Level"],[4,"Consent"],[3,"Map"],[8,"Object"],[8,"CPath"],[8,"CToR"],[8,"RToC"],[4,"Message"],[8,"BeforeSend"],[3,"Shutdown"],[8,"MP"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);